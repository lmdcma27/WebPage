
import pandas as pd 
import numpy as np
import pyodbc
import scipy.stats as sp
from sqlalchemy import create_engine
import sqlalchemy
import sys



#El script lee los argumentos en el siguiente orden en la consola
#python PreliminarIPC.py ServerName UserName Password Year Month


class CPI():

    def __init__(self,server : str,user : str,pas : str) -> None:
        self.codes = {'Art': [],'Gba': [],'Sub': [],'Gru': [],'Agr': [],'Div': []}
        self.lencodes = {'Art': 9,'Gba': 7,'Sub': 5,'Gru': 4,'Agr': 3,'Div': 2}
        self.periods : pd.DataFrame
        self.catwei = {'Art': [],'Gba': [],'Sub': [],'Gru': [],'Agr': [],'Div': []}
        self.regwei : pd.DataFrame
        self.di = {'Art':6,'Gba':5,'Sub':4,'Gru':3,'Agr':2,'Div':1}
        self.variations : pd.DataFrame 
        self.indcat : pd.DataFrame
        self.indant : pd.DataFrame
        self.server = server
        self.user = user 
        self.pas = pas
       
    def connect(self, database : str) -> sqlalchemy.engine.Engine:

        try:
            #Drivers: ODBC Driver 17 for SQL Server/SQL Server Native Client 11.0
            driver = 'ODBC Driver 17 for SQL Server'
            database_connection = f'mssql://{self.user}:{self.pas}@{self.server}/{database}?driver={driver}'
            engine = create_engine(database_connection)
            connection = engine.connect()
            return connection
        except:
            print('Fallo en la conexión') 

    def Codes(self, cod : str) -> None:
        
        query = f"SELECT DISTINCT {cod}Cod FROM DB1.dbo.CODES{self.di[cod]}"
        idx = cod+'Cod'
        self.codes[cod] = pd.read_sql(query, self.connect('master'), idx)

    def Periods(self, region : int) -> None:
        
        query = f"SELECT ArtCod, ArtPRC FROM DB{region}.dbo.ARTICLES ORDER BY ArtCod"
        idx = 'ArtCod'
        self.periods = pd.read_sql(query, self.connect('master'), index_col=idx)
        
    def CatWei(self, cod : str) -> None:
        
        query = f'SELECT a.{cod}Cod, a.{cod}Pon as "R1", b.{cod}Pon as "R2", c.{cod}Pon as "R3", d.{cod}Pon as "R4", e.{cod}Pon as "R5", f.{cod}Pon as "R6", g.{cod}Pon as "R7", h.{cod}Pon as "R8"\
            FROM  DB1.dbo.WEIGHTS{self.di[cod]} a\
            INNER JOIN DB2.dbo.WEIGHTS{self.di[cod]} b ON a.{cod}Cod = b.{cod}Cod\
            INNER JOIN DB3.dbo.WEIGHTS{self.di[cod]} c ON a.{cod}Cod = c.{cod}Cod\
            INNER JOIN DB4.dbo.WEIGHTS{self.di[cod]} d ON a.{cod}Cod = d.{cod}Cod\
            INNER JOIN DB5.dbo.WEIGHTS{self.di[cod]} e ON a.{cod}Cod = e.{cod}Cod\
            INNER JOIN DB6.dbo.WEIGHTS{self.di[cod]} f ON a.{cod}Cod = f.{cod}Cod\
            INNER JOIN DB7.dbo.WEIGHTS{self.di[cod]} g ON a.{cod}Cod = g.{cod}Cod\
            INNER JOIN DB8.dbo.WEIGHTS{self.di[cod]} h ON a.{cod}Cod = h.{cod}Cod\
            ORDER BY a.{cod}Cod'              
        self.catwei[cod] = pd.read_sql(query, self.connect('master'), index_col=cod+'Cod')
        
    def RegWei(self) -> None:
        
        query = f'SELECT a.RegWei, b.RegWei, c.RegWei, d.RegWei, e.RegWei, f.RegWei, g.RegWei, h.RegWei \
            FROM DB1.dbo.REGINF a \
            INNER JOIN DB2.dbo.REGINF b ON a.RegCod != b.RegCod\
            INNER JOIN DB3.dbo.REGINF c ON a.RegCod != c.RegCod\
            INNER JOIN DB4.dbo.REGINF d ON a.RegCod != d.RegCod\
            INNER JOIN DB5.dbo.REGINF e ON a.RegCod != e.RegCod\
            INNER JOIN DB6.dbo.REGINF f ON a.RegCod != f.RegCod\
            INNER JOIN DB7.dbo.REGINF g ON a.RegCod != g.RegCod\
            INNER JOIN DB8.dbo.REGINF h ON a.RegCod != h.RegCod'            
        self.regwei = pd.read_sql(query, self.connect('master'))
          
    def Variations(self, year : int, month : int, region : int) -> None:
        
        query = f"SELECT ArtCod, PrePri,CurPri,PreQua,CurQua,ArtCR FROM DB{region}.dbo.PRICES\
                WHERE YEAR = {year} AND MONTH = {month} \
                ORDER BY ArtCod"
        temp = pd.read_sql(query, self.connect('master'), index_col='ArtCod')
        temp['Variation'] = (temp['CurPri']*temp['PreQua'])/(temp['PrePri']*temp['CurQua'])
        temp.loc[temp['ArtCR'] == 'S', 'Variation'] = 1.0
        self.variations = temp['Variation'].replace([np.nan,np.inf],1.0).to_frame()
                        
    def VarFlex(self) -> None:     
        
        groupBy = self.variations.groupby(self.variations.index)     
        df = pd.DataFrame(columns=['ArtInd'], index=groupBy.groups.keys())
        self.periods['ArtPRC'] = self.periods['ArtPRC'].astype(float)
        for index in self.codes['Art'].index:
            period = self.periods.loc[index][0] 
            try:
                arreglo = groupBy.get_group(index)['Variation']
                df.loc[index]['ArtInd'] = sp.gmean(arreglo)**(1/period)
            except KeyError:
                pass
        self.indcat = df 

    def IndCat(self, codInf : str, codSup : str, region : int) -> None:
        
        union = self.indcat.merge(self.catwei[codInf]['R'+str(region)], how='inner', left_index=True, right_index=True,)        
        groupBy = union.groupby(union.index.str[:self.lencodes[codSup]]).apply(lambda x: (x[codInf+'Ind']*(x['R'+str(region)]/x['R'+str(region)].sum())).sum())
        df = pd.DataFrame(columns=[codSup+'Ind'], index=self.codes[codSup].index)
        df.loc[groupBy.index,codSup+'Ind'] = groupBy
        self.indcat = df
            
    def IndAnt(self, year : int, month : int, cod : str) -> None:

        query = f'SELECT a.{cod}Cod, a.{cod}Ind, b.{cod}Ind, c.{cod}Ind, d.{cod}Ind, e.{cod}Ind, f.{cod}Ind, g.{cod}Ind, h.{cod}Ind \
            FROM (SELECT {cod}Cod, {cod}Ind FROM DB1.dbo.INDICES{self.di[cod]} \
            WHERE YEAR = {year} AND MONTH = {month}) a \
            FULL OUTER JOIN (SELECT {cod}Cod, {cod}Ind FROM DB2.dbo.INDICES{self.di[cod]} \
            WHERE YEAR = {year} AND MONTH = {month}) b ON a.{cod}Cod = b.{cod}Cod\
            FULL OUTER JOIN (SELECT {cod}Cod, {cod}Ind FROM DB3.dbo.INDICES{self.di[cod]} \
            WHERE YEAR = {year} AND MONTH = {month}) c ON a.{cod}Cod = c.{cod}Cod\
            FULL OUTER JOIN (SELECT {cod}Cod, {cod}Ind FROM DB4.dbo.INDICES{self.di[cod]} WHERE YEAR = {year} AND MONTH = {month}) d ON a.{cod}Cod = d.{cod}Cod\
            FULL OUTER JOIN (SELECT {cod}Cod, {cod}Ind FROM DB5.dbo.INDICES{self.di[cod]} WHERE YEAR = {year} AND MONTH = {month}) e ON a.{cod}Cod = e.{cod}Cod\
            FULL OUTER JOIN (SELECT {cod}Cod, {cod}Ind FROM DB6.dbo.INDICES{self.di[cod]} WHERE YEAR = {year} AND MONTH = {month}) f ON a.{cod}Cod = f.{cod}Cod\
            FULL OUTER JOIN (SELECT {cod}Cod, {cod}Ind FROM DB7.dbo.INDICES{self.di[cod]} WHERE YEAR = {year} AND MONTH = {month}) g ON a.{cod}Cod = g.{cod}Cod\
            FULL OUTER JOIN (SELECT {cod}Cod, {cod}Ind FROM DB8.dbo.INDICES{self.di[cod]} WHERE YEAR = {year} AND MONTH = {month}) h ON a.{cod}Cod = h.{cod}Cod'
        self.indant = pd.read_sql(query, self.connect('master'), index_col=cod+'Cod')

    def joinAndAlign(self, df1 : pd.DataFrame, df2 : pd.DataFrame):
        df1 = df1.merge(df2, how='outer', left_index=True, right_index=True,)
        return df1        

    def Builder(self,year : int, month : int) -> None:

        #Ponderaciones de todas las categorías
        self.CatWei('Art')
        self.CatWei('Gba')
        self.CatWei('Div')
        #códigos de todas las categorías
        self.Codes('Art')
        self.Codes('Gba')
        self.Codes('Div')
        #Obtenemos los índices del month anterior
        if month == 1:
            self.IndAnt(year - 1, 12, 'Gba')
        else:
            self.IndAnt(year, month - 1, 'Gba')
        for i in range(1,9):     
            self.Variations(year, month, i)
            
            #-------------------------------------------------------------------
            self.Periods(i)
            self.VarFlex()
            self.IndCat('Art','Gba', i)
            if i == 1:
                df = self.indcat.copy()
            else:
                df = self.joinAndAlign(df, self.indcat.copy())
        indact = np.multiply(df,self.indant).replace(np.nan,0.0)
        idiv = indact.groupby(indact.index.str[:self.lencodes['Div']]).sum()
        #continuar con las ponderaciones, pero dentro del ciclo
        cpiR = np.multiply(idiv, self.catwei['Div']).sum()/100
        print(round(np.dot(cpiR,self.regwei.loc[0])/100,4))
        
temp = CPI(sys.argv[1],sys.argv[2], sys.argv[3])
temp.Builder(int(sys.argv[4]),int(sys.argv[5]))

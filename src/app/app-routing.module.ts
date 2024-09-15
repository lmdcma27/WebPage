import { NgModule } from '@angular/core';
import { RouterModule, Routes, Scroll } from '@angular/router';
import { GlobalPageComponent } from './components/global-page/global-page.component';
import { CpiComponent } from './components/cpi/cpi.component';
import { TestComponent } from './components/test/test.component';
import { Test2Component } from './components/test2/test2.component';
import { ElasticDockerComponent } from './components/elastic-docker/elastic-docker.component';
import { CvComponent } from './components/cv/cv.component';
import { MysqlComponent } from './components/mysql/mysql.component';
import { PysparkComponent } from './components/pyspark/pyspark.component';
import { DataManipulationComponent } from './components/data-manipulation/data-manipulation.component';
import { MysqlElasticLogstashComponent } from './components/mysql-elastic-logstash/mysql-elastic-logstash.component';
import { MinioSparkComponent } from './components/minio-spark/minio-spark.component';
const routes: Routes = [
  {path: '',component: GlobalPageComponent},
  {path: 'test',component: TestComponent},
  {path: 'test2',component: Test2Component},
  {path: 'projects/cpi',component: CpiComponent},
  {path: 'projects/elastic-docker',component:ElasticDockerComponent},
  {path: 'cv',component:CvComponent},
  {path: 'practices/mysql',component:MysqlComponent},
  {path: 'practices/pyspark',component:PysparkComponent},
  {path: 'problems/data-manipulation-techniques',component:DataManipulationComponent},
  {path: 'mysql-elastic-logstash',component:MysqlElasticLogstashComponent},
  {path: 'minio-spark',component:MinioSparkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

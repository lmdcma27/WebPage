import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ProjectCard} from './project-card'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {


  public elasticsearch_cards: ProjectCard[];
  public mysql_cards: ProjectCard[];
  public pyspark_pandas_cards: ProjectCard[];

  constructor(private _router: Router) {
    this.elasticsearch_cards=[
      new ProjectCard("Docker & ElasticSearch",
                      "Create ElasticSearch instance to storage and save your datasets using indices",
                      "https://youtu.be/7oQreXMsWzo?si=5R0_7gUIrqfSoDus",
                      "/projects/elastic-docker"
      ),
      new ProjectCard("ElasticSerch & MySql Connection",
      "Connect MySql to ElasticSearch and display your queries in indices with Logstash.",
      "no link",
      "/mysql-elastic-logstash"
      ),
      new ProjectCard("Reindex indices in ElasticSearch",
      "When or how reindex an index to optimize resources. Learn it here! \ Coming soon...!",
      "no link",
      "/test"
      )
    ]

    this.pyspark_pandas_cards=[
      new ProjectCard("Setup PySpark environment",
                      "Take advantage of Google Cloud Shell and start to learn: in this little \
                      practice i'll show you how to give your first step in PySpark and how to integrate with\
                      MySql easily and quickly",
                      "no link",
                      "practices/pyspark"
      ),
      new ProjectCard("Data Cleaning and Manipulation Techniques",
                      "I teach you techniques to solve data problems in Spark",
                      "no link",
                      "problems/data-manipulation-techniques"
      ),
      new ProjectCard("Calculate Price Consumer Index",
                      "Learn how to calculate the Price Consumer Index using python, sql and advance pandas techniques",
                      "no link",
                      "projects/cpi"
      ),
      new ProjectCard("Miscellaneous Problems",
                      "Here i share solutions to math  problems about graphs or optimization.\ Coming soon...!",
                      "No link",
                      "no route")
    ]

    this.mysql_cards=[
      new ProjectCard("Setup MySql environment",
                      "Take advantage of Google Cloud Shell and start to learn: in this little \
                      practice i'll show you how to give your first step in MySql easily and quickly",
                      "no link",
                      "practices/mysql"
      ),      
      new ProjectCard("MySql: Challenge Problems",
                      "Coming soon...!",
                      "no link",
                      "no route"
      ),
      new ProjectCard("Minio & Spark",
                      "Integration between Minio and Spark using k8s, learn how to send jobs to spark operator",
                      "no link",
                      "minio-spark"
      )      

    ]

   }  

  redirectPage() {
    const targetRoute = '/projects/cpi';
    this._router.navigate([targetRoute])
  }

}

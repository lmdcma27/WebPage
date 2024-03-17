import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ProjectCard} from './project-card'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {


  public projects: ProjectCard[];
  public practices: ProjectCard[];
  public mysql_and_spark: ProjectCard[];

  constructor(private _router: Router) {
    this.projects=[
      new ProjectCard("Calculate Price Consumer Index",
                      "Learn how to Calculate the Price Consumer Index in python using sql and advance pandas techniques",
                      "no link",
                      "projects/cpi"
      ),      
      new ProjectCard("Docker & ElasticSearch",
                      "Create ElasticSearch instance to storage and save your datasets using indices",
                      "https://youtu.be/7oQreXMsWzo?si=5R0_7gUIrqfSoDus",
                      "/projects/elastic-docker"
      ),
      new ProjectCard("ElasticSerch & MySql Connection with Logstash",
      "Connect MySql to ElasticSearch and display your queries in indices with Logstash.\
      Learn how to migrate a ElasticSearch instance to a Cluster too.\n Coming soon...!",
      "no link",
      "/test"
      )
    ]

    this.practices=[
      new ProjectCard("Dimensionality Reduction: LDA vs PCA",
                      "The link leads to a google colab notebook.",
                      "https://colab.research.google.com/drive/1JviAw2aPuNylHSnf5M_vInQHn8iLEUQt?usp=sharing",
                      "no route"
      ),
      new ProjectCard("Spark, an introduction",
                      "The link leads to a google colab notebook.",
                      "https://colab.research.google.com/drive/1m0yswilfy8T3vqdURn0gSQKxZD448eEV?usp=sharing",
                      "no route"
      ),
      new ProjectCard("Recursive Function, an application","Coming soon...!","no link","/test")

    ]

    this.mysql_and_spark=[
      new ProjectCard("Setup MySql environment",
                      "Take advantage of Google Cloud Shell and start to learn: in this little \
                      practice i'll show you how to give your first step in MySql easily and quickly",
                      "no link",
                      "practices/mysql"
      ),
      new ProjectCard("Setup PySpark environment",
                      "Take advantage of Google Cloud Shell and start to learn: in this little \
                      practice i'll show you how to give your first step in PySpark and how to integrate with\
                      MySql easily and quickly",
                      "no link",
                      "practices/pyspark"
      ),
      new ProjectCard("Data Cleaning and Manipulation Techniques",
                      "I teach you techniques to solve data problems in Spark Coming soon...!",
                      "no link",
                      "/test"
      )
    ]

   }  

  redirectPage() {
    const targetRoute = '/projects/cpi';
    this._router.navigate([targetRoute])
  }

}

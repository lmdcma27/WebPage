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

  constructor(private _router: Router) {
    this.projects=[
      new ProjectCard("Calculate Price Consumer Index",
                      "Learn how to Calculate the Price Consumer Index in python using sql and advance pandas techniques",
                      "no link",
                      "projects/cpi"
      ),

      new ProjectCard("Data Cleanning: SQL vs Pandas",
                      "Coming soon...!",
                      "no link",
                      "/test"
      ),
      new ProjectCard("Docker & ElasticSearch",
                      "Create ElasticSearch instance to storage and save your datasets using indices",
                      "https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html",
                      "/projects/elastic-docker")
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

   }  

  redirectPage() {
    const targetRoute = '/projects/cpi';
    this._router.navigate([targetRoute])
  }

}

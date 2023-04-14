import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TableOfContents } from './tableOfContents';

@Component({
  selector: 'app-pci',
  templateUrl: './cpi.component.html',
  styleUrls: ['./cpi.component.css','./prism.css']
})
export class CpiComponent implements OnInit {
  tableOfContents = TableOfContents;
  myPythonCode:string = 'import pandas as pd';
  mathequations = ['H = \\ sum_ {i = 1} ^ {m} p_ {i} log_ {2} (p_ {i})']

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit (){
    console.log(this.tableOfContents)
  }
  

  public onClick(elementId: string): void { 
      console.log(elementId)
      this.viewportScroller.scrollToAnchor(elementId);

  }

}

  

  
  
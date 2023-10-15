  import { ViewportScroller } from '@angular/common';
  import { Component, OnInit } from '@angular/core';
  import { TableOfContents } from './tableOfContents';
  import { ReloadService } from '../../services/reload.service'
  @Component({
    selector: 'app-cpi',
    templateUrl: './cpi.component.html',
    styleUrls: ['./cpi.component.css','./prism.css']
  })
  export class CpiComponent implements OnInit {    
    tableOfContents = TableOfContents;
    myPythonCode:string = 'import pandas as pd';
    mathequations = ['H = \\ sum_ {i = 1} ^ {m} p_ {i} log_ {2} (p_ {i})']

    constructor(private viewportScroller: ViewportScroller,private reloadService: ReloadService) {}
    
    ngOnInit() {
      if (this.reloadService.shouldReload) {
        // Reset the flag to prevent future reloads on this component
        this.reloadService.shouldReload = false;
        // Reload the page
        location.reload();
      }
      console.log(this.tableOfContents)
    }
    

    public onClick(elementId: string): void { 
        console.log(elementId)
        this.viewportScroller.scrollToAnchor(elementId);

    }

  }

  

  
  
  import { ViewportScroller } from '@angular/common';
  import { Component, AfterViewInit } from '@angular/core';
  import { TableOfContents } from './tableOfContents';
  import { ReloadService } from '../../services/reload.service'
  
  @Component({
    selector: 'app-cpi',
    templateUrl: './cpi.component.html',
    styleUrls: ['./prism.css','./cpi.component.css']
  })
  export class CpiComponent implements AfterViewInit {    
    


    tableOfContents = TableOfContents;
  

    constructor(private viewportScroller: ViewportScroller,private reloadService: ReloadService) {}
    
    ngAfterViewInit() {
      this.loadScript('../../../assets/main.js')
      this.loadScript('../../../assets/prism.js')
    }

    loadScript(scriptUrl: string) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = scriptUrl;
      document.body.appendChild(script);
    }
    

    public onClick(elementId: string): void { 
        console.log(elementId)
        this.viewportScroller.scrollToAnchor(elementId);

    }

  }

  

  
  
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
      this.loadScript('../../../assets/main.js','js')
      this.loadScript('../../../assets/prism.js','js')      
      this.loadScript('https://www.maths.nottingham.ac.uk/plp/pmadw/LaTeXMathML.js','js')
      this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.3/styles/default.min.css','css')
      this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.3/highlight.min.js','js')
    }

    loadScript(scriptUrl: string,Tipo: string) {
      if (Tipo==='js'){
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = scriptUrl;
        document.body.appendChild(script);
      }  else {
        const script = document.createElement('script');
        script.type = 'text/css';
        script.src = scriptUrl;
        document.body.appendChild(script);
      }
        
    }
    

    public onClick(elementId: string): void { 
        console.log(elementId)
        this.viewportScroller.scrollToAnchor(elementId);

    }

  }

  

  
  
  import { Component, OnInit } from '@angular/core';
  import { Router } from '@angular/router';
  
  @Component({
    selector: 'app-cpi',
    templateUrl: './cpi.component.html',
    styleUrls: ['./prism.css','./cpi.component.css']
  })
  export class CpiComponent implements OnInit {    
    

    tableOfContents: Array<string>[]= [
      ['section1','Introduction'],
      ['section2','Database connection'],
      ['section3','Essential Functions'],
      ['section4','Variations'],
      ['section5','F. Variations'],
      ['section6','Category indices'],
      ['section7','Consumer Price Index'],
    ];
  

    constructor() {}
    
    ngOnInit() {      
      this.loadScript('./assets/prism.js', 'js');
      window.onload = () => {
        this.loadScript('./assets/main.js', 'js');
      };
    }

    loadScript(scriptUrl: string,Tipo: string) {
      if (Tipo=='js'){
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = scriptUrl;
        document.body.appendChild(script);
      }  else if (Tipo === 'css') {
        const link = document.createElement('link');
        link.rel='stylesheet'
        link.type = 'text/css';
        link.href = scriptUrl;
        document.head.appendChild(link);
      }
        
    }
    

    scrollToSection(elementId: string): void {
      const elementToScrollTo = document.getElementById(elementId);
      if (elementToScrollTo) {
        elementToScrollTo.scrollIntoView({ behavior: 'smooth' });
      }
    }

  }

  

  
  
  import { ViewportScroller } from '@angular/common';
  import { Component, AfterViewInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
  import { TableOfContents } from './tableOfContents';
  import { ReloadService } from '../../services/reload.service'
  
  @Component({
    selector: 'app-cpi',
    templateUrl: './cpi.component.html',
    styleUrls: ['./prism.css','./cpi.component.css']
  })
  export class CpiComponent implements AfterViewInit {    
    @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;

    tableOfContents = TableOfContents;
  

    constructor(private renderer: Renderer2,private viewportScroller: ViewportScroller,private reloadService: ReloadService) {}
    
    ngAfterViewInit() {
      this.loadScript('../../../assets/prism.js', 'js');
      window.onload = () => {
        this.loadScript('../../../assets/main.js', 'js');
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
    

    public onClick(elementId: string): void { 
      const container = this.scrollContainer.nativeElement;
      const elementToScrollTo = document.getElementById(elementId);
  
      if (elementToScrollTo) {
        const scrollPosition = elementToScrollTo.offsetTop;
        this.renderer.setProperty(container, 'scrollTop', scrollPosition);
      }
    }

  }

  

  
  
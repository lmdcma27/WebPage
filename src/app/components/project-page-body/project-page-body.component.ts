import { Component,OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-page-body',
  templateUrl: './project-page-body.component.html',
  styleUrls: ['./project-page-body.component.css']
})
export class ProjectPageBodyComponent implements OnInit{


  @Input() public tableOfContents:Array<string>[];    
  @Output() scrollToElement = new EventEmitter<string>();
  
  constructor(){

  }

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

  public onClick(elementId: string): void { 
    console.log(elementId)
    this.scrollToElement.emit(elementId);    
  }


}

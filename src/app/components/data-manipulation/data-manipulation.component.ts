import { Component } from '@angular/core';

@Component({
  selector: 'app-data-manipulation',
  templateUrl: './data-manipulation.component.html',
  styleUrls: ['./data-manipulation.component.css']
})
export class DataManipulationComponent {

  tableOfContents: Array<string>[]= [
    ['section1','Abstract'],
    ['section2','Unify duplicates registers'],
    ['section3','Regex: Cleaning Phone Numbers'],
    ['section4','Unify two dataframes']    
  ];

  sections: Array<string>[]=[
    []
  ]

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

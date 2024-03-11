import { Component } from '@angular/core';

@Component({
  selector: 'app-pyspark',
  templateUrl: './pyspark.component.html',
  styleUrls: ['./pyspark.component.css']
})
export class PysparkComponent {

  tableOfContents: Array<string>[]= [
    ['section1','Introduction'],
    ['section2','Download Spark'],
    ['section3','Add Spark to the Path'],
    ['section4','Pyspark Instllation'],
    ['section5','PySpark & MySql Connection']
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

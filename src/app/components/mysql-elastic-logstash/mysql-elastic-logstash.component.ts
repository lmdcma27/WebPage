import { Component } from '@angular/core';

@Component({
  selector: 'app-mysql-elastic-logstash',
  templateUrl: './mysql-elastic-logstash.component.html',
  styleUrls: ['./mysql-elastic-logstash.component.css']
})


export class MysqlElasticLogstashComponent {

  tableOfContents: Array<string>[]= [
    ['section1','Introduction'],
    ['section2','Project Folder'],
    ['section3','What does Logstash Service Do?'],
    ['section4','MySql Service Settings'] 
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

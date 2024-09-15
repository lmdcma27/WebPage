import { Component } from '@angular/core';

@Component({
  selector: 'app-minio-spark',
  templateUrl: './minio-spark.component.html',
  styleUrls: ['./minio-spark.component.css']
})
export class MinioSparkComponent {
  
  
  tableOfContents: Array<string>[]= [
    ['section1','Introduction'],
    ['section2','Minio Setup'],
    ['section3','Spark Setup']    
  ];

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

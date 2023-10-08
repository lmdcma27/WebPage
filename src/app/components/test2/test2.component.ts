import { Component, AfterViewInit, OnInit,enableProdMode  } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css','./prism.css']
})
export class Test2Component  implements OnInit{
  //public myScripElement1: HTMLScriptElement;
  constructor(){
    //this.myScripElement1 = document.createElement('script');
    //this.myScripElement1.src = '../../assets/main.js';
    //this.myScripElement1.async = true;
    //document.body.appendChild(this.myScripElement1);
  }
  ngOnInit(): void {
    enableProdMode();
  }
  
 
}

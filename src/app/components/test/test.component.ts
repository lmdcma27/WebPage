import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Listado } from './listado';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{

  
  listado = Listado;
  seccionElegida:string= '';

  myPythonCode:string = 'import pandas as pd';
  mathequations = ['H = \\ sum_ {i = 1} ^ {m} p_ {i} log_ {2} (p_ {i})']

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit (){
    console.log('sfds')
  }
  
  onSelect(seccion: string): void {
    this.seccionElegida = seccion;
  }


  public onClick(elementId: string): void { 
      this.viewportScroller.scrollToAnchor(elementId);

  }
  
  

  //constructor(private router: Router, private activatedRoute: ActivatedRoute, private viewportScroller: ViewportScroller) { }
  
  /*ngOnInit(): void {
    // Listen for navigation end events
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      // Scroll to the fragment identifier on navigation end
      const fragment = this.activatedRoute.snapshot.fragment;
      if (fragment) {
        const element = document.querySelector('#' + fragment);
        if (element) {
          console.log(element)
          this.scrollToElement(element as HTMLElement);
        }
      }
    });
  }

  scrollToElement(element: HTMLElement): void {
    // Get the ID of the target element
    const id = element.id;

    // Use ViewportScroller to scroll to the element
    this.viewportScroller.scrollToAnchor(id);
  }

  onLinkClick(palabra: String): void {
    console.log(palabra);
    this.ngOnInit()
  }*/

}
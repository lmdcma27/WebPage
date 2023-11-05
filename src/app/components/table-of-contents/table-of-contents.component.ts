import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ReloadService } from '../../services/reload.service'

@Component({
  selector: 'app-table-of-contents',
  templateUrl: './table-of-contents.component.html',
  styleUrls: ['./table-of-contents.component.css']
})
export class TableOfContentsComponent implements OnInit{
  
    @Input() public tableOfContents:Array<string>[];    
    @Output() scrollToElement = new EventEmitter<string>();
    constructor(){

    }

    ngOnInit(){

    }

    public onClick(elementId: string): void { 
      console.log(elementId)
      this.scrollToElement.emit(elementId);
      //const container = this.scrollContainer.nativeElement;
      //const elementToScrollTo = document.getElementById(elementId);      
      //if (elementToScrollTo) {
      //  const scrollPosition = elementToScrollTo.offsetTop;
      //  this.renderer.setProperty(container, 'scrollTop', scrollPosition);
      //}
    }

}

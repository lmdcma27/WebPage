import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-box',
  templateUrl: './code-box.component.html',
  styleUrls: ['./code-box.component.css']
})
export class CodeBoxComponent {

  @Input() public code:string;  
  constructor() { }  
}

import { Component, OnInit,Input, ViewEncapsulation, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit {

  @Input('srvElement') element: {type: string, name: string, content: string};
  @ContentChild ('contentParagraph') paragraph : ElementRef;

  constructor() { }

  ngOnInit() {
    console.log('Text Content: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentInit() {
    console.log('Text Content: ' + this.paragraph.nativeElement.textContent);
    
  }

}

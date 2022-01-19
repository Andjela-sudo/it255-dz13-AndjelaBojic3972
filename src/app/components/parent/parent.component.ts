import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked {
  public text : string = '';
  isChild = false;
  static br: number = 1;
  inputText:string = ''
  constructor() { }

  ngOnInit(): void {
    console.log('OnInit for parent component is called');
    this.text+= ' <br> OnInit for parent component is called';
  }
  toggleChild(){
    this.isChild = !this.isChild;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('On changes called for parent');
    
      this.text += '  <br> On Changes calles for parent '
  }
  ngDoCheck(){
    console.log(' do check is called');
    this.text += ' <br> do check is called'
  }

  ngAfterContentInit(){
    console.log(' after content init for parent is called');
    this.text += '  <br/>   , after content init';
    
  }

  ngAfterContentChecked(): void {
      console.log(' after content checked for parent');
      this.text += '<br> After content checked'
      
  }
  ngAfterViewChecked(): void {
    console.log(' after view checked for parent');
    this.text += '<br> after view checked'
  }
  ngAfterViewInit(): void {
    console.log(' after view init for parent');
    this.text += '<br> after view init'
  }
  
}

import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit , OnDestroy, OnChanges, DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked {
  static br: number = 1;
  public text:string = '';
  @Input()
  public inputText: string = '';
  constructor() { }

  ngOnInit(): void {
    console.log('OnInit for child component is called');
    this.text+= ' <br>OnInit for child component is called';
    
  }

  ngOnDestroy(): void {
      console.log('Child On Destroy called');
      alert('Child destroyed')
      
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log('On changes called for child');
      this.text += '  <br> On changes called for child'
      console.log(changes);
      
  }

  ngDoCheck(){
    console.log(' do check is called');
    this.text += '    <br> do check is called'
  }

  ngAfterContentInit(){
    console.log(' after content init for child is called');
    this.text += '     <br> after content init';
    
  }
  ngAfterContentChecked(): void {
    console.log(' after content checked for parent');
    this.text += '<br> After content checked'
    
}
ngAfterViewChecked(): void {
  console.log(' after view checked for child');
  this.text += '<br> after view checked'
}
ngAfterViewInit(): void {
  console.log(' after view init for child');
  this.text += '<br> after view init'
}

}

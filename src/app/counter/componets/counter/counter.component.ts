import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  public title: string = "Pagina de Counter";
  public counter: number = 10;

  addCounter(value:number){
    this.counter += value
  }

  resetCounter(){
    this.counter = 10;
  }
}

import { Component, OnInit } from '@angular/core';
import { combineLatest, of, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-combine',
  templateUrl: './combine.component.html',
  styleUrls: ['./combine.component.css']
})
export class CombineComponent {

constructor() {
  this.callCombineLatest()
  this.replaySubject()
}

callCombineLatest() {
    // 1. Define multiple observables
    let color = of('Black', 'Red', 'Blue');
    let brand = of('Jaguar', 'Ford', 'BMW');
    let price = of(100, 200, 300);


    // 2. Call combineLatest operator, inject multiple observables in array
    const joinStream = combineLatest(color, brand, price);


    // 3. Subscibe combineLatest observable
    const subscribe = joinStream.subscribe(([color, brand, price]) => {
      console.log(color + ' ' + brand + ' ' + 'costed me' + ' ' + price );
    })
  }

  replaySubject() {

    const sub = new ReplaySubject(3);

    sub.next(1);
    sub.next(2);
    sub.subscribe(console.log); // OUTPUT => 1,2
    sub.next(3); // OUTPUT => 3
    sub.next(4); // OUTPUT => 4
    sub.subscribe(console.log); // OUTPUT => 2,3,4 (log of last 3 values from new subscriber)
    sub.next(5); // OUTPUT => 5,5 (log from both subscribers)
  }


}


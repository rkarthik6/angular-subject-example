import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';  // RxJS 6 syntax
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor() { }
  private subject = new Subject<any>();

  sendMessage(message: string) {
      this.subject.next({ text: message });
  }

  clearMessages() {
      this.subject.next();
  }

  getMessage(): Observable<any> {
      return this.subject.asObservable();
  }

  // requestDataFromMultipleSources(): Observable<any[]> {
  //   let response1 = this.http.get('https://jsonplaceholder.typicode.com/users/1');
  //   let response2 = this.http.get('https://jsonplaceholder.typicode.com/users/2');
  //   let response3 = this.http.get('https://jsonplaceholder.typicode.com/users/3');
  //   // Observable.forkJoin (RxJS 5) changes to just forkJoin() in RxJS 6
  //   return forkJoin([response1, response2, response3]);
  // }
}

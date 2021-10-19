import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  messages: any[] = [];
  subscription: Subscription = new Subscription();

  constructor(private messageService: MessageService) {
     
  }

  ngOnInit() {
    // this.messageService.requestDataFromMultipleSources().subscribe((response) => {
    //   console.log(response)
    // })
     // subscribe to home component messages
     this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message) {
        this.messages.push(message);
      } else {
        // clear messages when empty message received
        this.messages = [];
      }
    });
  }

  test() {
    alert("call")
    console.log("call from sibling component")
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }

}

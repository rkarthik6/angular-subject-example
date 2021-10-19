import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-siblings',
  templateUrl: './siblings.component.html',
  styleUrls: ['./siblings.component.css']
})
export class SiblingsComponent implements OnInit{
  selected = false
  items =  [{name: 'karthik'}, {name: 'santhosh'}]
  @ViewChild('testTemplate', { read: TemplateRef }) testTemplate:TemplateRef<any>
  @ViewChild(ParentComponent) parent: ParentComponent;
  constructor(private messageService: MessageService, private vref:ViewContainerRef) { }
 
  ngAfterViewInit() {
   // this.vref.createEmbeddedView(this.testTemplate);
    console.log(this.parent.test()); // I am a parent component!
  }
    ngOnInit() {
      console.log(this.testTemplate)
    }

    sendMessage(): void {
        // send message to subscribers via observable subject
        this.messageService.sendMessage('Message from Sibling Component to Parent Component!');
    }

    clearMessages(): void {
      // clear messages
      this.messageService.clearMessages();
    }

}

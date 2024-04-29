import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'child-output',
  template: `
  <h1>Child output</h1>
 <button (click) = "sendMessage()">Send to parent</button>`,
})
export class ChildOutput {
  messageToSend = 'hello parent';
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.messageToSend);
  }
}

import { Component } from '@angular/core';
import { ChildOutput } from './childOutput';

@Component({
  standalone: true,
  selector: 'parent-output',
  imports: [ChildOutput],
  template: `
  <h1>Parent output</h1>
  {{childMessage}}
  <child-output (messageEvent)="recieveMessageFromChild($event)"></child-output>
  `,
})
export class ParentOutput {
  childMessage = '';

  recieveMessageFromChild($event: any) {
    this.childMessage = $event;
  }
}

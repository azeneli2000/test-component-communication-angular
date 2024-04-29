import { Component, OnInit } from '@angular/core';
import { Service } from './service';

@Component({
  standalone: true,
  selector: 'subscriber',
  providers: [Service],
  template: `
  <h2>Child</h2>
  `,
})

export class Subscriber implements OnInit {
  subscriberMessage = '';
  constructor(private data: Service) {}
  ngOnInit(): void {
    this.data.currentMessage.subscribe(
      (message) => (this.subscriberMessage = message)
    );
  }
}

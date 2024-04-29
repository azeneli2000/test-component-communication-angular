import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'child',
  template: `
  <h2>Child</h2>
  <div>{{message}}</div>`,
})
export class Child {
  @Input() message = '';
}

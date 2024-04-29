import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'child-vewchild',
  template: `
  <h2>Child</h2>
  `,
})
export class ChildViewChild {
  message = 'child message';
}

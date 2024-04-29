import { Component } from '@angular/core';
import { Child } from './child';

@Component({
  standalone: true,
  selector: 'parent',
  imports: [Child],
  template: `
  <h1>Parent</h1>
  <child [message]= "parentMessage"></child>`,
})
export class Parent {
  parentMessage = 'hello child 11';
}

import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildViewChild } from './child-viewchild';

@Component({
  standalone: true,
  selector: 'parent-viewchild',
  imports: [ChildViewChild],
  template: `
  <h1>Parent viewchild</h1>
  {{childMessage}}
  <child-vewchild></child-vewchild>
  `,
})
export class ParentViewChild implements AfterViewInit {
  childMessage = '';
  ngAfterViewInit(): void {
    this.childMessage = this.child.message;
  }
  @ViewChild(ChildViewChild) child!: ChildViewChild;
}

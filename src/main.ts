import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { Parent } from './parent-child/parent';
import { Child } from './parent-child/child';
import { ParentOutput } from './child-parent/output/parentOutput';
import { ChildOutput } from './child-parent/output/childOutput';
import { ParentViewChild } from './child-parent/view-child/parent-viewchild';
import { ChildViewChild } from './child-parent/view-child/child-viewchild';
import { Subscriber } from 'rxjs';
import { Service } from './all/service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Parent,
    Child,
    ParentOutput,
    ChildOutput,
    ParentViewChild,
    Subscriber,
  ],
  providers: [Service],
  template: `    
    <!-- <parent></parent> -->
    <!-- <parent-output> -->
    <!-- <parent-viewchild></parent-viewchild> -->
    <subscriber>  </subscriber>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);

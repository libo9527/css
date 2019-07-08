import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class DemoComponent {
  message = 'I am a demo';
}

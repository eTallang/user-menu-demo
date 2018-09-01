import { Component, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('opacity', [
      state(
        'void',
        style({
          opacity: 0,
          transform: 'scale(.97)'
        })
      ),
      state(
        '*',
        style({
          opacity: 1,
          transform: 'scale(1)'
        })
      ),
      transition('void => *', animate('500ms cubic-bezier(.1, 0, 0, 1)')),
      transition('* => void', animate('200ms cubic-bezier(.1, 0, 0, 1)'))
    ])
  ]
})
export class UserMenuComponent {
  isOpen = false;
}

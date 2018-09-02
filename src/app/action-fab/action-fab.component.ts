import { Component, Output, EventEmitter } from '@angular/core';
import { trigger, style, transition, animate, stagger, query } from '@angular/animations';
import { ConnectedPosition } from '@angular/cdk/overlay';

const listAnimation = '300ms cubic-bezier(.2, 0, .1, 1)';
const iconAnimation = '250ms cubic-bezier(.3, 0, 0, 1)';
const rotateAmount = '240deg';

@Component({
  selector: 'app-action-fab',
  templateUrl: './action-fab.component.html',
  styleUrls: ['./action-fab.component.scss'],
  animations: [
    trigger('icon', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: `rotate(-${rotateAmount})`
        }),
        animate(
          iconAnimation,
          style({
            opacity: 1,
            transform: 'rotate(0)'
          })
        )
      ]),
      transition('* => void', [
        style({
          opacity: 1,
          transform: 'rotate(0deg)'
        }),
        animate(
          iconAnimation,
          style({
            opacity: 0,
            transform: `rotate(${rotateAmount})`
          })
        )
      ])
    ]),
    trigger('listAnimation', [
      transition('* => *', [
        query(':leave', [
          stagger(50, [
            animate(listAnimation, style({ opacity: 0, transform: 'scale(.3)' }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0, transform: 'scale(.3)' }),
          stagger(-50, [
            animate(listAnimation, style({ opacity: 1, transform: 'scale(1)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ActionFabComponent {
  @Output() valueChange = new EventEmitter<string>();
  isOpen = false;
  actions: string[] = [ 'done', 'favorite', 'room', 'call' ];
  position: ConnectedPosition[] = [
    {
      originX: 'center',
      originY: 'top',
      overlayX: 'center',
      overlayY: 'bottom'
    }
  ];

  onActionSelect(selectedIcon: string) {
    this.valueChange.emit(selectedIcon);
    this.isOpen = false;
  }
}

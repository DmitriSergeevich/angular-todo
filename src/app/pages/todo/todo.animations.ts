import { animate, style, transition, trigger } from '@angular/animations';

export const todoRemoveTrigger = trigger('todoRemoveTrigger', [
  transition('void => *', [
    style({
      opacity: 0,
    }),
    animate(
      500,
      style({
        opacity: 1,
      })
    ),
  ]),
  transition('* => void', [
    animate(
      500,
      style({
        opacity: 0,
      })
    ),
  ]),
]);

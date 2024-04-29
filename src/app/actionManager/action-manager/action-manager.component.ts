import { Component } from '@angular/core';

@Component({
  selector: 'app-action-manager',
  standalone: true,
  template: '', 
})
export class ActionManagerComponent {
  private subscriptions: Function[] = [];

  subscribe(cb: Function): void {
    this.subscriptions.push(cb);
  }

  dispatch(): void {
    this.subscriptions.forEach(cb => cb());
  }
}

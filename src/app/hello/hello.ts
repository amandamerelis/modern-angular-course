import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.scss',
})
export class Hello {
  protected title = 'Welcome to Modern Angular';
  protected count = signal(0);

  protected increaseCounter() {
    this.count.update(value => value + 1);
  }

  protected decreaseCounter() {
    this.count.update((value) => value - 1);
  }

  protected resetCounter() {
    this.count.set(0);
  }
}

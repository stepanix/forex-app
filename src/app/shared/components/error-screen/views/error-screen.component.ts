import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-error-screen',
  templateUrl: './error-screen.component.html',
  styleUrls: ['./error-screen.component.scss']
})
export class ErrorScreenComponent implements OnInit {

  @Output() retryClicked = new EventEmitter();
  @Input() errorMessage: string = 'oops an error occurred, please refresh to try again;';

  constructor() { }

  ngOnInit() {
  }

  onRetryClicked() {
    this.retryClicked.emit();
  }

}
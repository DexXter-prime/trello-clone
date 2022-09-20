import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
  selector: 'app-error-message',
  template: `
    <div class="error-msg">
        <p>Card title too long max {{requiredLen}}, your {{actualLen}}</p>
        <button (click)="this.closeEvent.emit()">
          <div class="f-line"></div>
          <div class="s-line"></div>
        </button>
    </div>
  `,
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent {

    @Input() actualLen?: number;
    @Input() requiredLen?: number;
    @Output() closeEvent = new EventEmitter<void>();

}

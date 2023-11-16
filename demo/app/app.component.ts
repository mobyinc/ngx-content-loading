import { Component } from '@angular/core';
import { NgxContentLoadingComponent } from '../../src';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [NgxContentLoadingComponent]
})
export class AppComponent {
  title = 'app';
}

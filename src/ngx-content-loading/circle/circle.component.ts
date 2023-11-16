import { Component, Input } from '@angular/core';
import { SvgElementComponent } from '../svg-element/svg-element.component';
import { NgxContentLoadingComponent } from '../ngx-content-loading.component';
import { SvgStopComponent } from '../svg-stop/svg-stop.component';

@Component({
    selector: '[ngx-circle]',
    templateUrl: './circle.component.html',
    styleUrls: ['./circle.component.scss'],
    standalone: true,
    imports: [SvgStopComponent]
})
export class CircleComponent extends SvgElementComponent {
    @Input() public r: string;
    @Input() public cx: string;
    @Input() public cy: string;

    constructor(public content: NgxContentLoadingComponent) {
        super(content);
    }
}

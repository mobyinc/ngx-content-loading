import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RectComponent } from '../rect/rect.component';
import { CircleComponent } from '../circle/circle.component';

@Component({
    selector: '[ngx-facebook-preset]',
    templateUrl: './facebook-preset.component.html',
    styleUrls: ['./facebook-preset.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CircleComponent, RectComponent]
})
export class FacebookPresetComponent {}

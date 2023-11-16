import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RectComponent } from '../rect/rect.component';
import { CircleComponent } from '../circle/circle.component';

@Component({
    selector: '[ngx-instagram-preset]',
    templateUrl: './instagram-preset.component.html',
    styleUrls: ['./instagram-preset.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CircleComponent, RectComponent]
})
export class InstagramPresetComponent {
}

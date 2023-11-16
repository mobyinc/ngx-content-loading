import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RectComponent } from '../rect/rect.component';
import { CircleComponent } from '../circle/circle.component';

@Component({
    selector: '[ngx-bullet-list-preset]',
    templateUrl: './bullet-list-preset.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CircleComponent, RectComponent]
})
export class BulletListPresetComponent {
}

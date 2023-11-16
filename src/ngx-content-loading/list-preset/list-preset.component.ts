import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RectComponent } from '../rect/rect.component';

@Component({
    selector: '[ngx-list-preset]',
    templateUrl: './list-preset.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [RectComponent]
})
export class ListPresetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RectComponent } from '../rect/rect.component';

@Component({
    selector: '[ngx-code-preset]',
    templateUrl: './code-preset.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [RectComponent]
})
export class CodePresetComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}

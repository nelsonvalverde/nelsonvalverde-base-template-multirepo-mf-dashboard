import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { CardModule } from 'primeng/card';
import { CardMinimalDetailInterface } from './card.minimal-detail.interface';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { ConvertUtil } from '../../shared/utils/convert.util';


@Component({
  selector: 'app-card-minimal-detail',
  standalone: true,
  imports: [CardModule, MenuModule, CommonModule],
  templateUrl: './card-minimal-detail.component.html',
  styleUrl: './card-minimal-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CardMinimalDetailComponent {

  @Input() options: CardMinimalDetailInterface = {
    icon: 'pi-heart-fill'
  }

  get items(): MenuItem[] {
    return this.options.items ?? [];
  }

  get title(): string {
    return this.options.title ?? '';
  }

  get description(): string {
    return this.options.description ?? '';
  }

  get color(): string {
    return ConvertUtil.getColorHex(this.options.color);
  }

  colorToOpacity20Percentage(colorHex: string): string {
    return `${colorHex}33`;
  }
}

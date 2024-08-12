import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { MenuModule } from 'primeng/menu';
import { ProgressBarModule } from 'primeng/progressbar';
import { CardMinimalDetailComponent } from "./components/card-minimal-detail/card-minimal-detail.component";
import { CardMinimalDetailInterface } from './components/card-minimal-detail/card.minimal-detail.interface';
import { TableComponent } from "./components/table/table.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AccordionModule, ChartModule, PanelModule, MenuModule, ProgressBarModule ,CardMinimalDetailComponent, TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  loadBarData: any;
  loadBarOptions: any;

  loadPieData: any;
  loadPieOptions: any;

  ngOnInit(): void {
    this.loadBar();
    this.loadPie();
  }

  private loadBar(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.loadBarData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          type: 'line',
          label: 'Dataset 1',
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          borderWidth: 2,
          fill: false,
          tension: 0.4,
          data: [50, 25, 12, 48, 56, 76, 42]
        },
        {
          type: 'bar',
          label: 'Dataset 2',
          backgroundColor: documentStyle.getPropertyValue('--green-500'),
          data: [21, 84, 24, 75, 37, 65, 34],
          borderColor: 'white',
          borderWidth: 2
        },
        {
          type: 'bar',
          label: 'Dataset 3',
          backgroundColor: documentStyle.getPropertyValue('--orange-500'),
          data: [41, 52, 24, 74, 23, 21, 32]
        }
      ]
    };

    this.loadBarOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        }
      }
    };
  }

  private loadPie(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.loadPieData = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [540, 325, 702],
          backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
        }
      ]
    };

    this.loadPieOptions = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor
          }
        }
      }
    };
  }

  get optionItem1(): CardMinimalDetailInterface {
    return {
      icon: 'pi-heart-fill',
      title: '3,256',
      description: 'Total Products',
      color: '--primary-color',
      items: [
        {
          label: 'Refrescar'
        }
      ]
    }
  }

  get optionItem2(): CardMinimalDetailInterface {
    return {
      icon: 'pi-inbox',
      title: '1,256',
      description: 'Total Stock',
      color: '--red-700',
      items: [
        {
          label: 'Refrescar'
        }
      ]
    }
  }

  get optionItem3(): CardMinimalDetailInterface {
    return {
      icon: 'pi-tag',
      title: '256',
      description: 'Total Orders',
      color: '--cyan-700',
      items: [
        {
          label: 'Refrescar'
        }
      ]
    }
  }

  get optionItem4(): CardMinimalDetailInterface {
    return {
      icon: 'pi-thumbs-up',
      title: '1,150',
      description: 'Total Sales',
      color: '--yellow-500',
      items: [
        {
          label: 'Refrescar'
        }
      ]
    }
  }


}

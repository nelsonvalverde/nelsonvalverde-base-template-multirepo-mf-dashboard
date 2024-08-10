import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { MenuModule } from 'primeng/menu';
import { CardMinimalDetailComponent } from "./components/card-minimal-detail/card-minimal-detail.component";
import { CardMinimalDetailInterface } from './components/card-minimal-detail/card.minimal-detail.interface';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AccordionModule, ChartModule, PanelModule, MenuModule, CardMinimalDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  loadBarData: any;
  loadBarOptions: any;

  loadBar2Data: any;
  loadBar2Options: any;

  ngOnInit(): void {
    this.loadBar();
    this.loadBar2();
  }

  private loadBar(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.loadBarData = {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [
        {
          label: 'Sales',
          data: [540, 325, 702, 620],
          backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
          borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
          borderWidth: 1
        }
      ]
    };

    this.loadBarOptions = {
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
  }

  private loadBar2(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.loadBar2Data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: documentStyle.getPropertyValue('--blue-500'),
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: documentStyle.getPropertyValue('--pink-500'),
          borderColor: documentStyle.getPropertyValue('--pink-500'),
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };

    this.loadBar2Options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
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
            color: textColorSecondary,
            font: {
              weight: 500
            }
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
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

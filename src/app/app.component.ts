import { ChangeDetectionStrategy, Component, OnInit, signal, WritableSignal } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AccordionModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  chart: WritableSignal<Chart<"bar", string[], string> | null> = signal(null);

  ngOnInit(): void {
    this.loadBar();
  }

  private loadBar(): void {
    const bar = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels: ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13',
          '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17',],
        datasets: [
          {
            label: "Sales",
            data: ['467', '576', '572', '79', '92', '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17', '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }
    });
    this.chart.set(bar)
  }
}

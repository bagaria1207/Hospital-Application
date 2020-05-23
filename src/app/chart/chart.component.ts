import { EmployeeService } from './../shared/employee.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(private service: EmployeeService) { }

  listData: MatTableDataSource<any>;

  d1: number = 0; //KidneyInfection
  d2: number = 0; //LungCancer
  d3: number = 0; //Diabetes
  d4: number = 0; //BloodPressure

  chartData: Array<any>;
  ngOnInit(): void {
    this.service.getPatients().subscribe(
      list => {
        let array = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
        this.listData = new MatTableDataSource(array);
        for(var i=0;i<this.listData.data.length;i++){
          if(this.listData.data[i].disease == "Kidney Infection"){
            this.d1+=1;
          }
          else if(this.listData.data[i].disease == "Lung Cancer"){
            this.d2+=1;
          }
          else if(this.listData.data[i].disease == "Diabetes"){
            this.d3+=1;
          }
          else{
            this.d4+=1;
          }
        }
        this.chartData = [this.d1, this.d2, this.d3, this.d4];
        console.log(this.chartData);
        console.log(this.d1);
        console.log(this.d2);
        console.log(this.d3);
        console.log(this.d4);
      });
      var myChart = new Chart("myChart", {
        type: 'bar',
        data: {
            labels: ['Kidney Infection', 'Diabetes', 'Lung Cancer', 'BLood Pressure'],
            datasets: [{
                label: 'Patient Count',
                data: [2,3,1,5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
      });
  }

}

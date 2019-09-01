import React, { Component } from "react"
import{Line, Doughnut, Bar} from "react-chartjs-2"


        const linedata = {
            labels:['00:00','4:00','8:00','14:00','18:00','20:00'],
            datasets:[
              {
                  label:"Login que on FlameDoghar",
                  backgroundColor: 'rgba(220,220,220,0.5)',
                  borderColor: 'rgba(220,220,220,0.8)',
                  hoverBackgroundColor: 'rgba(220,220,220,0.75)',
                  hoverBorderColor: 'rgba(220,220,220,1)',
                  data:[4000,2000,6000,10000,16000,25000],
              },

              {
                  label:"Login que on Rock-Dogan",
                  backgroundColor: 'rgba(151,187,205,0.5)',
                  borderColor: 'rgba(151,187,205,0.8)',
                  hoverBackgroundColor: 'rgba(151,187,205,0.75)',
                  hoverBorderColor: 'rgba(151,187,205,1)',
                  data:[1000,0,2500,4000,6000,8000],
              },
            ],
        }

        const bardata = {
            labels:['00:00','4:00','8:00','14:00','18:00','20:00'],
            datasets:[
              {
                  label:"Login que on FlameDoghar",
                  backgroundColor: 'rgba(220,220,220,0.5)',
                  borderColor: 'rgba(220,220,220,0.8)',
                  hoverBackgroundColor: 'rgba(220,220,220,0.75)',
                  hoverBorderColor: 'rgba(220,220,220,1)',
                  data:[4000,2000,6000,10000,16000,25000],
              },

              {
                  label:"Login que on Rock-Dogan",
                  backgroundColor: 'rgba(151,187,205,0.5)',
                  borderColor: 'rgba(151,187,205,0.8)',
                  hoverBackgroundColor: 'rgba(151,187,205,0.75)',
                  hoverBorderColor: 'rgba(151,187,205,1)',
                  data:[1000,0,2500,4000,6000,8000],
              },
            ],
        }


        const dNut = {
            labels: ['item1', 'item2', 'item3', 'item4', 'item5'],
            datasets: [
              {
                data: [300, 50, 100, 40, 120],
                backgroundColor: [
                  '#F7464A',
                  '#46BFBD',
                  '#FDB45C',
                  '#949FB1',
                  '#4D5360',
                ],
                hoverBackgroundColor: [
                  '#FF5A5E',
                  '#5AD3D1',
                  '#FFC870',
                  '#A8B3C5',
                  '#616774',
                ],
              },
            ],
          }




        export default()=>(
        <div>

            <Line data={linedata}/>
            <Bar data={bardata}/>
            <h1>Class population Vanilla</h1>
            <Doughnut data={dNut}/>

        </div>
        
        
        
        
        
        );
     
 









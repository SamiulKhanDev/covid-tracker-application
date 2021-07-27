import React from 'react'
import {Line} from 'react-chartjs-2'
import useFetch from './useFetch'
import useFetchObj from './useFetchObj'
const url ="https://disease.sh/v3/covid-19/historical/all?lastdays=100"
const Graph = ({casesType}) => {
  
    const data = useFetchObj(url);
    const buildChartData = (data,casesType) => {
        const chartData = [];
        let lastDataPoint;
        for(let date in data.cases){
            if (lastDataPoint) {
                const newDataPoint = {
                    x: date,
                    y: data[casesType][date] - lastDataPoint
                }
                chartData.push(newDataPoint);
            }
            lastDataPoint = data[casesType][date];
        }
        return chartData;
    }
    const chartData = buildChartData(data, casesType);
    
    
    return (
        <div>
        {chartData?.length > 0 && (
          <Line
            data={{
              datasets: [
                {
                  backgroundColor: `${casesType=='recovered'?"green":"rgba(204, 16, 52, 0.5)"}`,
                  borderColor: `${casesType=='recovered'?"green":"rgba(204, 16, 52, 0.5)"}`,
                  data: chartData,
                },
              ],
            }}
          />
        )}
      </div>
    )
}

export default Graph

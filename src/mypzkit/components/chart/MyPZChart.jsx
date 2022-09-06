import React from 'react';
import Chart from 'react-google-charts';

import styles from './MyPZChart.module.scss';

const chartTypes = [
  'AnnotationChart',
  'AreaChart',
  'BarChart',
  'BubbleChart',
  'Calendar',
  'CandlestickChart',
  'ColumnChart',
  'ComboChart',
  'DiffChart',
  'DonutChart',
  'Gantt',
  'Gauge',
  'GeoChart',
  'Histogram',
  'LineChart',
  'Line',
  'Bar',
  'Map',
  'OrgChart',
  'PieChart',
  'Sankey',
  'ScatterChart',
  'SteppedAreaChart',
  'Table',
  'Timeline',
  'TreeMap',
  'WaterfallChart',
  'WordTree',
];

const MyPZChart = (props) => {
  const {
    width,
    height,
    type,
    loader,
    title,
    hAxisTitle,
    data,
  } = props;

  const finalChartType = chartTypes.indexOf(type) >= 0 ? type : 'AreaChart';
  const finalLoader = loader || (<div>Loading {title}...</div>);

  return (
    <div className={styles['mypz-chart']}>
      <Chart
        width={width || '100%'}
        height={height || '20rem'}
        chartType={finalChartType}
        loader={finalLoader}
        data={data}
        options={{
          title,
          hAxis: { title: hAxisTitle },
        }}
      />
    </div>
  );
};

export default MyPZChart;

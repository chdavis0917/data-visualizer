import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { ChartData, GraphProps } from '../../types/types';

const Graph = ({ data }: GraphProps) => {
  const chartData: ChartData[] = [];

  Object.keys(data).forEach((key) => {
    Object.keys(data[key]).forEach((date) => {
      const hourSum = data[key][date].hours.reduce((acc: number, curr: number) => acc + curr, 0);
      chartData.push({ name: date, views: key === 'views' ? hourSum : 0, clicks: key === 'clicks' ? hourSum : 0 });
    });
  });

  return (
    <div>
      <LineChart className="recharts-wrapper" width={600} height={300} data={chartData}>
        <Line type="monotone" dataKey="views" stroke="#8884d8" />
        <Line type="monotone" dataKey="clicks" stroke="#82ca9d" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" tick={{ fontSize: 14 }} tickLine={false} />
        <YAxis tick={{ fontSize: 14 }} />
        <Tooltip labelStyle={{ fontWeight: 'bold' }} contentStyle={{ fontSize: 14 }} />
      </LineChart>
    </div>
  );
};

export default Graph;

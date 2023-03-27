import { ReactEventData, CombinedData } from '../types/types';

function transformDataToHTML(data: { [key: string]: { [key: string]: ReactEventData } }): string {
  const combinedData: CombinedData = {};

  // Combine views and clicks data by date and hour
  for (const event in data) {
    for (const date in data[event]) {
      const hours = data[event][date].hours;

      if (Array.isArray(hours)) {
        // Case: hours is an array
        hours.forEach((value: number, index: number) => {
          const hour = index + 1;
          const key = `${date}-${hour.toString().padStart(2, '0')}`;

          // Initialize the combined data object if it doesn't exist
          combinedData[key] = combinedData[key] || { date, hour, views: undefined, clicks: undefined };
          combinedData[key][event] = value;
        });
      } else {
        // Case: hours is an object
        for (const hour in hours) {
          const key = `${date}-${hour.padStart(2, '0')}`;

          // Initialize the combined data object if it doesn't exist
          combinedData[key] = combinedData[key] || { date, hour: parseInt(hour), views: undefined, clicks: undefined };
          combinedData[key][event] = hours[hour];
        }
      }
    }
  }

  // Sort combined data by date and hour
  const sortedData = Object.values(combinedData).sort((a, b): number => {
    if (a.date > b.date) {
      return -1;
    } else if (a.date < b.date) {
      return 1;
    } else {
      return b.hour - a.hour;
    }
  });

  // Format sorted data as HTML
  let html = '<table>';
  html += '<tr><th>Date and Hour</th><th>Views</th><th>Clicks</th></tr>';
  sortedData.forEach(data => {
    html += '<tr><td>' + data.date + ' ' + data.hour.toString().padStart(2, '0') + ':00</td>';
    if (data.views !== undefined) {
      html += '<td>' + data.views + '</td>';
    } else {
      html += '<td></td>';
    }
    if (data.clicks !== undefined) {
      html += '<td>' + data.clicks + '</td>';
    } else {
      html += '<td></td>';
    }
    html += '</tr>';
  });
  html += '</table>';

  return html;
}

export { transformDataToHTML };

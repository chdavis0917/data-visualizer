import { EventData, CombinedData } from '../types/types';


// the object data contains the keys "views" and "clicks"
// each of those properties contains dates in the form of strings
//those dates are assigned objects containing a single key value pair: a string "hours" and an array of numbers assoc. w/ hours of the day

//for each date in views, I want to make a count for each time a view ocurred during a specific hour
// I want to tally up each time a number occurred in the array and reflect that along with the date

// function tallyMaker (obj) {
//    const views = obj.views;
//    const clicks = obj.clicks;
//    datesArr = Object.keys(views);
//   const viewsTally = Object.values(views);
//   const arr = [];
//   viewsTally.forEach(date => {
//   arr.push(date.hours.sort())
//   })

//    views.forEach(date => {
//     console.log(date)
//    })
//create an object containing properties Date, Views, and Clicks
// concatenate the string from the data object onto a time and set that as the string value of Date
// I would make a count using the sorted arrays from above and also the clicks to set those properties of the objects
//}

// console.log(tallyMaker(data))

  function transformDataToHTML(data: { [key: string]: { [key: string]: EventData } }): string {
    // Combine views and clicks data by date and hour
    const combinedData: CombinedData = {};
    Object.keys(data).forEach(event => {
      Object.keys(data[event]).forEach(date => {
        data[event][date].hours.forEach((value, hour) => {
          const key = `${date}-${hour.toString().padStart(2, '0')}`;
          if (!combinedData[key]) {
            combinedData[key] = { date, hour };
          }
          combinedData[key][event] = value;
        });
      });
    });
    // Sort combined data by date and hour
    const sortedData = Object.values(combinedData).sort((a, b) => {
      if (a.date > b.date) {
        return -1;
      } else if (a.date < b.date) {
        return 1;
      } else {
        return b.hour - a.hour;
      }
    });
  
    // Generate HTML table
    let html = '<table><tr><th>Date</th><th>Views</th><th>Clicks</th></tr>';
    sortedData.forEach(row => {
      html += `<tr><td>${row.date} ${row.hour}:00</td><td>${row.views || 0}</td><td>${row.clicks || 0}</td></tr>`;
    });
    html += '</table>';
    return html;
  }


export {transformDataToHTML};
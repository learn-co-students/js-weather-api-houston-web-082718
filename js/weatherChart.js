function getFahrenheits(result) {
  return Object.keys(result).map(key => result[key].temperature);
}

function getHours(result) {
  return Object.keys(result).map(key => new Date(result[key].time * 1000).getHours());
}

function generateDataSet(labels, data) {
  return {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: "HOU Weather Data",
        data: data,
        backgroundColor: "rgba(100,150,220,0.2)",
        borderColor: 'rgb(255, 99, 132)'
      }]
    },
    options: {
      // additional configurations here
    }
  }
}


function makeRequest(endpoint, success) {
  // Your code goes here
  fetch(endpoint).then(resp => resp.json()).then(json => success(json.hourly.data));
}
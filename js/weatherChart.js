function getFahrenheits(data) {
  return data.map(function(temp) {
    return temp.temperature;
  })
}

function getHours(data){
  return data.map(function(hour) {
    return new Date(hour.time * 1000).getHours();
  })
}

function getHumidity(data) {
  return data.map(function(humid) {
    return humid.humidity * 100;
  })
}

function generateDataSet(times, temps, humids) {
  return {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        data: temps,
        label: "Degrees Fahrenheit",
        borderColor: "#FF0000"
      },

      {
        data: humids,
        label: "% Humidity",
        borderColor: "#0000FF"
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Houston Forecast (Hourly)'
      }
    }
  }
}

function makeRequest(endpoint, canvas) {
  return fetch(endpoint)
  .then(resp => resp.json())
  .then(json => {
        let hourlyData = json.hourly.data.map(({temperature, time, humidity}) => ({temperature, time, humidity}))
        let temps = getFahrenheits(hourlyData);
        let hours = getHours(hourlyData);
        let humids = getHumidity(hourlyData);
        let data = generateDataSet(hours, temps, humids);
        // const tempChart = new Chart(canvas, data);
        })
}
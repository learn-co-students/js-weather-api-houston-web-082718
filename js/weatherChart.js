function makeRequest() {
  fetch("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/3c2c62b638ed629c4b5b5e00aa3e2c20/40.7128,-74.0060")
  .then(resp => resp.json())
  .then(current => current.hourly)
  .then(hourlyData => render(hourlyData))
}

const render = (hourlyData) => {
  index = new Date().getHours()
  array = hourlyData.data.map(function(element) {
    dataPoint = {hour: index, temperature: element.temperature}
    index += 1
    return dataPoint
  })
  drawChart(array)
}

function drawChart(data) { 
  let hoursArr = data.map(function(e) {
    if(e.hour < 24) {
      return e.hour 
      } else if(e.hour < 48) {
      return (e.hour - 24) 
      } else {
      return (e.hour - 48) 
      }
  })
  let tempArr = data.map((e) => e.temperature)

  console.log(hoursArr)
  console.log(tempArr)

  let ctx = document.getElementById("NYCWeatherChart");
  let myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: hoursArr,
          datasets: [{
              label: 'Temperature (F)',
              data: tempArr,
              backgroundColor: [
                  // 'rgba(255, 99, 132, 0.2)',
                  // 'rgba(54, 162, 235, 0.2)',
                  // 'rgba(255, 206, 86, 0.2)',
                  // 'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  // 'rgba(255,99,132,1)',
                  // 'rgba(54, 162, 235, 1)',
                  // 'rgba(255, 206, 86, 1)',
                  // 'rgba(75, 192, 192, 1)',
                  // 'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });
}
makeRequest()
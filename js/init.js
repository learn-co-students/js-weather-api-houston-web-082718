document.addEventListener('DOMContentLoaded', function() {
  const API_KEY = "6fd1f930d7569ffa7337151c481e020f";
  const CORS_WRAPPER = "https://cors-anywhere.herokuapp.com/"
  const URL = CORS_WRAPPER + "https://api.darksky.net/forecast/" + API_KEY + "/29.7590907,-95.3634632?exclude=currently,minutely,daily,alerts,flags";
  let weatherJson;

  // makeRequest(URL, function(json) {
  //   let data = generateDataSet(getHours(json), getFahrenheits(json));
  //   let tempChart = new Chart(ctx).Line(data, { bezierCurve: true });
  // });

  fetch(URL)
  .then(response => response.json())
  .then(json => displayData(json))

  function displayData(json) {
    let startingHour = new Date().getHours()
    const data = json.hourly.data.map(function(dataElement) {
      let dataPoint = {time: startingHour, temp: dataElement.temperature}
      if (startingHour < 23)
        startingHour++
      else
        startingHour = 0
      
      return dataPoint
    });
    drawChart(data)
  }

  function drawChart(data) {
    var myChart = new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
            labels: data.map(elemenet => elemenet.time),
            datasets: [{
                label: 'THE DOM',
                data: data.map(elemenet => elemenet.temp),
                backgroundColor: 
                    'rgba(255, 99, 132, 0.2)',
                borderColor:
                    'rgba(255,99,132,1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:false,
                        fixedStepSize: 1,
                        fontSize: 20,
                        callback: function(tick, index, array) {
                          return (index % 2) ? "" : tick;
                        }
                    },
                    scaleLabel: {
                      display: true,
                      labelString: 'Temperature'
                    }
                }],

                xAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: 'Time'
                  },
                  ticks: {
                    fontSize: 20
                  }
                }]
            },
            responsive: false,
            maintainAspectRatio: true
        }
    });

  }
});
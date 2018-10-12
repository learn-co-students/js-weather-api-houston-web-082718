let temp = []
let data = []
let hrsArray = []
let result;
const index =  new Date().getHours()
function getFahrenheits(result){
  // Your code goes here
  fetch("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/3c2c62b638ed629c4b5b5e00aa3e2c20/40.7128,-74.0060")
  .then(resp => resp.json())
  .then(current => current.hourly)
  .then(hourly => (hourly.data)
  .forEach(key => temp.push(key) && render(key)))
}

let hr = index
function addHr(){
  for(let i = 0; i <= data.length; i++){
    if (hr >= 23){
      hrsArray.push(hr += 1)
      hr=1
    }else {
      hr = hr += 1
      hrsArray.push(hr += 1)
    }
  }
}

const render = (thing) => {
  addHr()
  temp.map(function (t) {
    data.push(t.temperature)
    })
    drawChart(data)
  };


function drawChart(temp) {
  let ctx = document.getElementById("NYCWeatherChart")
  let myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: hrsArray.slice(0, 100),
          datasets: [{
              label: 'NYCWeatherChart',
              data: temp.slice(0, 100),
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
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



function makeRequest() {
  
  // Your code goes here
  getFahrenheits()
}






  
  // let container = document.getElementById('NYCWeatherChart')
  // container.innerHTML +=
  // `<div >
  // <h2>${index}</h2>
  // <h2>${thing.temperature}</h2>
  // </div>`
  // if (index == 24){
  //   index=1
  // }else {
  //   index = index += 1
  // }
  // .find(function(element){
  //   if(element === temperature){
  //     temp.push(element)
  

document.addEventListener("DOMContentLoaded", function(){
  
});
// obj = Object.keys(temp)
// obj.forEach(key => console.log(temp[key]))


// obj.forEach(key => console.log(temp1[key]))
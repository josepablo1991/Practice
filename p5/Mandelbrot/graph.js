function chartIt(){
  var ctx = document.getElementById('myChart').getContext('2d');
  //
  var myLineChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: x,
          datasets: [{
              data: y,
              label: 'Population Growth rate '+gdr.toFixed(2),
              fill: false,
              borderColor:'rgba(255, 99, 132, 1)',
              maxTicksLimit:1
          }
        ]

      },

      options: {
        animation: {
          duration: 1
      },
      tooltips: {
          callbacks: {
              label: function (tooltipItem, data) {
                  return Number(tooltipItem.yLabel).toFixed(2);
              }
          }
      },
      scales: {
            yAxes: [{
                ticks: {
                  suggestedMin: 0,
                  suggestedMax: 1
                }
            }]
        }

  }});
}
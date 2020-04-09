function chartIt(){
  var ctx = document.getElementById('myChart').getContext('2d');
  //
  var myLineChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: x,
          datasets: [{
              data: y,
              label: gdr,
              fill: false,
              borderColor:'rgba(255, 99, 132, 1)',
          }
        ]

      },

      options: {
        animation: {
          duration: 0
      },
      tooltips: {
          callbacks: {
              label: function (tooltipItem, data) {
                  return Number(tooltipItem.yLabel).toFixed(2);
              }
          }
      }

  }});
}
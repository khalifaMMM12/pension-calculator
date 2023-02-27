    const ctx = document.getElementById('myChart').getContext('2d');
    const chartData = {
      labels: ['Property 1', 'Property 2'],
      datasets: [{
        label: 'Values',
        backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
        data: [10, 20]
      }]
    };
    const chartOptions = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    };
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: chartOptions
    });

    // Update chart data
    function updateChartData() {
      const property1Value = Number(document.getElementById('currentRSA').value);
      const property2Value = Number(document.getElementById('retirementSum').value);
      myChart.data.datasets[0].data[0] = property1Value;
      myChart.data.datasets[0].data[1] = property2Value;
      myChart.update();
    }

    // Add event listeners to input fields
    document.getElementById('currentRSA').addEventListener('input', updateChartData);
    document.getElementById('').addEventListener('input', updateChartData);

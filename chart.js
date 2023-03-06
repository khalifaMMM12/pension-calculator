const RS_Btn = document.getElementById('RS_calculateBtn');
const currentPV = document.getElementById('PV');
const retirementSum = document.getElementById('retirementSumValue');
const chartCanvas = document.getElementById('myChart');
let myChart;

RS_Btn.addEventListener('click', function(e) {
  e.preventDefault();

  const PVValue = Number(currentPV.value);
  const retirementSumValue = retirementSum.textContent ? Number(retirementSum.textContent.match(/\d+/)[0]) : 0;
  console.log('retirementSumValue:', retirementSumValue);
  const data = {
    labels: ['Current RSA balance', 'Retirement Sum'],
    datasets: [{
      label: 'Amount in Naira',
      data: [PVValue, retirementSumValue],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 1
    }]
  };
  
  
  const chartCtx = chartCanvas.getContext('2d');
  
  if (myChart) {
    myChart.destroy();
  }
  
  
  myChart = new Chart(chartCtx, {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          ticks: {
            beginAtZero: true,
            suggestedMax: 10000000
          }
        }
      }
    }
    
  });
  
});

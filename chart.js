//  CHART FOR RSA AND RETIREMENT SUM VALUE

const RS_Btn = document.getElementById('RS_calculateBtn');
const currentPV = document.getElementById('PV');
const retirementSum = document.getElementById('retirementSumValue');
const chartCanvas = document.getElementById('myChart');
let myChart;

RS_Btn.addEventListener('click', function(e) {
  e.preventDefault();

  const PVValue = Number(currentPV.value);
  const retirementSumValue = retirementSum.textContent ? 0 : Number(retirementSum.textContent);
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
//  CHART FOR RSA AND RETIREMENT SUM VALUE ENDED


//  CHART FOR RSA AND CAPITAL RECOVERY VALUE

const CR_Btn = document.getElementById('CR_calculateBtn');
const CR_currentRSA = document.getElementById('pv');
const capitalRecovery = document.getElementById('CapitalRecovery');
const CR_chartCanvas = document.getElementById('CR_Chart');
let chart;

CR_Btn.addEventListener('click', function(e) {
  e.preventDefault();

  const RSA_value = Number(CR_currentRSA.value);
  const CapitalRecoveryValue = capitalRecovery.value ? Number(capitalRecovery.value.match(/\d+/)[0]) : 0;
  // console.log('capitalRecoveryValue:', capitalRecoveryValue);

  const data = {
    labels: ['Current RSA balance', 'Capital Recovery'],
    datasets: [{
      label: 'Amount in Naira',
      data: [RSA_value, CapitalRecoveryValue],
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
  const CR_chartCtx = CR_chartCanvas.getContext('2d');
  
  if (chart) {
    chart.destroy();
  }
  
  chart = new Chart(CR_chartCtx, {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          ticks: {
            beginAtZero: true,
            suggestedMax: 10000000000000,
          }
        }
      }
    }
    
  });
  
});

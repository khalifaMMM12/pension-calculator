  // RETIREMENT SUM CALCULATOR
  const calculateButton = document.querySelector('#RS_calculateBtn');
  let myChart = null;
  
  function calculateRetirementSum(e) {
    e.preventDefault();
  const n = Number(document.querySelector('#n').value);
  const PV = Number(document.querySelector('#PV').value);
  const c = Number(document.querySelector('#c').value);
  const g = Number(document.querySelector('#g').value) / 100;
  const r = Number(document.querySelector('#r').value) / 100;
  
  const FV = c * ((Math.pow(1 + r / 12, n * 12) - 1) / (r / 12)) * (1 + g) ** n + PV * (1 + r) ** n;
  
  const retirementSumOutput = document.querySelector('#retirementSumValue');
  retirementSumOutput.textContent = 'Your Retirement Sum is = ₦' + FV.toLocaleString();
  

  //RETIREMENT SUM CHART
  const chartCanvas = document.getElementById('myChart');

  const data = {
    labels: ['Current RSA balance', 'Retirement Sum'],
    datasets: [{
      label: 'Amount in Naira',
      data: [PV, FV],
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
  
  if (myChart != null) {
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

}
//end of calculate retirement sum chart
calculateButton.addEventListener('click', calculateRetirementSum);
//END RETIREMENT SUM CALCULATOR


// CAPITAL RECOVERY CALCULATOR
const calculateBtn = document.querySelector('#CR_calculateBtn');
let CR_Chart = null


function calculateCapitalRecovery(e) {
  e.preventDefault();
  const pw = Number(document.querySelector('#pw').value);
  const l = Number(document.querySelector('#L').value);
  const n = Number(document.querySelector('#c_n').value) * 12;
  const pv = Number(document.querySelector('#pv').value);
  const r = Number(document.querySelector('#c_r').value) / 100;
  const m = Number(document.querySelector('#M_C').value);
  // const y = Number(document.querySelector('#yearly').value);
  // const q = Number(document.querySelector('#querterly').value);
  // const mon = Number(document.querySelector('#monthly').value);
  // const d = Number(document.querySelector('#daily').value);
  
  
  const C_R =(-1 * (pw * (1 - (1 + r / 12) ** (-21 * 12)) - (pv * (r / 12) * (1 + r / 12) ** (n)) + (l * r / 12)) / ((1 + r / 12) ** n - 1)); 

  const F_G = (m + (C_R * -1));
  
  const CROutPut = document.querySelector('#CapitalRecovery');
  CROutPut.textContent = 'Your Capital Recovery is = ₦' + C_R.toLocaleString();
  
  const chartCanvas = document.getElementById('CR_Chart');

  const data = {
    labels: ['Current Monthly Contribution', 'Funding Gap', 'New Monthly Contribution'],
    datasets: [{
      label: 'Amount in Naira',
      data: [m, C_R, F_G],
      backgroundColor: [
        'rgba(147, 236, 147, 0.8)',
        'rgba(255, 99, 132, 0.5)',
        'rgb(44, 78, 137, 1)'
      ],
      borderColor: [
        'rgba(147, 236, 147, 1)',
        'rgba(255, 99, 132, 1)',
        'rgb(44, 78, 137, 1)'

      ],
      borderWidth: 1
    }]
  };
  
  const chartCtx = chartCanvas.getContext('2d');
  
  if (CR_Chart != null) {
    CR_Chart.destroy();
  }
  
  CR_Chart = new Chart(chartCtx, {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          ticks: {
            beginAtZero: true,
          }
        }
      }
    }
    
  }); 
}

calculateBtn.addEventListener('click', calculateCapitalRecovery);
  // RETIREMENT SUM CALCULATOR
  const calculateButton = document.querySelector('#RS_calculateBtn');
  let myChart = null;
  
  function calculateRetirementSum(e) {
    e.preventDefault();
  const n = Number(document.querySelector('#workYears').value);
  const PV = Number(document.querySelector('#RSA_balance').value);
  const c = Number(document.querySelector('#M_C').value);
  const g = Number(document.querySelector('#A_C').value) / 100;
  const r = Number(document.querySelector('#rate').value) / 100;
  
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
  const l = Number(document.querySelector('#Lump').value);
  const n = Number(document.querySelector('#c_n').value) * 12;
  const Qn = Number(document.querySelector('#c_n').value) * 4;
  const Yn = Number(document.querySelector('#c_n').value) * 1;
  const pv = Number(document.querySelector('#RSA_balanceCR').value);
  const r = Number(document.querySelector('#RoR').value) / 100;
  const m = Number(document.querySelector('#MC_CR').value);
  
  // const CR =(-1 * (pw * (1 - (1 + r / n) ** (-21 * n)) - (pv * (r / n) * (1 + r / n) ** (n)) + (l * r / n)) / ((1 + r / n) ** n - 1)); 

    // your monthly Capital recovery
  const C_R =((pw * (1 - (1 + r / 12) ** (-21 * 12)) - (pv * (r / 12) * (1 + r / 12) ** (n)) + (l * r / 12)) / ((1 + r / 12) ** n- 1)); 
    
      const monthlyCRoutput = document.querySelector('#MonthlyCR');
      monthlyCRoutput.textContent = `Your current Monthly contribution is ${m.toLocaleString()} and you need to increase it by = ₦ ${C_R.toLocaleString()}`;

      // your quarterly capital recovery
  const Quarterly_CR =((pw * (1 - (1 + r / 12) ** (-21 * 12)) - (pv * (r / 12) * (1 + r / 12) ** (Qn)) + (l * r / 12)) / ((1 + r / 12) ** Qn- 1)); 

  const QuarterlyCRoutput = document.querySelector('#quarterlyCR');
  QuarterlyCRoutput.textContent = `You can close the funding gap by signing on to querterly contribution of  = ₦  ${Quarterly_CR.toLocaleString()} paid quarterly`;

    // your yearly capital recovery
  const yearly_CR = ((pw * (1 - (1 + r / 12) ** (-21 * 12)) - (pv * (r / 12) * (1 + r / 12) ** (n*1)) + (l * r / 12)) / ((1 + r / 12) ** Yn- 1)); 

    const yearlyCRoutput = document.querySelector('#yearlyCR');
    yearlyCRoutput.textContent = `You can also sign-on to the annual contribution = ₦ ${yearly_CR.toLocaleString()} paid every year`;

  // const F_G = (m + (C_R * -1));
  
  // const dropdown = document.querySelector("#dropdown");
  // dropdown.style.display = "block";
  
  // const CapitalRecovery = document.querySelector("#CapitalRecovery");
  // CapitalRecovery.textContent = 'Your Capital Recovery is = ₦' + CR.toLocaleString();
  
  // DROP DOWN OPTIONS
  
  // monthly CAPITAL RECOVERY
//   const monthlyCR = document.querySelector('#MonthlyCR_BTN');
//   function calculatemonthlyCR(e){
//     e.preventDefault();

//     const C_R =((pw * (1 - (1 + r / 12) ** (-21 * 12)) - (pv * (r / 12) * (1 + r / 12) ** (n)) + (l * r / 12)) / ((1 + r / 12) ** n- 1)); 
    
//     const monthlyCRoutput = document.querySelector('#MonthlyCR');
//     monthlyCRoutput.textContent = `Your Monthly Capital Recovery was ${m.toLocaleString()} and Now = ₦ ${C_R.toLocaleString()}`;
// }
// monthlyCR.addEventListener('click', calculatemonthlyCR);

// // monthly CAPITAL RECOVERY ENDS

// // QUERTERLY CAPITAL RECOVERY
// const QuarterlyCR = document.querySelector('#quarterlyCR_BTN');
// function  calculatequarterlyCR(e){
//   e.preventDefault();

//   const Quarterly_CR =((pw * (1 - (1 + r / 12) ** (-21 * 12)) - (pv * (r / 12) * (1 + r / 12) ** (Qn)) + (l * r / 12)) / ((1 + r / 12) ** Qn- 1)); 

//   const QuarterlyCRoutput = document.querySelector('#quarterlyCR');
//   QuarterlyCRoutput.textContent = 'Your Quarterly Capital Recovery is = ₦' + Quarterly_CR.toLocaleString();
// }
// QuarterlyCR.addEventListener('click', calculatequarterlyCR);
// // QUERTERLY CAPITAL RECOVERY ENDS

// // YEARLY CAPITAL RECOVERY
// const yearlyCR = document.querySelector('#yearlyCR_BTN');
// function calculateyearlyCR(e){
//   e.preventDefault();

//   const yearly_CR = ((pw * (1 - (1 + r / 12) ** (-21 * 12)) - (pv * (r / 12) * (1 + r / 12) ** (n*1)) + (l * r / 12)) / ((1 + r / 12) ** Yn- 1)); 

//   const yearlyCRoutput = document.querySelector('#yearlyCR');
//   yearlyCRoutput.textContent = 'Your Yearly Capital Recovery is = ₦' + yearly_CR.toLocaleString();
// }
// yearlyCR.addEventListener('click', calculateyearlyCR);
// YEARLY CAPITAL RECOVERY ENDS

// DROP DOWN OPTIONS END

  // const FGoutput = document.querySelector("#FundingGap");
  // FGoutput.textContent = 'Your Funding Gap is =  ₦' + F_G.toLocaleString();
  
  const chartCanvas = document.getElementById('CR_Chart');

  const data = {
    labels: ['Current Monthly Contribution', 'New Monthly Contribution'],
    datasets: [{
      label: 'Amount in Naira',
      data: [m, CR],
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

// DROP DOWN OPTIONS
// const monthlyCR = document.querySelector('#MonthlyCR');
// function calculatemonthlyCR(e){
//   e.preventDefault();

//   const CROutPut = document.querySelector('#MonthlyCR');
//   CROutPut.textContent = 'Your Monthly Capital Recovery is = ₦' + C_R.toLocaleString();

// }

// monthlyCR.addEventListener('click', calculatemonthlyCR)
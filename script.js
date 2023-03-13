  // RETIREMENT SUM CALCULATOR
  const calculateButton = document.querySelector('#RS_calculateBtn');
  
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
}

calculateButton.addEventListener('click', calculateRetirementSum);


// CAPITAL RECOVERY CALCULATOR
const calculateBtn = document.querySelector('#CR_calculateBtn');

function calculateCapitalRecovery(e) {
  e.preventDefault();
  const pw = Number(document.querySelector('#pw').value);
  const l = Number(document.querySelector('#L').value);
  const n = Number(document.querySelector('#c_n').value) * 12;
  const pv = Number(document.querySelector('#pv').value);
  const r = Number(document.querySelector('#c_r').value) / 100;
  
  const C = pw * (Math.pow((1 + (r / 12)), (21 * 12)) - 1) - (pv * (r / 12) * ((1 + (r / 12)) ** n))
  + ((l * (r / 12)) / (((1 + (r / 12)) ** n) - 1));
  
  
  
  const CROutPut = document.querySelector('#CapitalRecovery');
  CROutPut.textContent = 'Your Capital Recovery is = ₦' + C.toLocaleString();
}

calculateBtn.addEventListener('click', calculateCapitalRecovery);


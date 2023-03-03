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

  const retirementSumOutput = document.querySelector('#retirementSum');
  retirementSumOutput.textContent = 'Your Retirement Sum is = ₦' + FV.toLocaleString;
}

calculateButton.addEventListener('click', calculateRetirementSum);


// CAPITAL RECOVERY CALCULATOR
const calculateBtn = document.querySelector('#CR_calculateBtn');

function calculateCapitalRecovery(e) {
  e.preventDefault();
  const pw = Number(document.querySelector('#pw').value);
  const l = Number(document.querySelector('#L').value);
  const n12 = Number(document.querySelector('#n12').value);
  //const n = Number(document.querySelector('#no').value);
  const pv = Number(document.querySelector('#pv').value);
  const r = Number(document.querySelector('#ro').value) / 100;

  let C = (pw * ((1 + r/12)**(n*12) - 1) / (r/12)) - (pv * (1 + r/12)**(n12)) + (l * ((1 + r/12)**(n*12) - 1)) / (r/12 * (1 + r/12)**(n*12))

  const CROutPut = document.querySelector('#CapitalRecovery');
  CROutPut.textContent = 'Your Capital Recovery is = ₦' + C.toLocaleString();
 ;
}

calculateBtn.addEventListener('click', calculateCapitalRecovery);

//Just figure out the formula and make it right the code problem is Id's you can't use the same id for two boxes
//I've changed the r id. It'll always take the first Id value which is 0 and compute. That's the reason for the NaN.
//Is like I scatter the codes when pushing them. just incase the problem is Id sai ka duba html codes if I also scatter it



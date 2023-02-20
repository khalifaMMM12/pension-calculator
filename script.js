const calculateButton = document.querySelector('#calculateBtn');

function calculateRetirementSum(e) {
  e.preventDefault();
  //The currentAge and retirementAge is optional. Unless you want to automate the n.
  //const currentAge = Number(document.querySelector('#currentAge').value);
  //const retirementAge = Number(document.querySelector('#retirementAge').value);
  /*const n = Number(retirementAge - currentAge);
  You can use the above code of const n to get value of n without inputing anything on the n textfield.
  */
  const n = Number(document.querySelector('#n').value);
  const PV = Number(document.querySelector('#PV').value);
  const c = Number(document.querySelector('#c').value);
  const g = Number(document.querySelector('#g').value) / 100;
  const r = Number(document.querySelector('#r').value) / 100;

  const FV = c * ((Math.pow(1 + r / 12, n * 12) - 1) / (r / 12)) * (1 + g) ** n + PV * (1 + r) ** n;

  const retirementSumOutput = document.querySelector('#retirementSum');
  retirementSumOutput.textContent = 'Your Retirement Sum is = ₦' + FV.toLocaleString();
}

calculateButton.addEventListener('click', calculateRetirementSum);

//basically the current age and retirement age are not in the formula it's just there for the sake of karin bayyani.
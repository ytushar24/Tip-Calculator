
const billInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeople = document.getElementById('numberOfPeople')
const perPersonTotal = document.getElementById('perPersonTotal');

let numofpeople = Number(numberOfPeople.innerText);

const calculateBill = () => {

  const billInput1 = Number(billInput.value)
  const tipInput1 = Number(tipInput.value) / 100

  const tta = billInput1 * tipInput1;
  const totally = tta + billInput1;
  const ppt = totally / numofpeople;
  perPersonTotal.innerText = `$${ppt.toFixed(2)}`

}

const increasePeople = () => {

  numofpeople += 1;
  
  
  numberOfPeople.innerText = numofpeople;

  
  calculateBill();
}

const decreasePeople = () => {

  if(numofpeople <=1){
    return;
  }

  numofpeople -=1;
  numberOfPeople.innerText = numofpeople;
  calculateBill();
}
document.getElementById("calculateBtn").addEventListener("click", calculate);

function money(value){
  return value.toLocaleString(undefined,{style:"currency",currency:"USD",maximumFractionDigits:0});
}
function ageFactor(age){
  if(age < 21) return 1.85;
  if(age < 25) return 1.45;
  if(age < 30) return 1.18;
  if(age < 65) return 1.00;
  if(age < 75) return 1.08;
  return 1.18;
}
function vehicleFactor(value){
  if(value < 15000) return 0.88;
  if(value < 30000) return 1.00;
  if(value < 50000) return 1.12;
  if(value < 75000) return 1.28;
  return 1.45;
}
function calculate(){
  const state=parseFloat(document.getElementById("state").value);
  const age=parseFloat(document.getElementById("age").value);
  const vehicle=parseFloat(document.getElementById("vehicleValue").value);
  const coverage=parseFloat(document.getElementById("coverage").value);
  const record=parseFloat(document.getElementById("record").value);
  const miles=parseFloat(document.getElementById("miles").value);
  const message=document.getElementById("message");
  const results=document.getElementById("results");

  if(!Number.isFinite(age)||age<16||age>100||!Number.isFinite(vehicle)||vehicle<1000){
    message.textContent="Please enter a valid driver age and vehicle value.";
    results.hidden=true;
    return;
  }

  const baseAnnual=2100;
  const annual=baseAnnual*state*ageFactor(age)*vehicleFactor(vehicle)*coverage*record*miles;
  const monthly=annual/12;
  document.getElementById("monthly").textContent=money(monthly);
  document.getElementById("annual").textContent=money(annual);
  message.textContent="";
  results.hidden=false;
}

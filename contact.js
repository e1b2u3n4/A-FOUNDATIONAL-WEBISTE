button=document.querySelector('button');
button.addEventListener('click',()=> {
  alert ("Our phone numbers are: 09093517046, 08054760795☆");
  button.disabled=true;
  button.innerText="Dialing...";
});
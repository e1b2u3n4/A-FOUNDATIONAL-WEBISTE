item1= document.querySelector(".lg");
item2= document.querySelector(".bb");
item3= document.querySelector(".bc");
item4= document.querySelector(".pl");
item5= document.querySelector(".oc");

item1.addEventListener('click', () => {
document.querySelector(".selected").classList.add("hidden")
document.querySelector(".selected").classList.remove("selected")
document.querySelector(".logos").classList.add("selected")
document.querySelector(".selected").classList.remove("hidden")
})

item2.addEventListener('click', () => {
document.querySelector(".selected").classList.add("hidden")
document.querySelector(".selected").classList.remove("selected")
document.querySelector(".banner").classList.add("selected")
document.querySelector(".selected").classList.remove("hidden")
})

item3.addEventListener('click', () => {
document.querySelector(".selected").classList.add("hidden")
document.querySelector(".selected").classList.remove("selected")
document.querySelector(".bussiness").classList.add("selected")
document.querySelector(".selected").classList.remove("hidden")
})


item4.addEventListener('click', () => {
document.querySelector(".selected").classList.add("hidden")
document.querySelector(".selected").classList.remove("selected")
document.querySelector(".packagings").classList.add("selected")
document.querySelector(".selected").classList.remove("hidden")
})

item5.addEventListener('click', () => {
document.querySelector(".selected").classList.add("hidden")
document.querySelector(".selected").classList.remove("selected")
document.querySelector(".other").classList.add("selected")
document.querySelector(".selected").classList.remove("hidden")
})
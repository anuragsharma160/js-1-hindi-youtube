const BASE_URL = "https://api.frankfurter.dev/v2/providers/ecb/rate/usd/inr"


const dropdowns = document.querySelectorAll(".dropdown select")
const btn = document.querySelector("form button")



for (const select of dropdowns) {
    for (const currCode in countryList) {
        let newOption = document.createElement("option")
        newOption.innerText = currCode
        newOption.value = currCode
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected"
        } else if(select.name === "to" && currCode === "INR"){
            newOption.selected = "selected"
        } 
        select.append(newOption)
    }
    
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target)
    })
}

const updateFlag = (element) => {
    let currCode = element.value
    let countryCode = countryList[currCode]
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img")
    img.src = newSrc
}
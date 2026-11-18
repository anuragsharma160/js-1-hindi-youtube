// const URL = "https://dogapi.dog/api/v2/breeds"
const URL = "https://jsonplaceholder.typicode.com/users/shradha";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
    console.log("getting data .....");
    let response = await fetch(URL)
    console.log(response); // JSON format
    let data = await response.json()
    factPara.innerText = data[2].name
}

btn.addEventListener("click", getFacts);

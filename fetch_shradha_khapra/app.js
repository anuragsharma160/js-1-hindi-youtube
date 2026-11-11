// const URL = "https://dogapi.dog/api/v2/breeds"
const URL = "https://jsonplaceholder.typicode.com/users"

const getFacts = async () => {
    console.log("getting data .....");
    let response = await fetch(URL)
    console.log(response);
}

// 29:00

// function getData(dataId, getNextData){
//     setTimeout(function(){
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData()
//         }
//     }, 2000)
// }

// getData(1, () => {
//     getData(2)
// })

// ==============================================

// function getData(dataId, getNextData){
//     setTimeout(function(){
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData()
//         }
//     }, 2000)
// }

// getData(1, () => {
//     getData(2, () => {
//         getData(3)
//     })
// })

// ================================================

// function getData(dataId, getNextData){
//     setTimeout(function(){
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData()
//         }
//     }, 2000)
// }

// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4)
//         })
//     })
// })

// getNextData funtion ke do (2) kaam hai as follows

// ek getData function ko call lagana with
// dataId as argument and definition of getNextDatafunction

// dusra only khud gextNextData ki jaise act karna

// kyuki function getData ka 2nd parameter getNextData function
// hai to hum uss getNextData function ko call hi nahi karwana
// chahte further after getData(4)

// =============================================================

// Callback Hell

// function getData(dataId, getNextData){
//     setTimeout(function(){
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData()
//         }
//     }, 2000)
// }

// getData(1, () => {
//     console.log("getting data 2");
//     getData(2, () => {
//         console.log("getting data 3");
//         getData(3, () => {
//             console.log("getting data 4");
//             getData(4)
//         })
//     })
// })

// ====================================================================

// Promises

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
// })

// ====================================================================

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve(123)
// })

// =========================================================================

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve("success")
// })

// ==============================================================================

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     reject("some error")
// })

// ================================================================

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     reject("some error occurred")
// })

// =================================================================

// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//             if(getNextData){
//                 getNextData()
//             }
//         }, 5000)
//     })
// }

// ==================================================================

// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("error")
//         }, 5000)
//     })
// }

// =====================================================================

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         resolve("success")
//     })
// }

// let promise = getPromise()

// promise.then(() => {
//     console.log("promise fullfilled");
// })

// ======================================================================

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         reject("error")
//     })
// }

// let promise = getPromise()

// promise.then(() => {
//     console.log("promise fullfilled");
// })

// promise.catch(() => {
//     console.log("rejected");
// })

// ==========================================================================

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         reject("error")
//     })
// }

// let promise = getPromise()

// promise.then((res) => {
//     console.log("promise fullfilled", res);
// })

// promise.catch((err) => {
//     console.log("rejected", err);
// })

// =====================================================================

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         resolve("success")
//     })
// }

// let promise = getPromise()

// promise.then((res) => {
//     console.log("promise fullfilled", res);
// })

// promise.catch((err) => {
//     console.log("rejected", err);
// })

// ==========================================================================

// function asyncFunc() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success")
//         }, 4000)
//     })
// }

// console.log("fetching data1....");

// let p1 = asyncFunc()
// p1.then((res) => {
//     console.log(res);
// })

// ====================================================================================

// iss case mei ek saath data1 and data2 ayega humare pas

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success")
//         }, 4000)
//     })
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success")
//         }, 4000)
//     })
// }

// console.log("fetching data1....");

// let p1 = asyncFunc1()
// p1.then((res) => {
//     console.log(res);
// })

// console.log("fetching data2....");

// let p2 = asyncFunc2()
// p2.then((res) => {
//     console.log(res);
// })

// ============================================================================

// instagram example pehle username database se match
// uske baad hi password search

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success")
//         }, 4000)
//     })
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success")
//         }, 4000)
//     })
// }

// console.log("fetching data1....");

// let p1 = asyncFunc1()

// p1.then((res) => {
//     console.log("fetching data2....");
//     let p2 = asyncFunc2()
//     p2.then((res) => {})
// })


// =================================================================

// promise chaining example asyncFunc1 and asyncFunc2

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success")
//         }, 4000)
//     })
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success")
//         }, 4000)
//     })
// }

// console.log("fetching data1....");

// asyncFunc1().then((res) => {
//     console.log("fetching data2....");
//     asyncFunc2().then((res) => {})
// })

// ================================================================================

// getData() with promise chaining 

// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//             if(getNextData){
//                 getNextData()
//             }
//         }, 5000)
//     })
// }

// let p1 = getData(1)
// p1.then((res) => {
//     console.log(res);
// })

// ================================================================================

// Since hum promise chaining use kar rahe hai isliye
// hume getNextData ki need nahi hai and p1 ki bhi need nahi hai

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 5000)
//     })
// }

// getData(1).then((res) => {
//     console.log(res);
// })

// =====================================================================================

// getData(2)

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 3000)
//     })
// }

// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then(() => {
//         console.log(res);
//     })
// })

// =======================================================================================

// better tarika, (actual promise chaining)
// return kar diya to bahar available ho gaya (getData(2))

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 3000)
//     })
// }

// getData(1)
// .then((res) => {
//     return getData(2)
// })
// .then((res) => {
//     console.log(res);
// })

// ======================================================================================

// getData(3)

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 3000)
//     })
// }

// getData(1)
// .then((res) => {
//     return getData(2)
// })
// .then((res) => {
//     return getData(3)
// })

// ==================================================================================

// further .then() as return karwaya hai getData(3) ko
// 2s

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 2000)
//     })
// }

// getData(1)
// .then((res) => {
//     return getData(2)
// })
// .then((res) => {
//     return getData(3)
// })
// .then((res) => {
//     console.log(res);
// })

// =======================================================================================

// console.log() statements add

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 2000)
//     })
// }

// console.log("getting data1 ....");

// getData(1)
// .then((res) => {
//     console.log("getting data2 ....");
//     return getData(2)
// })
// .then((res) => {
//     console.log("getting data3 ....");
//     return getData(3)
// })
// .then((res) => {
//     console.log(res);
// })

// ==============================================================================================

// Async Await

// async function hello(){
//     console.log("hello");
// }

// ==========================================================

// Async Await
// not right way to use await

// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200)
//         }, 2000)
//     })
// }

// await api()

// ===========================================================

// Async Await

// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200)
//         }, 2000)
//     })
// }

// async function getWeatherData() {
//     await api()
// }

// =================================================================

// Async Await

// Let's suppose hume api() ko do bar call lagana hai

// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200)
//         }, 2000)
//     })
// }

// async function getWeatherData() {
//     await api()
//     await api()
// }

// ==================================================================

// Async Await se getData()

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 2000);
//     })
// }

// async function getAllData() {
//     await getData(1)
//     await getData(2)
//     await getData(3)
// }

// ===================================================================

// Async Await se getData() -- 6 times

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 2000);
//     })
// }

// async function getAllData() {
//     await getData(1)
//     await getData(2)
//     await getData(3)
//     await getData(4)
//     await getData(5)
//     await getData(6)
// }

// =======================================================================

// Async Await se getData() -- 6 times
// har await getData(Id) ke liye wait kiya jayega, hum aage nahi badhenge (console.log("getting data1...."))
// 5 tak hi rakh lete hai

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 2000);
//     })
// }

// async function getAllData() {
//     console.log("getting data1....")
//     await getData(1)
//     console.log("getting data2....")
//     await getData(2)
//     console.log("getting data3....")
//     await getData(3)
//     console.log("getting data4....")
//     await getData(4)
//     console.log("getting data5....")
//     await getData(5)
// }

// ================================================================================

// IIFE
// Async Await se getData() -- 6 times 

function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success")
        }, 2000);
    })
}

(async function () {
    console.log("getting data1....")
    await getData(1)
    console.log("getting data2....")
    await getData(2)
    console.log("getting data3....")
    await getData(3)
    console.log("getting data4....")
    await getData(4)
    console.log("getting data5....")
    await getData(5)
})();

// ===========================================================================


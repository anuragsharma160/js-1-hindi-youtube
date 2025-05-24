// theek hai ji ab seven.js k andar kya karte hai hum
// aur dusre values k upar chalte hai, yeh basic values
// to aapke pas aa gayi hau aur aapko samajh mei aa gayi
// ki theek hai yeh to ab aap kahoge ki jab bhi use
// kar sakte hai

// ===========================================================

// Ab ek aur method pe chalte hai hum yahan pe uske liye bhi hum
// numbers hi declare karnege

// myNumbers hi le lete hai bada aasaan rehta hai

// const myNumbers = []

// 1, 2, 3,-----------,10 tak le lete hai

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Ab jis tareh se humne filter padha tha uss tareh se aapke pas aur bhi
// values hoti hai aur bhi cheejon ko use kar sakte hai

// jaise suppose kariye abhi hume kya karna hai ki yeh jitne numbers hai
// sabke andar mujhe 10 add kar dena hai , kyu karna hai pata nahi
// but 10 add karna hai

// to theek hai to kaise add karenge bahut hi aasaan hai
// yeh myNumbers lete hai

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// myNumbers

// aur bolte hai abki bar hum dusra method use karna chahte hai
// jisko bolte hai map, filter to samajh mei aa gaya hai (18:39)
// ab map ko bhi use kar lete hai

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// myNumbers.map()

// map dekhiye wapas se callback function hai yeh bada hi easy aur
// bahut hi achha function hai, forEach se better lagta hai sir ko yeh

// to wapas se wo hi yeh lijiye aapka callback (i.e. arrow function likh
// liya myNumbers.map() k andar) callback ki kahani to aapko samajh mei
// aa hi gayi hai ki scope open kariye mat kariye wo sab samajh mei aa
// gaya hai abhi aapko

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// myNumbers.map( () => {} )

// 19:01

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// to wapas se wo hi yeh lijiye aapka callback (i.e. arrow function "ki jaisa" likh
// liya myNumbers.map() k andar)

// callback ki kahani to aapko samajh mei
// aa hi gayi hai ki scope open kariye mat kariye wo sab samajh mei aa
// gaya hai abhi aapko

// myNumbers.map( () => )

// ek ek number (array k ek ek item ko) num bol dete hai

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// myNumbers.map( (num) => )

// 19:00

// aur sabke andar add karna hai to aap kya kariye yeh num liya
// ( (num) => num ) as follows

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// myNumbers.map( (num) => num)

// aur add kar diya isme 10 ( kyu kara pata nahi i.e. just for eg 
// but add kar diya sabke andar ( array k har ek items k andar ) )

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// myNumbers.map( (num) => num + 10)

// ab iski ( map method ki ) sabse achhi baat yeh hai ki yeh automatically return karta
// hai value

// to isko bol sakte hai ki humne kya liya const newNums = as follows

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => num + 10)

// aur yeh lijiye print karwa lete hai newNums ko
// i.e. console.log(newNums)

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => num + 10)

// console.log(newNums);

// o/p [
//   11, 12, 13, 14, 15,
//   16, 17, 18, 19, 20
// ]

// to bahut hi aasaan si cheej hai iske andar bhi as such koi
// baat hai nahi

// to sabke andar 10 add ho gaya ( see o/p )

// but yahan pe bhi sari wo hi kahani apply hoti hai
// jo basic humari filter k andar apply ho rahi thi
// khud hi return kar deta hai

// agar obvious si baat hai yahan pe -- num + 10 aapne
// scope open kar diya abhi ( i.e. {num + 10} ) as follows
// (i.e. arrow function ka scope open kar diya -- just for understanding)

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => {num + 10})

// console.log(newNums);

// to ab kya hoga

// save and run

// o/p [
//   undefined, undefined,
//   undefined, undefined,
//   undefined, undefined,
//   undefined, undefined,
//   undefined, undefined
// ]

// to obvious si baat hai ab aapko undefined , undefined, ...
// (see o/p) milta hai yahan pe , empty array nahi mil raha hai (see o/p)

// to iss tareh ki values hai to yaad rakhiyega jab scope open
// kar rahe hai (19:59) (i.e. {num + 10} , ka culy braces scope hai)
// to obvious si baat hai return karna hai ( { return num + 10} ) as follows

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => { return num + 10})

// console.log(newNums);

// save and run

// o/p [
//   11, 12, 13, 14, 15,
//   16, 17, 18, 19, 20
// ]

// =====================================================================

// Ab yeh hi kaam agar aapko wapas se karna hai forEach ki tareh to
// aap karke dekhiyega ki bada hi basic sa tha , yahan pe (six.js file
// k andar as follows) bhi humne forEach ko hi use kara tha , dhyaan hai
// aapko, yeh filter ko bhi karne k liye forEach as follows (six.js k andar)

// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item); commented out
//     return item
    
// } )

// console.log(values);

// to yeh kaam (jo kaam humne above line break se pehle kiya hai seven.js file k andar)
// bhi aap forEach se hi kar sakte hai , to as such koi difficult baat hai nahi

// Ab sir ko lagta hai ki karke dikhane ki jarurat nahi hai aap
// basically isko kar sakte hai

// theek hai to yeh ho gaya humara basic ki kis tareh se aati hai

// ===============================================================================================

// Ab ek interesting jo cheej aati hai na iske andar wo aati hai
// haa wo jo example hai books wala wo sab bhi aap le sakte hai

// filter mei dekhiye automatically filter kar deta hai lekin map
// k andar aisa kuch nahi hai wo sab pe iterate karega hi karega
// (20:43) aap uske hisab se conditional check, return (return keyword)
// wo sab laga sakte hai

// aa... but aisa nahi hai ki jiske pas condition true hogi wo hi return karega

// yahan pe wo nahi hai filter k andar hota hai

// obvious si baat hai naam bhi wahan pe support karta hai

// aa... kaafi kuch aur bhi hum yahan pe changes kar sakte hai

// abhi kya karte hai sabse pehle to hum aapko ek
// chaining ka method yahan pe batate hai kyuki chaining bahut hi
// easy hai aur kaafi kuch interesting bhi rehti hai

// theek hai to isko (above eg mei, const newNums = myNumbers.map wali line ko) hum
// comment out kar dete hai as follows

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => { return num + 10}) commented out

// console.log(newNums);

// Ab chalte hai yahan pe kuch interesting kaam karne jisko chaining
// bola jaata hai

// to yeh liya humne wapas se newNums ( const newNums ) as follows

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => { return num + 10}) commented out

// const newNums

// console.log(newNums);

// theek hai ji , ab iske andar kya kara aapne, myNumbers liye, theek hai ji
// aur bola ki ispe map laga do , theek hai ji map laga dete hai -- myNumbers.map()

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => { return num + 10}) commented out

// const newNums = myNumbers.map()

// console.log(newNums);

// Ab aapne map to laga diya, lekin kya aisa bhi ho sakta hai ki hum yeh do ( 2 ) bar
// map laga de (21:31) ( i.e. myNumbers.map().map() )

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => { return num + 10}) commented out

// const newNums = myNumbers.map().map()

// console.log(newNums);

// haa ji bilkul ho sakta hai

// kya aisa ho sakta hai ki map lagane k baad filter laga de (21:37)
// haa ji bilkul ho sakta hai, isko bolte hai chaining ki do teen (2-3)
// method aap directly use kar sakte ho aur hote bhi hai

// ek ek karke use karte hai taaki aapko samajh mei bhi aata jaye aur iska
// value kya hai wo bhi aapko samajh mei aye

// to dekhiye sabse pehle map liya theek hai ji,

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => { return num + 10}) commented out

// const newNums = myNumbers.map()

// console.log(newNums);

// yeh humne iss tareh se lagaya ( callback --  () => )

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => { return num + 10}) commented out

// const newNums = myNumbers.map(() =>)

// console.log(newNums);

// aur bola kya hai ki yeh jitne bhi numbers hai ( (num) => , mei (num) )
// (as follows) to isko num bol do (array k items ko num bol diya ( (num) => , mei (num) ) )

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => { return num + 10}) commented out

// const newNums = myNumbers.map((num) => )

// console.log(newNums);

// 21:54

// aur iss number k andar kya karo ( (num) => , mei (num) ) ki yeh jitna bhi num
// hai ( (num) => num , mei num ) as follows

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => { return num + 10}) commented out

// const newNums = myNumbers.map((num) => num)

// console.log(newNums);

// aur iss number k andar kya karo ( (num) => num , mei num ) ki yeh jitna bhi num
// hai usko pehle to aap multiply kar do sab ko 10 se as follows

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => { return num + 10}) commented out

// const newNums = myNumbers.map((num) => num * 10)

// console.log(newNums);

// theek hai ji multiply kar diya 10 se

// ab kyuki yahan pe ( myNumbers.map((num) => num * 10) , mei myNumbers.map pe )
// agar hum isko return kar dete jo ki ho raha hai automatically
// to newNums (const newNums =) k andar hume pata hai sare numbers
// 10 se multiply ho jate 10 , 20 , 30 , ...

// (i.e. const myNumers array k items 10 se multiply hoke
// 10*1, 10*2, ..... , 10, 20 , 30, .... ho jate)

// 22:10

// theek hai ji

// but hum itna hi nahi chahte uske andar hum ek ek number aur add karna
// chahte hai, to aap kya kar sakte ho vaise to yahin pe
// ( myNumbers.map((num) => num * 10) ) kar sakte the

// but samajhne k liye ek aur map laga sakte ho yahan pe
// (i.e. myNumbers.map((num) => num * 10) -- yahan pe)
// iss tareh se as follows

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => { return num + 10}) commented out

// const newNums = myNumbers.map((num) => num * 10 ).map()

// console.log(newNums);

// 22:23

// ab iss map() k andar (2nd wale map() k andar) bhi wo hi kahani hai
// theek hai

// ab kyuki yeh samajh mei aya hai to hum kya karte hai isko (1st map() ko)
// nayi line mei enter kar dete hai aur 2nd wale map() ko bhi nayi line
// mei enter kar dete hai as follows

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => { return num + 10}) commented out

// const newNums = myNumbers
// .map((num) => num * 10 )
// .map()

// console.log(newNums);

// aur kyuki thoda sa aur samajh mei aye to isko ( 1st map() and 2nd map() ko )
// ko indent kar lete hai thoda sa as follows

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => { return num + 10}) commented out

// const newNums = myNumbers
//                 .map((num) => num * 10 )
//                 .map()

// console.log(newNums);

// theek hai iss tareh ki values aap kaafi dekhoge (just above tareh ki values)

// to dekhiye myNumbers likhte hi enter mara (see above) aur yeh map() likha (1st map())

// but problem kya hai jo samajhne wali baat hai ki humne theek hai
// yahan pe ( 2nd wale map() mei ) bhi ek iss tareh ka ( () => ) bana k
// likh diya yeh lijiye koi dikkat wali baat hi nahi thi as follows

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => { return num + 10}) commented out

// const newNums = myNumbers
//                 .map((num) => num * 10 )
//                 .map( () => )

// console.log(newNums);

// but iss map k andar (2nd wale map() k andar) jo each num ayega
// uski value hai kya

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => { return num + 10}) commented out

// const newNums = myNumbers
//                 .map((num) => num * 10 )
//                 .map( (num) => )

// console.log(newNums);

// samajhne wali baat hai, uski value ( 2nd wale map() mei -- .map( (num) => ) , mei (num) ki value)
// dekhiye kabhi bhi 1 nahi hogi (jo 1 const myNumbers = [1, 2, 3, ... , 10] ka first element hai)

// uski value ( 2nd wale map() mei -- .map( (num) => ) , mei (num) ki value)
// hogi uske upar jo bhi method laga hua hai uss method se jo bhi ek
// value pass hoke ayi hai wo

// (means 2nd map() k upar 1st map() as method laga hua hai)

// 23:04

// kyuki yeh ( 1st map() -- .map((num) => num * 10 ) ) jaise hi pass ho gaya hai
// to ab aapke pass ek array ikkahttha ho chuka hai
// humne uss array ko ( ikkahttha hue array ko ) obvious si baat hai yahan pe
// ( const newNums =  , pe) abhi nahi daal diya hai

// jab bhi chaining hoti hai ( i.e. 1st map() , fir 2nd map() ) to iska
// ( 1st map() ka ) jo bhi result hai wo 2nd chain mei (2nd map() mei ya 2nd maethod mei)
// pass ho jata hai

// to yahan pe ( 1st map() -- .map((num) => num * 10 ) ) jo bhi kuch banega
// wo sab 2nd mei ( 2nd map() mei ) pass ho jayega , to wo (jo 1st map mei bana hai)
// array hi hai

// 23:20

// ab uss array k andar yahan pe ( 2nd map() mei -- .map( (num) => ) , mei (num) mei )
// num ki jo first value hogi kyuki aapne multiply already kar diya hai
// 10 se ( 1st map mei 10 se multiply kar diya hai )

// to yahan pe ( 2nd map() mei -- .map( (num) => ) , mei (num) mei ) jo 10
// hoga wo 10 hi pass hoga yahan pe ( 2nd map() mei -- .map( (num) => ) , mei (num) mei )

// (as 1st map k through const myNumbers array k har ek item ko 10 se multiply kar diya hai
// to first value means 10*1 = 10 as const myNumbers array ka 1st item 1 hai)

// tab ab kya karna hai , aap bol dijiye uss 10 k andar jo bhi number hai
// (2nd map() mei (num) => num , mei 2nd wala num) as follows

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => { return num + 10}) commented out

// const newNums = myNumbers
//                 .map((num) => num * 10 )
//                 .map( (num) => num)

// console.log(newNums);

// 23:29

// uske andar plus one kar diya humne ( num + 1 )
// just for fun

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => { return num + 10}) commented out

// const newNums = myNumbers
//                 .map((num) => num * 10 )
//                 .map( (num) => num + 1)

// console.log(newNums);

// to ab jo new number honge (const newNums) wo kya honge
// pehle iteration (1st map() mei) mei kya hoga
// pehla map() jab laga to uske andar 10 , 10 , 10 se multiply
// ho gaya (const myNumbers = [1, 2, 3,..., 10] k har ek item 10 se multiply ho gaye)

// to theek hai ji ab aapke pass naya array jo hai wo hai 
// [10, 20, 30, 40, 50, 60, 70, 80, 90, 100] (jo 1st map() se aya hai)
// yeh sab hai

// par uske ( 1st map() k ) baad ek aur map() ( 2nd map() ) laga
// diya hai, ek aur map() ( 2nd map() ) lagane k baad ab kya ho gaya
// [10, 20, ... , 100] to ho hi gaya tha , to second map k baad [11, 21, 31, ... , 101]
// ho jayega second map() k baad

// to yeh interesting hai kaafi jagah aapke bhi kaam ayega

// save and run

// o/p [
//   11, 21, 31, 41,  51,
//   61, 71, 81, 91, 101
// ]

// ========================================================================================

// Achha itna hi nahi aap jitna marji chahe chaining kar sakte hai

// Ab suppose kariye ki mujhe yahan pe jo pehle knowledge mili thi
// filter ki wo lagani hai, wo laga sakte hai, are bilkul laga sakte hai

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => { return num + 10}) commented out

// const newNums = myNumbers
//                 .map((num) => num * 10 )
//                 .map( (num) => num + 1)
//                 .filter()

// console.log(newNums);

// to yeh lijiye humne arrow liya , yeh humara arrow function aa gaya
// inside filter as follows

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => { return num + 10}) commented out

// const newNums = myNumbers
//                 .map((num) => num * 10 )
//                 .map( (num) => num + 1)
//                 .filter( () => )

// console.log(newNums);

// ab ek ek aapke pas wapas se num aya inside filter -- .filter( (num) => )
// as follows

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => { return num + 10}) commented out

// const newNums = myNumbers
//                 .map((num) => num * 10 )
//                 .map( (num) => num + 1)
//                 .filter( (num) => )

// console.log(newNums);

// par ab humne filter laga diya, filter matlab jo true hoga wo
// hi pas hoga, to humne bola jo bhi num hai .filter( (num) => num , mei 2nd wala num )
// as follows

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => { return num + 10}) commented out

// const newNums = myNumbers
//                 .map((num) => num * 10 )
//                 .map( (num) => num + 1)
//                 .filter( (num) => num)

// console.log(newNums);

// agar wo ( .filter( (num) => num) , mei 2nd wala num ) greater than ya equal to hai 40
// se to hi usko lo

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => { return num + 10}) commented out

const newNums = myNumbers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);

// 24:25

// to ab value kya ayegi, obvious si baat hai ki ab aapke pas
// yeh value as follows

// [
//   11, 21, 31, 41,  51,
//   61, 71, 81, 91, 101
// ]

// to yahan humne dekh hi li thi , ( means 2nd map() above array 
// i.e. [11, 21, ... , 101] filter ko pas karega ) ab filter bhi laga
// diya hai

// to 40 se upar jitni value hogi iss array mei [11, 21, ... , 101]
// wo hi ayegi sirf (filter mei)

// to yeh 41 ayega kya [11, 21, 31, 41, ... , 101] ayega kya,
// obvious si baat hai ayega, kyu nahi ayega

// save and run

// o/p [
//   41, 51,  61, 71,
//   81, 91, 101
// ]

// to yeh bada hi interesting kaam hai aur kayi jagah aap karenge
// jahan pe aap 2-3 maps laga rahe hai , filters laga rahe hai
// aur iss tareh k methods laga rahe hai

// bahut hi asaan hai aur kaafi jagah kaam mei aata hai
// numbers se thoda aasaani se samajh mei aata hai

// Achha aap chahe to numbers (myNumbers in , const newNums = myNumbers)
// yeh map hai na (1st map()), map k andar (1st map() k andar) kya hai jo bhi condition (num * 10) aap
// lagate hai ya iss tareh ki values lagate hai, return hota hai lekin
// aapko ya to exclusively return karna padega ( (num * 10) )
// ya fir iss tareh ki values ( (num * 10) , (num + 1) ) k upar operation perform hota hai
// 25:05

// filter alag hai (jo filter 1st map() aur 2nd map() k baad lagaya hai)
// filter yaad rakhiyega wahan pe (filter mei) true and false wala game hai

// yahan pe (map() mei for eg 1st map() mei and 2nd map() mei num * 10 aur num + 1)
// to dekhiye sab (for eg - num * 10 , num + 1) hi return hoga
// but ab aap kya karna chahte hai, kya nahi karna chahte wo
// aapke upar hai ( i.e. map() ki condition k upar operation perform
// hota , kya operation karna chahte hai wo humare upar depend karta hai)

// theek hai ji , to yeh ho gaya aapka maps
// maps bahut hi interesting hai aage jaake kaafi kaam mei lenge
// isko

// Achha ab ek aur method pe aate hai, uske liye bhi nayi file banayenge
// kyuki aakhri method hai humara yahan discussion ka, uske baad hum dusra
// subject start karnege

// 25:26
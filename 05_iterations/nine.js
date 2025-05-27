// Yahan pe jo hai na, yeh method hai reduce
// Ab yeh jo reduce hai na iski functionality bahut
// hi interesting hai

// pehle sir aapko google pe iski (reduce ki) functionality dikhana
// chahenge

// yeh (reduce) bahut jagah kaam aata hai especially jab aap
// shopping kart etc use karte hai

// mdn -- to yeh kya hai reduce method kya karta hai
// execute a user-supplied "reducer" , yeh bahut hi
// interesting keyword hai ("reducer") , react etc
// mei bhi kaafi aata hai

// mdn -- to yahan pe kya hota hai pehle iska hum
// samajhte ki actually mei yeh (reduce) kaam kaise
// karta hai

// mdn -- try it section -- to dekhiye humne liya
// ek array (const array1 = [1, 2, 3, 4])
// wo hi 1, 2, 3, 4 , abhi sir aapko karke bhi
// dikhayenge

// fir humne liya ek initial value
// (i.e. const initialValue = 0;)

// theek hai ji, ab initialValue kya li zero

// wahan pe pehle initial values array etc le rahe the
// abhi initialValue just ek variable liya hai jiske
// andar zero humne define kar diya

// ab kya kara array1 pe jaise hi aapne reduce
// method lagaya as follows

// const sumWithInitial = array1.reduce()

// to iss reduce method k andar wo hi callback
// aapne kiya, ab isko (callback ko) upar upar
// se dekhiye as follows

// yeh apka ho gaya yeh - (accumulator, currentValue)
// fir arrow => aur yeh - accumulator + currentValue,
// initialValue , callback ho gaya

// theek hai ji lekin pehle kya ho raha tha array k
// andar aapko values kya kya mil rahi thi - item
// mil raha tha, index mil rahi thi, ya poora poora
// array bhi mil raha tha (as parameters aapko
// yeh teen cheejein / values mil rahi thi),
// wo saari (item, index , poora array) milti hai
// abhi bhi, baki mei bhi aap dekh sakte hai
// (baki methods mei bhi aap dekh sakte hai)

// lekin kya hai ab kya aapko mil raha hai
// accumulator aapko mil raha hai aur ek currentValue
// apko mil rahi hai (see before arrow => in arrow
// function) (accumulator, currentValue)

// achha ji yeh accumulator kya hai aur yeh
// currentValue kya hai

// achha currentValue kya hai apki jo bhi abhi aapki
// array ki value chal rahi hai wo hai
// for eg const array1 = [1, 2, 3, 4] mei 1 is
// currentValue
// 26:47

// theek hai ji, aur accumulator kya hai yeh
// uske baare mei bhi dekhte hai accumulator

// to aapne kya kara accumulator + currentValue,
// aur yahan pe aapne ek initialValue bhi use kar rakhi hai
// comma , laga k
// i.e. accumulator + currentValue, initialValue

// to actually mei yeh jo kaam karta hai na yeh kya
// karta hai , accumulator ek khaali empty variable
// aapko diya jata hai (accumulator, currentValue)

// ab iske andar (accumulator, currentValue ,mei
// accumulator k andar) value konsi daalni hai
// initialValue
// i.e. accumulator + currentValue, initialValue, mei
// initialValue
// 27:06

// yeh initialValue humne yahan (const initialValue = 0;)
// declare kar rakhi thi

// gaur se dekhiyega yeh ( accumulator + currentValue, initialValue
// , mei accumulator + currentValue ) ek cheej hai aur
// iske baad comma , laga k aapne initialValue de rakhi
// hai

// to jo bhi aap initialValue dete hai (const initialValue = 0;)
// first time to wo iss accumulator (accumulator, currentValue)
// k andar chal jaati hai

// theek hai initialValue ( i.e. accumulator + currentValue, initialValue )
// kya de rakhi thi zero ( const initialValue = 0; )

// to pehli baar jab loop chalega to uske andar
// accumulator k andar (accumulator, currentValue)
// value hogi zero

// 27:25

// uske baad currentValue (accumulator, currentValue)
// aapne de rakhi hai , theek hai ji , currentValue
// hume iss array (array1 = [1, 2, 3, 4]) se mil jati
// hai

// to accumulator + currentValue, initialValue , mei
// accumulator + currentValue,

// 27:36

// to pehli bar kya hoga 0 + yeh currentvalue -- 1
// to accumulator + currentValue, initialValue , mei
// accumulator + currentValue,

// to pehli bar kya aya -- 1 (0 + 1 = 1)

// lekin yeh reduce kya karta hai -- array1.reduce()
// yeh poore array pe chalte hi rehta hai
// ( poore array means const array1 = [1, 2, 3, 4]; )

// achha ab dusri bar / baat bada interesting hai
// yeh accumulator (accumulator, currentValue) kya hai
// sirf ek hi bar isse pochta hai ki initialValue
// (accumulator + currentValue, initialValue , mei
// initialValue) kya hai

// dusri bar kya karta hai , jo bhi abhi iska sum
// (accumulator + currentValue,) aya hai usko
// accumulator (accumulator , currentValue) mei
// daal deta hai

// to pehli bar to accumulator (accumulator, currentValue)
// ki value kya thi zero

// lekin ab jo result aya hai ( accumulator + currentValue, )
// wo result jo hai iska ( accumulator + currentValue, ) wo
// chala jaata hai accumulator mei (accumulator , currentValue)

// to pehli bar to zero tha (accumulator) (accumulator, currentValue)

// ab kya chala gaya -- 1 (accumulator) (accumulator, currentValue)

// haa ji 1 aa gaya hai

// ab currentValue (accumulator , currentValue) kya hai
// 2 hai ( see const array1 = [1, 2, 3, 4] )

// theek hai to ab kya karenge 1 + 2 = 3
// (accumulator + currentValue)

// 28:10

// ab yeh 3 kahan jayega, wapas se accumulator
// (accumulator , currentValue) mei chala jata hai

// ab currentValue (accumulator , currentValue)
// kya hai 3 ( see const array1 = [1, 2, 3, 4] )

// to 3 + 3 = 6 (accumulator + currentValue)

// to next time accumulator (accumulator , currentValue)
// mei kya jayega 6

// to isi tareh se accumulator (accumulator , currentValue) mei kya hota hai,
// jo bhi value aapka final sum (accumulator + currentValue) aa raha tha
// usko ikkhatha karke accumulator (accumulator , currentValue)
// k andar daal diya jaata hai

// Lekin first time accumulator (accumulator , currentValue) ko pata hi nahi hai
// ki mujhe value kya do , to wo initialValue
// (const initialValue = 0;) wahan pe le leta hai
// (accumulator + currentValue, initialValue)

// theek hai to ab isko hum thoda sa practical karke
// dekhte hai choti values se hum start karte hai taaki
// hume samajh mei aye yeh

// =========== ab sir mdn k bahar aa gaye hai =======================================

// 28:37

// theek hai const wo hi myNums le lete hai

// const myNums

// aur iske andar hum yahan se start karte hai
// sirf [1, 2, 3] se start karenge taki hum atleast
// dekh payein ki har bar ho kya raha hai

// const myNums = [1, 2, 3]

// theek hai to ab hum kya karte hai dekhiye
// jo same yahan (mdn mei) tha wo hi hum karne wale
// hai sumWithInitial wo ka wo hi (const sumWithInitial)
// value hum yahan pe lenge, theek hai

// to isko start karte hai ki initial values kaise
// lete hai, kya values hoti hai, sara ka sara same
// start karte hai

// theek hai ji to basic hum kya karte hai iska
// sabse pehle hum reduce start karte hai

// to myNums, yeh lijiye myNums liya as follows

// const myNums = [1, 2, 3]

// myNums

// aur uske andar (myNums k andar , jo liya hai 2nd
// line mei) kya kara ki dot reduce (.reduce) start
// kara

// const myNums = [1, 2, 3]

// myNums.reduce

// theek hai ji isko ( myNums.reduce ko ) store bhi
// kar lete hai

// to isko ( myNums.reduce ko ) kar dete hai
// myTotal as follows

// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce

// theek hai aapne start kara reduce

// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce()

// ab sir aapko iska kuch basic easy tarike se bhi batate
// hai aur uske baad jo actually mei humne wahan use
// kara tha wo bhi actually mei batate hai ki wo bhi
// kaise hota hai

// to reduce k andar bhi dekh sakte hai aap ( see
// suggestion after .reduce() ) callback function
// mil raha hai , theek hai ji

// to hum basic likh dete hai yeh lijiye function likh
// diya kyuki function se thoda easily samajh mei aa jata
// hai 

// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function () {})

// yeh lijiye function likh diya (as above)

// 29:39

// ab kya sir ne aapko bataya tha ki yeh jo function hai
// yahan pe aapko do (2) cheejein milti hai humesha
// accumulator aur currentValue

// accumulator ka short likh dete hai -- acc
// (i.e. (acc))

// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc) {})

// aur currenValue ko likh dete hai -- currval
// (i.e. (acc, currval))

// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {})

// ab yahan pe (function (acc, currval) {}, mei {} mei)
// kya hota hai kyuki humne scope start kara hai
// (i.e. function (acc, currval) {}, mei {} ek scope hai )
// to obvious si baat hai return karna padega as follows
// (means return keyword likhna padega as follows)

// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     return
// })

// theek hai ab return kar rahe hai to return karte time
// kya karna padega, ki return karte time hum kya
// karenge yahan se seeddha accumulator (acc) ko
// return kar dete hai - ( i.e. return acc )

// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     return acc
// })

// aur hum kya karte hai isko add kar lete hai
// currval ko (current value ko)

// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     return acc + currval
// })

// to yeh dono (acc, currval) ko hum return karna
// chah rahe hai (return acc + currval)

// lekin problem wo hi aati hai accumulator
// ( acc in function (acc, currval) ) ko pata hi nahi hai
// ki mai ( acc in function (acc, currval) ) start
// kahan se karu

// to aap kya karo yahan pe ( function k last curly
// brace k baad ) function k baad ek comma , lagta
// hai

// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     return acc + currval
// },)

// aur yahan pe ( comma , k just baad ) aap
// likhte hai ki aap kya accumulator (acc)
// ki value dena chahte ho, to hum zero se start karna
// chahte hai (acc ko zero se start karna chahte hai)

// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     return acc + currval
// }, 0)

// theek hai ji yeh ho gaya basic abhi isko hum
// arrow function mei bhi convert karenge taaki hume
// easily samajh mei aa jaye

// to yeh aya myTotal -- console.log(myTotal)

// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     return acc + currval
// }, 0)

// console.log(myTotal);

// to isko save and run karte hai ki actually mei abhi
// humare pas kitni galti hai, kitna humara kaam hua
// hai

// o/p 6

// achha ji ab 6 to aa gaya (see o/p) lekin actually mei
// hume har baar pata karna hai ki actually mei
// yeh accumulator ( return acc + currval ) k andar
// aa kya raha hai aur current value ( return acc + currval )
// k andar kya aa raha hai, wo bhi to pata karna
// jaruri hai , to console.log karenge as follows

// 30:57

// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log();
    
//     return acc + currval
// }, 0)

// console.log(myTotal);

// theek hai to humne bola console.log k andar back tick k
// andar ki accumulator ki value kya karo ( acc: )
// yahan pe accumulator inject kar dete hai using ${}
// console.log(`acc: ${acc}`)

// theek hai ji accumulator short mei likh hai -- (acc:)

// aur yeh currval ki kya value hai (currval:)
// to iski (currval:) value kya hai, wo hi variable inject
// karte hai fataak se using ${} aur dekhte hai values
// kya aati hai aur yahan pe (currval: ${}) likh dete hai
// currval as follows

// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0)

// console.log(myTotal);

// theek hai save and run karke dekhte hai
// to ab thoda sa aur samajh mei ayega

// o/p acc: 0 and currval: 1
// acc: 1 and currval: 2
// acc: 3 and currval: 3
// 6

// to theek hai , to first baar kya hua current value
// accumulator ki zero ayi ( see o/p -- acc: 0 and currval: 1 , mei acc:0 ) kyuki humne zero pass kiya
// tha (function k last curly brace k just baad baad zero likha
// tha)

// but theek hai aise thodi na vishwas kar lenge iss zero ki jagah 3 pass karke dekhte hai
// (function k last curly brace k just baad jahan zero likha
// tha wahan 3 pass karke dekhte hai) 
// dekhte hai current value accumulator ki 3 aati hai kya (o/p mei)
// agar hum yahan 3 pass karte hai , as follows

// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 3)

// console.log(myTotal);

// save and run 31:38

// o/p acc: 3 and currval: 1
// acc: 4 and currval: 2
// acc: 6 and currval: 3
// 9

// haa ji , 3 aati to hai ( see o/p -- acc: 3 and currval: 1 , mei acc: 3 )
// to accumulator ko aap jo bhi comma , k baad ( i.e. function k last curly
// brace k just baad comma , k just baad) jo value dete ho wo value aa jati hai
// ( see o/p -- acc: 3 and currval: 1 , mei acc: 3 ) theek hai ji itna to confirm
// ho gaya humare pass

// to zero de dete hai wapas se (function k last curly brace k baad comma , k baad)
// kyuki ab vishwas ho gaya hai ab maan li hai humne baat

// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0)

// console.log(myTotal);

// o/p acc: 0 and currval: 1
// acc: 1 and currval: 2
// acc: 3 and currval: 3
// 6

// theek hai to accumulator ki value first time kya hui
// zero hui ( see o/p -- acc: 0 and currval: 1, mei acc:0 )
// aur current value kya thi ( see o/p -- acc: 0 and currval: 1, mei currval: 1 )
// obvious si baat hai array ( const myNums = [1, 2, 3] ) k andar first
// item 1 tha to current value 1 ho gayi ( see o/p -- acc: 0 and currval: 1, mei currval: 1 )

// theek hai ji ab dusri bar jab loop chala tab kya tha
// ab accumulator k andar kya value aa jati hai ( see o/p - acc: 1 and currval: 2 , mei acc: 1 )
// jo bhi aapne return kari ( return acc + currval ) to 0 + 1 = 1
// to 1 ho gaya hai (32:04) ( see o/p - acc: 1 and currval: 2 , mei acc: 1 )
// current value kya hai 2 ( see o/p - acc: 1 and currval: 2 , mei currval: 2 )
// ( i.e. const myNums = [1, 2, 3] ) k andar second item 2 hai to current value
// 2 ho gayi ( see o/p - acc: 1 and currval: 2 , mei currval: 2 ) )

// to operation kya chalega accumulator + current value ( return acc + currval )
// yaani ki 1 + 2 = 3, to kya ho gaya 3 ho gaya hai, theek hai ji 3 ho gaya hai

// ab next bar jab loop chala kyuki 3 values thi (array mei 3 items hai)
// to iss bar accumulator ki value kya hai 3 hai ( see o/p -- acc: 3 and currval: 3 , mei acc: 3 )
// ( 1 + 2 = 3 so acc: 3 , see o/p )
// aur current value kya hai 3 hai ( array , const myNums = [1, 2, 3] ke third item ki value
// 3 hai to hum 3 lenge kyuki reduce loop 3rd time chal raha hai )
// ( see o/p -- acc: 3 and currval: 3 , mei currval: 3 )
// to 3 + 3 = 6 ( return acc + currval ) ( see o/p 6 )
// to iss tareh se humare pass 6 aya hai ( see o/p 6 )

// theek hai thoda sa maante hai reduce thoda sa hai , lekin kya
// hoga jab iss tareh k arrays aapko milenge to shopping kart
// aapke pass kaafi baar ayega to shopping kart mei yeh itne saare
// bills hue hai, inka (bills ka) sabka price yeh hai, please
// sabko add kar do, to obvious si baat hai ek ek ko hatake thodi na
// add kar sakte hai

// yehi cheej (reduce) aap kya kar sakte hai total k andar yahan
// total ek variable aap bahar declare kar dijiye
// (32:40) (const myNums k baad and const myTotal k pehle ek total variable
// declare kar dijiye) fir forEach lagayiye fir har bar uske andar
// push karte jayiye values ko add kar kar ke , to wo koi khaas
// tarika nahi hai, aap reduce ko kaafi bar use karenge, yeh bahut hi
// basic hai

// achha ab yeh to samajh mei aa gaya ki iss tareh se likha jata hai
// (reduce iss tareh se likha jata hai)

// ==================================================================================

// Ab isko arrow function mei likhne ki try karte hai yeh function se
// (function keyword se) to hume bada basic samajh mei aa gaya hai but
// arrow function mei bhi samajh mei aa jaye

// to wo hi kaam karte hai myTotal lete hai

// const myNums = [1, 2, 3]

// const myTotal

// console.log(myTotal);


// Theek hai ji myTotal le liya aur wo hi myNums

// const myNums = [1, 2, 3]

// const myTotal = myNums

// console.log(myTotal);


// iske andar (myNums k andar) lagayiye reduce

// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce()

// console.log(myTotal);


// Theek hai reduce laga dete hai koi dikkat wali baat hi nahi hai
// (33:09) as above

// To reduce mei kya hota hai humare pas, yeh arrow functions hota hai
// iss tareh se -- ( () => {} ) as follows

// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( () => {} )

// console.log(myTotal);


// theek hai ji ab yeh arrow function iss tareh se -- ( () => {} ) na likh ke
// hum chahe to paranthesis laga de -- ( i.e. ( () => () ) , mei
// baad wala () ) taki automatically koi scope scope wala tension nahi aye humare upar

// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( () => () )

// console.log(myTotal);


// but baat yeh hai ki mudde ki aapko comma , laga ke ek zero
// to likhna hi padega
// (means aise ( () => (), 0 ) likhna hi padega )

// 33:24

// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( () => (), 0 )

// console.log(myTotal);

// Ab zero likhiye ya jo bhi aapka task hai / goal hai
// accumulator ko value hume yahan pe deni hai
// ( i.e. ( () => (), 0 ) , mei 0 accumulator ki value hai)

// theek hai ji ab hume pata hai ki hume accumulator milta hai (acc,)
// aur hume ek currvalue (current value) milti hai (acc, currval)
// to curr likh diya current value ko (acc, curr) as follows

// ( arrow function k parameters hai (acc, curr) )

// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( (acc, curr) => (), 0 )

// console.log(myTotal);

// ab yahan pe ( (acc, curr) => (), 0 , mei () pe ) aane k baad mei kya hai
// isko ( (acc, curr) => (), 0 , mei () ko ) hatate hai
// as follows

// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( (acc, curr) => , 0 )

// console.log(myTotal);

// aur bolte hai kya karo -- accumulator ko add kar do
// current value k saath ( i.e. (acc, curr) => acc+curr, 0 )

// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0 )

// console.log(myTotal);

// to theek hai ji , humne add kar diya (as above)

// ab dekhiye itna jo sab jo humne likha tha (using function keyword mei)
// function (acc, currval) { se leke ...    yahan tak -- }, 0)
// wo sab humne samajhne k liye likha tha

// ab aapko dikhega yeh iss tareh se -- const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0 )

// jadatar log jo code karte hai wo kehte hai are bade smart ho aapne
// to ek hi line mei poora array add kar diya -- (acc, curr) => acc+curr,
// back to back aur saara kaam kar diya

// kaam wo hi ho raha hai , yeh ( function keyword wale mei )
// function (acc, currval) { se leke ...    yahan tak -- }, 0)
// thoda sa readability k andar jada hai, sir isko bhi poore hi
// number dete hai

// aur yeh ( (acc, curr) => acc+curr, 0 ) thoda sa readability ki jagah
// thoda sa smart code hai to as such koi aap impress nahi kar rahe hai kisi
// ko

// agar aap iss tareh se (using function keyword) bhi likh rahe hai to bhi
// wo samajhta hai ki achha isko indepth knowledge hai, isko pata hai code
// kya kar raha hai aur wo jada jaruri hai

// theek hai to yeh basic ho gaya aapke pas ki kis tareh se values aati hai

// theek hai ab yeh saara kaam aap for loop mei bhi kar sakte the,
// for of mei bhi kar sakte the, while mei bhi kar sakte the

// aapka jaisa man kare sabke andar kar sakte the as such koi badi baat nahi hai

// to yeh ho gaya humara basic , to isko bhi ek bar print karke
// dekh lete hai

// again write (just for understanding)

// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0 )

// console.log(myTotal);

// save and run

// o/p 6

// to yeh dekhiye wo hi 6 value (see o/p), answer to wo hi aana hai

// ab array k andar ( for eg const myNums = [1, 2, 3] ) 1, 2, 3 ho
// chahe 10 number ho chahe 200 number ho, ek bar concept samajh mei
// aa gaya hai , to wo concept aapka same rehna hai

// ======================================================================================

// theek hai ab iska ek chota sa example aur hum print kar lete hai
// taki apko bhi samajh mei aye ki aur values kis tareh se aati hai

// to yeh lijiye humare pas ek shopping cart hai

// const shoppingCart

// to shoppingCart kya hai obvious si baat hai ek array hai

// const shoppingCart = []

// uss array k andar alag alag object hai

// const shoppingCart = [
//     {}
// ]

// to uss object k liye yahan pe sabse pehle likh lete hai
// itemName:

// const shoppingCart = [
//     {
//         itemName:
//     }
// ]

// to kya kya khareed rahe hai aap, suppose kariye aap
// course buy karne nikle hai, aaj kal kayi log nikalte hai

// to aapne ek js ka course khareeda

// const shoppingCart = [
//     {
//         itemName: "js course",
//     }
// ]

// uska price kya tha -- 2999

// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     }
// ]

// 35:14

// theek hai, yeh to aapne ek kharedd liya course -- "js course"

// iss object ko copy paste kar lete hai comma laga k array k andar
// aur isko copy paste karke 3 - 4 item daal dete hai aapke Cart mei
// as follows

// theek hai to js ka course khareed liya, aur python ka course khareed
// rahe hai aap -- py course , price 999 mei
// mobile develeopment ka course khareed rahe hai aap , price 5999 mei
// data science course khareed rahe hai aap, price 12999 mei

// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     }
// ]

// to yeh aapne courses khareed liye hai shopping Cart mei

// ab aapko kya karna hai, ab aapke pas ek functionality apko 
// introduce karni hai ki yeh jo shopping Cart k andar jitne
// prices hai inko add kardo , bada hi basic sa hai

// ab kaise add karoge

// dekhiye add karne k liye ho sakta hai aap bahut method lagaye
// lekin yeh ek bahut hi common functionality syntax hai jahan pe
// arrays k andar kuch values hai , ya objects k andar kuch values hai
// unko add karna hai, to reduce sir use karne wale hai yahan pe,
// bahut hi basic sa hai

// to yeh lijiye sir ne liya shopping Cart

// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     }
// ]

// shoppingCart

// isko ( shoppingCart ko , jo array k baad likh hai ) bola aap kya karo reduce use kar do
// as follows - shoppingCart.reduce()

// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     }
// ]

// shoppingCart.reduce()

// ab kyuki hume pata hai hum yahan pe ( shoppingCart.reduce(), mei inside () )
// simply yeh humara arrow function ho gaya , aur ek minute k liye hum
// yahan pe ( shoppingCart.reduce(), mei inside () ) laga dete hai ( i.e. yeh -- () => ()
// laga dete hai )

// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     }
// ]

// shoppingCart.reduce( () => () )

// obvious si baat hai total hai shopping Cart ka, koi bhi yahan pe added tax
// ko pasand nahi karega ki aapne suppose kariye yahan pe 299 likh diya as follows

// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     }
// ]

// shoppingCart.reduce(() => (), 299)

// to by default Cart mei kisi k 299 Rs pay karne hi hai usko
// to aise thodi hota hai

// (299 backspace kar diya)

// 36:40

// to aapko pata hai aapne zero 0 yahan pe de diya as follows

// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     }
// ]

// shoppingCart.reduce(() => (), 0)

// theek hai ab aapke pas kya hoga, har ek item milega aapko
// (means array ka har ek item milega aapko as parameter of arrow function)
// theek hai to item likh dete hai (first () of arrow function mei item likh
// dete hai)

// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     }
// ]

// shoppingCart.reduce((item) => (), 0)

// ab har ek item denote kisko kar raha hai, array ( const shoppingCart array )
// k andar har ek object ko denote kar raha hai item, ab usme se (uss array k andar
// har ek object mei se) price nikaalni hai, to price nikaalna kya badi baat hai
// aap yahan pe ( after => in arrow function, second paranthesis () backspace kar diya ) 
// jaake bol sakte ho ki -- item.price as follows

// ( after => in arrow function, second paranthesis () backspace kar diya aur uski
// jagah item.price likh diya)

// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     }
// ]

// shoppingCart.reduce((item) => item.price, 0)

// theek hai ji item price aa gayi (item.price)

// but accumulator hume pata hai na do (2) cheejein hoti hai
// yaha pe ek tareh se kaam nahi hota hai to humare pass
// accumulator bhi hota hai aur ek item bhi hota hai

// to accumulator ko yahan pe leke aate hai hum yahan pe
// ( i.e. before => (item) pe )

// hume pata hai ki yeh humara accumulator hai - ( (acc, item) => item.price, 0 , mei
// acc ) aur yeh ( (acc, item) => item.price, 0 , mei item ) item hai
// as follows

// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     }
// ]

// shoppingCart.reduce((acc, item) => item.price, 0)

// to kya karn hai ab inn dono ko add karna hai ( acc aur item dono ko add karna hai )
// to kya karenge basically 37:17

// hum yahan pe ( => k baad ) yeh accumulator ko lenge (acc) aur isme (acc mei)
// add kar denge kya price item (item.price) -- => acc + item.price, 0

// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     }
// ]

// shoppingCart.reduce((acc, item) => acc + item.price, 0)

// abhi sir ne directly kar diya hai vaise aage jake aap kya
// karenge pehle isko verify karenge (37:24) (means item.price
// ko verify karenge) ki item ki price kahin numbers mei ha ya nahi hai
// kahin string mei aa gayi to problem ho jayegi but theek hai abhi k
// liye humare pas basic kaam ho gaya hai

// to dekha kitni aasaani se humne iske andar add akr diya hai

// ab kya karo yahan pe ek variable le lete hai jisko bol lete hai
// priceToPay as follows -- const priceToPay

// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     }
// ]

// const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

// ho gaya , dekha kitna aasaan kaam tha

// isko print bhi kara ke dekh lete hai taaki sahi se aapka bill aa raha hai ya
// nahi aa raha -- console.log(priceToPay)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);

// save and run

// o/p 22996

// to samajh mei aa gaya hai ki kyu humare pas itne tarike hai har tarike
// ka kuch specialization hai , kuch easy tarike hote hai, kuch hard tarike
// hote hai but atleast abhi aapko loops k baare mei kaafi knowledge hai
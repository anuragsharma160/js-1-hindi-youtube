// Ab aapne dekha tha ki jab humne five.js file banayi thi
// yahan pe bhi humare pas kaafi kuch detail tha coding tha
// (coding array tha) to hum isi example ko continue kar lete
// hai coding ko

// halanki hum dusre examples lenge but theek hai coding ko humne le
// liya hai

// const coding = ["js", "ruby", "java", "python", "cpp"]

// aur humne yahan pe dekha tha ki jaise hi hum yahan pe likhte hai
// coding as follows

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding

// aur iske upar forEach loop lagate hai, to hume pata hai
// iske andar callback hai as follows

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach()

// thoda sa space deke humne arrow function le liya hai,
// yeh ho gaya humara values as follows

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( () => {} )

// Aur Hume yeh bhi pata hai ki har ek value ko hum item bol sakte hai
// (array ki har ek value ko hum item bol sakte hai) ya language bol
// sakte hai ya item bol lete hai as follows

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( (item) => {

// } )

// Aur iske andar humne kya kara ki suppose kariye humne console.log kara
// hai aur wo hi item ko log kar diya hai

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( (item) => {
//     console.log(item);
    
// } )

// Achha yeh to theek hai ki aapne item ko log kar diya hai , but
// actually mei kya ho agar hum isko ek variable mei store karna chahein
// as follows

// to suppose kariye hum ek const likh ke aur isko bol dete hai
// values aur isko iss tareh se -- const values =
// likh dete hai

// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
    
// } )

// tab kya ho, haa isko store to kiya hi jaa sakta hai
// (const values mei as above

// to yahan pe values (const values) k andar jo aati hai
// wo ek interesting baat hai ki actually mei yeh jo forEach
// loop hai yeh values return kya karta hai ya fir karta bhi hai
// ya nahi karta hai

// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
    
// } )

// console.log();

// to isko print karte hai values ko ( console.log(values); ) aur dekhte hai uske
// andar values kya aati hai as follows

// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
    
// } )

// console.log(values);

// save and run

// o/p js
// ruby
// java
// python
// cpp
// undefined

// ab dekhiye yahan pe yeh values to print ho gayi (see o/p)
// (i.e. js ruby java python cpp undefined , mei , js ruby java python cpp)
//  kyuki yeh to obvious si baat hai console.log mei honi hi thi
// (i.e. console.log(item) mei honi hi thi) 2:01

// but isne (forEach loop ne) return kuch bhi nahi kara hai (see o/p undefined)
// (i.e. js ruby java python cpp undefined , mei , undefined)

// aapko return to undefined hi mila hai 2:06 (see o/p)

// to yahan pe ( inside const values = mei, iski -- console.log(item) , jagah)
// kya hai agar aapko return karna hai
// kuch iss tareh se ( console.log(item) ) to aapko manually uss value
// ko return karna padega as follows

// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return
    
// } )

// console.log(values);

// to apko bolna padega ki return karo uss item ko ( console.log(item) )
// i.e. return item , as follows

// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
    
// } )

// console.log(values);

// theek hai ji , ab agar aap iss code ko iss tareh se modify karte hai
// to ab dekhte hai value kya aati hai

// o/p js
// ruby
// java
// python
// cpp
// undefined

// to ab humare pas value kya ayi , are yeh to vapas se undefined aa gayi
// (see o/p -- js ruby java python cpp undefined , mei undefined)

// theek hai agar hum console.log ( console.log(item) ) karte hi nahi
// as follows, to kya hota value k andar (const values k andar)
// theek hai ji wo bhi dekh lete hai

// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item); commented out
//     return item
    
// } )

// console.log(values);

// save and run

// o/p undefined

// to wo bhi undefined hi ayi hai (value undefined hi ayi hai , see o/p)

// to isse kya pata lagta hai, ki yeh jo forEach hai yeh koi bhi value
// return nahi karta hai, aap chahein ya nahi chahein yeh ( forEach ) value
// to return nahi karne wala 2:40

// but humesha aisa jaruri thodi na hota hai ki kuch values aapne
// array se li aur aap usko print hi karana chahte ( console.log(item) ) hai ya kuch use
// hi karna chahtein hai

// ho sakta hai hum usse kuch aur kaam karwana chahtein hai, abhi ke liye
// temporary kuch condition dena chahtein hai (const values =) ki suppose kariye
// ki agar uska naam (item ka naam) "java" hai (see array items) to usko return kariye
// varna mat kariye , aise case mei kya karenge

// aise case mei to humara forEach loop mei jo pichle videos mei hum itna
// confidence kar rahe the ki achha array ka to kaam ho gaya, abhi sara kar denge 3:03
// to wo to humara syntax etc jitna bhi tha wo to dhara ka dhara reh gaya

// haa yeh to galat baat hai, to kya wapas se for loop pe jana padega,
// nahi javascript k developers jo hai jo core committee hai unko yeh baat bhi pata
// hai 3:14 ki theek hai kayi bar hum uss each value pe kuch operation karna chahtein
// hai but kayi bar hum uss value ko sirf return karna chahtein hai ya fir
// conditionally check karna chahtein hai

// to unn sabhi cases mei humara yeh jo kaam hai as follows yeh to reh jata hai

// const values = coding.forEach( (item) => {
//     console.log(item); commented out
//     return item
    
// } )

// console.log(values);

// yeh to reh jata hai (as above)
// isko sir ne comment out karke chord diya taki aapke liye rahe

// ======================================================================================

// to hum aate hai wapas se nayi values pe , naye examples pe

// theek hai to ab kya karte hai iss coding array example ko bhi comment out
// kar dete hai taki aage jake jo hum examples padhne wale hai wo
// actually mei numbers se jada achhe samjhe jate hai

// halaki dikhne mei basic lagta hai but wo numbers se jada achhe easy ho
// jate hai

// to yeh ho gaya const myNums

// const myNums

// aur wo hi numbers le lete hai as follows

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// to ab hum padhte hai humare aur kuch methods aapke jo
// diye jate hai

// to suppose karuye , yeh aapka numbers hai -- myNums
// as follows

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// myNums

// aur iske andar jaise humare pas forEach tha vaise hi humare pas
// ek filter operation bhi hota hai 4:10

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// myNums.filter

// theek hai ab filter operation kya hota hai yeh basic filter hai

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// myNums.filter()

// yeh basic filter hai, yahan (filter()) pe jayenge aap to apko
// kya dikhega apko, filter k andar bhi kya chahiye apko
// (see suggestion - yeh dekhiye array hai , filter hai -- yeh
// wapas se basic sa apko kuch bata raha hai ki mujhe yeh chahiye
// wo chahiye, kul mila k baat yeh hai ki filter bhi apne andar callback
// hi leta hai) 

// theek hai callback kaise , yeh liya humne ek callback ( () )
// as follows

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// myNums.filter( () )

// aur yeh arrow function define kar diya

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// myNums.filter( () => {} )

// ab arrow function iss tareh ( () => {} ) se bhi define
// kar sakte hai, iss tareh ( () => () ) se bhi define kar
// sakte hai as follows

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// myNums.filter( () => () )

// ya single line ka hai to single line pe likh dijiye as follows

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// myNums.filter( () =>  )

// theek hai to ab hum kya karte hai yahan pe values lete hai
// ki mujhe numbers chahiye jo ki bade hai, aa... 4 se bade hai
// 4:43

// to kaise karenge, ek value ko kya bolenge , aa... num bol
// dete hai isko

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// myNums.filter( (num) =>  )

// ab konse wale chahiye, wo saare num chahiye hume
// ( (num) => num , mei 2nd wala num )

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// myNums.filter( (num) => num )

// wo saare num chahiye hume jo ki bade ho 5 se

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// myNums.filter( (num) => num > 5 )

// theek hai ya 4 se bade maan lijiye

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// myNums.filter( (num) => num > 4 )

// to actually mei yahan pe abhi kya hai abhi actually mei
// aap iss script ko run karenge to apke pas kuch bhi nahi ayega

// o/p -- kuch nahi aya

// kyu nahi ayega kyuki aapne isko kuch bola hi nahi ki apko
// kuch values chahiye ya (5:05) kahi pe store karo,
// isne kaha theek hai mai vapas kar deta hu

// to isne values ( ( (num) => num > 4 ) ) apko yahan pe
// return kari hai

// dhyan rakhiyega yeh jo opeartion hai ( const values = const.forEach( (item) ) => {} )
// yeh forEach k andar bhi hota hai , but forEach apko
// values wapas nahi karta hai

// yeh ( myNums.filter( (num) => num > 4 ) ) apko values wapas karta hai return karta hai

// to hum kya kar sakte hai yahan pe, aa... , yahan pe ( myNums.filter( (num) => num > 4 ) )
// likh dete hai let ya fir const hi use kar lete hai,
// aa..., isko bol dete hai newNums i.e. const newNums = myNums.filter( (num) => num > 4 )
// as follows

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4 )

// 5:29

// to ab mudde ki baat yeh hai ki humare pas newNums k andar value
// kya ayegi i.e. console.log(newNums) as follows

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4 )

// console.log(newNums);

// save and run

// o/p [ 5, 6, 7, 8, 9, 10 ]

// to dekhiye newNums k andar value kya ayi hai 5, 6, 7, 8, 9, 10 (see o/p)

// to yeh hume samajh mei aa gaya hai ki jab bhi hum filter ( myNums.filter( (num) => num > 4 ) ) use
// karte hai to filter k andar apko ek callback function ( (num) => num > 4 ) milega
// jiske andar har value ( (num) => num > 4 , mei (num) ) ko each access kiya jayega

// lekin uske ( (num) => num > 4 , mei (num) ) baad kya hota hai, uske baad
// apko deni padti hai ek condition ( (num) => num > 4 , mei num > 4 )

// jo jo log ( hindi wale log, means , jo jo array items ) uss condition
// ko satisfy karenge aur true hogi condition , wo wo values (array items)
// to return ki jayegi , varna wo values nahi return ki jayegi

// isi ko bola jata hai basics kis baat ka -- filter ka
// kaafi jagah use karenge, bahut jada implementation hota hai
// isi tareh se

// ======================================================================================================

// ab yeh to ho gaya apka basic iss tareh se, lekin yahan pe kuch
// thodi si problems bhi aati hai logo ko

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4 )

// console.log(newNums);

// suppose kariye isko -- num > 4 , hum iss tareh se nahi likhna chahte the
// isko -- num > 4 , kar dete hai cut , as follows

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => )

// console.log(newNums);

// to aap kya kariye yahan pe arrow iss tareh se use karenge aap arrow functions
// as follows

// dubara se likh dete hai wapas poora code taaki aapko samajh mei aye

// yeh likha filter as follows

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter(  )

// console.log(newNums);

// aur filter k andar aapne diya arrow function -- () => {} , as follows

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( () => {} )

// console.log(newNums);

// 6:30

// Ab iske ( arrow function ke ) andar humne har ek value ko bola num
// theek hai ji num bol diya -- (num) , as follows
// (array k har ek item ko num bola as parameter of arrow function,
// jo parameter arrow function leke ayega apne andar)

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {} )

// console.log(newNums);

// Aur yahan pe andar aye ( inside arrow function ) aur yeh de di
// humne condition -- num > 4

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     num > 4
// } )

// console.log(newNums);

// Theek hai , ab yahan pe ati hai thodi si problem

// isko save and run karte hai, dekhte hai kya aata hai

// o/p []

// Are yeh wapas se humara array jo hai yeh empty kaise aya
// ( see o/p -- [] )

// Haa ji, agar aapne sir ke purane videos pe dhyaan diya hota
// to sir ne batayi thi yeh cheej explicit return, functions ke andar (6:52)
// humne kaafi discuss ki thi

// 03_basics k andar 03_arrow.js k andar discuss kari thi

// yeh dekhiye agar aapko yaad ho to humne iss tareh (as follows)

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

// ka discussion kiya tha 03_basics k andar 03_arrow.js k andar,
// ki values kab return hoti hai, explicit return kab hota hai,
// khud se return kab hota hai

// to yahan pe (as follows)

// const addTwo = (num1, num2) => num1 + num2

// to return ho raha hai

// yahan pe (as follows)

// const addTwo = (num1, num2) => (num1 + num2)

// humne paranthesis ( (num1 + num2) ) laga k return kar diya

// Lekin agar iss tareh se ({username: "hitesh"}) (as follows) ( see 03_basics k andar 03_arrow.js k andar )

// const addTwo = (num1, num2) => ({username: "hitesh"})

// console.log(addTwo(3, 4));

// agar return karenge to object return hoga, wo hi wali kahani
// yahan pe (iss file -- 05_iterations six.js , mei hai) hai
// as follows

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     num > 4
// } )

// console.log(newNums);

// ki agar hum pehle paranthesis laga rahe the
// (means myNums.filter k just baad wala first paranthesis
// aur iske corresponding last wala paranthesis) 

// ( yeh paranthesis pehle hai iss arrow function k -- (num) => { num > 4 } )

// to, to khud return ho raha tha, but aapne kyuki curly braces laga k ek
// scope start kar diya hai (i.e. (num) => { num > 4 } , mei , jo curly brace { num > 4 }
// wala scope hai)

// to scope jab aap start kar denge to actually mei yahan pe (i.e. num > 4 ke just pehle)
// return keyword aapko likhna hi padega as follows

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// console.log(newNums);

// yeh galti bahut log karte hai filter k andar kaafi beginners ka mistake
// hai yeh dhyaan rakhna ab aap nahi karenge kyuki ab aapko pata lag gaya
// hai

// save and run

// o/p [ 5, 6, 7, 8, 9, 10 ]

// to isko jab aap run karenge to ab aapke pas result ayega (see o/p)

// to yaad rakhna agar aap yeh scope open karte hai
// ( i.e. (num) => { return num > 4 } , mei curly brace wala scope -- { return num > 4 } )
// to, to aapko return keyword use karna padega ( { return num > 4 } , mei return keyword jo hai )

// 7:54

// aur agar aap scope open nahi karte hai
// ( i.e. (num) => { return num > 4 } , mei curly brace wala scope -- { return num > 4 } )
// to aap direct hi likh dijiye ek line ke andar
// (i.e. direct yeh -- num > 4 likh dijiye ek line k andar (without return keyword) ya jo bhi aapki
// condition hai, to basically return ho jayega)

// ==============================================================================

// To chaliye ab aapko agar yehi kaam same aapko karna tha ki mujhe to aa...
// iss tareh ka kaam (just above example) karna hai lekin yeh filter etc use nahi karna mujhe to
// forEach hi use karna hai

// theek hai ji forEach bhi aap use kar sakte hai hum ek basic example dekh
// lete hai ki yehi forEach mei agar use karna hota to kaise use karte hai

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } ) commented out

// console.log(newNums);

// to sabse pehle to kya hota hume ek newNums naam ka array banana padta

// to yeh newNums naam ka hum pehle array banate as follows

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = []

// console.log(newNums);

// uss array ko rakhte empty (newNums naam k array ko)

// ab empty rakhne ke baad kya karte

// 8:42

// newNums banaya , ab isko hum yahan pe jaate hai
// aur kya bolte hai ki yeh myNums jo hai , iske saath hum
// kya lagana chahte hai -- forEach, laga dijiye kyuki
// filter use nahi kar rahe hai (filter use nahi karna chahte hai)

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = []

// myNums.forEach()

// console.log(newNums);

// ab yahan pe (forEach) mei aap arrow function se aap callback use kar lijiye
// as follows

// to yeh callback use kar liya humne (as follows)

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = []

// myNums.forEach( () => {} )

// console.log(newNums);

// ab callback ke andar aap har ek number ko (array k har ek item ko) num bol lete hai
// (num) => {}

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = []

// myNums.forEach( (num) => {} )

// console.log(newNums);

// ab yahan pe apko wo hi condition use karni hai
// inside curly braces ( (num) => {} , mei {} wala curly braces )

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = []

// myNums.forEach( (num) => {

// } )

// console.log(newNums);

// to theek hai ji condition use kar lete hai,
// iss bar if method lagana padega kyuki koi asaan tarika
// aur hai nahi humare pas

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = []

// myNums.forEach( (num) => {
//     if (condition) {
        
//     }
// } )

// console.log(newNums);

// to hum wahan kya bol rahe the jo bhi num hai ( (num) => {} , mei (num) )
// wo agar greater than 4 hai, to, to hume usko kaam mei lena hai (9:19)

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
        
//     }
// } )

// console.log(newNums);

// to agar greater than hai to kya karna padega, yeh jo num hai, isko
// hum bol lete hai newNums (inside if condition) as follows 

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums
//     }
// } )

// console.log(newNums);

// iske andar ek value push karni hai hume, to yeh value push
// kar lete hai, basic array ka method hai koi bhi value uske
// andar (array k andar) add karne k liye

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push()
//     }
// } )

// console.log(newNums);

// kya add karna hai uske andar (array k andar) yeh num ( (num) ) add karna hai
// as follows

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

// theek hai ji yeh (num) add kar diya

// aur dusre case mei kya karna hai agar yeh nahi ho to,
// kuch nahi karna , basic rakha rehne do aise ka aisa
// aur yeh newNums -- ( i.e. console.log(newNums); )

// to yeh condition bhi agar aap likhte hai to dekhiye
// save and run

// o/p [ 5, 6, 7, 8, 9, 10 ]

// to result wo hi aya hai (see o/p) but yahan pe thoda sa hume logic
// lagana pada ( i.e. if (num > 4) { newNums.push(num) } )
// thoda syntax , to galat kuch bhi nahi hai

// yeh nahi keh sakte ki yeh wala ( i.e. previous wala as follows)

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// jada efficient tarika hai ya fir yeh best tarika hai

// ya yeh (i.e. this method as follows)

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// kharab tarika hai

// dekhiye kaam ho raha hai na, end of the day kaam matter karta hai
// efficiency etc k bare mei aage DSA etc mei baat kar lenge but wo hi condition
// ( i.e. if (num > 4) { newNums.push(num) } ) check ho rahi hai behind the scene
// yahan pe -- return num > 4 , bhi condition hi check ho rahi hai

// yahan pe (if wale mei) bhi functions hi lag raha hai to aisa koi yahan pe (if wale mei)
// optimization ka bhi load nahi hai

// to agar apko yeh (if wala) samajh mei baith ta hai , to aap yeh (if wala) kariye

// agar apko lagta hai ki filter wala mamla thoda easy hai to apka jo man kare wo kariye

// =================================================================================

// achha filter se sirf itna hi nahi hota hai , filter ke saath kya hai ki kuch basic aap
// aur bhi use kar sakte hai 10:25

// kuch example sir leke aate hai

// ek books ka example sir ne aapke liye banaya hai to yeh rahi humare
// pas books

// achha yeh books ka example sir batate hai ki actually mei yeh kaam kaise karta hai taki
// aap kuch aur filter ke through exercise kar sake

// dekhiye isme kya hai books ka ek array hai

// const books = [
//     {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
//     {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
//     {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
//     {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
//     {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
//     {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
//     {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
//     {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
//     {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
// ];

// yeh ek object hai (inside books array see first object)

// fir uske baad yeh ek object hai (2nd wala)
// uske baad yeh ek object hai (3rd wala)

// to iss tareh ke aapke pas kaafi objects hai,

// humne har book ko ek title diya hai -- Book One, Book Two,
// Book Three kyuki book k naam yaad nahi aa rahe the to humne
// aise hi likh diye hai

// fir humne kuch genre diye hai book ko koi koi fiction book hai
// koi non fiction book hai, etc to iss tareh se alag alag naam diye hai

// sab ki ek publishing  date hai ki 1981 mei pehla publication hua tha
// abhi iska 2004 edition chal raha hai (see first object)

// theek hai yeh sab to aa gaya lekin isse karna kya chahte hai

// dekhiye aisi hi values apko database se milegi ki ek database tha uske andar
// humne bahut saare objects de diye hai (jaise iss array k andar humne
// bahut saare objects de diye hai) (11:31)

// ab user kuch filters laga raha hai apne ek webpage pe,

// ab aapko exercise karni hai ki user jo jo bol raha hai wo wo usko
// karke dijiye aur usi tareh se print kariye

// 11:39

// theek hai to ab hum print karte hai, to isko bolte hai hum yahan pe
// seedha const aur isko bol dete hai userBooks

// const books = [
//     {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
//     {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
//     {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
//     {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
//     {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
//     {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
//     {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
//     {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
//     {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
// ];

// const userBooks

// aur userBooks k andar abhi hum kuch add karenge but pehle isko
// userBooks ko print bhi kara lete hai

// console.log(userBooks) taki easy rahe

// const books = [
//     {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
//     {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
//     {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
//     {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
//     {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
//     {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
//     {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
//     {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
//     {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
// ];

// const userBooks =

// console.log(userBooks);

// ab user ko kya chahiye wo kya chahiye , to hum kya karte hai
// iss books ko hi lete hai (userBooks k andar) aur iske upar (books k upar)
// hum filter lagate hai

// const books = [
//     {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
//     {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
//     {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
//     {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
//     {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
//     {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
//     {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
//     {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
//     {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
// ];

// const userBooks = books.filter

// console.log(userBooks);

// to user bhi filter lagayega isi tareh se to user ne filter laga diya 12:09

// ab iske andar (books.filter k andar) user ne kaha theek hai yeh lijiye

// const books = [
//     {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
//     {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
//     {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
//     {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
//     {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
//     {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
//     {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
//     {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
//     {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
// ];

// const userBooks = books.filter()

// console.log(userBooks);

// aur yeh raha aapka callback yeh raha (as follows)

// const books = [
//     {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
//     {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
//     {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
//     {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
//     {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
//     {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
//     {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
//     {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
//     {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
// ];

// const userBooks = books.filter( () => )

// console.log(userBooks);

// ab aap chahein to ek hi line mei kar dijiye ( () => )
// chahe to return keyword use kariye, aapka jaisa man kare aap
// vaisa kar sakte hai , hum ek hi line mei kar denge , theek hai

// to har ek book ko kya bol sakte hai , aa... , bk bol dete hai
// books naam se theek hai (12:27) short mei

// const books = [
//     {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
//     {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
//     {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
//     {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
//     {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
//     {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
//     {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
//     {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
//     {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
// ];

// const userBooks = books.filter( (bk) => )

// console.log(userBooks);

// ab kya filter aapko lagana hai, ab suppose kariye mujhe wo saari books
// chahiye jinka genre History hai , theek hai , to kaise kar sakte hai

// to har ek book hai to ab aapke pas object aa gaya hai

// array k andar se har ek object aa gaya hai, uss object ko hum bk bol rahe hai
// to uss bk k andar kya hai, aap access kar sakte hai uska ( bk ka ) genre
// (i.e. bk.genre)

// const books = [
//     {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
//     {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
//     {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
//     {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
//     {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
//     {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
//     {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
//     {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
//     {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
// ];

// const userBooks = books.filter( (bk) => bk.genre)

// console.log(userBooks);

// theek hai ji yeh genre kar liya

// ab wo genre kis se match karna chahiye, to aap equal to === laga ke
// bol dijiye -- 'History'

// const books = [
//     {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
//     {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
//     {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
//     {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
//     {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
//     {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
//     {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
//     {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
//     {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
// ];

// const userBooks = books.filter( (bk) => bk.genre === 'History')

// console.log(userBooks);

// to ab kya hai aapke pas userBooks k andar ( const userBooks = books.filter( (bk) => bk.genre === 'History') ) values
// konsi (12:58) gayi automatically -- jo bhi isko true maanti hai
// yaani ki wo saare objects ( bk ) jinke andar jo genre hai ( bk.genre )
// 'History' hai ( bk.genre === 'History') wo hi sirf user ko books
// dikhayi degi ab ( const userBooks = )

// dekha database k saath , yehi real world hai, isi ko kayi log
// project bol dete hai, halanki project nahi hai, par actually mei
// tayyari kar rahe hai aage jaake projects banane ki

// yehi to karenge aap JS mei, database ko call kiya, aage hum samajh
// lenge fetch method ko, wahan se aapne values kuch access kari,
// yeh aa gayi aapne values store kar li books naaam k variable mei
// (oonst books =)

// ab kya karein iske saath , to isi tareh k filters aap lagayenge

// to save and run , dekhte hai kya values aati hai humare pas

// o/p [
//   {
//     title: 'Book Three',
//     genre: 'History',
//     publish: 1999,
//     edition: 2007
//   },
//   {
//     title: 'Book Seven',
//     genre: 'History',
//     publish: 1986,
//     edition: 1996
//   }
// ]

// to yeh lijiye humare pas do (2) books ka data aya hai (see o/p) ki
// 2 hi books history k andar thi

// (cross verify from const books array)

// dekhiye kitna aasaan tha filter method se aur bahut hi easy ho gaya
// ek hi line k andar humara kaam ho gaya

// ==============================================================================================

// Achha aur thodi si practice kar lete hai

// Ab user ne bola yar yeh sab to nahi chahiye mujhe
// wapas se ek aur filter lagao , wo saari book do
// jo ki publish hui hai 2000 k baad

// theek hai to kaise karenge, suppose kariye, aa...,  wapas se wo hi (14:13)
// userBooks ko hi re-write karna hai hume ( const userBooks )
// kyuki jo bhi frontend engineer hai wo isi variables k naam se
// print kar raha hai

// const books = [
//     {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
//     {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
//     {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
//     {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
//     {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
//     {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
//     {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
//     {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
//     {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
// ];

// const userBooks = books.filter( (bk) => bk.genre === 'History')

// const userBooks =

// console.log(userBooks);

// theek hai ji, to books ko leke aye

// const books = [
//     {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
//     {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
//     {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
//     {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
//     {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
//     {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
//     {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
//     {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
//     {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
// ];

// const userBooks = books.filter( (bk) => bk.genre === 'History')

// const userBooks = books.

// console.log(userBooks);

// aur humne filter use kara

// const books = [
//     {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
//     {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
//     {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
//     {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
//     {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
//     {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
//     {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
//     {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
//     {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
// ];

// const userBooks = books.filter( (bk) => bk.genre === 'History')

// const userBooks = books.filter

// console.log(userBooks);

// wapas se aur yeh lijiye aapka callback aa gaya basic

// const books = [
//     {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
//     {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
//     {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
//     {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
//     {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
//     {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
//     {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
//     {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
//     {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
// ];

// const userBooks = books.filter( (bk) => bk.genre === 'History')

// const userBooks = books.filter( () => {} )

// console.log(userBooks);

// ab callback aane k baad kya hua , har book ko aapne bol liya -- bk ( (bk) => {} )
// jo bhi aapne naam dena tha

// const books = [
//     {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
//     {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
//     {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
//     {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
//     {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
//     {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
//     {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
//     {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
//     {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
// ];

// const userBooks = books.filter( (bk) => bk.genre === 'History')

// const userBooks = books.filter( (bk) => {} )

// console.log(userBooks);

// ab kya chahiye, theek hai , to user ne bola hai ki jo publish date hai
// wo kya honi chahiye , aa... , greater than ya equal to bhi maan lete hai,
// equal to , to kis se honi chahiye 2000 se 

// const books = [
//     {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
//     {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
//     {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
//     {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
//     {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
//     {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
//     {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
//     {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
//     {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
// ];

// const userBooks = books.filter( (bk) => bk.genre === 'History')

// const userBooks = books.filter( (bk) => {bk.publish} )

// console.log(userBooks);

// ab kya chahiye, theek hai , to user ne bola hai ki jo publish date hai
// wo kya honi chahiye , aa... , greater than ya equal to bhi maan lete hai,
// equal to , to kis se honi chahiye 2000 se , to theek hai ji

// const books = [
//     {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
//     {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
//     {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
//     {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
//     {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
//     {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
//     {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
//     {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
//     {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
// ];

// const userBooks = books.filter( (bk) => bk.genre === 'History')

// const userBooks = books.filter( (bk) => {bk.publish >= 2000} )

// console.log(userBooks);

// to yeh aapki publish date hai 2000 se to run karke dekhte hai

// save and run

// o/p const userBooks = books.filter( (bk) => {bk.publish >= 2000} )
    //   ^

    //   SyntaxError: Identifier 'userBooks' has already been declared

// haa ji declaration to ho rakha tha to ab isko (userBooks) ko
// declare to nahi kar sakte overwrite hi kar sakte hai to yeh lijiye as follows

// const books = [
//     {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
//     {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
//     {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
//     {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
//     {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
//     {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
//     {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
//     {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
//     {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
// ];

// const userBooks = books.filter( (bk) => bk.genre === 'History')

// userBooks = books.filter( (bk) => {bk.publish >= 2000} )

// console.log(userBooks);

// 14:57

// save and run

// o/p userBooks = books.filter( (bk) => {bk.publish >= 2000} )
// ^

// TypeError: Assignment to constant variable.

// are yeh to bilkul jayaz baat hai constant declare kar diya tha
// (to sahi karte hai as follows)

// const books = [
//     {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
//     {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
//     {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
//     {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
//     {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
//     {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
//     {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
//     {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
//     {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
// ];

// let userBooks = books.filter( (bk) => bk.genre === 'History')

// userBooks = books.filter( (bk) => {bk.publish >= 2000} )

// console.log(userBooks);

// to theek hai ji save and run karte hai

// o/p []

// haa ji abhi humare pas kya aya, abhi humare pas empty array
// aa gaya (see o/p)

// kyu empty array aa gaya kyuki jo bk.publish hai ( {bk.publish >= 2000} ), dekhte hai,
// kya 2000 ke baad koi publish hui nahi book (see in array -- const books =)

// haa ji book publish to hui hai 2000 k baad , par yeh kaise aya humare pas

// yeh jo bk books hai ( {bk.publish >= 2000} ) aa... jitna bhi hai wo
// publish to hui hai ( {bk.publish >= 2000} ) dekh sakte ho error, haa
// kaafi logo ne to pakad liya hoga error

// abhi just discuss kara hai apke saath kitna discussion kiya hai,
// yahan pe ( {bk.publish >= 2000} ) humne ek scope open kar liya hai,
// yahan pe ( bk.genre === 'History' ) humne scope open nahi kiya tha

// to ya to scope hatao ( yahan se -- {bk.publish >= 2000} )

// ya fir kya karo return keyword ka use karo as follows
// i.e. { return bk.publish >= 2000 }

// const books = [
//     {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
//     {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
//     {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
//     {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
//     {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
//     {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
//     {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
//     {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
//     {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
// ];

// let userBooks = books.filter( (bk) => bk.genre === 'History')

// userBooks = books.filter( (bk) => { return bk.publish >= 2000} )

// console.log(userBooks);

// haa ji aisa nahi hai ki single line mei likh rahe hai to return keyword
// use nahi hoga , wo hoga yahan pe

// save and run

// o/p [
//   {
//     title: 'Book Five',
//     genre: 'Science',
//     publish: 2009,
//     edition: 2014
//   },
//   {
//     title: 'Book Eight',
//     genre: 'Science',
//     publish: 2011,
//     edition: 2016
//   }
// ]

// 16:07

// ===================================================================================

// Achha sirf itna hi nahi hai, aa... suppose kariye ki humare pas
// yeh dono book ..., aur thoda pehle jaate hai 2000 se , 1995  pe jaate hai,
// aur dekhte hai kya result aata hai

// const books = [
//     {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
//     {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
//     {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
//     {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
//     {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
//     {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
//     {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
//     {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
//     {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
// ];

// let userBooks = books.filter( (bk) => bk.genre === 'History')

// userBooks = books.filter( (bk) => { return bk.publish >= 1995} )

// console.log(userBooks);

// o/p [
//   {
//     title: 'Book Three',
//     genre: 'History',
//     publish: 1999,
//     edition: 2007
//   },
//   {
//     title: 'Book Five',
//     genre: 'Science',
//     publish: 2009,
//     edition: 2014
//   },
//   {
//     title: 'Book Eight',
//     genre: 'Science',
//     publish: 2011,
//     edition: 2016
//   }
// ]

// haa ji abhi dekh sakte hai ki 1995 k baad to kar diya hai
// lekin humare pas do ( 2 ) consition hai dekhiye

// yeh jo book hai (see o/p book three) yeh history category ki hai
// yeh (see o/p book five) science category ki hai
// aur yeh (see o/p book eight) science category ki hai

// ab humara interest sirf uss book mei hai jo 1995 k baad publish hui hai
// aur wo history category ki honi chahiye yani ki genre uska history
// hona chahiye

// to hum yahan kya kar sakte hai simply aate hai
// ab isko hum next line mei likh lete hai kyuki return
// ab samajh mei aa hi gaya hai hume (as follows)

// const books = [
//     {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
//     {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
//     {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
//     {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
//     {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
//     {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
//     {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
//     {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
//     {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
// ];

// let userBooks = books.filter( (bk) => bk.genre === 'History')

// userBooks = books.filter( (bk) => { 
//     return bk.publish >= 1995
// } )

// console.log(userBooks);

// to next line mei likh liya isko ( return wali line ko )

// sirf itna hi nahi hume yahan pe aur ek condition check karni hai
// to humne padha tha aur ek condition kaise check karte hai,
// ampercent lagayiye -- && (as follows)

// const books = [
//     {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
//     {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
//     {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
//     {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
//     {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
//     {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
//     {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
//     {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
//     {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
// ];

// let userBooks = books.filter( (bk) => bk.genre === 'History')

// userBooks = books.filter( (bk) => { 
//     return bk.publish >= 1995 &&
// } )

// console.log(userBooks);

// agar or check karni hoti dono mei se ek bhi sahi ho to de dijiye to usko
// kar sakte hai, but hume to dono hi karni hai (condition)

// to hum kya chahte hai jo book hai (bk) uska jo genre hai (bk.genre)
// wo kya hona chahiye (bk.genre ===) , wo hona chahiye "History"
// (bk.genre === "History")

// const books = [
//     {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
//     {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
//     {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
//     {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
//     {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
//     {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
//     {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
//     {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
//     {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
// ];

// let userBooks = books.filter( (bk) => bk.genre === 'History')

// userBooks = books.filter( (bk) => { 
//     return bk.publish >= 1995 && bk.genre === "History"
// } )

// console.log(userBooks);

// to abhi humare pas ek hi book aane ki sambhavna hai

// save and run

// o/p [
//   {
//     title: 'Book Three',
//     genre: 'History',
//     publish: 1999,
//     edition: 2007
//   }
// ]

// to ek hi book ayi hai humare pas (see o/p)

// =========================================================================

// to iss tareh ki practices hum karte rahenge peeche wali books mei

// aap chahein to aur bhi practices kar sakte hai jaise jiska bhi
// publication 2000 se upar chal raha hai ya 2009 se upar chal raha hai
// to aap iss tareh ka ek filter bhi likh sakte hai

// to yeh basic ho gaya isi tareh se filter aapke kaam aata hai

// ==============================================================================

// Achha ab hum chalte hai ek nayi file pe -- seven.js
// for each loop

// Ab iske andar kya hai ek yahan pe hum values
// lete hai -- const coding

// const coding

// aur ek array le lete hai kyuki kaafi ab humare
// kaam ayega

// const coding = ["js", "ruby", "java", "python", "cpp"]

// achha sabse jada jo aap ek loop jo kaam mei lenge
// wo for etc nahi lenge , actually kuch loops arrays
// k andar direct hi properties mei add kar diye jate hai
// yeh sir aage jaake aur batayenge abhi bhi ek example
// denge apko, infact de hi dete hai chaliye iss array
// (coding array) ko hum copy kar lete hai poore ko

// yahan pe (maps mdn) pe jaake right click inspect jaise
// hi aap likhenge (karenge) aur console mei jayiye
// fir console mei jo likh raha hai usko clean kar do (Ctrl + L)
// aur jaise hi hum iss coding array ko likhte hai (paste karte hai)
// ( i.e. const coding = ["js", "ruby", "java", "python", "cpp"] )
// press enter -- undefined

// aur jaise hi hum iss coding ko likhte hai yahan pe
// as follows

// then write -- coding
// press enter --  (5) ['js', 'ruby', 'java', 'python', 'cpp']

// to jaise hi aap isko dropdown ko open karenge
// (jo dropdown isme -- (5) ['js', 'ruby', 'java', 'python', 'cpp'] hai )
// to yahan pe iske prototypes open ho jayenge as follows
// 0
// : 
// "js"
// 1
// : 
// "ruby"
// 2
// : 
// "java"
// 3
// : 
// "python"
// 4
// : 
// "cpp"
// length
// : 
// 5
// [[Prototype]]
// : 
// Array(0)

// dropdown prototype as follows
// [[Prototype]]
// : 
// Array(0)

// ab prototype mei hum dekhenge ki humare pass
// kaafi kuch cheejein hai jaise hum dot length
// (.length) use karte the wo length dekhiye yahin
// pe hai -- length
// : 
// 5

// to iss tareh se aur bhi cheejein hai aapke pas
// yahan pe fill , yeh saari entries, ek yahan pe
// aapke pas hai map as follows

// map
// : 
// ƒ map()

// aur isi tareh se aapke pas aur bhi bahut saari cheejein
// hai jaise ek aur hai aapke pas forEach as follows

// forEach
// : 
// ƒ forEach()

// to yeh bhi cheej (forEach) kya hai actually
// mei loop ka hi ek parameter hai (open forEach dropdown)
// jo by default hi inject kar rakha hai
// (see forEach dropdown as follows)
// as follows
// name
// : 
// "forEach"

// kyuki sabko pata hai ki arrays agar ayenge to
// arrays pe loop to lagana hi padega
// kuch karke iterate karke values to chahiyegi
// na unki (arrays ki values jaise "js",
// "ruby", "java", "python", "cpp")

// (ab sir browser console k bahar aa gaye hai)

// to isliye sabse jada aap isko (forEach loop ko)
// kaam mei lenge

// ab isko (forEach loop ko) kaam mei lena actually mei kya hai
// bahut hi easy hai but yeh thoda sa kya hai
// higher order function hai, ab ghabrayiye mat
// higher order kya hota hai uska documentation
// bhi sir padhwate hai bahut hi aasaan hai kyuki
// functions humne itna detail mei padh liye , to wo kaam
// ab humare ayega 23:00

// dekhiye yeh aap lijiye 23:05

// dekhiye yeh aap lijiye , kya kariye coding lijiye

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding

// aur iss coding mei jaise hi dot lagayenge as follows

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.

// aur iss coding mei jaise hi dot lagayenge to aapke saare methods
// wahin pe aa jate hai, theek hai ji aap chahe to map use kijiye
// ya jitna bhi abhi aapne dekha tha wo sare methods aapko available
// hai , dot prototype (.prototype) karke nahi lena hai unka access,
// direct access milta hai, to isi tareh se humare pas ek foeEach hai
// theek hai ji as follows

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach

// ab forEach ko jaise hi aap likhenge to yeh kya bolta hai yahan pe ek
// callbackfn: (jab hum aise likhenge coding.forEach() to suggestion dega
// callbackfn:)

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach()

// iska (callbackfn:) matlab hai callback function, ab yeh callback se
// jada ghabrayiyega mat, iska seedha sa kehne ka matlab yeh hai ki
// mujhe ek function de do ki mujhe kya karna hai

// ab jis tareh se abhi humne dekha tha ki humari four wali (file k andar)
// k andar ki humne dekha tha ki automatically yeh jo arrays hai ya objects hai
// inke upar automatically jaa rahe the, humne kabhi inki length nahi batayi,
// kuch bhi nahi batayi, isi tareh se yeh jo functions hote hai inko bahut idea hai
// yeh apne aap jaante hai ki aap kis values k andar kitna bada wo array hai kya uski
// length hai , zero se hume start karna hai , yeh saari cheej inko (functions ko)
// pata hai, aapko sirf ek function dena hai aur baat karni hai, kaise dena hai
// function likhna , abhi suppose kariye yeh jo paranthesis hai ( coding.forEach() , mei () hai )
// ek minute k liye yeh assume kar lijiye yeh ( () paranthesis ) hai hi nahi
// to achha sa space dijiye yahan pe, theek hai comfort zone mei as follows


// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(  )

// ab likh dijiye function, function kaise likhte hai , ek function iss tareh se
// likhte hai as follows

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function )

// fir uske baad uska (function ka) name dete hai, suppose kariye
// name hi uska (function ka) name hai

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function name )

// uske baad hum paranthesis lagate hai (), aur uske baad hum yeh definition {} likhte hai
// as follows

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function name() {} )

// hai na ji aise hi likhte the function

// ab iss function ko ( ( function name() {} ) ) kyuki callback kaha gaya
// hai (forEach k () suggestion wala callback) , to difference itna sa
// hi hota hai ki callback jo function hota hai uske andar pehle to uska
// naam nahi hota hai, haa ji naam hata dijiye , to name hata diya humne
// as follows

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function () {} )

// uske baad yeh jo function k andar hum parameters dete the
// ( parameters hum paranthesis () mei dete the ) , kyuki array pe lagaya hai,
// to automatically yeh loop (forEach loop) itna smart hai ki har values pe
// jaa jaake jayega (array ki har values pe jaa jaake jayega)

// ab uss har value ( ["js", "ruby", "java", "python", "cpp"] ) ko aap
// bolna kya chahte ho, aapka jo man kariye wo boliye, aap usko a boliye,
// aap usko i boliye, aap usko item boliye, jo aapka man kare wo boliye

// to har array k andar item hai, to hum isko item bol dete hai as follows

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item) {} )

// automatically har bar yeh function execute hoga aur har bar iss value
// ( ["js", "ruby", "java", "python", "cpp"] ) ko yeh leke ayega as a
// parameter ( parameter means -- coding.forEach( function (item) {} ) , mei (item) )
// apne andar ( means -- coding.forEach( function (item) {} ) , mei (item) k andar
// inn values ["js", "ruby", "java", "python", "cpp"] ko leke ayega )

// ab apko iss value ( coding.forEach( function (item) {} ) , mei (item) ) k saath jo karna hai
// aap iss function ki body ( coding.forEach( function (item) {} , mei body is {} ) ) mei kar sakte hai

// ====================================================================================================

// ek bar dubara se aapko repeat kar de

// to dubara se aate hai

// yeh humne likha simply coding (yaani array ka naam)
// (as follows after array initialization)

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding

// aur bola dot forEach de do

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach

// ab forEach kya bol raha hai callback function do
// (see suggestion after () in coding.forEach())

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach()

// theek hai ji function likhte hai yahan pe
// function kaise likhte the hum yahan pe
// function function name (){}

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function greet(){} )

// basic function aise hi likhte the

// kyuki yeh callback hai (callback function hai) to iska (callback function ka)
// ka naam nahi hota hai

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (){} )

// kyuki yeh function array k andar chal raha hai, to yeh jo
// value ( array ki value -- ["js", "ruby", "java", "python", "cpp"] )
// hogi apne aap parameter ki tareh value leke ayega
// ( coding.forEach( function (){} ) , mei yahan -- () value leke ayega parameter ki tareh )
// ab isko value boliye, val boliye, item boliye jo man kare aapka
// bol sakte hai

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){} )

// aur kyuki as a parameter apko mila hai iss function k andar
// (iss callback function k andar) to aap jo chahe uske andar (callback function k andar)
// usko use karke kar sakte hai (i.e. function body mei {} mei enter karke 
// accordingly kar sakte hai) as follows

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){

// } )

// jaise hume chahiye ki hum to kuch bhi nahi karna chahte,
// iss val ( coding.forEach( function (val){} , mei jo (val) hai usko ) ko bas print kar do
// to hum dekhna to chahenge ki iske andar hai kya -- console.log(val);

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
    
// } )

// bas itna hi kaam hai iske andar

// save and run

// o/p js
// ruby
// java
// python
// cpp

// to apke pas js ruby java python cpp sab kuch aa gaya (see o/p)
// dekha bahut hi aasaan tha ,humne function liya as it is pass kar diya

// ============================================================================

// theek hai ji ab iska ek variation aur batate hai sir aapko
// yeh to ho gaya basic ki kis tareh se aap iske andar load kar sakte hai
// yeh values likh sakte hai

// Lekin jaruri nahi hai ki aap function ko isi tareh se likhe,
// agar apko yaad ho to humne arrow functions bhi padhe the,
// haa ji wo arrow functions bhi aap use kar sakte hai,
// function , function hai , arrow function ho , function keywords se ho
// function ka kaam wo hi hai

// to dekhiye wapas se karte hai, yeh likha humne coding (after array initialization)
// as follows

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding

// bola ki forEach lo ( coding.forEach )

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach

// ab usne (forEach ne) kaha ki callback dijiye after writing () after forEach
// i.e. forEach() i.e. callback function do (see suggestion)

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach()

// ab callback ( callback function ) chahe to aap function ki format mei
// dijiye, chahe to arrow function mei

// arrow function kaise likhte the, arrow function likhne k liye
// bhi humare pas basic kya tha sabse pehle -- yeh arrow

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( () => )
    
// yeh arrow aur yeh function {} as follows

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( () => {} )

// ab obvious si baat hai pehle iska naam lete the hum
// jaise suppose kariye isko (arrow function ko) bolte the greet

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( greet() => {} )

// aur uske baad equals to = laga k yeh likhte the

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( greet = () => {} )

// to naam hi to nahi likhna hai (as callback function mei naam nahi likhte)
// fucntion mei bhi to humne wahan se naam hi udaya tha
// to naam (greet) aur equals to = hata do kyuki ab isko store karne
// ki jarurat hi nahi hai (callback function ko store karne ki need hi nahi hai)

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( () => {} )

// yeh ho gaya aapka basic callback function

// 26:56

// ab iss callback function mei jaise yahan pe ( coding.forEach( () => {} ) , mei {} pe )
// apko koi value mil rahi thi to yahan pe ( coding.forEach( () => {} ) , mei () pe )
// bhi value milegi, ab usko value boliye, item boliye kya farak padta hai
// variable ka namm hai

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( (item) => {} )

// to yeh aa gaye hum yahan pe console.log kara dete hai
// aur isko bola ki yeh lijiye item print karayiye -- console.log(item)

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( (item) => {
//     console.log(item);
    
// } )

// save and run

// o/p js
// ruby
// java
// python
// cpp

// to wo hi sara ka sara print ho gaya hai (see o/p)

// =====================================================================

// theek hai yeh to ho gaya humara basic, lekin aur thoda sa isko aur interesting
// banate hai

// ab suppose kariye yeh bhi mamla nahi hai humare pas (previous eg wala), aur interesting karna hai

// to suppose kariye aap ek function likhte hai yahan pe
// iska naam hai printMe

// const coding = ["js", "ruby", "java", "python", "cpp"]

// function printMe

// theek hai yeh printMe k andar kya hota hai, yeh (printMe function) ek item leta
// hai apne pas

// const coding = ["js", "ruby", "java", "python", "cpp"]

// function printMe(item){}

// aur jo bhi aap dete ho isko wo print kar deta hai

// const coding = ["js", "ruby", "java", "python", "cpp"]

// function printMe(item){

// }

// bada hi basic sa tha kuch kaam ka bhi nahi raha yeh
// jo bhi isko do wo print kar deta hai

// const coding = ["js", "ruby", "java", "python", "cpp"]

// function printMe(item){
//     console.log(item);
    
// }

// to kya hum iss function (printMe) ko bhi pas on kar sakte hai
// kya, bilkul kar sakte hai, bahut time kiya bhi jata hai

// to dekhiye yeh wapas se humne coding liya (kyuki coding array ka naam hai)
// (after array initialization) (after printMe function definition)

// const coding = ["js", "ruby", "java", "python", "cpp"]

// function printMe(item){
//     console.log(item);
    
// }

// coding

// bola forEach (i.e. coding.forEach)

// const coding = ["js", "ruby", "java", "python", "cpp"]

// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach

// aur isko bola ki callback function chahiye
// (.forEach k baad () i.e. coding.forEach() & fir suggestion dikhayega callback function ka)

// const coding = ["js", "ruby", "java", "python", "cpp"]

// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach()

// to ya to aap function yahan ki yahan ( coding.forEach() , mei () k andar )
// hi likh lo to, to naam hatana padega aur agar aapne kahin
// aur likh rakha hai (jaise printMe function kahin aur likh rakha hai)
// to usko printMe ko ( yani kahin aur likhe hue function ko ) as a parameter usko de sakte ho
// as follows

// const coding = ["js", "ruby", "java", "python", "cpp"]

// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe)

// de diya, ab sabse interesting cheej

// save and run

// o/p js
// ruby
// java
// python
// cpp

// to wapas se print ho gaya (see o/p)
// 28:06

// Achha ek cheej dhyan rakhiyega , uska reference dena hai
// ( i.e. coding.forEach(printMe) mei (printMe) reference hai printMe function ka)
// usko yahan pe execute nahi kar dena hai

// theek hai function ko wahin pe ( i.e. yahan pe -- coding.forEach(printMe) )
// hum execute nahi kar rahe hai ( i.e. yeh -- coding.forEach(printMe() ) nahi kar rahe hai)
// bas uska reference de do , printing ka kaam wo khud kar lega

// to dekha automatic iss tareh se bhi kaam ho jata hai ki aap
// chaho to function declare kar do (jaise printMe function declare kar diya)

// to dekhiye ek hi loop k andar humne kitne tarike se cheejein yahan pe
// use kar li hai

// ===========================================================

// Achha kuch aur interesting cheejon k bare mei jaante hai

// theek hai to yeh wapas se coding pe aate hai (after array initialization)

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding

// aur isko bolte hai ki yeh forEach wala hi dijiye hume

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach()

// theek hai ab yeh jo forEach aap yahan pe use karte hai
// to sabse pehle basic wapas se hum humare arrow function pe aa jate hai
// kyuki bada aasaan rehta hai, yeh lijiye arrow functions pe aa gaye,
// chahe to function pe aa jayiye

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( () => {} )

// yeh jab yeh parameter leke aata to sabse pehle basic humne parameter kya diye
// isko -- item diya

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( (item) => {} )

// Lekin aisa nahi hai ki humesha yeh item hi leke aata hai,
// iske pass aur bhi parameters hote hai, aur bhi values hoti hai
// sirf item hi nahi aata hai

// humesha... abhi to hum kya kar rahe the , samajhne k liye sirf
// hum yahan pe console.log(item) kar rahe the as follows

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( (item) => {
//     console.log(item);
    
// } )


// itna to apko samajh mei aa chuka hai, yeh to sir ko bhi
// pata hai

// save and run

// o/p js
// ruby
// java
// python
// cpp

// Lekin humesha sirf aisa hi nahi hota hai ki iske pas yeh jo forEach ( coding.forEach( (item) => { )
// hai iske pas sirf ek hi parameter ( coding.forEach( (item) => {} , mei (item) is parameter )
// ka access hota hai iske pass kaafi kuch aur access bhi hote hai

// dusra jo access hota hai iske pas ( coding.forEach( (item) => {} )
// index bhi aata hai har bar

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( (item, index) => {
//     console.log(item);
    
// } )

// aur iske pass ek poora array ki list bhi aati hai

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( (item, index, arr) => {
//     console.log(item);
    
// } )

// 29:21

// theek hai yeh jo poora array aapne coding declare kara tha
// ( const coding = ["js", "ruby", "java", "python", "cpp"] )
// wo bhi iske pas ( i.e. forEach() k pas ) ( i.e. iske pas -- coding.forEach( (item, index, arr) => {} )
// aata hai

// 29:22

// theek hai , to hum isko print kara lete hai ki item hai, yeh bhi bata do
// ki index kya hai ( console.log(item, index); )

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( (item, index, arr) => {
//     console.log(item, index);
    
// } )

// aur yeh bhi bata do ki yeh pora array kya hai
// ( console.log(item, index, arr); )

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// } )

// to pore array ki to usually jarurat kabhi padti nahi hai
// but fir bhi kya pata pad jaye, to pata to hina chahiye hume
// kya kya uske pas parameters hai

// save and run

// o/p js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

// dekhiye (see o/p) js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// js value hai, yeh (js) item hai ( console.log(item, index, arr); )
// 0, yeh index iske pas hai ( console.log(item, index, arr); )
// aur yeh pore k pore array ka acces bhi hai [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ( console.log(item, index, arr); ) har ek k pas
// (har ek k pas means 'js' k pas, 'ruby' k pas, 'java' k pas, 'python' k pas, 'cpp' k pas
// pore k pore array ka access bhi hai)

// to ho sakta hai aap uske andar kuch karna chahte ho iss tareh ka aapka
// koi use case ho kuch iss tareh se ho to aap usko print kar sakte ho

// 29:50

// ==============================================================================================

// theek hai yeh ho gaya basic aapke pas

// ab wapas se hum humare ek aur cheej k upar aate hai jo humne
// first yaad ho agar aapko to starting mei kuch iss tareh ka discussion
// kiya tha, i think four mei kiya tha nahi three mei kiya tha (three.js)

// haa ji to aapko yaad to sie ne iss tareh ka as follows

// ["","",""]
// [{},{},{}]

// situation bataya tha ki humare pas kya hota hai array hota hai
// aur uske andar objects hote hai ( [{},{},{}] )

// kaafi objects hote rehte hai to iss tareh ki ( [{},{},{}] ) values kaafi common
// scenario hai, to yeh jo common array ka scenario hai ( [{},{},{}] ) , yeh forEach k andar
// bahut use kiya jata hai

// to dekhiye ek aur hum yahan pe values lete hai iss tareh se

// to iske andar suppose kariye ek naya hi myCoding iss bar
// declare kar lete hai

// const myCoding

// aur yeh ek array hai

// const myCoding = []

// ab iss array k andar hum kayi objects declare karte hai

// theek hai yeh humara pehla object ho gaya {}

// const myCoding = [
//     {}
// ]

// ab iske andar hum bolte hai language ka name to -- languageName
// aur language ka name de dete hai "javascript"

// const myCoding = [
//     {
//         languageName: "javascript"
//     }
// ]

// theek hai ji aur languageFileName, to file name hum "js"
// daalte hai

// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     }
// ]

// to yeh array hai, array k andar object hai to comma , separate
// karke kaafi hum iss tareh se declare kar sakte hai

// to teen ( 3 ) kar lete hai

// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     }
// ]

// to yahan pe hum de dete hai "java" aur iski file ka naam bhi
// "java" hi hai

// aur third mei hum "python" likh dete hai
// aur iske andar hum "py" likh dete hai

// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     }
// ]

// ab ek bar sir isko shrink karke dikhate hai taki
// apko pata rahe

// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     }
// ]

// ab yeh open rahe ya nahi rahe (ya shrink rahe) isse koi farak nahi padta
// but hume iske upar iteration seekhna hi padega kyuki yeh bahut common
// operation hai , database se value jo aati hai wo array ki format mei
// aati hai aur har ek value ek object hi hota hai

// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     }
// ]

// ab agar aapko forEach loop pata hai to aap 2 minute k andar
// bina soche samjhe iske andar aaraam se loop laga sakte ho

// suppose kariye humne bola mycoding

// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     }
// ]

// myCoding

// myCoding k andar humne bola forEach

// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     }
// ]

// myCoding.forEach()

// ab hume pata hai ki hum yahan pe ( myCoding.forEach() , mei () k andar  )  callback likh sakte hai
// (forEach is loop and callback is function)

// theek hai to humne kya kara yeh lijiye arrow function laga k yeh callback likh
// diya

// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     }
// ]

// myCoding.forEach( () => {} )

// ab hume pata hai yahan pe ( myCoding.forEach( () => {} ) , mei () k andar ) humare pas
// har ek value ka access hota hai, ab usko hum item bole, aa.. kuch bhi bole, aur bhi
// humare pas access hote hai item, index aur full array (arr) ka bhi access
// hota hai, hum abhi item ka hi access lete hai yahan pe

// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     }
// ]

// myCoding.forEach( (item) => {} )

// ab hume pata hai ki item k andar values ko access kaise karna
// hai

// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     }
// ]

// myCoding.forEach( (item) => {

// } )

// theek hai to console.log karte hai, yeh console.log()
// kara

// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     }
// ]

// myCoding.forEach( (item) => {
//     console.log();
    
// } )

// ab humne usko bola ki item ka access to hai , lekin
// kyuki ab yeh item kya hai, ab yahan pe jo apke pas access hai na
// wo kya hai iss object ka access hai

// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     }
// ]

// myCoding.forEach( (item) => {
//     {}
//     console.log();
    
// } )

// aur uss object k andar yeh do ( 2 ) properties likhi hui hai

// ab uss object ka aapne naam kya bol diya hai -- item bol diya hai

// to har iteration mei uss object ko aapne item hi bola

// aur item k baad kya kariye -- item. (item dot) aur aapko
// pata hai language ka file name chahiye ya language name

// hume language name chahiye , to humne language ka name bola
// console.log(item.languageName);

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
    
} )

// dekhiye kitni aasaani se aapne array k andar objects
// hai jo apne aap mei complex cheej hai , aapne 2 minute mei
// uska access le liya kyuki aapke foundation strong hai
// aapko scope pata hai, apko loops pata hai, kaafi achhe se
// aapko pata lag rahi hai yeh cheejein

// save and run

// o/p javascript
// java
// python

// (see o/p) dekhiye javascript, java, python , aapne
// array k andar object k andar uski ek value nikal li
// hai property

// ab yahan pe to 2 hi value thi i.e. languageName aur
// languageFileName , but ho sakta hai 200 values ho,
// 20 values ho , jo bhi aap easily nikaal sakte hai uska
// access le sakte hai

// yeh aapke database mei bahut kaam aane wala hai
// database se ek array aata hai, array k andar aapke pas
// mobile ka naam aata hai, uski pricing aati hai aur uska
// buy link aata hai, to aapne bas wo liya, array aya aapke pas
// 10 mobiles , aapne sabka values inject kar diya webpage k andar

// aur ek ek webpage mei aapke pas wo ek card ban jaata hai jab
// mobile ki photo aa jati hai, naam aa jata hai, uski pricing aa jati hai

// to same yehi concept hota hai itna jada wahan pe kuch fancy nahi
// karte hai, yehi basic wahan pe kaam hota hai

// ==================================================================================

// loop ka thoda sa aur baki reh gaya hai wo bhi dekhenge

// ek chota sa aur video hoga jisme loops k aur kuch basic concepts
// aur syntax aur isi tareh ki cheejon k bare mei baat karenge

// built in properties ki hi baat kar rahe hai yahan pe (documentation mei)
// aapne dekha ki kaafi properties hoti hai humare pas
// jiske bare mei bhi baat karte hai

// ================= LECTURE END ========================================================

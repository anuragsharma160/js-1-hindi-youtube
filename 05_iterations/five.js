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
// ki jarurat hi nahi hai

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( () => {} )

// yeh ho gaya aapka basic callback function

// 27:00
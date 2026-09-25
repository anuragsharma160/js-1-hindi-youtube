// dekhiye humare pass js ke andar
// aapne yeh 3 words kaafi jada constantly
// ek saath hi sune honge -- call, bind
// iss tareh ke keyword aapne sune honge
// aa... aur bhi kaafi sare keywords hote hai
// aisa nahi hai ki yeh sirf 2 hi hai

// aa... but actually mei aapne yeh dekha hoga
// ki call , bind aur apply (0:36)
// yeh jadatar kya hai ki ek hi saath
// cover bhi kar diye jate hai
// aur ek hi saath samjha bhi diye jate hai

// ab koi burai nahi hai ek saath samjhane mei
// but mujhe personally yeh lagta hai ki
// inko alag alag time duration pe samjhaana chahiye
// taki aapko samajh mei aye actually mei kar kyu rahe hai
// meaning kya hai inka (0:50)

// achha ek cheej aur bata du
// aa... jab starting mei React version 1 aya tha
// tab jadatar youtubers to react ke bare mei baat hi nahi karte the
// (0:56)
// tab react ke andar bhi bind bahut jada use hota tha
// agar aap version 1 nikaloge jab react launch hi hua tha
// tab hume access mila tha kuch logo ko internals ko wahan pe
// tode externals ko bhi diya tha, unme se mai bhi ek tha
// tab hum bind itna jada use karte the, 
// infact call bhi itna use karte the
// kyuki language ka framework itna o...
// library itna defined hi nahi thi
// itna syntactic sugar tha hi nahi uske andar
// (1:16)

// to call aur bind har jagah use karte the ki
// kuch bhi karna hai -- call lagana hai
// kuch bhi karna hai -- bind lagana hai
// abhi kahin nahi lagana padta
// language evolve ho gayi hai
// framework libraries bhi evolve ho gayi hai 
// but kaam mei ata hai

// to actually mei yeh (call bind) hai kya cheej
// dekhiye abhi hum yahan pe discuss karenge call ko
// ki call actually mei aisa usecase kya hai ki 
// call ko use karna pade , yeh keyword kaam kya karta hai humare pas
// to iske liye ek cheej humesha dhyan rakhiyega
// maine aapko yaad ho to starting mei samjhaya tha

// ki humare pass hota hai kya ek callstack , yaad hai
// bhool gaye are fir se bhool gaye
// ek callstack hota hai jahan pe sab kuch execute hota hai
// wahan pe (callstack mei) humare pas mei ek global execution context hota hai
// jo to humesha rehta hai
// fir ek function aya to uska ek context aa jata hai
// fir ek aur function aya to uska context upar aa jata hai
// jaise function hata to uska context wahan se hat jata hai

// to jab bhi wo function... ek naya function upar aata hai (2:00)
// wo apne saath wapas se poora apna execution context leke aata hai
// yaad hai bataya tha, memory leke aata hai
// callstack leke aata hai
// to wo humesha hi hoga

// aur uske andar kya hai ki kuch default property...
// jaise global context mei dekhte ho na
// ki aapke pas browser APIs request ho jati hai, vaise ho jata hai
// to kaafi aur cheejein bhi hoti hai
// har functional executional context ke andar bhi
// (2:18)

// ab ek cheej abhi humne last video mei hi just discuss kari 
// ki ek this naam ka bhi keyword hota hai jo aapko batata hai
// current execution context but by default kya hota hai
// aa...,  agar aap function ke andar wapas se function aate hai
// chaliye iska hum thoda sa advantage lete hai
// thode se aapko mai code ke through batata hu ki
// actually mei kaise kya ho raha hai
// code bhi nahi diagrams ke through batata hu

// to theek hai humare pas yeh hai ek execution context (2:46)
// theek hai ji execution context hai koi badi baat nahi hai
// iske andar top aa... sabse jo bottom mei aata hai
// yeh to aata hai humara global execution context
// theek hai ji to isko to hum likh lete hai global execution context
// Global EC hai humare pas yeh

// theek hai ab aapke pas kya hua
// iske baad (GEC) ek aur function aya
// theek hai ji function aya , 
// to uska (function ka) execution context yeh rakha
// (2nd box from bottom)

// ab ek aur function aya
// to uska execution context maine yahan rakha
// (3rd box from bottom)

// achha aisa scenario bhi to ho sakta hai
// ki suppose kariye yahan pe (outside box) maine likha text
// aur ek likha function
// yeh lijiye jo bhi uss function ka naam hai
// aur...

// ab aisa bhi to ho sakta hai uss function ke andar
// aap ek aur koi function call kar rahe ho jaise suppose kariye
// callme
// log vaise console.log hum kar hi rahe hai wahan pe sab jagah
// to callme()

// ab aisa case bhi to ho sakta hai ki aapke pas 
// ek function ho aur uske andar bhi 
// ek context call ho raha hai ( callme() )

// ab yeh suppose kariye ki aapke pas 
// yeh function (outside function) call hona tha
// to iska execution context ayega , 
// yeh lijiye aa gaya 
// (4th box from bottom)
// 3:43

// ab yeh function (outside function)
// internally iss callme() ko bhi call kar raha hai
// to iska (callme() ka) bhi to ek context ayega
// to suppose kariye iska bhi yahan pe call aa gaya
// easily, yeh lijiye iska (callme() ka)
// execution context (5th box from bottom)

// par problem kya hoti hai
// ab isko (outside function) kon batayega ki this
// yeh jo this keyword hai yeh kisko refer karega
// haa ji yeh js ke andar kaafi purani problem hai
// aajkal to kaafi solve ho gayi hai
// (4:00)

// aapko jo arrow functions etc hai wahan pe bhi
// yeh hi same actually mei milta hai karne ko
// iss wale ko (5th box from bottom) jis wale ka
// naam hai actually mei, yeh humara kiska hai
// yeh callme() ka execution context hai

// to isko ( callme() / callme() execution context )
// kon batayega this kisko refer karna hai
// kyuki iske liye ( callme() / callme() execution context )
// to sabse outer layer hai kya
// yeh function (outside function) hi hai (4:15)
// par function (outside function) ko refer kar nahi raha
// (callme() ka this / outside function ka this outside function ko refer kar nahi raha)

// to aise case mei , aisi situation mei actually mei
// this jo hai , jo aapka this keyword hai wo refer
// karta hai global execution context ko
// ab global execution context ka problem pata hai kya hai
// global execution context ka problem yeh hai
// ki jab aapke pas window object ka access hota hai
// tab to wo window object ko access karta hai
// to yahan pe (browser environment) aapke pas this jo hota hai 
// wo actually mei refer karta hai window object ko (4:39)

// Lekin jab aapke pas node wala environment hai (code editor)
// wahan pe window ka access hai nahi
// to wahan pe aapke pas empty object aata hai
// to yeh thoda sa dhyan rakhiyega interviews etc
// mei poocha jata hai
// yeh (this = window, node = {}) bada hi tricky scenario hai 

// iss scenario (this = window, node = {}) ko hum create karenge aur dekhenge ki
// actually mei problem hoti kahan pe hai
// but haa jinko yeh knowledge hai na (this = window, node = {})
// kyuki dekhiye react aaj hai
// react mei yeh problem ab hata di gayi hai
// actually mei overlap abstraction kar diya gaya hai
// but problem hai aaj bhi
// yeh problem hai , yeh real case scenario hai
// (5:02)

// to chaliye call ka mai aapko ek practical example deta hu
// ki aisa hoga kab
// to chaliye ek nayi file bana lete hai
// kyuki code se jada jaldi samajh mei aata hai cheejn ko
// mujhe aisa lagta hai, to call.js hum isko naam de dete hai

// make call.js file in 10_classes_and_oop folder
// (5:11)

// 1:10

// to iss video ke andar hum baat karenge
// javascript ke ek behaviour ka 1:13
// jisko bolte hai prototypal behaviour

// ab yeh jo prototype hai java (javascript) ke andar
// yeh actually mei bada hi unique interesting concept 
// hai, jisko samajh mei aana aapko chahiye bhi aur
// aapko dekhna bhi chahiye kaise hota hai

// Lekin sirf yeh keh dena ki prototype hi proto hai
// ya proto hai bas itna sa kar liya to ho gaya
// ya fir prototypal inheritance humne padh liya
// to ho gaya , nahi yahan pe yeh sab nahi hota hai

// actually mei jab aap javascript ka ek behaviour samajhne ki
// koshish karte hai ki kyu aur kyu aisa kar rahi hai javascript
// jo wo kar rahi hai tab aapko prototype achhe se samajh mei aata hai

// yeh sirf ek koi interview ka topic nahi hai 
// yeh actually mei javascript ka mechanism samajhne ka topic
// hai , isiliye kaafi interviews mei isko
// poocha bhi jata hai

// mid level interviews mei sirf prototype level
// tak hi chord diya jata hai beginner level jisko
// bolte hai aur jo aapke SDE 2 se 3 ka jo jump
// hota hai jab , wahan pe aapko aur indepth poocha
// jata hai javascript ke andar ki new keyword kya hai
// behind the scene kya ho raha hai yeh sab tab
// kyuki tab yeh kaam mei aata hai

// 2:03

// achha ab sirf yeh keh dena ki prototype to ek behaviour hai,
// bas ek inheritance ke liye hai, nahi yeh theek baat nahi hai
// aa..., mai samjhata hu aapko ki kaise hai
// pehle mai aapke saath screen share karta hu
// aur iss video ke andar hum thoda sa new keyword ko bhi
// dekhenge kuch function ki wapas se hum charcha karenge
// jo humne pehle functions padhe the

// iss video ke baad actually mei aapko samajh mei ayega
// function hota kya hai javascript mei ya behaviour kya hota
// hai function ka

// bada hi interesting rehne wala hai aapke liye yeh wala video
// to mai aapko sabse pehle screen share karta hu thoda sa aapko detail
// mei batata hu ki actually mei ho kya raha hai 
// humare pas maajra kya hai aur kya hum padhne ki koshish
// kar rahe hai

// theek hai to chaliye 2:46
// open google browser
// yahan pe aate hai hum browser ke andar 
// yeh wali cheej actually mei browser mei
// samjha paana jada easy rehta hai mujhe
// kyuki dekhiye right click karte hai
// inspect karte hai aur seedha 2:56
// jate hai console ke andar
// yeh clean kar dete hai jo bhi error etc
// aa raha hai koi itni problem wali baat nahi hai

// achha ab yahan kya karte hai hum yahan pe
// gaur se dekhiyega ek likhte hai const
// ya let bhi likh lijiye koi dikkat wali baat nahi hai
// (write const in browser console)
// isko bolte hai newHero 
// const newHero

// theek hai, ab yeh newHero kya hai actually mei
// ek array hai , const newHero = []
// aap koi bhi aur bhi le sakte the object bhi le sakte the
// kuch bhi le sakte the

// iske andar ek do value daal dete hai to newHero
// suppose kariye ek to hulk iske andar aa gaya hai
// aur ek spiderman aa gaya
// const newHero = ["hulk", "spiderman"]
// theek hai 2 hi bahut hai hume
// ab jaise hi maine yeh kaam kiya (enter kiya in browser console)
// (undefined aya in browser console)
// to undefined aaya kyuki kuch return humne kiya
// hi nahi tha bas wo (newHero) declare ho gaya memory ke andar space
// chali gayi (3:32)

// theek hai ji yahan tak baat theek hai
// jaise hi hum aate hai newHero ke upar 
// ( newHero likha in browser console and enter )
// ab maine yeh dekha ki console mujhe actually mei
// kuch information aur bhi deta hai ki newHero jaise
// hi mai open karta hu (dropdown open newHero)
// expand karta hu yahan pe to mujhe mila 
// zeroth position pe hulk
// first position pe spiderman
// aur mujhe pata hai ki uski (array ki) ek length property
// bhi hoti hai jo mujhe actual real length batati hai
// ki 1 aur 2 iske andar 2 elements hai
// zero se start yahan pe length property nahi karti hai

// 3:56

// uske baad aap dekh rahe hai ki yahan pe ek prototype
// naam ki bhi ek cheej hai jisko bol rahe hai array zeroth
// (  [[Prototype]]: Array(0)  )
// to achha ... yeh hi (  [[Prototype]]: Array(0)  ) wo prototype hai
// jiske bare mei hum discuss karenge ki
// yeh kyu exist karta hai (4:06)
// kya javascript ka behaviour hai

// ab javascript ka ek behaviour mai aapko yahin pe bata deta hu
// bina mystery kare ki javascript ka jo default behaviour hai
// wo hai prototypal behaviour yani ki upar se upar
// javascript kya hai haar nahi maanti hai itni jaldi
// agar usko koi cheej nahi mil rahi hai aap jo expect karna chah
// rahe ho ya dhoodhna chah rahe ho (4:21)
// to wo aur uske layer pe upar jaake dekhti hai
// aur upar jake dekhti hai (4:25)

// to wo parents ko access karti hai , 
// grandparents ko access karti hai ,
// aur grand grand parents ko access karti hai 
// to haar nahi maanti hai javascript
// jab tak ki usko null value na mil jaye

// 4:33

// theek hai to yeh hi uska prototypal behaviour hai
// aur isi behaviour se actually mei linked hoke
// aapka jo this keyword hai wo bhi kaam karta hai
// aapke jo kayi log kehte hai arrow functions ke andar
// humare pas this ka access nahi hota , wo isiliye
// nahi hota kyuki yeh prototype wahan pe aa jata hai
// 4:47

// kabhi detail mei iske bare mei aur hum theory ke andar
// discuss karenge ki kyu ho raha hai but itna jaan lijiye
// abhi ke liye ki yeh prototype hi wo hai jo aapko
// new keyword ka access de raha hai ya hume working 
// uski (new keyword) mili hai 

// classes aapko mili hai iske (prototype) through
// hi mili hai 
// aur aapka this keyword hai wo bhi isi ke (prototype) through
// kaam kar raha hai
// aur jo aapka prototypal inheritance hai ya inheritance
// javascript ke andar aa raha hai wo bhi isi ke (prototype) through
// aa raha hai

// kaafi confusing hai , nahi confusing nahi hai actually mei
// behaviour hai to yeh yaad hi karna padega...
// yaad to nahi but haa samajhna hi padega ki behaviour hai
// isko (javascript / prototype) agar khud se koi cheej nahi pata
// to yeh pochne mei nahi sharmati hai javascript 

// jaise aapko agar prototype abhi nahi samajh aa raha to
// aap aye na mere channel pe
// yahan se nahi samajh aa raha to kisi aur channel pe jaoge
// but samajh ke rahoge, wo hi behaviour javascript ka hai

// to iss prototype (  [[Prototype]]: Array(0)  )
// ko open karte hai (5:27)
// achha theek hai to humne open kiya to hume kuch methods mile
// jo hume already pata hai ki haa array ke saath aate hai jaise ki
// flatMap ho gaya, forEach ho gaya, indexOf ho gaya, join ho gaya,

// theek hai methods hume milte hai, lekin agar mai thoda sa scroll (scroll down)
// karu to wapas se humare pas kya sahab dikh gaye prototype dikh gaya hai
// (  [[Prototype]]: Object  )
// achha ji yeh kya baat hai, 
// to maine bataya na prototypal behaviour matlab haar nahi maan na
// jo mil gaya wo to theek hai satisfy ho gaye hum
// lekin aur kya mai dekh sakta hu
// aur kya kar sakta hu

// to yeh hi javascript ka behaviour hai
// ki agar yahan nahi mila to aur upar 
// yahan nahi mila to aur upar
// to isi ko hum inheritance bhi bolte hai
// javascript ke andar, prototypal inheritance

// 6:00

// ab dekhiye further mai isko open karta hu
// (  [[Prototype]] : Object  )
// theek hai ji object yahan pe mil gaya
// ( constructor : ƒ Object() / [[Prototype]] : Object  )
// to aapko yeh constructor ( constructor : ƒ Object() )
// hasOwnProperty, isPrototypeOf
// bahut sari cheejein mil rahi hai

// achha wahan se ab mujhe yeh prototype nahi mil raha
// (further prototype nahi mil raha)
// jaise iss tareh se prototype (  [[Prototype]] : Object  )
// mil raha tha sabke andar

// ab mai aur open kar raha hu (  [[Prototype]] : Object  )
// to yahan pe mujhe nahi mil raha hai
// ( further prototype nahi mil raha inside dropdown of [[Prototype]] : Object )
// (6:16)

// haa yahan pe ( inside dropdown of [[Prototype]] : Object )
// mere pas getter aur setter hai proto ke
// (  get __proto__: ƒ __proto__()
//    set __proto__: ƒ __proto__()   ,  seebrowser console)

// yeh (getter aur setter proto ke) apne aap mei ek function definition hai
// (dropdown open -- get __proto__: ƒ __proto__())
// aur inn function definition ke andar bhi 
// apne aap mei ek prototype bhi hai

// yahan pe method mujhe mil raha hai (prototype of get __proto__: ƒ __proto__() is method / function )
// (open prototype of get __proto__: ƒ __proto__())
// lekin dekhiye yahan pe call bind etc sab hai

// 6:28

// lekin iske baad yahan pe prototype object hai
// (  [[Prototype]]: Object  )
// further isko aap open kar lijiye
// to uske bhi further...

// to yeh detail mei jata hi rehta hai
// (  [[Prototype]]: Object , close kar diya )

// to yeh actually mei rukta kahan pe hai
// to yeh bhi to jaan na jaruri hai kyuki agar mai
// isko bhi open karta jaunga to yeh lijiye
// iss prototype ko bhi open kar liya 
// (  [[Prototype]]: Object , ko open kar liya wapas )

// iske ( [[Prototype]]: Object ) andar wapas se getter setter
// prototype mil gaye
// (open -- get __proto__: ƒ __proto__())

// yeh mil gaya
// (open [[Prototype]]: ƒ ())

// to jaane ko to yeh endless jaa raha hai (6:45)
// to actually mei rukta kahan pe hai
// yeh sab ho kya raha hai aur kaise ho raha hai
// 6:49

// (  close  [[Prototype]]: Object under [[Prototype]]: Array(0) )
// iske bare mei bhi detail mei bataunga
// but abhi ke liye yeh maan lijiye aap
// ki jaise hi mai iss level pe aa gaya
// (  close  [[Prototype]]: Object under [[Prototype]]: Array(0) )

// (  close [[Prototype]]: Array(0) )
// ki suppose kariye sabse pehle array tha
// (  newHero )

// (  open [[Prototype]]: Array(0) )
// array ke andar prototype aya
// ( [[Prototype]]: Array(0) )
// theek hai ji

// ab uske baad maine jab ek dum end mei gaya to mujhe yeh
// object level ka prototype mila
// (  [[Prototype]]: Object )
// 7:02

// ( open [[Prototype]]: Object )
// aur iske baad further mujhe getters aur setters mujhe
// proto mei mil rahe hai
// ( get __proto__: ƒ __proto__()
//   set __proto__: ƒ __proto__() )

// but further wo jo object prototype aisa (  [[Prototype]]: Object )
// dikh raha hai, wo dikhna band ho gaya hai
// 7:09

// haa ji ab isko actually mei hum diagram se samajh lete hai
// to ek diagram yahan pe mai aapke liye chota sa bana deta hu
// aa..., yahan pe hum bana dete hai

// to actually mei kya hai ki aap object kuch bhi declare kariye
// x y z chahe aap string declare kijiye ya array humne declare kara 
// to abhi ke liye hum array le lete hai waise aap chahein to string
// etc kuch bhi le sakte hai
// 7:28

// to javascript ke andar ek khaas baat kya hoti hai
// ki jo bhi aap kaam kar rahe hai, wo actually mei further
// humne dekha sab kuch hi javascript ke andar hai kya
// javascript ke andar har cheej hi apne aap mei ek object hai

// to array bhi actually mei ek object hi hai
// javascript ke andar abhi mai bataunga kya kya cheej object
// hoti hai , infact sab kuch hi object hota hai abhi thoda sa
// surprise lenge (7:47)

// Lekin object kisse declare hua hai matlab
// object ka parent kon hai
// to object ka jab aap parent dekhte hai actually mei
// to uska koi parent nahi hota hai
// uske andar jo properties hai jo sab hai
// wo sab usi ki rehti hai
// 7:57

// to yahan pe jo prototype ka reference aata hai wo
// actually mei ek null ka hi reference aata hai
// getters , setters milte hai but yeh basic aapko
// dekhna padega
// 8:04

// ab kya hai actually mei agar aap iske alawa bhi dekhenge
// aapke strings bhi dekhenge , to aapke strings ka bhi yeh hi haal hai
// ki string bhi actually mei kahan se aa raha hai
// to yahan pe (string) bhi agar aap dekhenge to yeh bhi prototype kahan pe redirect
// ho raha hai object pe hi ho raha hai aur object finally null
// pe jaa raha hai (8:21)

// to end of the day hum yeh keh sakte hai
// ki javascript ke andar har ek cheej apne aap mei
// object hai aur jo properties object (see diagram) ke pass available hai
// wo sari properties strings (see diagram) ke pass bhi available hai
// aur array (see diagram) ke pass bhi hai

// usable hai ya nahi hai wo alag baat hai
// lekin jaisa ki maine aapko bataya inheritance hai
// to jo bhi aapko grandparent se mil raha hai wo
// milega to hai hi aapko, aapko hi use karna hai , nahi karna hai
// wo aapki ichha ke upar hai, aapki ichha anusaar hai
// 8:42

// to array (see diagram) ka bhi yeh hi hai
// string (see diagram) ka bhi yeh hi hai
// aur bhi jo kuch bhi dekhte hai wo sab aisa hi hai

// achha ab ek badi interesting si baat yahan pe aati hai
// ki mai yahan pe likhta hu, yeh sab to aapne (diagram)
// likh liya 
// lekin suppose kariye mai likhta hu yahan pe ek function
// 8:54

// haa ji, ab function kya hai, kya function object hai,
// ya function , function hi hai, haa yeh ek badi interesting cheej hai
// isko actually mei hume code likh ke hi samajhna padega
// aise samajh mei nahi aata hai ki yahan pe kya bolna
// chah raha hu mai aur kya hai

// par chinta mat kijiye , video ke end tak aapko sara sab kuch samajh mei 
// ayega, to chaliye ab hum chalte hai humare
// code ki taraf kyuki code mei hi samajh mei aane wala hai
// ek nayi file yahan pe banate hai
// (10_classes_and_oop folder mei nayi file banate hai)
// iss file ka naam hum rakh lete hai
// Object hi rakh lete hai, kyuki object ke bare mei hi
// samajh rahe hai to Object.js
// 9:23

// ( Make Object.js file in 10_classes_and_oop folder )
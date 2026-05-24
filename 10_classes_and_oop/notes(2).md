<!-- to sabse pehli cheej to mai aapko jo dikhana
chahta hu (1:37) wo hai

chaliye theek hai mai aapko aise hi bata deta hu
aa... important kya hai jo mai aapko batana chah
raha hu (as follows)

# javascript and classes
likh liya-->

<!-- ha ji , to mudde ki baat yeh hai ki kya javascript
mei classes hoti hai, haa ji, ab yeh apne aap mei ek badi
charcha ka vishay hai ki kya javascript ke andar classes
hoti hai

hoti nahi thi aur technically dekha jaye to abhi bhi nahi
hoti hai (2:11) -->

<!-- bahut sare log jo ki object oriented programming se
aate hai aur wo jo backage leke aate hai na saath mei
ki mai C++ se seekh ke aya hu ya java se seekh ke aya hu
ya fir object oriented hi best hai,

wo kahin na kahin galat hai honestly galat hai kyuki
yeh jitne bhi syntax hai yeh sab hai yeh sab programming
paradigm hai

programming paradigm ko aap bol sakte ho programming style
hai aapka-->

<!-- ab programming style jo hota hai wo kisi ka object oriented
style hota hai
kisi ka functional style hota hai aur bhi bahut sare kaafi achhi
books bhi hai kabhi fursat mei aapko batayenge uske bare mei -->

<!-- to programming styles hoti hai aur isse jada kuch bhi nahi
hoti hai mai aapko ek chota sa yahan pe chat gpt ka response bhi
dikhata hu bada achha response hai

kabhi kabhi use kar lena chahiye chat gpt, to chat gpt ka 
yahan pe humare pas ek response hai 
(search  following in chatgpt.com
Do javascript really have classes ?)

maine chatgpt se poocha ki kya javascript mei sahi mei classes
hoti hai, to obvious si baat hai mujhe (sir ko) pata hai nahi hoti
but uska (chatgpt ka) response dekhiye (sir ke chatgpt ka response)
yes javascript has classes
ab kuch log bas yahin tak padhenge aur kahenge dekhiye aapne to galat
kaha tha , javascript mei to classes hoti hai -->

<!-- aa..., nahi hoti hai yeh feature actually mei ES6 ke andar
introduce kiya tha ECMAScript2015 jo ki ES6 bhi hai , 
often referred to as ES6 , khud bhi bol rahe hai hum

further read... It is important to note that javascript is primarily 
a prototype based language, yeh jo word hai na, (prototype based language)
yeh agar aapko samajh mei
aa gaya to aapko bachi hui javascript bhi poori samajh mei aa jayegi-->

<!-- iske bare mei poora ek video banaunga ki prototype hote kya hai javascript
ke andar achha detail video already planned hai (3:32) 
wo bhi aapko bataunga but har baat pe yeh dhyan rakhiyega 
javascript ek prototype based language hai, na ki object oriented
na ki functional, sab kuch prototype based chalta hai iske upar
jo kuch hai wo syntactic sugar hai-->

<!-- classes yahan pe hoti hai, aur yeh khud bhi bol rahe hai 
classes are primarily syntactic sugar yani ki sirf wo syntax de diya
gaya hai taki aap kuch miss out feel nahi kar paao ki classes nahi
hai isme object kaise banaunga 

kyuki bahut sare wahan se bhi programmers aa rahe hai ab java ke
C++ ke sab yahi aa rahe hai aajkal to javascript ke andar hi

aa..., to wo sirf syntactic sugar hai behind the scene abhi bhi 
prototype hi chalta hai, inherited mechanism hai yehi chalega-->

<!-- In other words, it provides a more famaliar syntax for developers
coming from class based languages such as java and C++
wo khud bhi keh rahe hai hume bhi pata hi hai ki kahan se programmers
aa rahe hai

aur dekhiye ab yahan pe dikh raha hai ki humare pas class syntax bhi hai
constructor bhi hai (see code eg) iske bare mei bhi detail mei discussion karenge
sayHello bhi hai (sayHello() see code eg) 
sara kaam ho raha hai

behind the scene wapas se prototype hi ho raha hai-->

<!-- to yahan pe dekh sakte hai ki bol rahe hai ki person class ho gayi
hai, sab kuch ho gaya hai , sayHello() method hai , constructor hai special
hai , theek hai , maan liya wahan pe hai lekin actually mei jo nature hai
wo abhi bhi yeh hi hai behind the scene wo hi chal raha hai 
under the hood to prototypes hi hai -->

<!-- chaliye ispe aate hai, aur bhi baat karenge ispe charcha pe
(code editor mei aa gaye) 
but ab humari baat actually mei hum mord lete hai humare thode se aur
points ke upar 

first point hai -- object oriented programming

# javascript and classes

## OOP 
likh liya-->

<!-- ab yeh OOP ya OOPS jisko bolte hai yeh actually mei
hai kya,
dekhiye sabse pehli baat yeh ek programming paradign hai
wapas se repeat kar raha hu mai apne aap ko,
programmin paradigm ka simple sa matlab hai ki aapka
code likhne ka structure kaisa hota hai -->

<!-- 5:04 -->

<!-- kya style aapka preference hai aur bhi kayi styles
hai procedural hai , object oriented hai, functional,
aaj kal to aur bhi aa gayi hai, books likh rahe hai log 
iske upar poora poora-->

<!-- but theek hai aapko itna pata hona chahiye sirf yeh 
process hai javascript ke andar objects hote hai, 
achha theek hai ab jo next humare pas baat aati hai
ki theek hai object oriented maan liya classes aur yeh sab
de di par yeh jo object ki itni kahani hai ki 
object oriented programming to har cheej object hai to yeh object
actually mei hai kya -->

<!-- # javascript and classes

## OOP

## Object

likh liya -->

<!-- dekhiye object actually mei jada kuch hota nahi hai
ek simple sa aap isko bol sakte hai collection of properties
and methods-->

<!-- # javascript and classes

## OOP

## Object
- collection of properties and methods

likh liya -->

<!-- aa..., yeh aapko mai code karke bhi dikhaunga
kuch nahi properties ka matlab hai ki variables ya constant
maan lijiye aur methods wo hi function apne isse jada aur
hai hi kya uske (object) andar-->

<!-- to yeh simply itna hi hota hai aur yeh hi building blocks
hai isi se hi sara kaam hota hai, hum dekhte bhi aye hai
aise kuch functions already agar aapko yaad ho (5:56) 
to kuch toLowerCase , toUpperCase, date yeh sab dekhe the
yeh sab actually mei object hi to hai sara kaam wahin se kar
rahe hai-->

<!-- in fact promises bhi to humare object hi hai,
new karke keyword hum use kar rahe the to wahan pe bhi
wo hi kahani hai aur kaafi jagah kaam bhi aata hai -->

<!-- achha ab agar yeh ho gayi hai to seedhi si baat hai
sabse important aap question poochoge ki hume yeh 
object oriented programming ki itni jarurat hi kya padi -->

<!-- # javascript and classes

## OOP

## Object
- collection of properties and methods
- toLowerCase

## why use OOP

likh liya -->

<!-- 6:18 -->

<!-- dekhiye jarurat to nahi thi as such koi khaas
kaam chal raha tha lekin kya hota hai code bada mess up
ho raha tha aur ek concept hota hai spagetik code karke
yani ki code itna jada mess up ho gaya hai ki usme se
kuch bhi chunk reuse nahi ho raha hai to wo thoda sa ek 
problem tha wo to mai bhi maanta hu kaafi bada problem tha -->

<!-- 6:34 -->

<!-- object oriented programming aane se thoda hum 
baki ke jo java ke achhe features hai wo bhi use
kar paa rahe hai aaj kal jaise java ka ek particular 
feature jo mujhe jada achha lagta hai wo hai services

aap services bana sakte ho aur uske instances le sakte ho
baad mei bataunga kaafi detail mei project mei
but unhi sab cheejon ko avoid karne ke liye humare pas
object oriented programming aati hai-->

<!-- achha ab object oriented programming ke andar
hum kya karte hai kuch iske aap yeh bol sakte hai components
bol sakte hai inko ki components ho sakte hai ya fir
aa..., parts of object oriented programming -->

<!-- # javascript and classes

## OOP

## Object
- collection of properties and methods
- toLowerCase, toUpperCase

## why use OOP

## parts of OOP 

likh liya-->

<!-- to kuch parts hote hai , actually mei javascript ke andar
jo jada se jada aap dekhoge wo ek word use hota hai jisko
bolte hai -- Object Literal-->

<!-- # javascript and classes

## OOP

## Object
- collection of properties and methods
- toLowerCase, toUpperCase

## why use OOP

## parts of OOP
Object Literal 

likh liya-->

<!-- Literal ka matlab hai literally hai yani ki 
object bol raha hu to ek object ( {} ) hi
le raha hu -->

<!-- # javascript and classes

## OOP

## Object
- collection of properties and methods
- toLowerCase, toUpperCase

## why use OOP

## parts of OOP
Object Literal {}

likh liya-->

<!-- haa ji yeh hi iska literal meaning hai
jaise mai bolta hu -- I literally mean two,
to do (2) bol raha hu mai , do (2) hi iska 
meaning hai aur kuch meaning lene ki jarurat nahi
hai -->

<!-- to object literal aap kayi jagah yahan pe sunoge 
iske alawa aur kuch keyword aap sunoge yahan pe jaise
constructor functions , prototypes , yeh sab mai aapko
aur bhi bataunga (7:32) -->

<!-- kuch keyword lete hai unko hum discuss karne wale hai
abhi , sabse pehla hai humara -- Constructor function -->

<!-- # javascript and classes

## OOP

## Object
- collection of properties and methods
- toLowerCase, toUpperCase

## why use OOP

## parts of OOP
Object literal

- Constructor function 

likh liya-->

<!-- kaafi jagah sunenge abhi kuch examples bhi karke
dikhaunga constructor functions bhi aap sunoge
aur ek aap sunoge - Prototype 
ya fir isko proto bhi bolte hai 
jo bhi aap bolna chahein prototypes 
ispe poora ek detail video humare pas ayega hi ayega-->

<!-- # javascript and classes

## OOP

## Object
- collection of properties and methods
- toLowerCase, toUpperCase

## why use OOP

## parts of OOP
Object literal

- Constructor function
- Prototypes 

likh liya-->

<!-- obvious si baat hai classes mei ayein hai
object oriented programming to classes mei hi baat karenge -->

<!-- # javascript and classes

## OOP

## Object
- collection of properties and methods
- toLowerCase, toUpperCase

## why use OOP

## parts of OOP
Object literal

- Constructor function
- Prototypes
- Classes 

likh liya-->

<!-- aur ek jo interesting charcha karenge hum
wo karenge -- Instances pe ya fir aap isko bol
sakte hai ki kayi log isko new keyword bhi bolte
hai new , this , yeh sare instances ka hi part hai
ki new keyword , this keyword yeh sab kyu aaye 
kahan pe aye kaise aye inn sabke bare mei hum 
discussion karenge 

(8:11) -->

<!-- # javascript and classes

## OOP

## Object
- collection of properties and methods
- toLowerCase, toUpperCase

## why use OOP

## parts of OOP
Object literal

- Constructor function
- Prototypes
- Classes
- Instances (new, this) 

likh liya-->

<!-- theek hai abhi theory ke liye aap ho gaye ho
prepare ki theek hai yeh sab aane wala hai 
koi dikkat wali baat hi nahi hai isme basic
kar lete hai 

(8:17) -->

<!-- achha ek cheej mai yahan pe aapko recommend karunga
ki aap khud hi jaake padhiye, wo hai humare actually mei
4 keywords

jab bhi aap object oriented programming ki baat karenge 
kyuki hum itna detail mei nahi jaane wale but fir bhi aapko
basic bata deta hu, kayi log isko 4 pillars etc , are bahut
sare bade bade naam bhi dete hai -->

<!-- # javascript and classes

## OOP

## Object
- collection of properties and methods
- toLowerCase, toUpperCase

## why use OOP

## parts of OOP
Object literal

- Constructor function
- Prototypes
- Classes
- Instances (new, this)


## 4 pillars
Abstraction
Encapsulation
Inheritance
Polymorphism 

likh liya-->

<!-- Abstarction Encapsulation Inheritance aur Polymorphism
thoda thoda basic bata bhi deta hu aapko baki aap
kya kariye seedha jayiye chatgpt ke pas aur isko boliye
ki mujhe ek example ke saath inheritance aur 
yeh sab (4 pillars) samjhaiye -->

<!-- dekhiye abstraction ka matlab hota hai details hide kar lena
ab details hide karne ke liye sabse best example -- fetch
ab itna detail mei padha tha, aapko nahi pata internally kya
kya kaam kar raha hai to fetch kya karta hai aapse sari details
hata leta hai -->

<!-- object oriented programming yehi karta hai aapse internal
details hata leta hai taki aap chinta na kare network call kaise
ho rahi hai kya ho rahi hai, abstraction aapko de deta hai

to abstraction jahan pe bhi aa gaya usko bola jata hai ki haa wo
object oriented programming hai haa theek hai maan liya

(9:11)-->

<!-- uske baad aata hai ek concept aapka encapsulation 
ab encapsulation kya aata hai ki yar wo hi wapas se
ki encapsulate kar do cheejon ko aur bhi achhe hai but basically
yeh hai ki wrap up kar dete hai data ka uske andar se aapko
jo method function jo bhi chahiye data ko humne hide kar diya
encapsulate kar diya

jo jo aapko access karne diya wo aap kar paa rahe hai
jo jo nahi karne dena chahta , wo nahi kar rahe

to encapsulate matlab ek wrapper laga dete hai uske upar-->

<!-- 9:33 -->

<!-- baki to chatgpt hai hi aapko samjhane ke liye
 -->

<!-- Inheritance ka jo detail hai wo mai aapko abhi nahi
mai actually mei prototype wale video mei hi samjhaunga
kyuki prototype video ke saath hi aapka proto prototypes
prototypal inheritance yeh sab ek hi saath aapko samajh mei
aa jayega jis tareh se mai videos banata hu ya mai samjhata hu

(9:50)-->

<!-- Polymorphism , 2 word se bana hai aapke poly aur morphism
poly matlab many , morphism matlab swaroop bahut sare roop
to ek hi method aapke kayi kaam kar deta hai aise bahut sare methods hai
console.log etc bahut kuch hai to usi ko bola jata hai-->

<!-- to yeh recommend karunga chatgpt se padh lijiye ya kabhi 
theory padhane ka kabhi mann karega tab uss time pe hum detail mei
discussion karenge -->

<!-- abhi hum aa jate hai humare basic funde ke upar ki jo jo
hume code base related aur code base kaam padhna hai wo hum 
padh lete hai yahan pe theek hai ji-->

<!-- Classes ke bare mei thoda aaraam se detail mei padhenge
to abhi yahan pe ek new file banate hai 
-- oop.js naam de dete hai isko -->

<!-- 10:24 -->

<!-- (move on to new file oop.js) -->

<!-- to ab sabse pehli baat aati hai jo hum baat humari
start karenge wo actually mei yeh hum Object Literal 
se start karenge kyuki object literal actually mei hai kya -->

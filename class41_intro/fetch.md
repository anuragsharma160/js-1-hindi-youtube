<!-- ab dekhiye abhi tak aapko promises
achhe se samajh mei aa gaye hai 
kaise values leni hai, kaise aata hai,
behind the scene bhi thoda thoda dimaag
chalne lag gaya hai ki kis tareh se .then()
lagaunga to wahan kya ho raha hoga -->

<!-- kisi ne .resolve() likha hoga aur wahan se
values di hogi ya values aa gayi hogi -->

<!-- 1:00 -->

<!-- wo theek aapko samajh mei aa gaya -->

<!-- kaafi hadd tak aapko async await bhi samajh mei
ayega kya uske pros and cons hai
apne aap humne karke dekha to hume samajh mei aya 
exploration se ki kaise try catch likhna jaruri hai ,
kaise async await problem create kar sakta hai kisi kisi
situation mei-->

<!-- aur promises ko agar hum handle kar rahe hai to
.then() , .catch() sare hume handle karne chahiye -->

<!-- 1:19 -->

<!-- Lekin aapko agar yaad to mai screen share karta hu
aapke saath to humne ek last mei code likha tha 
(fetch() .then .catch wala code) 
iss code ke upar hum kaafi charcha karne wale hai
-->

<!-- yeh kya aapko fetch samajh mei aya (see fetch code) -->
<!-- ab bahut sare log kahenge ki haa ji mujhe
fetch samajh mei aa gaya -->

<!-- nahi aapko fetch samajh nahi aya hai,
iss video ke baad aapko fetch samajh ayega -->

<!-- fetch kya hai ek bahut hi exciting feature hai node js
ke andar

yeh jaise hi... yahan pe aya tha , 
browser mei tha yeh available aisi baat nahi hai
(1:47)-->

<!-- Lekin jaise hi node js ke andar fetch mai use
kar paya, khushi ka thikaana hi nahi tha
kyuki isse pehle request chalta tha,
usse pehle pehle xhr request chalti thi -->

<!-- Jaise hi fetch natively node js ke andar aa gaya 
poora paradigm hi change ho gaya ki kis tareh se ab hum 
web request bhejenge 

aaj koi usko nahi dekhta but mai aapko purani wapas leke chalunga
taki aapko uska impact samajh mei aye aur detail mei hum
uspe jaa payein-->

<!-- achha sirf itna hi nahi mai aapko yahan pe ek aur
cheej dikhata hu -->

<!-- 2:10 -->

<!-- aapko agar yaad ho to yeh diagram humne kuch time pehle
dekha tha (JS Engone , Web API wala diagram) -->

<!-- ki yeh diagram kaise chalta hai aur iss diagram ke
andar...

to iske (diagram) andar agar aapko yaad ho to maine 
ek cheej aapko batayi thi, 
yahan pe (fetch ke arrow wale CB CB box mei) humare pas
maine ek thoda sa pink use kar liya tha colour
thoda dikh nahi raha tha achhe se -->

<!-- aa... but yeh (fetch ke arrow wale CB CB box mei)
thoda sa maine detail discuss kara tha
yeh (fetch ke arrow wale CB CB box mei) actually mei fetch
ki vajeh se aata hai-->

<!-- ab kaise aata hai ispe wapas se hum diagram pe ayenge
kyuki diagram bahut important hai yahan pe aa... kaise kya hoga -->

<!-- 2:35 -->

<!-- but kul mila ke baat yeh hai ki kahani humari chalegi 
sirf aur sirf fetch ke pe aur iss video ke baad hi aapko 
fetch samajh mei ayega 

samajh mei to aa gaya hai kaise kaam mei lete hai but internal
details , wo jaan...,  
wo jaanenge tabhi to kehlayenge extraordinary programmer javascript ke-->

<!-- 2:48 -->

<!-- to chaliye mai aapko thodi si detail mei leke chalta hu 
aur thoda sa blog article reading bhi aapse karaunga mai yahan pe 
ki kaise hota hai ispe diagram pe (JS Engine Web API) hum baad mei ayenge-->

<!-- abhi hum wapas se repeat kar deta hu yeh samajh rahe hai hum
ki fetch kaise kaam karta hai (see code)
.then() .response ( .catch() ) mujhe pata hai ki 
yeh response ( fetch('https://api.github.com/users/hiteshchoudhary') ) aya hai 


to wo yahan pe (1st .then ke callback function ke parameter mei) send ho gaya
resolve (second .then()) reject (.catch) wo theek hai
achhi baat hai apni jagah-->

<!-- but yeh sirf jo paanch (5) words hai fetch (as follows) 

( fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))  )

aur yeh jo parameters
( fetch('https://api.github.com/users/hiteshchoudhary') mei https://api.github.com/users/hiteshchoudhary)
 hai yeh kya kya kar sakte hai iske bare mei mai aur detail mei
 jaa raha hu yahan pe-->

<!-- 3:12 -->

<!-- to pehle chalte hai ek article pe 
( https://blog.logrocket.com/fetch-api-node-js/ )
yeh article hai 2022 ka , 
jada purana nahi hai , abhi ke hisab se theek hi hai-->

<!-- 3:19 -->

<!-- but dekh sakte hai ki 2022 mei agar likha gaya hai 
aur koi excited hai -- The Fetch API is finally coming to Node.js (old heading)
(new heading -- The Fetch API is finally stable in Node.js) 

to obvious si baat hai kuch bada hi ho raha hoga yahan pe-->

<!-- aur yeh achhi ek website hai logrocket
kayi bar yeh achha likhte hai yahan pe -->

<!-- aa..., to again kaam kuch aur hai inka ( logrocket ) login based
production mei use hota hai kafi but yahan pe dekhte hai-->

<!-- aa..., to ek ek cheej hum yahan pe padhte hai -->

<!-- (old content - before Backstory , in the beginning...) 
The Fetch API was long time coming and its introduction
heralded a new era of live and interactive webpages.

On 1 Feburary 2022, the Node.js core team merged a pull request adding
the Fetch API to Node-->

<!-- to aap dekh sakte hai already abhi just hua hai agar aap
videos abhi 2023 2024 ke aas pass hi dekh rahe hai to 
ki 2022 ke andar hi aya-->

<!-- aur jaise hi yeh aya to logon ki khushi ka thikana hi nahi tha-->

<!-- to saare ke saare Node.js developers aye forward aur unhone kaha 
ki yeh kaam aapne bahut hi achha kara-->

<!-- ab thodi si backstory (Backstory , In the beginning... old heading) bhi padh lete hai ,
backstory mei bhi wo hi
batane wale hai jo hua kyuki yeh bhi purane coder hai hum bhi purane hi hai-->

<!-- ( The evolution of HTTP requests -- new heading )
 to internet explorer 5 aya wahan se hume mili xmlHttpRequest
xhr request bhi bolte hai 
kuch xml request bhi bolte hai alag alag 50 naam hai
jisko jo achha laga wo bolta hai-->

<!-- aa... to xhr request yahan pe bol lete hai -->

<!-- ( Heading -- Introducing the Fetch API)
to first jo Fetch API ayi wo humari xml ke through hi ayi
pehle hum data sara isi (xhr request) ke through hi lete the 

aur sab kuch isi se kaam hota tha-->

<!-- 4:33 -->

<!-- ( The evolution of HTTP requests -- heading )
(3rd paragraph)
fir uske baad kya hai ki xml http api worked like a charm back

(4:38) 

but as the web grew, it became so difficult to work with
javascript frameworks, notably jQuery, had to abstract it to
make implementation easier...-->

<!-- to hua kya tha basically , kaam isse (xml http request) bhi ho raha tha

Lekin kayi bar kya hai ki wo itne sare status ko track karna 
aur uske baad callback hell apne aap mei ek issue tha,
asynchronous banana apne aap mei ek issue tha, 
to wahan pe thodi si problem ayi -->

<!-- 4:56 -->

<!-- ( Introducing the Fetch API - heading )

 to uske baad kya hua ek framework to nahi kahunga
 ek library ayi choti si jisko bolte hai Fetch API
 
 to Fetch API ko bola gaya ki aap xml ke ek tareh se
 successor ho, sara kaam ab aapke through hi hoga
 
 aur jaise hi aya (Fetch API aya) sab logo ko bahut maja aya
 ki yar wo xml wala syntax nahi likhna hai ab itna if else etc ab nahi
 detect karna hai khud asynchronous kaam ho jaye
 
 5:15-->

<!-- to hum ab fetch ko hi use karenge -->

<!-- (2nd paragraph under same heading) 

to Fetch API kaafi time se to thi hi, 
lekin isko node js mei include nahi kiya gaya tha

ab nahi kiya gaya tha uske peeche bhi hum documentation mei jayenge
to uske question jab kiya gaya, 
to node js ke jo founding core member the unhone kaha ki --
-- it was noted that browser's Fetch API implementation
is dependent on browser-based Web Streams API and the
AbortController interface-->

<!-- to yeh AbortController interface kya tha iske bhi docs
mei leke jaunga -->

<!-- but 2 main reason the ki ek to web pe bahut jada heavily dependent tha 
(implementation
is dependent on browser-based Web Streams API) 
ki sara kaam agar browser available hoga to hi hoga

ab node js ke andar problem kya hai ki 
node js mei browser available nahi hai

jo humara jo engine tha wo to humne nikaal liya hai
to browser ki APIs etc the wo available hai hi nahi-->

<!-- theek hai ji achhi baat hai abhi tak to yeh keh rahe hai
ki AbortController...

AbortController actually mei kya hota hai ki jab aapki node request
gayi hui hai fetch ke through to usko aap rok bhi sakte ho
browser ke andar aapke pas full control hai

to wahan tak to theek hai lekin node js ne kya kara recently
, unhone kya kara ki hum isko include karenge javascript core
ke andar hi aur jo bhi humare browser based yeh stream APIs
hai (browser based Web Streams API) 
hum khud likhenge apni stream APIs , haa ji , to unhone
browser ka sara ka sara jo core syntax kaam tha
wo khud kiya aur yahan pe isko include karaya

6:21-->

<!-- ab uske addition se pehle javascript ke baad (bare mei) yeh syntax hai ki
kaise kaise hota hai kaise kaise obselete hai

(3rd paragraph under heading -- Introducing the Fetch API) 

aa... javascript ke andar pehle ek module hota tha
request module aur usi ke through web request bhejte the
batana padta tha pehle ki async hoga await hoga kya hoga

to unhone kaha ki dekho ji ab hum usko completely avoid kar rahe hai
ab se jo kaam hoga hum fetch ke through hi karenge yeh sab nahi karne 
wale-->

<!-- 6:39 -->

<!-- syntax dikha

(How to use the Fetch API in Node.js -- heading)
 
itna sa syntax as follows

(fetch("http://example.com/api/endpoint")
  .then((response) => {
    // Do something with response
  })
  .catch((err) => {
    // Handle error here
    console.log("Unable to fetch -", err);
  });)
  
dikhte hi sab ki khushi ka thikana hi nahi tha
ki are wah .fetch ( fetch("http://example.com/api/endpoint") )

.then (.then((response) => {)
.catch (.catch((err) => {) 

ho gaya bas kaam
are wah isse to achha kuch hai hi nahi-->

<!-- benifits etc wo hum nahi padhenge
(Benefits of using the Fetch API in Node.js -- heading
) 
hume pata hai sare benifits etc-->

<!-- Lekin ab aate hai dusre syntax pe ki achha ji yeh fetch itna hai
to actually mei fetch kar kya raha hai 

fetch mdn pe aa gaye -- (https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch)

to iske top pe jaate hai agar aap to aapko dikhega ki
fetch kya hai global fetch method hai jo ki ek process
start karta hai kisi bhi resource ko fetch karne ke liye
network ke upar-->

<!-- theek hai to network based request hai 
aur promise return karta hai jo ki promise hume
pata hai ek bar promise hume mil gaya to hume uske 
baad ki kahani humne pichle video mei hi humne detail mei
padhi hai

ki mujhe pata hai ya to resolve hoga ya reject hoga
ab based uspe mai apna decide kar lunga-->

<!-- achha promise ke andar kya hai ek cheej yaad rakhiyega
kayi bar interviews mei pochte hai yeh especially jab aap
level 2 SDE etc pe dete hai to yeh pochte hai ki promise se
aapne request kari aur wahan se ek error code aa gaya 404
(see in mdn)

to wo aapko fetch mei milega, matlab resolve mei milega ya reject
mei milega, kahan milega, wo aapko humesha as a response hi milega
wo error nahi hai, error sirf tab hoga uss case mei jab request wo kar
hi nahi paya hai browser, sirf uss case mei aapko error milta hai
-->

<!-- baki yeh jo network request hai isko nahi pata aapke error codes
aapka status 200 ho sakta hai, 404 ho sakta hai , 304 ho sakta hai
to yeh ek cheej dhyan hai yahan pe bada interesting paragraph hai isko
please padh lijiyega (3rd paragraph under -- Window: fetch() method --- heading)

theek hai umeed karta hu padh hi lenge aap-->

<!-- theek hai ab yahan pe kaha hai ki --
-- windows ka yeh jo worker global space hai (WorkerGlobalScope.location)
(see below Parameters heading) 
yahan pe aap window global space kisi pe bhi kar sakte ho yeh koi
khaas humare kaam ki baat nahi hai

8:02-->

<!-- achha yahan pe ek interesting cheej mai aapko
padhana chahunga ki jab aap yeh fetch request karte hai 
8:05

dekhiye bahut sare parameter hai cache , redirects bahut kuch kar 
sakte hai (scroll down and see) but aksar log confuse ho jaate hai
ki theek hai fetch request to mai kar dunga lekin mere ko aur bhi
cheejein saath mei bhejni padi jaise user id password kaise bhejunga
fetch mei-->

<!-- ya fir aur koi post data bhejna pada to kaise bhejunga
wo problem isliye aa rahi hai kyuki inhone kabhi bhi aake
na detail mei documentation padha hi nahi hai -->

<!-- 8:24 -->

<!-- (see under -- Exceptions heading, under TypeError 
in front of Reason - Invalid header name)
dekhiye yahan pe humne banaya ek header as follows

space in "C ontent-Type"
const header = {
'C ontent-Type': 'text/xml',
'Breaking-Bad': '<3', 
};
fetch('https://example.com/', { headers } ); 

dikh raha hai yeh const header ek object hai
iske andar content type aapne likh diya
breaking bad... jo bhi likhna tha
aapko jo bhi content
-->

<!-- to ek aapki jo request hai wo to yahan tak hai 
fetch('https://example.com/', {headers } ); mei 'https://example.com/', tak

iske baad aap options mei jo chahein wo bhej sakte hai
( fetch('https://example.com/', { headers } ); mei { headers } )-->

<!-- 8:37 -->

<!-- aur bhi yahan pe examples likh rakhe hai
ki headers bhej sakta hu mai 
( fetch('https://example.com/', { headers } ); mei { headers } )

cors bhej sakta hu yahan pe

fetch('blob://example.com/', { mode: 'cors' } ); 

uske baad aur bhi bahut sari cheejein
navigate bhi bhej sakta hu ki yeh ho jaye to kahan
pe navigate karo kya karo

fetch('https://example.com', { mode: 'navigate' });
-->

<!-- 8:47 -->

<!-- aa... aur bhi bahut sare hai ki aap poora ka poora body bhi
bhej sakte ho

fetch('https://example.com/', {
    method: 'GET',
    body: new FormData(),
}); 

method GET , jaise dekhiye bahut achha example hai
ki method hai GET , POST , PUT jo aapko bhejna hai
body hi bhej dijiye direct form data-->

<!-- ya fir aapka jo bhi object aapne banaya hai
 wo bhi bhej dijiye -->

<!-- to completely capable hai fetch sare ke sare mostly kaam 
karne ke liye to yahan pe -->

<!-- achha ab ek kya cheej hai yeh to basic hum query image etc 
yeh sab to dekhenge hi kahan pe kya ho raha hai 

(const myImage = document.querySelector("img");)

see code under -- Examples heading-->

<!-- 9:08 -->

<!-- achha iske chalte hai specification mei
see under Specifications heading
haa ji mujhe pata hai aap kabhi specification mei nahi gaye hai-->

<!-- yahan pe ( Fetch standard (old website) / Fetch (new website) ) aap click karenge 
to aapko bhej diya jayega ek naye page pe
fetch standard to fetch actually mei
-- (https://fetch.spec.whatwg.org/#fetch-method)

yeh (https://fetch.spec.whatwg.org/#fetch-method) wo
documentation hai jo browser actually mei padhte hai
mozilla , firefox , safari sab

aur fir isse implementation karne ki koshish karte hai ki
kaise kya request hoti hai , ( 4. If requestObject’s signal is aborted, then: )
reject hota hai

to yahan pe aap padhenge to aap dekhenge kaafi kuch 
ki kaise controller ( 10. Let controller be null. ) 
null ho sakta hai

detail mei summmary bata dunga chinta mat kijiye-->

<!-- but haa aapko sara syntax jitna bhi hai 
ki kasia URL structure hona chahiye (6. data: URLs) 
wo sare specifications sab yahan pe likhe huye hai

ki redirection kaise hoga
background kasie hoga (Background reading) 
-->

<!-- isko agar mujhe cors mei karna hai
(Basic safe CORS protocol setup)

ya fir mujhe request ho hatana hai 
websockets use karna hai (WebSockets)
kaise kar sakte hai -->

<!-- to chaliye , yeh to ab aa gaya aapko samajh mei
ki theek hai kaafi kuch detail hai aur bhi jaa sakte hai
mai (Sir) yahan pe adha ghanta baith ke aur baat kar sakta hu
but ab uss bare mei chalte hai jo actually mei aapke liye
useful hai aur jo aapko fetch samjhayega ki kya ho raha hai
aur kaise ho raha hai-->

<!-- 10:01 -->

<!-- to chaliye
ab kya hai basic mudde ki baat yeh hai

(JS Engine Web API wale diagram pe aa gaye)
ab interesting baat kya hai ki agar aapko yaad ho
ya aapki memory jog kara du mai thodi si 
(means revise kara du) 

yeh hai humare pas tha javascript ka engine
(10:30) (left side)
theek hai -->

<!-- yahan pe humare pas thi memory (js engine mei left side)
aur yahan pe tha callstack (js engine mei right side) -->

<!-- ab hume pata hai javascript engine ke andar iske
alawa kuch hai bhi nahi,
aa..., jo bhi function aate hai , 
ek global humare pas bottom pe rakha hi hota hai
(call stack mei bottom pe global hai) 

global execution context,
uske (global execution context) (call stack mei bottom pe global hai)
upar hum functional executional context rakhte jate hai
(call stack mei global ke upar fn , fn, fn hai) 

top se usko ( fn ) execute karte jate hai
koi aur function ke andar function aa gaya to
usko wapas se ek aur yahan pe rakh dete hai (10:50) 
(teeno fn ke upar ek aur box bana liya fn ke liye)
aur fir usko execute karate hai pehle 
(jo new fn box banaya hai usko) 
yeh hi hota aya tha-->

<!-- Lekin humne ek cheej aur dekhi thi 
ki kuch function thode special type ke hote hai 
wo kya karte hai, wo kayi bar kuch special request 
kar dete hai yahan se call ko
(jo call ka arrow hai JS Engine se Web API ki taraf)
aur humne dekha tha ki ek setTimeout pe humne
kaafi charcha kari thi 
(jo setTimeout Web API mei likh raha hai) -->

<!-- 11:04 -->

<!-- to setTimeout ko jaise hi karate hai to wo
kya karta hai -- ek register callback, 
yani ki usko register karke yahan pe (register callback box mei)
rakh leta hai-->

<!-- aur aapke pas ek maine aapko bataya tha ki 
ek task queue naam ki ek cheej hoti hai 
( register callback se down arrow task queue, jo bottom task queue hai ) 

uss task queue ke andar aapke saare callback ko rakhta jata hai
(bottom task queue ke andar CB CB) -->

<!-- aur jaise hi uske (bottom task queue ke andar CB CB)
execution karne ka time aata hai,
yahan pe automatically ek Event Loop hota hai yeh
(iss diagram JS Engine Web API diagram ka naam Event Loop hai) 
jo ki continuously check karta rehta hai ki
meri task queue (bottom wali) bhari to nahi hai

(11:24)-->

<!-- aur kya meri yeh jo call stack hai yeh khaali to nahi hai
agar hai aur yahan pe (bottom wali task queue mei CB left wala)
uska time ho gaya hai karne ka

agar 2 second , 3 second nahi hua to koi baat nahi baithe raho yahan pe 

agar ho gaya aapka time , time is up , to bas aapki bus aa gayi hai
ab aap (bottom task queue mei CB left wala) yahan se (bottom task queue se)
yahan (call stack ki taraf) nikal lijiye , jo bhi kaam karna tha kariye

11:39-->

<!-- achha yahan (bottom task queue se) se yahan ( call stack ki taraf )
 karne ka mera taatparya aapko pata hai yeh tha ki 
 Global (jo Global call stack mei likha hai)
 ke andar nahi jaata 
 
 yeh jayega to yahan se call (call stack) ke andar hi top pe hi 
 (means yeh bottom task queue se arrow out hoke
 call stack mei upar se enter hoga, 
 
 diagram mei bottom task queue se arrow out hoke 
  Add to call stack neeche se enter ho raha hai Call Stack mei
  neeche se isliye dikha rakha ahi taki diagram ganda nahi ho
  
  but wo bottom task queue se out hoke upar se enter hoga call stack mei )
  
  aur top (fn top wala in call stack) pe hi execute hoga 
  itna to pata tha sabhi ko
  -->

<!-- Lekin maine aapko yaad ho to ek chota sa hint
diya tha ki yeh jo browser ki web APIs hai (see Web API in diagram)
ab aapko samajh mei aa gaya browser kitna jada powerful hai node js
tak browser ki kuch kuch cheejein le raha hai abhi tak

aur aage bhi leta rahega , aage bhi bataunga aur aisi cheejein
 -->

<!-- Lekin (12:02) interestingly kya hai maine fetch 
( see fetch in diagram )
ke upar aapko kaafi dhyaan diya tha yahan pe 
maine box banaya tha fetch ke upar

aur aapse kaha tha ki fetch yahan se aata hai 
(means fetch se arrow out hua towards upper task queue)
aur yahan pe (upper task queue) sara kaam kar deta hai-->

<!-- ab thoda sa memory ko jog (revise) kariye 
wapas pichle video mei

(12:13)

humne kya dekha tha last mei ki aapka jo
fetch kaam kara rahe hai wo pehle execute ho raha hai
aur baaki ka jitna aap kaarnama kar rahe hai
wo baad mei aa raha hai, 
setTimeout tak baad mei aa raha hai,
aisa kaise ho raha hai-->

<!-- (12:23) -->

<!-- kyuki yeh jo queue hai na aapki (upper task queue)
yeh ek special queue banti hai ,
yeh special queue banti hai sirf aur sirf fetch ke liye 
haa ji itna kaarnama hota hai aapke fetch ke liye-->

<!-- ab fetch ke andar yeh jo queue (upper task queue)
banti hai na isko dekhiye kayi kayi books mei
aapko alag alag naam milenge

vaise iska jo default naam jadatar jagah likha hua hai
wo hai aapka micro task queue (upper task queue) -->

<!-- 12:44 -->

<!-- aur yeh jo aapki micro task queue hai, 
yeh actually mei thodi si fast queue hai 
ya priority queue bhi bol sakte hai

(micro task queue / priority queue -- 
-- likh liya upper task queue ka naam)-->

<!-- ab kayi jagah aap isko alag alag naam 
milenge, dekhiye aaj kal bahut log data structures etc
padha rahe hai, to kuch log isko priority queue
bol dete hai, kuch log isko micro task queue bol dete hai,
kuch isko fetch queue hi bol dete hai

(13:00) -->

<!-- to galat to koi nahi hai aaj ki duniya mei galat
to koi hota hi nahi hai, to sab apni apni jagah sahi hai ,
sabhi kahani ke hero hai
 -->

<!-- to yahan pe humne fetch liya (see diagram)
aur humne kya dekha ki fetch se jo bhi kaam hota
hai wo callback queue (upper task queue) ke andar aata hai 
(means fetch se arrow out hoke upper task queue mei aa gaya) -->

<!-- ab kyuki yeh promise object hai 
( fetch promise object hai / upper task queue promise object hai / 
upper task queue ke andar ka CB promise object hai ) 

to jaise hi yahan pe ho gaya
( upper task queue mei left CB pe highlight kiya Sir ne )
to iss queue (upper task queue) ki priority sabse high hoti hai

yahan pe (lower task queue mei left CB pe highlight kiya Sir ne)
jo bhi rakha hoga, usko bola jayega dekhiye ji Sir 
aisa hai aapka kaam hoga baad mei

yahan pe (upper task queue mei both CB pe ek saath highlight kiya Sir ne) lagi hui
hai ek VIP line, 
yeh VIP line jaati hai aur seedha callstack mei sabse pehle add hoti hai
(upper task queue se arrow out karke upar se callstack mei enter kiya
sir ne arrow ko , but for convinience upper task queue ke arrow out ko
neeche se enter karke dikha rakha hai) 

haa ji yehi sabse badi kahani hai iski-->

<!-- 13:30 -->

<!-- agar timing bhi same hai dono ka ki 
yeh bhi ek second mei ho raha hai (upper task queue mei left CB pe highlight kiya Sir ne)
yeh bhi ek second mei ho raha hai (lower task queue mei left CB pe highlight kiya Sir ne)
to iska (upper task queue) result pehle diya jayega-->

<!-- obvious si baat hai ki agar isko (lower task queue mei left CB pe highlight kiya sir ne)
lag hi 6 second rahe hai aur callback ko timeout mei aur
yeh (upper task queue mei left CB pe highlight kiya Sir ne) 
pehle ho gaya hai to obvious si baat hai
fir to ... -->

<!-- ya fir isko (upper task queue mei left CB pe highlight kiya Sir ne)
maan lijiye 6 second lag rahe hai, 
yeh (lower task queue mei left CB pe highlight kiya sir ne)
pehle ho gaya to obvious si baat hai iss case mei to hona hi hai
(both lower task queue and upper task queue se arrow out hoke upar se jayega callstack mei
but diagram mei upper task queue and lower task queue se arrow out hoke
callstack mei neeche se enter karke dikha rakha hai for convinience)

but aap samajh gaye baaton ko 
(13:48)-->

<!-- achha ab mai aapko thoda sa aur visualize karke batata hu ki
actually mei yeh fetch ke upar mai itna dhyan dene ko kyu keh raha tha 
(see fetch in diagram) -->

<!-- ab chalte hai event loop (diagram) se aur yeh micro task queue / priority queue 
jo bhi aapka naam kahe jo bhi aapka interviewer samajh jaye

(move on to second diagram)-->

<!-- ab dekhiye humare pas hai kya baat ki yeh jo fetch hai
(see fetch in 2nd diagram) (14:03) ( response = fetch('something') )
yeh hi sara kaam kar raha hai 
ab mujhe pata lag gaya ki iske baad comma laga ke mai yahan pe apne objects ( {} ) bhi
daal sakta hu (as follows)

response = fetch('something', {}) -->

<!-- 14:07 -->

<!-- theek hai lekin fetch jaise kaam karta hai iska internal mechanism
wo do (2) part mei divide hota hai -->

<!-- fetch jaise hi aap keyword use karte hai to abhi humne just dekha ki 
do (2) part mei aapka kaam hota hai 
ek to aapke hota hai web browser (see diagram 2nd diagram right side) 
-->

<!-- ab dekhiye aaj ki date mei mai isko web browser bolu
ya fir mai isko native node bolu yeh apne aap mei ek debate hai 
(web browser ke aage / karke node likh liya) 

kyuki aajkal node bhi wo hi kaam kar raha hai, 
unhone bhi poora implementation apne add kar diya hai,
to fetch jaise hi aap kaam karte hai, 
2 part mei aapka kaam hona start ho jata hai-->

<!-- ek uska vyakti bol lijiye ek insan bol lijiye,
ek part uska (fetch ka) jata hai browser ya fir node ki API request handle karne ke liye 
(Web Browser / node , pe highlight kiya sir ne)

aur ek part aapke kuch variables aur memories mei data space
reserve karne ke liye bhaagta hai 
( see left part 
Data :-
Onfulfilled[]
OnRejection[] )

to 2 jane (vyakti) bhaagte hai fatafat (14:47) -->

<!-- pehla aadmi jo bhaagta hai wo hai yeh wala yellow wala (left wala)
theek hai , isko (left part) hum yellow hi naam de dete hai 
yeh kya karta hai memory mei ek space reserve karta hai aapke liye --
data (see left part in 2nd diagram) 

ab uska naam exactly -- data nahi hota hai
jo bhi uska naam bolna chaho aap hitesh bol lijiye,
chai bol lijiye wo hota hai (see data left part) 

(15:02)-->

<!-- ek aapke pas array hote hai Onfulfilled []
aur ek hota hai OnRejection []
alag alag books mei alag alag jagah alag alag naam hai iske

references tak mei specifications tak mei iske naam change hote aye hai
lekin yeh jo Onfulfilled [] hai, aapne sahi pehchana
yeh aapka hai promise ka resolution yani ki resolve
aur yeh OnRejection [] jo hai wo aapka hai rejection

(15:20)-->

<!-- haa ji yeh ( Onfulfilled [] , OnRejection [] ) array hote hai 
inn arrays mei aapko directly value push karna allow nahi hai,
yeh aapki range mei hi nahi hote, aap inko access hi nahi
kar sakte, yeh private fields hote hai

yahan tak ki Data (see left part) bhi private field hi hota hai -->

<!-- dusra aapka jo kaam karta hai Mr. Green (see right part of diagram)
theek hai yeh kya karta hai web browser based API ya to access karega,
ya fir aapki node base API handle karega 
(15:41)
-->

<!-- yahan se (web browser see diagram right part) jati hai ek network request 
ab network request aap directly nahi send fire kar sakte 
aapko kuch na kuch ek resource chahiye hota hai beech mei

ya to browser (web browser see right part) aapko resource de raha hai
ya fir aapka node js environment (node see right part) aapko resource de raha hai 

yahan se milti hai aapko ek network request , theek hai ji 
(see diagram right part) -->

<!-- network request mil gayi to obvious si baat hai 
ya to network pe jayega data (right mark, see diagram right part) 
ya fir nahi jayega (cross mark, see diagram right part)
(16:00) -->

<!-- agar jaake kuch bhi response aya hai (right mark, see diagram right part) 
to wo humesha jata hai Onfulfilled[] mei (see diagram left part)
ya fir resolve mei (16:06)

agar request jaa hi nahi payi (cross mark, see diagram right part)
ya fir kuch response hi nahi aa raha atak gayi request 
to uss case mei jake rejection ( OnRejection[] ) ayega

(16:12) -->

<!-- yaad rakhiyega ek cheej , aapke jitne bhi errors bhi hai
yani ki -- 404 tak bhi file not found , network pe request gayi
tab hi to wapas mei aapko pata laga ki 404 error aya hai,
to uss case mei yeh jo data hai yeh actually mei Onfulfilled[]
mei hi count hota hai -->

<!-- (16:27) -->

<!-- haa ji yeh hui senior developer wali baat -->

<!-- theek hai ab aage chalte hai, 
yeh jo Data (see left part) hai na actually mei yeh memory mei
aapke pas reserve rehta hai,
ab yeh Data (see left part) ki value initially hoti hai empty,
undefined to nahi bol sakte ho but theek hai memory undefined hi maan
lete hai, empty hai wahan pe

to Onfulfilled[] aur OnRejection[] (see left part) kya karte hai ,
jab actually mei aapka kaam ho jayega yeh network request se
tab iss network request se 
ya to aapka yeh fire hoga ( right check mark (see right part) se arrow to Onfulfilled[] (see left part) ) 
ya fir aapka yeh fire hoga ( cross check mark (see right part) se arrow to OnRejection[] (see left part) )-->

<!-- (16:52) -->

<!-- inke (Onfulfilled[] , OnRejection[]) andar aapko milte hai function
dono ke andar (Onfulfilled[fn] , OnRejection[fn])
aur yeh function (Onfulfilled[fn] , OnRejection[fn]) responsible
hote hai Data (see left part) ko fulfill karne ke liye 
(Onfulfilled[] se arrow to Data) (OnRejection[] se arrow to Data) -->

<!-- (16:58) -->

<!-- to jo Data (see left part) aapke pas memory bani hai 
wahan se aapke pas hoti hai values fulfilled
(Onfulfilled[] se arrow to Data) (OnRejection[] se arrow to Data)

ek baar Data (see left part) ne jaise hi value fulfill kar di,
to humne kya variable banaya tha -- response
( response = fetch('something') ) 

humara variable ( response = fetch('something') ) 
global memory (see right part) mei available hai

(response: under Global Memory , see right part)
( Data (left part) se arrow to response: under Global Memory (right part) ) -->

<!-- (17:09) -->

<!-- to yeh Data (see left part) ki responsibility hai ki
jaake uss response (response: under Global Memory , (see right part))
ko fulfill kare
(Data (left part) se arrow to response: under Global Memory (right part)) 

bola tha na fetch nahi aya samajh mei, ab aya hai,
haa ji to ab aya hai aapko 

(17:18)

to jaise hi aap response likhte hai ( response = fetch('something') ) 
to actually mei aapko milta hai yeh Data (see left part)
jo aapke pas directly accessible nahi hai,
-->

<!-- samjhe kaafi kahani ho rahi hai yahan pe

aur sirf aapne kya likha fetch ( response = fetch('something') ) 
aur hum likh ke ho gaye khush ki dekho ab hume to promise bhi aata hai,
resolve bhi aata hai
rejection bhi aata hai
fetch bhi aata hai

aur humara sara kaam ho gaya hai-->

<!-- (17:34) -->

<!-- Lekin actually mei kaam ab hua hai 
aur aapko samajh mei bhi ab aya hai
ki fetch kaise kaam karta hai-->

<!-- achha browser ke andar aur bhi details hai
aur bhi internal details specification tak mei jaa sakte hai
but browser banana thodi na hai
javascript hi seekhni hai

aisi javascript to aapko koi nahi sikha raha hai 
yeh to guarantee hai-->

<!-- aur agar abhi bhi aapko revise nahi hua hai ki wo jo
baat starting mei kari thi ki share kiya hai video 
ya nahi kiya hai wo sab aap pe abhi bhi lagu hai -->

<!-- Class End -->


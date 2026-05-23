<!-- hum jaan-nenge ki kis tareh se javascript se 
hum apni api ke end points par call laga sakte hai
data ko receive kar sakte hai

aur iss data ko use karke kaafi sari 
interesting cheejein hai jo ki jaa sakti hai-->

<!-- fir iss chapter ke end mei hum mini project build 
kar rahe honge using fetch API jsike andar hum currency
converter ko build karenge humari aaj tak ki javascript ki
jitni knowledge hai jisko hum ne gain kiya hai

hum DOM, API, strings, arrays, jaisi basic cheejon ko use karenge 
apne project ko build karte time-->

<!-- 1:00 -->

<!-- let promise = fetch( url, [options] ) -->

<!-- hum baat karenge APIs ki -->

<!-- hum discuss karenge ki kis tareh se hum API calls jo
hai unko hum initiate kar sakte hai 
unhe kuch request bhej sakte hai aur kuch data receive kar sakte hai-->

<!-- to shuruaat karet hai -->

<!-- 1:34 -->

<!-- sabse pehle API revise kar lete hai -->

<!-- 2:25 -->

<!-- to APIs basically request response cycle ke upar chalte hai
ki hum unhe kuch request bhejte hai, wo hume response ki form
mei kuch data return karke dete hai 

aur yeh data kya hoga wo depend karta hai ki hum kis tareh ki API
ko use kar rahe hai-->

<!-- to finally hum API calls ko karna seekh rahe honge
aaj ke apne iss session ke andar

and API calls karne ke liye hum use karenge apne liye
fecth API ka -->

<!-- aur fetch API mai aapko pehle hi bata deta hu bahut
easy lagega hume use karne mei -->

<!-- 3:02 -->

<!-- ab jab bhi hum fetch API ki baat karte hai kisi bhi
API ki baat karte hai , 
API ki full form hai Application Programming Interface

aur generally jo humari day to day basis par hum APIs ke
saath deal karte hai, wo basically aisa interface hote hai jo
hume kuch data return karte hai

jaise for eg waiter restaurant example 
(food kis tareh prepare hua iss se koi matlab nahi hai, 
food aa gaya as final o/p) 

vaisa hi kuch interface , vaise hi kuch systems APIs hote hai
ki hum unhe request bhej dete hai, wo ab data kahan se API lekar aye,
wo data kitna accurate hai kitna nahi hai,
kaise uss data ko prepare kiya gaya hai

inn sari cheejon se hume koi matlab nahi hota 
hume bas final jo o/p wala data hai wo humari API
hume return kar deti hai-->

<!-- 3:57 -->

<!-- ab API ko call karne se pehle hum APIs ke kuch kuch
example ko dekhne wale hai -->

<!-- go to browser and search -- free apis 

bahut sare link humare pas aate hai jahan par hume kaafi sari
free public APIs mil jati hai
hum kisi bhi random link par jaa sakte hai

public-apis/public-apis: A collective list of free APIs -- link
https://github.com/public-apis/public-apis -- link ka url
-->

<!-- ab jaise yahan par (https://github.com/public-apis/public-apis) 
(scroll down and see under Index heading)
hume ek list mil jayegi of a lot of free APIs

jaise for eg hume books se related APIs search karni hai 
(click on Books under Index heading)
to yahan par books se related humare pas bahut sari different different APIs
aa jayegi, 
business se related APIs aa jayenge (see under Business heading) 
calendar se related APIs aa jayenge (see under Calendar heading)
-->

<!-- isi tareh se aap kisi dusre link 
( link -- API List: A public list of free APIs for programmers )
( link url -- https://apilist.fun/ )
par jayenge to hume wahan par kaafi sari different APIs mil jayengi
jaise yeh Food API hai for eg 
(search food api in search bar and click on it)
food api humare pas hai agar hum iss link (food api) par gaye

to generally jo bhi apis hoti hai unki apni ek documentation hoti hai
(Go to API Docs) 
(food api is not available , so click on another api and see
option -- Go to API Docs) 

documentation ke andar likha hota hai ki kis tareh se
hum uss api ko use kar sakte hai
( Click on -- Go to API Docs -- option/link)

(4:49)

aur iss tareh ( {} ) se api hume kisi ek object format ke andar data return karke
deti hai

to jaise yahan pe ( {} ) hume ek object jaisa kuch data dikh raha hai
isi tareh ka data hume api return karke deti hai, 
kab deti hai , jab hum iss tareh ke ek url (url after click on Go to API Docs)
yani ki ek link ke upar request bhej rahe hote hai-->

<!-- to APIs are nothing but endpoints jo humare url endpoints 
hote hai jaise koi link hota hai uske upar humne ek request bhej di
jaise for eg

(new tab open kar liya)

hum google.com par jana chahte hai, type google.com in search bar,
to jaise hi humne google.com likha hum iss page par aa gaye
(google ka home search page) -->

<!-- to humare browser ne kya kiya humare browser ne google.com ko
request bheji, to google ke server ke pass request gayi hogi usne fir
response mei hume yeh page (google ka home search page) bhej diya

5:24-->

<!-- isi tareh ka system apis ke saath hota hai ki humare system ko
kuch request bhejni padegi api ke end point ko aur end point
yani wo jo link hai wo fir hume kuch data return back karke dega -->

<!-- ab eg ke liye humare pas bahut sari apis hoti hai,
maine ek link aapke liye already save karke rakha hai
link -- free-apis.github.io/#/browse

so this is a page jahan pe kaafi sari apis humare pas
available hai jaise animal se related ho gayi,
jaise anime se related ho gayi,
anti malware, computers , finance 
bahut sari different different apis yahan par available hai-->

<!-- hum koi bhi ek random api choose kar sakte hai,
so let us go with this cat facts api 
jo hume cat se related facts jo hai wo return karke degi

ab yeh jo api hai iska hum github ka page bhi dekh sakte hai
documentation  bhi dekh sakte hai (scroll down and see)
(click on start developing! under API Documentation) 
iss page par hum aa gaye

to basically documentation ke andra likha hua hai
-- Base url for all endpoints (under API Documentation)
yani sare ke sare jo link hai isse
-- https://cat-fact.herokuapp.com
 shuru honge
 
 6:12-->

<!-- to heroku par yeh hosted hai 
aur endpoint mei hum
/facts jab lagayenge (see under Endpoints heading) 
to humare pas cats se related koi random fact ayega

base url yani shuru wala link -- (https://cat-fact.herokuapp.com) -->

<!-- new tab open kar liya
to humne shuru wala link likha (https://cat-fact.herokuapp.com)
aur /facts jaise hi hum enter karenge
(https://cat-fact.herokuapp.com/facts)

vaise hi kya hoga kuch data humare pas return hokar aya
(humare mei error aya)
-->

<!-- ab yeh data kis form mei hai hum agar thoda sa zoom in karein
so this is basically an array, yeh array form mei hai kyuki bahar 
aquare brackets lage hue hai aur andar kuch onjects hai

par abhi iss data ke andar kya hai usse hume jada matlab nahi rakhna
hume ek cheej notice karni hai ki haa kuch data humare pas return hoke
aa raha hai jab hum kisko request bhej rahe hai jab hum iss link
(https://cat-fact.herokuapp.com/facts) ko request bhej rahe hai-->

<!-- to yeh (https://cat-fact.herokuapp.com/facts) basically 
humara api end point hai yani humara url hai jisko hume request
bhejni padegi apni api se data wapas laane ke liye

(6:54)-->

<!-- ab yeh to hai browser se directly request bhejna
jab bhi hum apne browser ke upar koi bhi link paste karte hai
jaise google.com, amazon.com likhte hai

to humara browser automatically request bhej deta hai uss link
ke pas , uss server ke pas -->

<!-- ab hum seekh rahe honge ki wo kaam jo browser 
humare liye karta aa raha tha aaj tak wo hum apni 
javascript ke code se kaise kar sakte hai

(7:13)
to uske liye yeh jo link hai (https://cat-fact.herokuapp.com/facts)
ise copy kar lete hai, lets go to our code
code ke andar index.html file bana li
humare pas boiler plate code hai jisko humne app.js se connect kiya hai
yeh humari app.js hai

move to app(2).js file

(7:25)-->


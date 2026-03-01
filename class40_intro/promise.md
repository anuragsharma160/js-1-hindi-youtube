<!-- 1:56 -->

<!-- achha ek cheej aur bata du
javascript ke andar classes naam ka concept
kum hota hai 

hota hai, aajkal hota hai, lekin aa...
almost sabhi cheej ko as a object reference
dekha jaata hai 

ek prototype reference dekha jata
hai to uss reference se hi dekhiyega
-->

<!-- ab agar aap koi baggage saath mei leke aa rahe
hai apne saath ki java language ka , C++ ka ya
kisi aur ka jahan classes objects hote hai

new keyword dekhte hi dimag mei object aata hai ki
iss class se ek object bana diya

aisa nahi hota hai, har language alag hai to please
uss baggage ko alag rakhiyega yahan pe dekhiyega -->

<!-- 2:25 -->

<!-- to sabse pehle hum jaate hai apne browser ke andar
 -->

<!-- to yahan pe humare pas browser hai abhi aur
iske andar mai aapko dekh ke batata hu ki actually mei
hum kya kya padhne wale hai kaise kaise kaam hone wala hai

cheejo ko kaise dekhenge aap -->

<!-- promise mdn webpage open kar liya -->

<!-- ab dekhiye sabse interesting aur sabse pehli cheej to
kya hai ki dekhiye promises kya hai 

(read first line under Promise heading)

-- The Promise object represents the eventual completion
(or failure) of an asynchronous operation and its resulting value

agar yeh line samajh mei aa gayi to aadhe se jada promise to yahin samajh mei aa jayega

3:11-->

<!-- promise ka simple sa matlab hai ki jo bhi aapne usko (promise ko)
task diya hai wo (task) abhi ki abhi queue mei lag ke complete nahi hoga 

queue mei to lag gaya hai , lekin abhi ki abhi usko load nahi kiya
gaya hai, abhi complete nahi ho sakta wo (task)-->

<!-- 3:21 -->

<!-- jaise aap to chahtein hai ki javascript ke videos roj aayein
but roj to nahi aate

but sir ne ek Promise kar rakha hai ki ayenge, kab ayenge yeh nahi pata, jaise hi ayenge , notification bell mei aapko pata lag jayega

agar nahi aye to aaj Promise complete nahi hua hai, itni si hi to baat hai, bas isi baat ke saath hum yahan pe (mdn) samajhte hai-->

<!-- to itna hume samajh mei aa gaya 
(read first line under Promise heading) 
3:40

Promise object represents eventual completion (or failure)-->

<!-- ab yeh kon konse operations hai jo baad mei ho sakte hai

dekhiye bahut tareh ke operations hai iss mamle mei mai aapko
ek chota sa aa... thoda samjhana chahunga ki jaruri nahi hai
saare kaam abhi hi ho

ab bahut saare logo ke dimag mei sirf ek hi cheej aati hai ki
network request agar bheji hai to wo baad mei complete hogi 
-- nahi nahi nahi , aisa nahi hai

bahut saare kaam hai jo actually mei disk pe utni speed se nahi 
hote hai jitni speed se programming calculation hoti hai (4:03)
ya fir aapka programming ka poora poora interpret hota hai 
cheejon ko-->

<!-- for example agar aap file ko access kar rahe hai system se
to obvious si baat hai aapne shayad networking mei padha hoga
ki file access directly nahi hoti hai program ke through

aapko kernel ka access chahiye hota hai , fir kernel aapko
file laake deta hai 

4:17-->

<!-- sirf itna hi nahi kayi bar operation thode se 
calculative hote hai , jaise ki agar aapne database ko request bheji
hai , to ho sakta hai database network mei kisi aur continent
mei rakha ho wahan se response ayega

ho sakta hai, response fast aa gaya to uspe kuch calculation karna
chah rahe hai data pe to bhi time lag sakta hai (4:32)-->

<!-- crytography ke andar bhi time lagta hai kayi bar password
encrypt etc karte hai to uss case mei bhi humare pas time lagta hai -->

<!-- to aise bahut saare operation hote hai real world ke andar
jahan pe hum asynchronous programming karte hai yani ki direct
nahi ho raha, uss case mei do (2) hi option hai humare pas 

ya to hum async await laga lein ki jab tak kaam nahi ho raha tab
tak wait karo asynchronous operation hai wo bhi yahin se aata hai-->

<!-- Lekin modern programming mei jadatar hum promises laga lete hai 
(4:53) 

ab dono ( async await aur promises ) mei se kuch bhi lagayiye itna kuch detail hai nahi , mai abhi aapko performances etc bhi bata dunga
kahan se padhne hai, lekin baat sirf itni si hai ki promise
future mei jaake complete hota hai 

ab aapko examples bhi pata hai cryptographic operations hai,
network hai , file system hai , bahut hai aur bhi iss tareh ke hai
(5:06) -->

<!-- especially jab aap mobile development etc karte hai to kayi
bar aap sound devices ko activate karna chahte hai 
camera devices ko activate karna chahte hai 
to wahan pe aapko future promises hi dekhne hote hai

alag alag language mei alag alag naam hote hai but concept wo
hi hota hai-->

<!-- theek hai ji itna samajh mei aa gaya hai ab hume ki kis tareh 
se hote hai

theek hai ab iske bare mei aur aake mai aapko aur padhaunga baad mei
kaise hote hai but abhi yahan pe sirf itna sa dekh lijiye
(5:29) (scroll down in promise mdn webpage) 
ki Promise ke three states hote hai

(read line -- A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.)
-->

<!-- ab kuch logo ne socha tha ki xhr mei jab mai padha raha hu 
yeh state etc yeh kya hi kaam aane wala hai -- nahi nahi
wo isliye padhaya tha kyuki aapko yahan pe (promise mei)
bhi pending, fulfilled aur rejected (see mdn webpage) 

(
pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.
) -->

<!-- yahan pe teen (3) states hai jinke states ke hisab se 
hume kaam karna hota hai (5:43) -->

<!-- achha ab sabse interesting kya karte hai itna to humne
padh liya yeh tab mei jitna open hai wo sab hume padhna hai but abhi
nahi, 

abhi hum chalte hai kuch promises banane pe (5:51) -->

<!-- thoda sa video lengthy rehne wala hai, lekin mai aapko
saare promises yahan pe bata deta hu ki kaise kaise kya kya hote
hai

to yahin pe (09_advance_one) aate hai hum ek nayi file 
bana lete hai humare pas aur isko
bol dete hai promises.js 

ab hum directly js file mei kaam kar lete hai kyuki
promises hai -->

<!-- 6:05 -->

<!-- iske baad 09_advance_one folder mei promises.js file
mei hai -->
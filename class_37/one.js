// kuch cheejein aapko yaad honi chahiye yaad to nahi
// but aapko pata honi chahiye general knowledge maani
// jaati hai javascript ke andar ki jab bhi mai javascript
// ke bare mei baat kar raha hu to dekhiye sabse pehle javascript
// synchronous hai


// bahut sari languages ke andar asynchronous bhi hota hai jaise
// unke andar multiple threads hote hai ek thread ek kaam kar
// raha hai dusra thread ek kaam kar raha hai fir unn sabko
// merge kar diya jata hai , bahut sare aise concept hote hai
// achhi languages ke andar

// bahut advanced languages bhi aajkal aane lag gayi hai
// market mei but javascript humari purani wo hi old school
// language hai -- sab kaam synchronous hoga

// synchronous matlab ek code execute hoga uske baad ek code
// execute hoga aur uske baad ek code execute hoga aur yeh hi tarika hai
// isme hum kuch exceptions tab laate hai jab kuch extra cheejein
// hum involve kar dete hai

// lekin by default agar koi poche javascript asynchronous hai ya
// synchronous hai -- ji yeh synchronous thi hai aur humesha hi rahegi

// dusri important cheej hai yeh single threaded language hai

// achha single threaded language hai matlab ek hi thread pe sab kuch execute
// hoga , fir aap kahenge yeh to slow language hogi , aa... ha ji
// bilkul slow hai comparatively baki aur languages jiske andar multiple
// threads etc hai , lekin kabhi bhi aapko yeh language feel nahi hone deti ki
// single threaded hai kyuki bahut sara kaam delegate karke wapas
// se bulaya jata hai

// jo poora ek engine hai sirf javascript ka engine agar aap use karenge to
// obvious si baat hai ki wo single threaded hai to thoda sa execution choke
// ho jata hai performance choke ho jati hai

// Lekin achhi baat yeh hai ki kahin pe bhi sirf akela javascript engine
// milta hi nahi hai , wo jitni bhi jagah milega ek runtime
// environment mei milega, wo runtime environment browser ka bhi ho
// sakta hai, node.js ka bhi ho sakta hai

// to akela javascript ka jo engine hai wo to kahin hota hi nahi hai aur koi
// usko use bhi nahi karta hai

// theek hai to itni baat samajh mei aa gayi hai i think aapko

// 3:03

// achha ab yeh sari jo baat hai yeh hai default javascript ki
// yaad rakhiyega default javascript behaviour hai -- synchronous aur single threaded

// but default se to kaam chalta nahi hai, aage jana padega

// to uske liye humare pas ek pehle aata hai execution context

// achha execution context kya hota hai iske liye sir ne already
// ek video banaya hai agar aapko chahiye to aap yahan pe pause karke
// faftafat uss video ko 2x mei dekh ke aa jayiye 3:24

// kyuki yahan pe thoda sa execution context sir soch rahe hai ki aapko
// pata hai already kyuki kaafi lamba video banaya tha, jada kuch nahi tha thoda
// memory ke bare mei bataya tha, thoda call stack bataya tha, global execution context
// kaise function aata hai to uska alag ek context banta hai, agar aapko isse yaad
// aa gaya hai to theek hai, agar nahi aya hai to wapas se jaake uss video ko
// dekhiye

// achha ab isme hume kya mudde ki baat nikalni hai iss global execution context
// ya fir execution context se ki aapka jo line hai wo one by one execute hota hai

// humne usme bhi dekha tha ki one by one execute hota hai jaise hi function aata hai
// function ka context banta hai, ek ek step by step hota hai

// to yeh jo sir ne yahan pe line draw kari hai 3:59
// yeh hi hai aapka ek single thread ab iss single thread
// pe jaise hi usko console.log(one) (console.log -> 1) milega
// to 1 print karega

// console.log(two) (console.log -> 2) print karega (milega) to 2 print
// karega

// important baat yeh hai ki jab tak purana statement execute nahi ho gaya
// hai tab tak naye statement pe nahi aya jata hai

// yehi sir ne yahan pe likh rakha hai (4:17) ki each operation waits for
// the last one to complete before executing
// badi simple si baat hai -- ki agla kaam kab karenge jab pichla
// kaam complete ho jayega kyuki thread to ek hi hai na (see line 4:25)
// to ek hi thread pe saara hoga, to mera number jab ayega tab hi to
// execute karunga

// aur isi ke saath humne uss video mei dekh liya tha ki humare pas
// call stack bhi hai aur ek memory heap bhi hai (4:34)

// iske (call stack aur memory heap ke) bare mei hum jada kuch discuss nahi karenge
// kyuki already pata hai hume ki haa memory banti hai har bar,
// call stack hota hai , global execution context aata hai , 
// function ke top pe aate jaate hai, ek stack hume milta hai wahan pe
// to bada hi basic hai

// achha yeh to humari ho gayi hai basic baat

// ab baat karte hai humare blocking code versus non blocking code
// yehi aapka synchronous aur asynchronous hota hai
// aur isi se aapko pata lagega thode se english ke words hai synchronous
// aur asynchronous to chinta mat kijiye aapko unka meaning pata lagega

// kayi bar log programming ke andar sir ne dekha hai ki inn words
// ko acche se inka hindi mei ya apni jo bhi aapki bhaasha hai usme
// matlab nahi samajh paate hai aur confuse ho jaate hai ki sync
// kya hai async kya hai , to chinta mat kijiye language mei aye hai sir hindi mei
// to samjhayenge

// dekhiye do (2) type ke code aapke javascript mei likhe jaate hai
// ek hota hai blocking code , ek hota hai non blocking code

// naam se hi pata lag raha hai blockng code kya karega
// simple si baat hai yeh poore ke poore program ka flow
// block kar dega jaise ki 

// suppose kariye maine aapse kaha ki aap yahan pe wait kariye
// kuch mat kariyega tab tak mai jaake ek glass paani leke aata hu

// to aapne kaha theek hai ab aap jaise hai vaise ki vaise hi baithe rahege
// na aap tv chala sakte hai, na aap game khel sakte hai,
// na mobile phone dekh sakte hai , to yeh to ho gaya humara blocking code

// theek hai aur bhi example denge iske (blocking code ke)

// isi tareh se humare pas hote hai non blocking code

// usme (non blocknig code mei) kya khete hai ki ek kaam karo
// aap tab tak apna mobile phone etc chalao mai aapke liye ek
// glass paani leke aata hu

// to aap apna kaam karne mei vyasth the, maine aapko koi block nahi kara
// tab tak, to yehi hai aapka non blocking code jo ki aapke koi bhi execution
// ko block nahi karta hai

// ab agar aapne kabhi engineering mei ya kahin aur pe bhi thoda bahut
// operating system etc padha hoga to ek sabse bada jo blockng code aata hai
// ya fir jo execution... programming language ke liye sabse bada nightmare
// jo aata hai wo aata hai kisi bhi files ko read karna

// agar aap directly execute kar rahe hai, calculation kar rahe hai , mathematics
// etc jo bhi aapko karna hai to koi problem hi nahi hai programs ko
// aaj kal itne programs sufficient ho gaye hai

// Lekin jaise hi aapne kaha ki aap ek file read karke aao ya file mei
// se data leke aao to problem create hoti hai (6:26)

// kyuki agar aapko yaad ho to operating system mei kya hota hai
// ki file aapka program read nahi kar sakta hai,
// file read karne ke liye aapko jo conetxt hai wo dena padta hai
// aapke kernel ko, fir kernel jaata hai uss program ko ya uss
// file ko access karta hai, usme se jo bhi material chahiye wo read karta hai

// read karne ke baad wapas se execution diya jata hai aapke program
// ko kernel se aur fir bola jaata hai kaam ho gaya (6:46)

// ab yeh jo process hai na thread ka... yeh jo kernel hai aapke
// liye wait to nahi kar raha hai

// wo bolta hai ki ruko 10 minute mera kaam ho jaane do tab aapka kaam karenge
// bahut request aati hai aap jaisi humare pas (6:56)

// to yeh thoda sa ek problem hai kyuki tab tak aapka program jo hai
// wo kuch aur kar nahi sakta usko file kahin se read karni hai isiliye
// sir ne yahan pe (7:04) likha hai yeh read file synchronous (read file sync)

// to jab synchronous tarike se aap file ko jaake read karoge vaise to
// javascript ke pas itni browser ke andar power nahi hoti hai ki wo
// file ko read kar paye, node.js ke andar hum yeh sara ka sara padhenge
// aa... aur bhi tarike hote hai

// kis tareh se files ko read karte hai kya karte hai to file system ka
// access aapko node.js ke andar milta hai uski bhi baat karenge hum jaldi
// hi karne wale hai but abhi ke liye itna soch lijiye ki jab aap
// blocking code likhte hai aur bolte hai ki file ko read karke aaunga (7:27)
// to jitna bhi usko time lagega 1 minute 2 minute 1 second 5 second
// tab tak aapka code aur kaam nahi kar payega

// Lekin agar aapne file ko asynchronously read kara (7:37) to yaani ki
// jab tak baaki ke kaam kariye mai file mei se jo bhi aapko
// data chahiye wo read karke lata hu aur jaise hi aa jayega to mai aapko
// notify kar dunga ki file aa gaya hai

// ab aap mei se bahut log kahenge ki sir yeh jo blocking code (non blocking code)
// hai na yeh hi best hai (7:50) , non blocking code jo hai yeh hi best hai humara

// kyuki dekhiye humara program jo hai file ko bhi read kar aya (7:54)
// baaki ka code bhi execute ho gaya, to yeh hi to best tarika hai

// haa ab yahan pe karte hai bahut sare log gadbad

// ek aur apko example deta hu fir aap kahenge nahi nahi non blocking itna
// achha nahi hai

// dekhiye humare pas ek user ka data aya, uss data ko mujhe database mei
// store karna hai aur uske baad user ko notification dena hai ki jo bhi
// aapka registration hua hai (8:14) , to mujhe usko message dena hai
// register with success,

// to theek hai ji yeh maine register with success message yahan pe diya user ko

// ab user ka data mere pas aya, maine use kaha nahi nahi mai to non blocking
// code likhta hu, database mei aap save hote raho kyuki database kya hai
// file hi to hai, file hi to read write kar rahe ho, database hai kya end of the
// day -- ek file structure hai jisme aap data read ya write karke aa rahe ho
// (8:34)

// to jab tak wo data write (read) hoke aa raha hai usse pehle hi usko ek success
// message de do (register with succes)

// ab achha lagega kya aisa, ho sakta hai aap jab usme write kar rahe ho
// to koi error aa gayi ho, par aapne user ko to message bhej diya 
// registration successful, to iss case mei kya humara non blocking code
// achha hai -- nahi isliye humesha usecases hote hai humesha kuch bhi achha
// ya bura nahi hota hai, usecases hote hai 


// to iss case mei mai chahunga ki nahi nahi mai blocking code likhna chahunga
// 8:58

// ki jab tak mere database mei entry hoke mujhe response nahi mil jaye ki
// successful hua ya nahi hua , uske baad mai user ko message dena chahunga
// ki aapka jo registration hai wo successful hua hai ya nahi hua hai

// 9:09

// to iss case mei aap dekh rahe hai ki blocking code likhna bhi yahan pe
// jaruri hai , wo bhi achhi cheej hai

// bahut sare log bahut sare youtubers ya bahut sare jab aap padhte hai kahin se
// to wo kehte hai nahi nahi har cheej non blocking honi chahiye isi se
// sab... nahi nahi aisa nahi hota hai har cheej ka usecase hai

// to i think yeh samajh mei aya ab aapko ki kayi bar blocking likhna
// padta hai kayi bar non blocking likhna padta hai, to iss tareh se

// 9:27

// achha ab yeh sab ho kaise raha hai karnama, yeh sare karname ke liye
// ek chota sa diagram hum yahan pe dekh lete hai , bade hi interesting tarike se
// aapke liye diagram banaya hai

// iss diagram mei as such kuch complex cheej nahi hai but choti choti cheejein
// hai sir aapko bata dete hai

// 9:40

// sabse pehle to gaur karne layak kya kya cheejein hai, dekhiye yahan pe
// sir ne likh rakha hai javascript engine (js engine) (9:44)

// ab yeh javascript engine kya hai , alone javascript execution engine hai
// yeh pora ka pora javascript

// javascript engine banta kisse hai wo basically banta hai aapki ek to
// memory heap se (9:55) aur ek aapke call stack se (9:56)

// asli mei dekha jaye to aapka javascript engine bas itna hi hai
// yeh hi aapka sara execution karta hai aur isiliye humne
// execution context mei isko padha tha (10:03)

// Lekin jo aap jadatar execution environment etc dekhte ho jaise
// browser ho gaya, node.js ho gaya, deno ho gaya , uss sab mei
// (unn sab mei) sirf js engine nahi hai (10:12) kyuki js engine
// wapas se single threaded hai, to itna problem ho jata hai
// uske andar ki iss tareh se aapko engine nahi diya jata kahin pe
// bhi, 

// aap le sakte ho aisi koi baat nahi hai V8 engine hai lijiye
// aa... github pe rakha hua hai C++ mei designed hai aa... lijiye enjoy
// kariye but obvious si baat hai complex hai kabhi uspe bhi charcha 
// karenge aapko khool ke dikhayenge ki V8 engine kaise hota hai
// kahan call stacks hai kya kya ho raha hai kaise code C++ ka bhi
// usme likha gaya hai wo bhi kabhi bata denge aapko agar aap request karenge to

// (10:37)

// chaliye ab aate hai mudde pe , yeh hai humare pas mei javascript ka engine
// (js engine 10:41) , ab yahan pe humare pas mei ek aur cheej hai dekhiye
// web API (10:44), web API kahan pe milegi bilkul sahi baat browser ke andar
// milegi, browser ke alawa kahin pe nahi milti hai, 

// yeh baat (wen API) hum yahan pe kar rahe HAi lekin kya hota hai
// web API ke alawa kayi bar environment bhi diye jaate hai to ek
// environment aapne kaafi suna hoga -- Node (10:57) (Web API / Node)

// to isko web API maan lo ya Node

// ab agar web API hogi to aapko DOM ka access milega (11:03)
// kyuki Document Object Model to web ke andar hi hota hai
// ya browser ke andar hoga

// agar aapne Node yahan pe le rakha hai environment (Web API / Node)
// to obvious si baat hai DOM ki API (DOM API 11:10) milegi kya
// bilkul nahi milegi, kyuki wahan pe document object model hai hi nahi

// to iske bare mei aur charcha karenge jab hum node padhenge itna detail mei,
// padhna chahenge node itna hi detail mei chliye batayiyega sir ko...

// to aapke pas ek hai yahan pe Web API (11:23)

// dusri ek aur cheej aapke pas hoti hai -- yeh hoti hai -- task Queue

// yeh jo task Queue (11:28) hai na yeh hi actually mei poore javascript
// ko itna fast aur itna asynchronous banata hai

// sirf itna hi nahi jab hum abhi thodi der mei advance topic etc padhenge
// to aapke pas mei promises bhi hote hai yahan pe (11:38)

// yeh promises ki ek alag queue hoti hai (11:40) jisko high priority queue
// bolte hai dekhiye (CB CB) iss queue ke bahut saare naam hai har koi
// alag alag apna naam deta hai, 

// aa... aap isko promise queue bol lijiye (CB CB) (11:48) jada achha rahega
// aap isko high priority queue bol lijiye wo bhi theek hai

// sabne apne alag alag naam de rakhe hai kyuki as such diagram aisa hota nahi hai
// alag execution hota hai uska but samajhne ke liye yeh jada theek rahega

// to chaliye ab ek ek karke ispe baat karte hai ki kahan se kaise mamla ho raha hai
// (12:02)

// dekhiye simple si kahani hai jab bhi program execute hota hai to uska
// ek call stack banta hai (12:07) yeh hume pata hai 

// uss call stack ke andar hi humara global execution context banta hai (12:11)
// aur ek ek karke function load kiye jaate hai 
// (12:13 from bottom to top tick lagaya sir ne function mei)

// theek hai jaise jaise function ka execution khatam hota hai , unn function ko
// unload kar diya jaata hai , yeh to humne last time bhi dekh liya tha jab humne
// stack , memory inn sab ki baat kari thi (12:21)

// memory heap (12:23) ki hum jada yahan pe baat nahi karenge isme memory allocation
// hota hai jo ki last video mei hum kar chuke the, bas yeh rehta hai yahan pe

// achha ab problem kahan aati hai jab aap asynchronous type ke code likhte hai (12:30)
// tab asynchronous code jab aap likhte hai to aap chahte hai ki koi aisa resource ho
// ya koi aisa mechanism ho jiske andar mei jab mai aapko kahun ki yeh wala kaam
// karke mujhe please baad mei yaad dila dena (12:42)

// to wo saara mechanism karne ke liye humare pas yeh Web API ya fir Node API (12:46)
// iss tareh ki APIs available hoti hai

// ab chaliye ek chota sa scenario lete hai, ab suppose kariye kuch jo aapki hai
// asynchronous APIs etc yeh sab kya hoti hai aapki set timeout , set Interval
// iss tareh ki hoti hai , aur bhi available hoti hai code karke bhi dikhayenge inko

// but abhi ke liye hum chota sa set time out ka example le lete hai kyuki yeh
// easy hota hai interview mei bhi pocha jata hai

// to suppose kariye iss function (topmost function 13:06) ne aake aapse kaha ki
// mujhe to set time out call karna hai theek hai

// ab aapne kya kara set Time out call aapko kahan milega , aapki APIs ke andar
// ya to node APIs ke andar ya Web APIs ke andar kisi na kisi API mei milega aapko

// to yeh jo API ka box hai (13:17) isme maine (sir ne) yeh transfer kar diya

// to yeh jo call hai (13:20) iska transfer ho gaya hai yahan pe (13:21)
// (form left box to right box)

// to isne kaha theek hai ab kyuki asynchronous kaam hai to bole ki baaki apna
// kaam karte raho, aa... jab bhi ho jayega mai aapko yaad dila dunga ki aapne
// ek call bola tha ki 2 second baad mujhe yaad dilaao,

// set time out (13:33) kya karta hai , function ka time out kar deta hai ki 
// 2 second baad yeh jo bhi bol raha ho usko execute kar dena

// to wo bolta hai theek hai 2 second baad kar denge, to aapka jo registration
// hota hai ek register call back hota hai (13:41), uske andar register kar diya 
// jaata hai ki sahab yeh kaam to karna hai 2 minute 2 second baad yeh kaam karna hai
// (13:47) 2 minute baad aur yeh kaam kisi event pe karna hai jab koi button pe click
// ho ya kuch aisa click ho

// to isiliye aap uska call laga ke ab aapne ho sakta hai set time out pe call lagaya ho,
// ho sakta hai set interval pe lagaya ho (call lagaya) (13:54) ya fir ho sakta hai
// koi browser ke event pe aapne lagaya ho ki yeh click ho jaye , yeh load ho jaye,
// yeh hat jaye, yeh aa jaye, aa.. hover ho jaye mouse, to koi se bhi event pe
// aapne laga rakha hai (14:05)

// to wahan pe aapka hota hai ek register call back (14:07) jo aapke saare inn events
// ko register karta jaata hai,

// kyuki wo asynchronous hi to hai immediate thodi ho raha hai jab aap chah 
// rahe hai tab ho raha hai sara ka sara (14:13)

// to uske liye kya hota hai aapke pas ek task queue bhi hoti hai (14:18)
// (CB CB)

// ab yeh task queue kya karti hai , dekhiye aapke javascript engine se to
// jo program ka jo execution tha uss particular set ka wo to bahar nikal gaya
// wapas bhi to uske andar daalna padega,

// par kaise daalu kyuki bahut saare log line mei honge aisa bahut saara kaam hai
// jo aap outsource kar denge ki yeh tab kar dena , yeh tab kar dena (14:34)
// yeh tab kar dena, obvious si baat hai aisa hoga

// to ab kya hota hai ki aapke pas ek task queue naam ki bhi ek queue hoti hai
// (14:40) (CB CB)

// achha queue aur stack pata hai na

// queue ke andar kya hota hai (CB CB) yahan se last se (right se) enter kiya jaata hai
// aur front se (left se) (CB CB) data bahar nikalta jata hai
// isi ko queue bolte hai

// stack ke andar kya hota hai, stack hota hai aise box type se (14:51)

// uske andar idhar se jo jayega (top to bottom) , idhar se hi bahar ayega
// (bottom to top) (14:54)

// to jo sabse last mei jata hai usi ko bahar nikaal lete hai

// aur queue kya hoti hai , jaise aapki bill ki line hoti hai
// mc'donalds ki line hoti hai , yahan se (CB CB) (right se)
// gaadiyaan aati jaati hai aur yahan se (left se) unko burgers
// deke bahar nikaal diya jaata hai (15:04)

// simple si baat hai

// to aapka yeh jo register call back hai (15:07)  yeh kya karta hai
// yeh bolta hai ki theek hai jab bhi kaam karna hoga ya jab bhi
// aisa event hoga mai fataak se ek ek (15:12 down line from register call back)
// queue mei apne call back ko add kar dunga (CB CB)

// ab wo call back (CB) ho sakta hai aapke button ka event ho
// ho sakta hai aapka set time out ho ya jo bhi ho mai (register call back)
// yahan pe (queue mei) fataak se usko enter kar dunga

// ab yeh kya karta hai task queue , yeh task queue ka jo job hota hai
// fatafat yeh dekhna yeh khud handle karta hai aapko kuch nahi handle
// karna hota , yeh fatafat kya karta hai (left line from task queue towards js engine)
// add kar deta hai saari cheejon ko aapke jitne bhi call back hai
// unko call stack mei add kar deta hai (15:33) (Add to call stack)

// yeh call stack hai humare pas (15:35 see diagram)

// yahan se (task queue se) call back jaise hi iske pas (call back ke pas) 
// aata hai (towards js engine)
// iska job hai ki fataak se usko yahan pe (call stack mei) add kar do

// (15:40)

// ab obvious si baat hai maine (sir ne) yahan pe neeche se add kar rakha hai
// (CB (call back ko) task queue se call stack mei neeche se add kar rakha hai)
// lekin yeh (CB) neeche se add thodi na hota hai

// sir ne bataya na aapko yeh to call stack (glass type) hai to stack ke
// andar to yahi se ayega (top to bottom)
// aur yahin se jayega (bottom to top)

// to fataak se wo ka wo (top to bottom & bottom to top) 
// execute ho jaata hai

// (15:49)

// samajh gaye haa ji

// diagrams aapko jitne bhi milenge wo isi tareh se milenge arrows yahan se
// dena hai (task queue se CB bottom se add ho raha hai Call Stack mei)

// kyuki dekhiye yahan se agar sir iss tareh se diagram lagate
// (task queue se left arrow upar le jaake fir Call Stack ke andar)
// to aap kehte yeh kya ho raha hai (15:56) itna jada
// but aap samajhdaar hai stack samajhte hai ab (16:00)

// to isme koi dikkat wali baat hi nahi hai

// achha yeh sara to aapko aa gaya samajh mei to ab ek
// trick question bhi poochenge sir aap se

// chaliye pooch hi lete hai pehle

// chaliye ab sir ne bola set time out (see diagram 16:09)
// theek hai ab aapne agar call stack (see diagram) mei aapke functions
// (see diagram) execute ho rahe hai (16:12)
// aur sir ne kaha set time out zero

// to kya wo immediately execute hoga ya fir baad mei execuet hoga

// jaise suppose kariye sir ne aapse kaha ki top pe
// to maine likha ek one likha

// theek hai yahan pe to sir ne likha 1 (16:26)

// fir yahan pe (bottom next to 1) sir ek set time out likha iske andar (1 ke andar)
// zero daal diya
// as follows

// 1
// 0 (set Time out)

// 16:30

// aur fir yahan pe bola 2 
// as follows

// 1
// 0 (set Time out)
// 2

// to kya print hoga pehle 1 print hoga aur iske andar
// jo call hai mai print kara raha hu , chaliye dubara
// se likhte hai isko hum

// pehle humne 1 print karaya -- console.log() ( console.log(1) )

// fir maine ek set time out bola zero time ke baad 2 print kara do
// as follows

// 1
// 0,2

// aur fir bola 3 print kara do

// 1
// 0,2
// 3

// (16:45)

// to ab batayiye konsa kaise print hoga

// ab yeh jo question hai na yeh sir aapko
// practical bhi karke dikhayenge wahan jada samajh mei ayega
// aapko

// Lekin aapko samajhne ki baat yeh hai ki 1 to execute ho jayega

// fir aap sochenge ki are kyuki yahan pe zero time mei to turrant
// 2 execute ho jaana chahiye tha aur uske baad 3 execute hoga -- nahi

// (17:01)

// yahin pe galti karte hai log, kyuki yeh jo aapka set time out
// hai na 0,2 as follows

// 1
// 0,2
// 3

// yeh kya hoga yeh (0,2) call banke jayega 
// (from Call Stack to Web API, see diagram) (17:07)

// aur wapas se yeh call back (CB) yahan pe (task queue mei) lagega
// (17:10)

// aur fir peeche se add kiya jayega 
// (peeche se means tash queue left arrow se CB Call Stack mei add kiya jayega)

// aur tab tak aapka yeh 3 execute ho jayega

// isko bhi karenge practically but thoda sa bas isme aapka
// flow aapke dimag mei daalna chah rahe the sir (17:18)

// ki jab bhi aap iss tareh ka APIs call karte hai
// set time out set time interval etc to actually mei
// control yahan (Web API ki taraf i.e. control Call Stack se Web API
// ki taraf chal jaata hai) chal jaata hai
// chahein aapne immediate bhi kiya hai but yeh mamla to ghoom ke
// (ghoome ke means Call Stack se Web API se register call back se task queue se wapas call back)
// aane wala hai na

// haa ji to thoda sa time lagta hai wahan pe (17:28)

// iske baare mei aur charcha karenge

// achha yeh kahani to aapko samajh mei aa gayi

// ab ek thodi si aur kahani hai, kuch nayi APIs add kari gayi
// hai javascript ke andar jo ki relatively new hai jo ki hai
// jaise ki humari fetch() API (17:39) (see diagram)

// ab fetch API kya hai yeh bhi task queue pe hi kaam karti hai iska bhi
// exact same kaam hai lekin kya kara humare task queue ko
// thoda expand kiya gaya

// (17:47)

// ya fir aap yeh keh sakte hai dusri task queue ek laga di gayi
// jo ki thodi high priority ki hai

// kyuki fetch ke andar kya hota hai (see diagram) , fetch ke andar
// promise naam ka ek concept aata hai humare pas jo kehta hai ki yeh kaam
// thodi der baad kar dena agar hua ho successful to bata dena , 
// agar nahi hua ho to bhi bata dena

// (18:01)

// to aise kaam ke jo result hote hai wo humare fetch (see diagram)
// ke through aate hai

// to itna sa bas yaad rakhne ki jarurat hai abhi aapko
// ki fetch (see diagram) ke andar jobhi promise (see diagram)
// queue banti hai iske andar bhi wo hi same call backs hote hai 
// (CB CB see diagram pink colour upar wala not white colour neeche wala)

// (18:11)

// call backs wapas se call stacks ke andar add hote hai
// (left arrow from promise queue towards up of call stack
// then inside call stack) wo saara kaam same hai

// bas yeh (promise queue , see diagram) thodi si high priority
// (see diagram) hoti hai iski

// bas itni si baat hai

// haa ji to chaliye ab aapko theory to samajh mei aa gayi hai ki
// asynchronous ki theory kaise hoti hai kya kaam karti hai
// kya diagrams hai to aap interviews etc sab ke liye ready hai

// ab hum kya kar sakte hai ab hum fast code likh sakte hai fatafat
// sir aapko jaake bata sakte hai asynchronous aise hota hai,
// await aise hota hai, await iss tareh se kaam karta hai

// aur bhi sir database ke calls etc bhi aapko batayenge to wo bhi aap
// fatafat kar payenge

// fetch (see diagram) ke andar jab hum baat karnege promises etc ki to
// aapko pata lagega achha  yeh ek priority queue se aata hai to iska
// fast execution ho jaata hai kuch bhi aur hota hai to usko 
// side hata ke hum fetch ka value le lete hai wahan pe

// to yeh hi sab basic hai iske baad ka saara kaam hum jab code
// mei likhenge to bahut hi aasaan rahega kuch dikkat aane wali nahi hai usme

// asynchronous ka video tha yeh

// aur bhi detail dekhenge iske bare mei

// Class End

// ============================================================================================
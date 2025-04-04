// to abhi tak humne jitna code likha hai,
// aap koi bhi file khol k dekhiye jaise function ho gaya
// scope ho gaya, arrow ho gaya jo bhi humne dekha tha
// to sabhi k andar kuch bhi aisa nahi hai ki aapka
// code kahin run nahi ho raha hai

// Ab samasya yeh hai ki humesha pora code execute nahi
// hona chahiye, pora code conditional base pe run hona chahiye

// jaise aap login ho to apke pas koi code run hona chahiye,
// aap logout ho to apke pas koi aur code run hona chahiye,
// to isi ko bola jata hai pora control flow ya fir logic flow

// bahut hi asaan hai kyuki apko boolean etc sab datatype pata
// hai

// to pehla jo humara control flow hai wo hai sabse basic if statement
// ab yeh if statement kaise kaam karta hai

// aap sabse pehle likhte hai if (if ek keyword hai) , uske baad aap lagate
// hai paranthesis

// if ()

// uske (paranthesis) k andar aap lagate hai condition

// if (condition)

// ek condition aa gayi,
// uske baad aap scope open karte hai

// if (condition) {

// }

// ab iske baad apko dekhna hai ki yeh jo condition hai
// yeh honi chahiye true as follows

// if (true) {

// }

// condition true hogi to hi apka jo internal code hai
// iss scope k andar (if k curly brace k andar) wo execute
// hoga

// bahar ka code (if k scope k bahar) to obvious si baat hai
// execute hoga hi hoga

// lekin agar yahan pe koi value aa jati hai false as follows

// if (false) {

// }

// (aap literal false bhi likh sakte hai) to iske andar
// (if k scope k andar) condition k andar nahi jayenge hum
// bus itni si baat hai

// true hai to andar ka code execute karenge, agar true nahi hai
// to andar ka code execute nahi karnege

// acha yeh jo kahani hai (as follows)

// if (true) {

// }

// yeh true evaluate kaise hoga, yehi bhi to ek question hai

// to dekhiye direct true likhna to ki sense hai nahi kyuki
// aisa / aise kaam to hoga nahi, lekin kayi bar kya hota hai
// aap isme (jahan paranthesis mei true likha hai) conditions check karte hai
// jaise sabse basic condition humne check kar liya ki
// kya 2, 2 k equal hai as follows

// if (2==2) {

// }

// obvious si baat hai equal hai, to isi tareh k apko
// comparison karne padenge

// =====================================================================

// ab comparison kis tareh k ho sakte hai , suppose kariye ki
// aap yahan pe aye (before if) aapne koi consition li hai
// to yahan pe humne liya hai const as follows

// const isUserloggedIn

// ab iske andar aapne kya likh diya, iske andar aapne
// likh diya true

// const isUserloggedIn = true

// if (2==2) {

// }

// to obvious si baat hai iss value (const isUserloggenIn = true
// mei isUserLoggedIn ko) aap evaluate kar sakte hai

// to humne kuch complex methods se usko dekha hai pehle ki
// user logged in hai ya nahi hai aur uske hisab se humne
// usko login de diya hai (true de diya hai)

// const isUserLoggedIn = true

// if (isUserLoggedIn) {

// }

// Ab yeh jo comparison hai yahan pe (if k () mei isUserLoggedIn
// ka comparison) yeh thoda sa hume samajhna padega ki comparison
// kaise kaise aa sakta hai

// ======================================================================

// to dekhiye comparison k kuch operators hote hai basic sir batate hai
// ki kitne hote hai fir unko comment kar denge

// dekhiye yeh to hai aapka less than -- <
// jab aap compare karte hai koi bhi value kisi se less than hai ya
// nahi hai

// isi tareh se apke pas greater than bhi hai -- >
// to aapne pocha ki koi value kisi se badi hai ya nahi hai

// aapne yeh bhi pocha ki koi value kisi k badi ya barabar
// to nahi hai (choti ya barabar) <=
// to yeh condition bhi kayi bar ati hai wahan pe hum kya
// pochte hai, suppose kariye aap iterate kar rahe hai, loop
// laga rakha hai aapne to wahan pe bhi aap kuch condition check kar
// rahe hai ya fir kisi bhi tareh se condition check kar rahe hai
// to wahan pe aapne likha kuch iss tareh se ki kya 2 less than two
// hai kya -- 2<2

// obvious si baat hai yeh correct statement nahi hai, kyuki 2 , 2 se
// chota thodi hai , wo uske barabar hai as follows, 
// 2<=2

// to isliye wahan par yeh operator <= hum use karte hai, yeh do
// check  ek saath kar deta hai ya to value choti honi chahiye ya fir
// value barabar honi chahiye, to dono condition mei apko true result
// deta hai

// ab isi tareh se greater than equal to hai >=

// aur iske alawa ek hota hai apka double equal ==
// yeh dhyan rakhiyega, yeh jo single equal hai (const isUserLoggedIn = true)
// yeh operator assignment ka hai, humne true value (const isUserLoggedIn = true)
// ko assign kara hai isUserloggedIn k andar (const isUserLoggedIn = true)

// Lekin jab hum two equals == likhte hai to iska matlab hai hum check
// kar rahe hai ki kya wo barabar hai kya uske , equal hai kya

// aur isi tareh se apke pas not equal bhi aata hai !=
// kya 2, 2 k barabar nahi hai

// kya 3 barabar nahi hai 2 k
// 3 != 2
// obvious si baat hai yeh correct baat hai, to yeh negative statement
// aap kayi bar dekhenge jiske andar aap negative checking bhi karte hai,
// dekhiye answer true aana chahiye, value (checking) chahe aap negative
// check kariye ya positive check kariye, end of the day ab iska as follows ka

// 3 != 2 ka result kya ayega, hum yeh kehna chah rahe hai ki 3 , 2 k barabar
// nahi hai , to obvious si baat hai correct baat hai to yeh agar aap
// condition lagate hai yahan pe as follows

// const isUserLoggedIn = true

// if ( 3 != 2) {

// }

// to iska ( 3 != 2) evaluation ayega true, to apka jo bhi code
// hai line 175 k andar wo execute hoga

// theek hai isi tareh se ek aur humare pas datatype (operator) ata hai jo ki
// triple equal hai ===

// Ab === kya karta hai yeh apka type bhi check karta hai
// yani ki for eg agar aapne iss tareh se diya ki kya 2 equal hai
// iss "2" k, to kya hoga as follows
// 2 == "2"

// to isko karke batate hai kyuki kafi interesting cheej hai as follows 
// to yahan pe hum if ki condition 2 == "2" likhte hai aur iske
// andar console.log("executed") likh dete hai as follows

// if( 2 == "2" ){
//     console.log("executed");
// }

// theek hai koi sa bhi aap values de dijiye
// terminal mei run karte hai

// o/p executed

// to humare pas aa raha hai executed, ab dekhne wali baat yeh hai
// interesting ki 2 , "2" k barabar to nahi hai kyuki ek apka
// string datatype hai i.e. "2", aur ek apka number datatype hai i.e.
// 2 , to iss special condition k liye hi jab apko datatype bhi important
// hai ki mujhe sirf number ki value se matlab nahi hai uska type bhi
// same hona chahiye to type checking k liye apke pas ata hai strict equal
// jisko bolte hai triple equal ===

// ab aapne === likh k jaise hi save kiya as follows

// if( 2 === "2" ){
//     console.log("executed");
// }

// aur terminal mei run kiya to kuch nahi aya o/p mei

// o/p kuch nahi aya

// to kuch bhi execute nahi hua kyuki outside mei humne kuch likh hi
// nahi rakha tha (false condition thi) to yeh bada hi basic sa hai

// isi tareh se apke pas agar apko strict checking karna hai aur
// anti pattern mei checking karna hai to exclamatory sign aur
// doo equal i.e. !== , yeh negative sign check kar leta hai
// jaise ki sir ne abhi apko ek aur bataya tha iss tareh se
// ki kya 2 nahi hai equal 3 k as follows

// const isUserLoggedIn = true

// if ( 2 != 3 ){
//     console.log("executed");
// }

// if ( 2 !== 3 ){
//     console.log("executed");
// }

// o/p executed

// to obvious si baat hai yeh (2 != 3) correct statement hai
// to inn cases mei kya hoga yeh thoda sa difficult hota hai
// jab starting mei log seekhte hai conditionals etc ko kyuki
// yeh jo negative side hai yeh samajhne mei thoda sa problem
// hota hai but humesha yeh dhyan rakhiyega ki yeh ( 2 != 3 )
// ek question hai, iss question k andar jo bhi answer ayega wo
// apka true ya false ki format mei hota hai

// =========================================================

// theek hai to yeh ho gayi humari basic si baat ab inn operators
// ko hum thoda sa aur inn depth dekh lete hai

// to abhi to humne yahan pe ( const isUserLoggedIn = true) likha hai
// isLoggedIn (isUserLoggedIn) but ek sabse basic sa dekh lete hai

// to hum yahan pe likh dete hai temperature as follows

// const temperature

// suppose kariye temperature aaj ki date mei kuch 41 degrees ho
// rakha hai yahan pe

// const temperature = 41

// isi tareh se apko condition check karni hai to suppose
// kariye apko check karna hai, to humne yahan pe check kar liya ki
// humara jo temperature hai, kya wo less than 50 hai
// kya abhi as follows (inside if ki condition)

// const temperature = 41

// if( temperature < 50 ){
//     console.log("executed");
// }

// to agar less than 50 hai to theek hai hum console.log mei
// kya likhna chahte hai simply -- less than 50 as follows

// const temperature = 41

// if( temperature < 50 ){
//     console.log("less than 50");
// }

// aur agar nahi hai to outside mei likh dijiye aap yahan pe,
// to yahan pe simply aapne console.log liya aur likh diya
// ki temperature is greater than 50 as follows

// const temperature = 41

// if( temperature < 50 ){
//     console.log("less than 50");
// }

// console.log("temperature is greater than 50");

// ab yahan gaur se dekhiyega kya kya execute hota hai, kyuki
// kya kya execute hoga iss pe bahut si cheejein nirbhar karegi
// to pehle ek bar isko save karke run karte hai

// o/p less than 50
// temperature is greater than 50

// to dekhiye o/p mei aya -- less than 50 , bilkul sahi baat hai
// kyuki yahan pe (const temperature = 41) humne temperature humne
// 50 se less liya hai, lekin yeh (console.log("temperature is greater than 50");)
// jo console.log hai yeh to execute hoga hi hoga kyuki iska
// if statement se koi lena dena hai nahi, kyuki yeh (console.log("temperature is greater than 50");)
// uski (is statement ki) boundary k andar hai hi nahi

// to isi tareh se aap check kariyega aur dhyan mei rakhiyega

// ===================================================================

// Ab apko suppose kariye strictly 51 hi check karna tha to hum
// triple equal === laga k aur yahan pe 41 hi check kar lete hai
// as follows

// const temperature = 41

// if( temperature === 41 ){
//     console.log("less than 50");
// }

// console.log("temperature is greater than 50");

// o/p less than 50
// temperature is greater than 50

// to uss (iss) case mei bhi ek dum same result ayega apke pas
// ki -- less than 50 (see o/p) hai aur temperature is greater than 50
// (see o/p) to inme se sahi baat kya hai

// iss case mei aisi sahi baatein pata lagane k liye humare pas
// ek aur keyword hota hai jisko hum bolte hai -- else
// as follows

// const temperature = 41

// if( temperature === 41 ){
//     console.log("less than 50");
// } else

// console.log("temperature is greater than 50");

// aur fir else k baad curly braces as follows

// const temperature = 41

// if( temperature === 41 ){
//     console.log("less than 50");
// } else {

// }

// console.log("temperature is greater than 50");

// to else mei likhne mei aur nahi likhne mei antar yeh hai
// ki yeh conditional code hai yani ki simple sa kehne ka matlab yeh hai
// ki ya to yeh (console.log("less than 50");) execute hoga
// ya yeh (console.log("temperature is greater than 50");)
// execute hoga as follows

// const temperature = 41

// if( temperature === 41 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// yahan pe (else k last curly brace pe) likhne k baad jo
// aap likhte hai suppose kariye yahan pe (if else k baad) 
// aap kuch bhi likhte hai wo to 100 %  execute hona hi hai
// as follows

// const temperature = 41

// if( temperature === 41 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");

// yeh (console.log("Execute");) to execute hoga hi hoga

// yahan pe (if elese k andar) humare pas conditional test hota hai
// i.e. ya to yeh (console.log("less than 50");) run hoga
// ya yeh (console.log("temperature is greater than 50");) run hoga

// abhi hume dekha problem ki 41 dono jagah print ho raha tha kya
// ki -- less than 50 (see previous o/p) bhi hai aur
// -- temperature is greater than 50 (see previous o/p) bhi hai
// to sahi baat nahi hai

// to ya to hum iss block (if wale block) k andar jayenge
// ya fir hum iss block (else wale block) k andar jayenge
// yeh jo ( if( temperature === 41 ) ) yahan pe conditional
// checking hai wo yehi kaam karta hai

// to save karke run karte hai aur dekhte hai humari problem solve hui ya nahi hui

// o/p less than 50
// Execute

// to abhi less than 50 hai (see o/p) yeh -- Execute (see o/p)
// to execute hona hi hona tha

// ==================================================================

// Abhi suppose kariye hum check kar rahe hai 40 se jada hai kum hai
// ya kya hai, to obvious si baat hai uss hisab se hume resukt mil jayega
// as follows

// const temperature = 41

// if( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");

// save and run

// o/p temperature is greater than 50
// Execute

// (humne else ka message change nahi kara , you can change for
// understanding)

// ====================================================================

// Ab yahan pe ek aur interesting cheej ati hai, yeh scope related hai
// aur JavaScript k andar scope samajh mei ana jaruri hai

// to suppose kariye sir ne apke liya likha hai ek score yahan pe

// const score

// aur score k andar sir ne apko de diye hai 200 points

// const score = 200

// uske baad mei sir ne ek conditional likha (if likha) aur conditional mei
// check kara ki yeh jo score hai kya wo greater than hai 100 se,
// obvious si baat hai hoga hi hoga kyuki upar 200 assign kar diya hai
// as follows

// const score = 200

// if (score > 100) {
    
// }

// yahan pe (if k andar) aake sir ne ek aur variable de diya hai apko
// jiske andar sir ne de diya hai power, ab uss power ki value kya hai
// ki aap fly kar sakte hai as follows

// const score = 200

// if (score > 100) {
//    const power = "fly"     
// }

// theek hai suppose kar lijiye ki aap ek aisa program
// bana rahe hai koi

// to uske andar sir ne kaha ki consolle.log karte hai aur dekhte hai
// ki user k pas power kya hai, back ticks use kar lete hai jada asaan
// rahega as follows

// const score = 200

// if (score > 100) {
//    const power = "fly"
//    console.log(`User power: `);
// }

// aur yeh laga lete hai hum dollar sign as follows

// const score = 200

// if (score > 100) {
//    const power = "fly"
//    console.log(`User power: ${}`);
// }

// aur user ki power dekhte hai kya ati hai uske pas

// aur yeh humne laga diya power as follows

// const score = 200

// if (score > 100) {
//    const power = "fly"
//    console.log(`User power: ${power}`);
// }

// o/p User power: fly

// to abhi tak k code mei koi problem nahi hai as it is
// run  hoga yeh code to aapne assume kar hi liya hoga kaise
// run hoga

// =============================================================

// Problem kahan pe ati hai ki aap jab iss line (console.log(`User power: ${power}`);)
// ko copy karenge aur iss if k bahar le jayenge as follows

// const score = 200

// if (score > 100) {
//    const power = "fly"
//    console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

// yahan pe ane wali hai problem , to isko run karte hai

// o/p console.log(`User power: ${power}`);
// ^

// ReferenceError: power is not defined

// to yahan pe kya aya ki -- power is not defined (see o/p)
// yeh kahani hai scope ki , jaise ki sir ne apko bataya
// tha scope hota jai JS k andar humara global scope bhi hota hai
// fir ek functional scope bhi hota hai , to jitni bar yeh
// curly braces ( if (score > 100) {} k scope wale curly braces)
// lagte hai inka ek alag scope count hota hai, ab scope count karne
// se kya hota hai ki jo bhi variable etc yahan
// ( if (score > 100) {} k scope k andar ) declare honge unka scope
// bas itna hi hai ( if (score > 100) {} k scope k andar tak hi hai)
// jaise hi wo part ( if (score > 100) {} ka scope) humara khatam
// ho jata hai, to wo variable ya jo bhi aapne declaration kiya hai wo
// scope k bahar apko execution mei nahi milte hai

// aur yahi reasn hai ki poori iss journey k dauraan sir ne apko
// const aur let k bare mei bataya kyuki jaise hi aap var keyword
// yahan pe likhenge tab ati hai problem as follows

// const score = 200

// if (score > 100) {
//    var power = "fly"
//    console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

// o/p User power: fly
// User power: fly

// kya problem ki yeh jo fly hai (see o/p User power: fly (2nd wala) )
// ab yeh (fly) bahar bhi access ho raha hai, to yeh jo var hai
// (var power = "fly") iska (var power = "fly" mei var ka) scope
// hai completely global aur aisa nahi hona chahiye, abhi k liye theek
// lag raha hai ki program mei error nahi aya kyuki jadatar log error se hi darte hai
// ki error nahi ana chahiye chahe kuch bhi ho jaye

// but actually mei aage jaake aap dekhenge ki error jada achha hai
// yeh variable (var power = "fly") kabhi bhi if (score > 100) {} k scope
// k bahar nikalna hi nahi chahiye tha, tab hi humara code safe reh payega

// to isi tareh se ab koi bhi var use nahi karta let use kariye,
// const use kariye, to inn dono keywords mei yeh scope ka
// problem nahi hai

// const score = 200

// if (score > 100) {
//    let power = "fly"
//    console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

// o/p console.log(`User power: ${power}`);
// ^

// ReferenceError: power is not defined

// to dekhiye power is not defined (see o/p) yeh error aana
// hi chahiye tha, theek hai to yeh ho gaya aapka block scope

// ============================================================

// Achha yahan pe kya hai ek short hand notation bhi hota hai

// Ab hum aate hai humare shart hand notation pe, to short hand
// mei hum kya likh rahe the isi tareh se if condition likh rahe the,
// lekin ek short hand notation bhi hota hai, jaise suppose kariye
// humne yahan pe wapas se ek constant declare karte hai jaise suppose
// kariye balance as follows

// const balance

// apka balance hai Rs 1000 as follows

// const balance = 1000

// theek hai to hum kya kar sakte hai check kar sakte hai ki apka
// balance 1000 se neeche hai ya kya hai

// const balance = 1000

// if (condition) {
   
// }

// ab yeh dekhiye default statement hai kaise hota hai,
// to suppose kariye mai balance check kar raha hu, yeh humne
// check kara balance , kya apka balance greater than hai Rs 500
// se as follows

// const balance = 1000

// if (balance > 500) {
   
// }

// to hum iss tareh se execute kar dete hai but kayi bar apko
// dikhega ki yeh scope nahi use karte hai aap (jo scope
// if (balance > 500) {} wala hai wo ) as follows

// const balance = 1000

// if (balance > 500)

// isi tareh se direct yahan pe likh dete hai, to hum kya kar sakte
// hai direct bhi likh sakte hai -- console.log()

// const balance = 1000

// if (balance > 500) console.log("");

// aur yahan pe likh dijiye koi bhi test as follows

// const balance = 1000

// if (balance > 500) console.log("test");

// to obvious si baat hai wo test execute ho jayega
// (save and run)

// o/p test

// ==================================================================

// Ab aap kahenge achha yahan pe to humne curly brace lagaya hi nahi
// to fir scope kya hai, yeh isko bolte hai -- implicit scope yani ki
// maan liya hai humne ki scope hai (if (balance > 500) console.log("test");)
// (15:39)

// const balance = 1000

// if (balance > 500) console.log("test");

// yeh (console.log("test"); in if (balance > 500) console.log("test");) lekin ek hi line
// mei execute hota hai notice kariye yahan pe (console.log("test");)
// automatic semicolon aya hai (console.log("test"); mei last mei ; aya hai)
// kyu ki ek hi line mei execute hota hai iss tareh se

// aap yahan pe multiple lines nahi likh sakte,
// halanki likhne ka tarika hai ki kaise likh sakte hai,
// kayi log likhte bhi hai ki yahan pe (if (balance > 500) console.log("test");
// mei ; ki jagah) ek comma laga dete hai as follows

// const balance = 1000

// if (balance > 500) console.log("test"),

// aur comma lagane k baad aap enter karke likh sakte hai ya fir
// uss second line mei bhi likh sakte hai (means isi line --
// if (balance > 500) console.log("test"), mei continue karke likh sakte hai)

// to suppose kariye humne yahan pe ek aur console.log likh diya hai
// aur uske andar likh diya hai test2 as follows

// const balance = 1000

// if (balance > 500) console.log("test"),
// console.log("test2");

// yeh ; jarur lagaiyega (console.log("test2"); mei jo ; hai)
// , laga k (if (balance > 500) console.log("test"), mei jo , hai)
// aap aise multiple lines (eg - console.log("test2");) likh sakte hai
// aur uska scope bhi same hi rehta hai

// o/p test
// test2

// but yeh bahut hi bahut hi unreadable code hai (just above)
// iss tareh ka comma laga k iss tareh se likhna
// (if (balance > 500) console.log("test"),)

// ya fir suppose kariye aapne iss tareh se likh diya as follows

// if (balance > 500) console.log("test"),console.log("test2");

// yeh bahut hi immature code hai , koi bhi nahi likhta hai
// koi recommend bhi nahi karega agar aap achi company mei
// likh rahe hai , to apke pas wapas se aa jayega ki please
// iss code ko re-write karke dijiye, apne yeh jo comma syntax
// lagaya hai yeh bilkul achhi practice nahi hai, aapne halanki
// extra ordinary hoshiyaar banne k liye laga to diya hai sab ko
// impress karne k liye but koi bhi impress hua nahi hai
// to iss tareh se (if (balance > 500) console.log("test"),console.log("test2");)
// nahi karna hai

// theek hai yeh ho gaya humara basic kaam ki kis tareh se if aur else
// kaam karte hai

// ====================================================================

// Ab hum thoda sa aur yahan pe kaam karte hai

// to suppose kariye humne yahan pe apna balance 1000 hi rakh
// liya hai

// const balance = 1000

// aur ab hum thoda sa nesting k bare mei baat karte hai

// dekhiye abhi tak to humne sirf ek basic liya if liya,
// else liya, lekin kayi bar kya hota hai apko multiple
// conditions check karni hoti hai sirf itna hi nahi ki ya to yeh
// ho (eg if) ya fir yeh ho (eg else), 2-3 conditions bhi
// ho sakti hai humare pas mei to 2-3 conditions ko hum check karke dekhte hai
// ki kaise karte hai

// to sabse pehle to likhiye if yahan pe

// const balance = 1000

// if (condition) {
   
// }

// aur iske andar condition likhni hai (if k andar)
// to suppose kariye hume yahan pe check karna hai
// balance, ab balance ko yahan pe leke ate hai aur check karte hai
// ki kya yeh balance less than hai 500 se as follows

// const balance = 1000

// if (balance < 500) {
   
// }

// ab 500 se agar yeh less than hai, to hume koi code run karna
// hai to theek hai as follows

// const balance = 1000

// if (balance < 500) {
//    console.log("less than");
// }

// to obvious si baat hai yeh 500 se kum to nahi hai
// lekin hume aur bhi check karna hai, to sirf else
// likh k hum dusra portion execute karna nahi chahte
// as follows

// const balance = 1000

// if (balance < 500) {
//    console.log("less than");
// } else

// hum yahan pe aur ek conditions ko test karna chahte hai
// to humne ek aur else if statement laga diya as follows

// const balance = 1000

// if (balance < 500) {
//    console.log("less than");
// } else if (condition) {
   
// }

// aur yahan pe hum check kar lete hai ki kya humara yeh jo
// balance hai kya yeh 750 se kum hai kya as follows

// const balance = 1000

// if (balance < 500) {
//    console.log("less than");
// } else if (balance < 750) {
   
// }

// to 750 humne ek aur condition check kar di aur upar likh
// dete hai ki yeh less than 500 hai as follows

// const balance = 1000

// if (balance < 500) {
//    console.log("less than 500");
// } else if (balance < 750) {
   
// }

// to isi tareh se hum isko (console.log("less than 500");) copy
// kar sakte hai aur paste kar sakte hai inside 750 block
// as follows

// const balance = 1000

// if (balance < 500) {
//    console.log("less than 500");
// } else if (balance < 750) {
//    console.log("less than 500");
// }

// Aur humne yahan kya check kar liya hai ki kya yeh 750
// se less hai kya as follows (edited 500 as 750 in copy paste line)

// const balance = 1000

// if (balance < 500) {
//    console.log("less than 500");
// } else if (balance < 750) {
//    console.log("less than 750");
// }

// apko agar chahiye to isi tareh se aap else if laga k
// aur bhi conditions check kar sakte hai as follows

// const balance = 1000

// if (balance < 500) {
//    console.log("less than 500");
// } else if (balance < 750) {
//    console.log("less than 750");
// } else if (condition) {
   
// }

// ki suppose kariye humne ek aur check kara aur yahan pe
// hum ek aur bar check kar lete hai ki kya humara balance
// less than 900 hai kya as follows

// const balance = 1000

// if (balance < 500) {
//    console.log("less than 500");
// } else if (balance < 750) {
//    console.log("less than 750");

// } else if (balance < 900) {
   
// }

// to agar uss case mei hai to again copy paste and edit console.log line
// inside 900 block


// const balance = 1000

// if (balance < 500) {
//    console.log("less than 500");
// } else if (balance < 750) {
//    console.log("less than 750");

// } else if (balance < 900) {
//    console.log("less than 750");
   
// }

// aur agar inn mei se kuch bhi nahi hai to finally humara
// else to execute hoga hi hoga yahan pe as follows (last mei)

// const balance = 1000

// if (balance < 500) {
//    console.log("less than 500");
// } else if (balance < 750) {
//    console.log("less than 750");

// } else if (balance < 900) {
//    console.log("less than 750");
   
// } else {

// }

// seedha aap direct else le sakte hai wahan pe condition
// check karne ki jarurat nahi hai to hum yahan pe
// (inside else block (last mei)) bhi paste kar dete hai
// console.log wali line as follows

// aur isko bol dete hai ki less than 1200 hai as follows

// const balance = 1000

// if (balance < 500) {
//    console.log("less than 500");
// } else if (balance < 750) {
//    console.log("less than 750");

// } else if (balance < 900) {
//    console.log("less than 750");
   
// } else {
//    console.log("less than 1200");
// }

// to iss tareh se hum check kar sakte hai

// ab dekhiye humara balance to 1000 hai , to kya hoga
// iske andar kya code run hoga to wo bhi hum samajh lete hai
// ki thoda sa humare pas yahan pe difficult statement hai kaise
// run hoga

// save and run

// o/p less than 1200

// to isne bola less than 1200 (see o/p), obvious si baat hai
// humara final wala execute hua hai (last else wala) ki dekhiye
// 500 se to upar tha balance ( if (balance < 500) {} ),
// 750 se bhi upar tha ( if (balance < 750) {} ),
// 900 se bhi upar tha ( if (balance < 900) {} ),
// to finally humare pas 1200 aya ki apka jo yeh hai 1200 se
// upar hai

// ===================================================================

// theek hai ab yeh to ho gaya apka basic ki aap theek hai multiple conditions
// mai check kar sakta hu, temperature check kar sakta hu, user k bare mei
// check kar sakta hu, bahut sari cheejein aap check kar sakte hai
// ab sir batate hai kuch interesting cheejein

// yeh basic if else tha isme kuch complicated tha hi nahi

// ab isko use karte hai ki real life mei yeh kis tareh se use ayenge
// apke pas aur kaise aap kaam karenge

// to online to aap shopping karte hi honge, courses bhi purchase karte honge
// to suppose kariye aapne kisi website pe account banaya to hum yahan pe
// lagate hai ki aapne banaya user as follows

// const user 

// Aur user ka account ban gaya hai to aap logged in bhi ho gaye as follows

// const userLoggedIn 

// to humare pas ek flag tha userLoggedIn , humne usko (userLoggedIn) kar diya true
// as follows

// const userLoggedIn = true

// theek hai ji , ab uske baad apke pas kuch UPI, debit card , credit card bhi
// hoga wo information bhi aap dalenge, to hum kya karenge

// const userLoggedIn = true

// const debitCard

// aur usko humne kar diya true as follows
// ki debitCard hai tab hi to shopping karne denge aur login
// bhi hona chahiye (const userLoggedIn = true) tabhi to hum
// usko (user ko) access de payenge uss course ka kisi bhi cheej ka
// as follows

// const userLoggedIn = true
// const debitCard = true

// to yahan pe aap multiple conditions bhi check kar sakte hai iss
// if condition k andar as follows

// const userLoggedIn = true
// const debitCard = true

// if (condition) {
   
// }

// to uss multiple condition mei kya hota hai jo bhi
// condition aap likh rahe hai , unn dono ka statement
// ya to true aana chahiye ya false aana chahiye wo kaise
// hota hai wo sir abhi apko batate hai

// to humne kya bola ki userLoggedIn bhi hona chahiye 
// (see inside if condition) as follows

// const userLoggedIn = true
// const debitCard = true

// if (userLoggedIn) {
   
// }

// userLoggedIn bhi hona chahiye aur (&& see inside if condition) 
// jaise hum bolte hai na as follows

// const userLoggedIn = true
// const debitCard = true

// if (userLoggedIn &&) {
   
// }

// aur kya hina chahiye , user k pas debit card bhi hona chahiye
// as follows

// const userLoggedIn = true
// const debitCard = true

// if (userLoggedIn && debitCard ) {
   
// }

// user k pas debit card bhi hona chahiye to to hum usko allow
// karenge shopping karne k liye, to yahan pe console.log likh
// dete hai inside if as follows

// const userLoggedIn = true
// const debitCard = true

// if (userLoggedIn && debitCard ) {
//    console.log("Allow to buy courses");
// }

// isi case mei to course buy karne denge (jab login hoga and debit card
// dono hoga tab)

// o/p Allow to buy courses

// Ab isko hum run karte hai to obvious si baat hai apko course purchase
// karna allow hai , to yeh jo end statement hai (&&) yeh kya karta hai
// iss condition (userLoggedIn, (see if condition) ) ko bhi check karega aur
// iss condition (debitCard, (see if condition) ) ko bhi check karega

// to left (userLoggedIn, (see if condition) ) aur right (debitCard, (see if condition) )
// dono condition k andar apke pas true aana chahiye, to yahan pe
// (i.e. const userLoggedIn = true aur const debitCard = true) true aa raha hai

// Ab suppose kariye isi tareh se apko aur bhi condition check karni thi
// to aap yahan pe ek aur ampercent (&&) laga sakte hai as follows
// (do bar ampercent lagta hai and statement k liye)


// const userLoggedIn = true
// const debitCard = true

// if (userLoggedIn && debitCard &&) {
//    console.log("Allow to buy courses");
// }

// to yahan pe suppose kariye aapne laga diya 2==2 as follows (21:30)

// const userLoggedIn = true
// const debitCard = true

// if (userLoggedIn && debitCard && 2==2) {
//    console.log("Allow to buy courses");
// }

// to obvious si baat hai abhi bhi execute hoga yeh code
// kyuki aap allow hai

// o/p Allow to buy courses

// Ek bhi statement agar false ho gaya hai jaise ki humne yahan pe
// isko false kar diya 2==3 as follows

// const userLoggedIn = true
// const debitCard = true

// if (userLoggedIn && debitCard && 2==3) {
//    console.log("Allow to buy courses");
// }

// o/p kuch nahi aya

// to kya hoga uss case mei hum uss code k andar jate hi nahi hai

// to isi tareh se checking hoti hai ki user ka email bhi theek format
// mei hona chahiye, wo logged in bhi hona chahiye, uske pas debit card
// bhi hina chahiye , to iss tareh ki details aati hai

// ================================================================

// Ab suppose kariye isi tareh se apke pas aur bhi ek hai, hum laga lete hai
// ek aur statement yahan pe const loggedInFromGoogle
// aur google pe aap suppose kariye false hai as follows

// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false

// if (userLoggedIn && debitCard && 2==3) {
//    console.log("Allow to buy courses");
// }

// if (userLoggedIn) {
   
// }

// ki aapne google se login nahi kara ho sakta hai aapne email se login
// kara hai, to kya mujhe ab user ko login karne dena chahiye, to mai dekhunga
// ki userLoggedIn ho (1st const see above 2nd if condition) ya fir hum ek aur variable le lete hai yahan pe
// thoda sa aur aasaan rahega samajhne k liye, isko hum bolte hai
// loggedInFromEmail aur isko bol dete hai true as follows


// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if (userLoggedIn && debitCard && 2==3) {
//    console.log("Allow to buy courses");
// }

// theek hai ab user ya to google se login hoga ya email se login
// hoga but dono ho case mei mujhe login usko karne dena hai,
// to hum kya karenge isko (loggedInFromGoogle see 3rd const) check karna hai
// to iss bar "and" (i.e. &&) nahi iss bar hum "or" se check karneg ki
// ya to wo google se login kar le ya fir wo email se login kar le

// uss case mei aap yeh pipe sign use karte hai i.e. (||)
// (backspace key k neeche) aur 2 pipe use karte hai , yeh multiple
// condition ko test karne k liye hota hai, to yahan pe hum dusri
// condition bhi le ate hai loggedInFromEmail (4th const) as follows

// to ab ya to login email se kar lo ya fir google se kar lo
// ("or" ||)

// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if (userLoggedIn && debitCard && 2==3) {
//    console.log("Allow to buy courses");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
   
// }

// Aur hum yahan pe ek console.log likh dete hai user k liye
// "User logged in" as follows


// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if (userLoggedIn && debitCard && 2==3) {
//    console.log("Allow to buy courses");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//    console.log("User logged in");
// }

// o/p User logged in

// to dono mei se ek bhi true hoga to obvious si baat hai user ko login
// karne dena hai, karne dena hi chahiye kyuki jaruri thodi na hai
// sabhi google se hi account banaye sabhi email se account banaye
// to yeh humari multiple condition check hoti hai

// dhayn rakhna aap multiple aur bhi check kar sakte hai ki
// inn teeno mei se ek bhi condition humari sahi ho jaye
// to suppose kariye ek guest user tha uske liye suppose kariye
// aapne direct hi true likh diya yahan pe as follows
// (2nd wale if condition mei)

// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if (userLoggedIn && debitCard && 2==3) {
//    console.log("Allow to buy courses");
// }

// if (loggedInFromGoogle || loggedInFromEmail || true) {
//    console.log("User logged in");
// }

// o/p User logged in

// ya fir ek aur variable bana k aapne likh diya ki guestUser iss tareh
// se humare pas value hai as follows

// to uss tareh se aap check kar sakte hai

// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if (userLoggedIn && debitCard && 2==3) {
//    console.log("Allow to buy courses");
// }

// if (loggedInFromGoogle || loggedInFromEmail || guestUser) {
//    console.log("User logged in");
// }

// abhi humare pas guestUser value hi nahi hai to usko check kaise karein
// (guestUser backspaced) but aap multiple check kar sakte hai

// aage jake aap conditional rendering bhi karenge iss tareh se 
// (just above tareh se) to kya hoga ki aap simple sa bolenge ki
// kya user logged in hai, agar logged in hai aur uske alawa uske pas
// token bhi hai jo humne server se usko diya hai to usko login button mat
// dikhao, uss login button ki jagah uska text change kar do aur logout
// button dikhao, aage jake jab hum react padhenge to uss cases mei hum
// inn sabhi ka use karnege tab apke yeh sare foundations kaam mei ayenge

// yeh ho gaya basic if else samajh aa gaya hai

// ===================================================================

// Ab yeh jo control flow hai iske andar aap dekh rahe hai ki kuch portion
// ko mai code execute karna chah raha hu, kabhi kuch hatana chah raha hu
// isi tareh se to iske aur bhi formats hote hai

// to ek aur format hum dekhte hai wo dekhenge hum nayi wali file k andar

// =====================================================================
// is video mei hum objects ko constructor ki help
// se declare karna seekhenge

// suppose hum ek tinder app bana rahe hai aur uske
// andar hume tinderUser information rakhni hai
// to 2 tarike hai aap chahe to is tareh se object bhi declare kar sakte hai and end mei paranthesis as folllows

// const tinderUser = new Object()

// ab yeh Object() jo hai yeh bhi exactly object hai

// jab hum iss tinderUser ko print karenge to isme koi difference nahi ayega, jaisa uske andar object hota hai
// empty object waisa hi hume yahan milta hai , to hum run karte hai isko as follows

// console.log(tinderUser);
// o/p {}


// ================================================================================================

// achha agar hum isko iss tarah --[ const tinderUser = new Object() ] se nahi declare karke 
// iss tareh declare karte -- const tinderUser = {} as follows

// const tinderUser = {}
// to yeh bhi ek object hi declare kar rahe hai
// isko bhi jab hum run karenge to same value ayegi o/p mei i.e. an empty object as follows

// console.log(tinderUser);
// o/p {}
// to koi internal difference nahi hai
// bas itna hi yaad rakhna hai ki yeh --- const tinderUser = new Object() , ek singleton object hai
// and yeh --- const tinderUser = {} , ek non singleton object hai bas baki sari kahani same hai

// ===============================================================================================

// to hum iske andar aur values add karte hai, kuch ids etc add karte hai

// const tinderUser = {}

// to sabse phele humne bola ki yeh jo tinderUser hai isko ek id de dijiye as follows

// tinderUser.id =

// id de dete hai "123abc" yeh ek unique id ho gayi jo ki user database mei register hai

// tinderUser.id = "123abc"

// uske alawa iss tinderUser ko ek name bhi de dete hai .name laga k as follows

// tinderUser.name =
// and name de dete hai "Sammy" as follows

// tinderUser.name = "Sammy"

// kuch aur values dete hai as follows

// tinderUser.isLoggedIn = false

// ab isko print karke dekhte hai

// console.log(tinderUser);
// o/p { id: '123abc', name: 'Sammy', isLoggedIn: false }

// =======================================================================================================

// lekin yeh to basic ho gaya, ab hum ek aur yahan pe declare karte hai jiske andar objects k andar objects ko denge
// arrays humne dekh liya tha, numbers boolean sab dekh liye the , to isi tareh se aur bhi dekhte hai

// ab hum ek aur declare karte hai regularUser kisi aur app k liye aap declare kar rahe hai as follows

// const regularUser = {

// }


// const regularUser = {
//     email: "some@gmail.com"
// }

// ab aap kya declare kar rahe hai yahan pe kuch aisi cheej jiske andar objects further aate hai jaise
// aapne kaha ki fullname, to aapne kaha ki fullname jo humare pas hai yahan pe, yeh apne aap mei ek
// object hoga as follows

// const regularUser = {
//     email: "some@gmail.com"
//     fullname: {

//     }
// }

// fullname mei apne kaha ki further iske andar jake humare pas kya hai ki ek aur hai userfullname
// yeh userfullname bhi humare pas ek object hai i.e. curly braces, to aap dekh rahe hai jitni bhi chahe utni
// nesting mei aap jaa sakte hai

// const regularUser = {
//     email: "some@gmail.com"
//     fullname: {
//         userfullname:{

//         }
//     }
// }

// ab iske andar hum de dete hai firstname & lastname

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// achha values ko access kaise karte hai dot notation se hi karte , console.log karke dekhte hai
// console.log();
// to console.log hume kiya , sabse phele humare pas hai regularUser, now jaise hi aap dot likhenge
// apko suggestion mil jayenge as follows

// console.log(regularUser.);

// to hume chahiye fullname

// console.log(regularUser.fullname);
// obvious si baat hai uske andar full name aa gaya
// achha abhi hum fullname likhenge to yeh object (fullname) jitna hai yeh , yeh sab hum store kar rahe hai uss
// variable mei

// to humne run karke dekha to o/p aya as follows ki humare pas yeh full object store hai jo ki kafi
// andar jake nested bhi hai
// o/p { userfullname: { firstname: 'hitesh', lastname: 'choudhary' } }

// agar apko aur iski nesting open karni hai to dot lagaye jayiye aur ek aur access kar lijiye as follows

// console.log(regularUser.fullname.userfullname);
// o/p { firstname: 'hitesh', lastname: 'choudhary' }
// ab ek level ka nesting kum hua hai

// console.log(regularUser.fullname.userfullname.firstname);
// o/p hitesh

// to jitne bhi objects k andar objects hai usko iss tareh se access kar sakte hai

// ==============================================================================================

// console.log(regularUser.fullname.userfullname.firstname);

// ek yahan pe optional chainig naam ki cheej bhi ati hai suppose kariye fullname agar exists nahi karta hai
// to kya problem hai to aage sir batayenge kai bar apko kuch aisa syntax bhi milega as follows

// console.log(regularUser.fullname?.userfullname.firstname);

// yeh syntax kya karta hai thoda sa protection kar deta hai agar suppose kariye fullname exist hi nahi karta ho to
// to kai bar jab API se response ata hai tab apko yeh syntax use karna padta hai ki agar yeh value (fullname) hai to kariye varna
// kya karna padega if else lagane padenge har jagah means agar (if) isme (regularUser) mei yeh value (fullname) mili hai to
// yeh karo varna (else) yeh karo to bahut jada complex , iske bare mei aage discuss karenge

// ===============================================================================================

// jaise humne arrays ko merge kiya tha waise hi hum objects ko bhi combine karenge

// naam etc likhne mei time lag jayega, to iss bar hum keys ko lete hai numbers and values ko lete hai string

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}

// we cannot say as follows to combine bith objects as iss tareh se doge to wohi array wali problem ayegi ki array
// k andar array hota hai waise hi object k andar object ho jayega
// const obj3 = { obj1, obj2 }
// console.log(obj3);

// o/p { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// means ek object hai uske andar obj 1 hai and obj 2 hai

// instead we do as follows to combine object

// const obj3 = Object.assign(obj1, obj2)
// console.log(obj3);

// o/p { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// but ek aur syntax hai yahan pe ki hum yahan pe empty paranthesis bhi de dete hai as follows

// const obj3 = Object.assign({}, obj1, obj2)

// console.log(obj3);
// o/p { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// both cases i.e with {}, and without {} mei same o/p aya hai
// means yeh {}, optional parameter hota hai but isko dena achha hai kyu ki hum kya bolte hai ki jitni bhi
// values (i.e. obj1, obj2, ....) hai sab combine ho jayegi aur guaranteed hai ki result yehi ayega

// documentation object assign mdn - to aap notice karenge ki object assign ek static method jo ki
// copy karta hai sare enumerable ya fir objects ko bhi

// means according to documentation humne target k andar sare source ko merge kar diya
// to kai bar iss syntax (documentation target source) ko use karne k liye target aur source ya kai bar
// ho sakta hai isse jada apke pas objects ho to isliye ek empty object {}, liya jata hai jaisa humne dekha

// kyu ki ho sakta hai humare pas aur bhi values/objects ho, jaise let hum obj4 le lete hai

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);

// o/p { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// to humare pas guarantee ho jati hai ki yeh humare pas jo first hai i.e. {}, yeh target hai
// aur yeh sare k sare i.e. obj1, obj2, obj4, ...... act karenge as a source, to yeh thoda sa easy
// hota hai padhne k liye
// achha isko karna compulsory nahi hai
// agar aap yeh samajhte hai ki hum isko i.e. {}, nahi denge to sarei values/objects i.e.
// obj2, obj4,....... object1 mei ja rahi hai waha se to yeh agar aap syntaxtically dhyan rakhenge to bhi theek hai
// but sir ka personal jo syntax rehta hai wo yeh rehta hai ki jab aap ek naya object i.e. obj3 return kar hi rahe hai
// aur memoory mei ja hi raha hai to ek empty object i.e. {},  hi isko de do usi ko i.e. {}, target maan lo
// aur inn sabhi ko i.e. obj1, obj2, obj4, ...............  aap source maan lo.
// to isliye isko i.e. {}, diya jata hai , kai production grade code mei apko yeh i.e. {}, dikhega
// but jab aap documentation mei padhenge to apko bola jata hai ki iss tareh se target and source

// in documentation , target ko print karaya i.e. console.log(target)

// in documentation, jo returnedTarget hai and target hai kya wo equal hai, haa ji equal hai
// yani ki true to wo same hi values apke pas ati hai

// to assign k through hum objects ko assign / merge kar sakte hai
// hum assign ko bhi kum hi use karne wale hai


// ================================================================================

// hum kya use karenge as follows

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// hum kya use karenge as follows
// hume chahiye object3 to aap kya kariye simple sa yahan pe ayiye ek object dijiye as follows

// const obj3 = {}

// aur fir kya kariye wapas se wohi, aapne glass pakda aur usko chord diya to kya ho gya
// spread ho gaya glass, to spread operator use karenge as follows

// const obj3 = {...obj1, ...obj2}
// ...obj1 ko spread kar do aur ...obj2 
// to yahan pe extra paranthesis i.e. {}, (as before) yeh sab likhne ki need nahi hai
// apko jitne bhi chahiye aap unko spread kar lijiye i.e. obj1, obj2, ...
// aur automatically unko i.e. obj1, obj2, .... humne object k andar rakh diya i.e. {...obj1, ...obj2}
// same wo hi array wala concept hai, to 90% of the time aap yehi wala use karenge syntax

// console.log(obj3);
// o/p { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// to humne sari values/objects ko spread kar diya phele aur uske baad obj3 mei humne inko combine kar liya hai

// ========================================================================================================

// achha ek syntax hum use karenge tab jab bhi database se values ayegi
// to database se jab values ati hai to sir basic bata dete hai
// suppose kariye apke pas users aye hai as follows

// const users =

// to users jo hai database se jadatar jab apke pas ayenge to array of object ayega as follows

// const users = []

// to yeh array hai iske andar yeh ek object ho gaya humare pas

// const users = [
//     {
        
//     }
// ]

// ab iske andar suppose kariye apke pas id aya hai, let id user ka hai 1

// const users = [
//     {
//         id: 1,
//     }
// ]

// user ka email bhi aya hai humare pas

// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     }
// ]

// to yeh ho gaya array ka object
// ab kya hai comma separated values/object as follows (object k last bracket k baad comma)

// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
// ]

// aisi (as follows)
// {
//     id: 1,
//     email: "h@gmail.com"
// },

// kai values/objects apke pas ati jayegi as follows

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// yeh aage jake hum projects mei dekhenge ki iss tareh se syntax kai bar ki array k andar
// bahut sare objects hai aur apko unko loop through karna hai ya koi value print karni hai
// to bahut hi asaan hai jaise aap users ko le sakte hai as follows

// users

// aur boliye ki mujhe unska konsa chahiye ya to aap loop laga lijiye dot map karke wo hum aaage seekhenge
// ya fir aap kariye ki mujhe uska first value access karna hai
// to kyuki array hai to humne square bracket lagaya and kaha ki hume first value access karni hai as follows

// users[1]

// ab first value kya hai users naam k array mei wo first value ek object hai , to ab aap dot notation use kar sakte hai as follows

// users[1]. 

// and dot notation k baad wo suggestion dega to let email id as follows

// users[1].email

// ab iske saath ek interesting cheej bhi hai
// hum chalte hai sabse phele tinderUser object k pas to tinderUser onject hum print kar lete hai
// as tinderUser object k bare mei hum aur interesting detail hum dekhenge

const tinderUser = {}

tinderUser.id = "123abc"

tinderUser.name = "Sammy"

tinderUser.isLoggedIn = false

console.log(tinderUser);
// o/p { id: '123abc', name: 'Sammy', isLoggedIn: false }

// to humare pas id hai name hai and isLoggedIn, theek hai itna values humne kiya tha
// ab kya hoga kai bar apko kuch iss tareh k methods ki jarurat padegi
// to hum kya karte hai isko console.log hi karke dekh lete hai as follows

// console.log();

// ab kya kariye aap likhiye objects as follows

// console.log(Object);

// aur hume chhiye ki mujhe uski sari keys de do as follows

// console.log(Object.keys);

// ab kiski keys chahiye kyu ki jab bhi aap object dot use karte hai to usko pata nahi hai
// ki aap kis object pe yeh method run karna chahte ho
// to hum karna chahte hai isko tinderUser k andar as follows

console.log(Object.keys(tinderUser));
// o/p [ 'id', 'name', 'isLoggedIn' ]

// ab sabse interesting cheej hai iske andar wo yeh hai ki apko jo o/p value milti hai
// uska datatype kya hai , notice kariye o/p ka datatype hai array
// to aapne sari keys ko liya aur ek array mei rakh diya ab aap chahe to uske upar loop laga sakte hai
// usko kai jagah kaam mei le sakte hai yeh bahut important hai aage jitne bhi projects banayege
// database k andar especially jab aap kaam karenge inn cheejo ka aap use karenge

// aur jis tareh se hum keys nikaal sakte hai uss tareh se hum values bhi nikaal sakte hai as follows

console.log(Object.values(tinderUser));
// o/p [ '123abc', 'Sammy', false ]

// baki basic properties sabke andar hoti hai jaise aap tinderUser.length use kar sakte hai
// aap chahe to uski sari values bhi nikaal sakte hai jo humne nikaali hai , keys bhi nikaal sakte hai

// ek aur interesting method hota hai jo ki hai entries as follows

console.log(Object.entries(tinderUser));
// o/p [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// to o/p mei dekhiye array k andar array mila hai , to har ek jo key value hai
// usko arrray mei bana diya jata hai, uski first jo property hai wo humesha key hogi
// aur jo second hogi wo humesha uski value hogi

// entries comparitively kum use ata hai

// =============================================================================================================

// ek final last aur bata de , kai bar kya hoga aap objects k andar pora loop through kar rahe hai
// aur loop karne k baad ek value nikaal rahe hai, to value nikaalte time kya hota hai kai bar
// wo value exist hi nahi karti hai, to agar value exist nahi karti hai to crash hone k chances hai
// to ya to aap usko manually dekhiye ya fir kya kar sakte hai aap simply usse poch bhi sakte hai
// ki kya apke pas yeh value hai as follows

// console.log();

// to aap kya kar sakte hai simply ki tinderUser ko boliye ki kya apke pas isLoggedIn naam ki koi value hai kya
// to aap yahan pe use kar sakte hai uske saath ek property tinderUser.hasOwnProperty as follows

// console.log(tinderUser.hasOwnProperty);

// ab aap yahan pe property ka jo bhi apko naam dena hai wo aap de sakte hai as follows

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// to hum yahan poch rahe hai ki kya apke pas isLoggedIn naam ki property hai
// o/p true

// lekin hum pochenge ki isLogged naam ki koi property hai as follows

console.log(tinderUser.hasOwnProperty('isLogged'));
// o/p false

// to kai bar property ko use karne se phele aap thoda sa yahan pe ayiye aur iss method ko use karke
// dekhiye ki kya uske pas yeh wali property available hai ya nahi hai

// =============================================================================================================================

// in browser console type as follows
// const obj1 = {1: "a", 2: "b"}
// and then type obj1 , to know more about object methods
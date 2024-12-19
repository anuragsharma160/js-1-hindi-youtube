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

// console.log(tinderUser);
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

// console.log(Object.keys(tinderUser));
// o/p [ 'id', 'name', 'isLoggedIn' ]

// ab sabse interesting cheej hai iske andar wo yeh hai ki apko jo o/p value milti hai
// uska datatype kya hai , notice kariye o/p ka datatype hai array
// to aapne sari keys ko liya aur ek array mei rakh diya ab aap chahe to uske upar loop laga sakte hai
// usko kai jagah kaam mei le sakte hai yeh bahut important hai aage jitne bhi projects banayege
// database k andar especially jab aap kaam karenge inn cheejo ka aap use karenge

// aur jis tareh se hum keys nikaal sakte hai uss tareh se hum values bhi nikaal sakte hai as follows

// console.log(Object.values(tinderUser));
// o/p [ '123abc', 'Sammy', false ]

// baki basic properties sabke andar hoti hai jaise aap tinderUser.length use kar sakte hai
// aap chahe to uski sari values bhi nikaal sakte hai jo humne nikaali hai , keys bhi nikaal sakte hai

// ek aur interesting method hota hai jo ki hai entries as follows

// console.log(Object.entries(tinderUser));
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

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// to hum yahan poch rahe hai ki kya apke pas isLoggedIn naam ki property hai
// o/p true

// lekin hum pochenge ki isLogged naam ki koi property hai as follows

// console.log(tinderUser.hasOwnProperty('isLogged'));
// o/p false

// to kai bar property ko use karne se phele aap thoda sa yahan pe ayiye aur iss method ko use karke
// dekhiye ki kya uske pas yeh wali property available hai ya nahi hai

// =============================================================================================================================

// in browser console type as follows
// const obj1 = {1: "a", 2: "b"}
// and then type obj1 , to know more about object methods

// ====================================================================================================

// Next Class (Object 3rd class)

// Destructuring array ki bhi hoti hai and objects ki bhi hoti hai
// Abhi hum sirf objects ki destructuring ki baat karte hai , array ki destructuring ki baat kabhi aur karnege

// Yeh kaam apko aana chahiye kyuki bahut kaam ayega , jaise React padhenge to waha se ek object milega, uss object
// ko apko destructure karke uski value leni padegi, aap direct bhi le sakte hai uss value ko but destructuring karna
// thoda sa easy hota hai, Sir React ka basic example bata denge kis tareh se values ati hai and usko destructure karte hai

// To hum simply define karte hai ek course

// const course ={}

// Ab course k andar course ka naam hoga

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// Ab kabhi bhi apko in values ko use karna hai, to kaise use karenge obvious si baat hai as follows

// console.log(course.courseInstructor);
// o/p hitesh
// isme koi kharabi nahi hai yeh sahi tarika hai , aap square bracket notation bhi use kar sakte hai

// lekin kai bar jab aapko code aur clean banana hota hai to baar baar , suppose kariye iss value ko ( console.log(course.courseInstructor) )
// 3 baar print kar rahe hai , to har baar course.courseInstructor, ya baar baar course.price, ya baar baar course.coursename
// to thoda sa ajeeb ho jata hai to iski jagah ek aur syntax hai yeh sirf syntaxtical baat hai aap kare ya nai kare yeh apke upar
// hai but jadatar log karte hai, to uske liye hum kya likhte hai --- const {} as follows

// const {} = 

// Aur uske baad hum likhte hai kaha se values extract karni hai, to hum values extract karni hai iss course object se
// to as follows

// const {} = course

// Ab hum isme likh sakte hai kya value extract karni hai, to suppose kariye apko value extract karni hai courseInstructor

// const {courseInstructor} = course
// to aapne courseInstructor extract kar li , ab iss point k baad jab bhi apko chahiye uske andar (course object k andar)
// to aap ko pora nahi likhna hai course.courseInstructor , aap directly likh sakte hai courseInstructor as follows

// console.log(courseInstructor);
// o/p hitesh

// Itna hi nahi, suppose kariye ki aapko lagta hai ki yar courseInstructor kaafi bada naam hai , to aap
// isko -- const (courseInstructor) = course , apne hisab se bhi naam de sakte hai jaise hum isko --- const (courseInstructor) = course
// naam de dete hai yaha pe as follows

const {courseInstructor: instructor} = course

// to ab courseInstructor ko hum instructor bolenge, bas itna hi syntax hai kisi bhi value ko aap destructure kar sakte hai
// jaise ab hume courseInstructor ki jagah sirf instructor ko call karna hai aur value wo hi ayegi as follows

console.log(instructor);
// o/p hitesh

// isi ko bolte hai object ko destructure karna

// ================================================================================================================

// ab yeh following portion React k bare mei hai

// ab jab aap React etc yeh sab jab seekhenge tab kuch method hote hai jaise suppose kariye sir kuch basic
// method yahan pe le lete hai ki yeh kuch humare pas name hai ya fir prop le lete hai navbar, iss tareh k aap
// props banayenge as follows

// const navbar = () => {

// }

// yeh functions k method etc hai yeh sab sir baad mei sikhayenge

// to jab bhi aap iss navbar ko call karenge to kuch values denge ki logo yeh hoga ya home mei yeh likhna hai
// iss tareh se

// const navbar = () => {

// }

// to suppose kariye aapne uss navbar ko call kiya as follows

// navbar()

// aur uske andar value de di hai suppose kariye company name hai to company k hisab se aapne de diya ki
// company ka name suppose kariye hitesh hai as follows

// navbar(company = "hitesh")

// ab kya hai ki navbar k andar jab

// yeh sir React k bare mei bata rahe hai, to waha pe kya hota hai by default ek props hota hai
// to har cheej ko props.company, props.yeh, props.yeh, as follows

// const navbar = (props.company) => {

// }

// navbar(company = "hitesh")

// to iss tareh se log nahi karte hai . To waha pe kya hota hai , waha pe ata hai apka yeh hi same concept
// destructuring ka, to har bar props.company, props.yeh likhne ki bajai log kya karte hai seedha yahan hi
// curly braces de dete hai as follows (means (props.company) ki jagah) aur yahan pe seedha likh dete hai company as follows

// const navbar = ({company}) => {

// }

// navbar(company = "hitesh")

// to dekhiye concept wo hi hai jo humne seekha lekin wha (React) mei iss concept ko (destructuring) itna detail explain nahi kiya jata hai
// as yeh expect kiya jata hai ki aap Javascript detail mei padh k aa rahe hai, to yeh concept React ka only illustration k
// liye tha, ab apko pata hai ki kabhi bhi aisa curly braces i.e. company wala curly braces i.e. (const navbar = ({company}) => {
// }) 
// ka syntax dekhenge to aap samajh jayenge ki yeh destructuring ki ja rahi hai

// ======================================================================================================

// Ab ate hai APIs k concept pe
// Abhi k liye itna hi samajh lijiye ki jab bhi apko apna kaam kisi aur k sar pe daal dena hai
// to usi ko APIs khete hai, (baad mei detail mei batayenge)

// Jaise restaurant mei menu lete hai aur bolte hai wada paav khaana hai, humari chinta nahi hai ki
// wo kitchen mei jake kaise banega, to wo jo menu card hai ek tareh se API ka documentation hi hai

// Jaise aap google pe LogIn pe click karte hai, aapko thodi na headache hai ki google uss insan
// ko verify kaise karega, ya fir uska email vahan pe proper dala hua hai ya nahi hai, aur wo register hai ya
// nahi hai, to yeh saare k saare kaam hai wo API k through hote hai

// Ab API kuch nahi hai apke pas kuch values ati hai backend se , unn values ko kaise aap likhte hai
// Phele k time mei wo values ati thi xml structure mei wo bahut hi complex hota tha
// Abhi values ati hai sari ki sari mostly apke pas JSON mei
// Ab JSON kaisa dikhta hai, JSON bahut hi asaan hai, JSON as follows jaisa dikhta hai

// {

// }

// Ha ji object hi hai lekin usko JSON bolte hai, iss object ka bas yahan pe koi naam nahi hai
// Ab suppose kariye yahan pe kuch values likhte hai as follows

// {
//     name: "hitesh",
//     coursename: "js in hindi",
//     price: "free"
// }

// Ab aap dekhenge humare pas kuch errors aye hai -- jaise coursename colon mei error (coursename:)
// aise hi price colon mei error (price:)
// to isne kaha hai ki achha yeh iss tareh se to nahi likha ja sakta kyuki yeh object nahi hai
// dhyan se dekhiyega object ka naam hota hai jaise following course ka naam hai course

// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// }

// but sirf aapne iss tareh se likha (i.e. bina naam ka object) to yeh almost JSON ki tareh treat kiya jata hai
// isko (as follows)

// {
//     name: "hitesh",
//     coursename: "js in hindi",
//     price: "free"
// }

// later on hum variables etc mei hold karte hai but apko proper ek JSON ka structure chahiye
// to uske andar kya hota hai keys (jaise iss JSON mei name, coursename, price keys hai) bhi
// usually string hoti hai as follows

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// aur uski value bhi ek string hoti hai jaise iss JSON mei "hitesh", "js in hindi" , "free"
// keys ki values hai and string hai

// Ab yahan pe yeh syntax error dega jaise "name": , "coursename": , "price": k colon mei syntax error as follows

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// In syntax error ko ignore kariyega , yeh humare samjhne k liye hai ki kaise hota hai
// ABhi sir batayenge eg ki yahan koi error nahi hai yeh perfect syntax hai

// ================================================================================

// Abhi hum is JSON ko kar dete hai comment out and dekhte hai ki JSON se jab API call hoti hai
// to hota kya hai , milta kaisa hai

// ===============================================================================

// to yahan pe humare pas bada hi simple sa url hai as follows

// url - https://api.github.com/users/hiteshchoudhary (8:48)

// iss url ko browser mei enter karenge to following o/p ayega

// o/p {
//   "login": "hiteshchoudhary",
//   "id": 11613311,
//   "node_id": "MDQ6VXNlcjExNjEzMzEx",
//   "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/hiteshchoudhary",
//   "html_url": "https://github.com/hiteshchoudhary",
//   "followers_url": "https://api.github.com/users/hiteshchoudhary/followers",
//   "following_url": "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
//   "gists_url": "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/hiteshchoudhary/subscriptions",
//   "organizations_url": "https://api.github.com/users/hiteshchoudhary/orgs",
//   "repos_url": "https://api.github.com/users/hiteshchoudhary/repos",
//   "events_url": "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/hiteshchoudhary/received_events",
//   "type": "User",
//   "user_view_type": "public",
//   "site_admin": false,
//   "name": "Hitesh Choudhary",
//   "company": null,
//   "blog": "https://www.youtube.com/c/HiteshChoudharydotcom",
//   "location": "India",
//   "email": null,
//   "hireable": null,
//   "bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
//   "twitter_username": "hiteshdotcom",
//   "public_repos": 100,
//   "public_gists": 5,
//   "followers": 35627,
//   "following": 0,
//   "created_at": "2015-03-23T13:03:25Z",
//   "updated_at": "2024-11-06T18:34:24Z"
// }

// to dekh sakte hai yahan pe bhi same iss tareh ka response aya hai o/p mei i.e. ek object hai
// jiska koi naam nahi hai , first key hai "login": jo ki string mei hai , uske baad colon hai
// aur values bhi string mei hai "hiteshchoudhary" , similarly aur keys and values bhi string
// mei hai
// numbers obvious si baat hai direct aa sakte hai jaise "id": ki value hai 11613311
// and true false hai wo bhi direct hi ate hai as unka datatype alag hai

// to iss tareh ki apko values milti hai (url o/p jaisi)
// to dekha apne iss tareh se apke pas APIs call ati hai to karna kya hai
// Hume seekhna hai ki API k andar ya Javascript k andar hum fetch method etc kaise use karte hai
// fetch method se hum koi yeh wala url call karenge response mei hume yeh data (url ka o/p) mil jayega
// to iss tareh se humko APIs k andar values milti hai

// Ab hume kyuki object samajh mei ata hai to hum isko (JSON) convert kar lenge object k andar aur fir
// ek ek values nikaal lenge bas itna hi kaam hai APIs ka
// API achhe se seekhenge abhi only brief introduction hai

// sirf itna hi nahi, kai baar apko APIs iss tareh (JSON) se nahi milne ki jagah , jaruri nahi hai humesha
// objects mei hi mile, kai bar apko APIs array ki format mei bhi milti hai
// to jab array ki format mei API milti hai to uss array k andar kafi iss tareh k objects hote hai as follows

// [
//     {},
//     {},
//     {},
// ]

// to ek array , uske andar object hai

// to hume uss time pe jo data hai humara jo humne seekha hai abhi tak ki kis tareh se hum arrays k upar
// loop laga sakta hai aur uske baad uske andar yahan pe objects k andar (means above array k andar objects k andar)
// ek ek values ko le sakte hai to yeh bhi hum aage seekhenge

// ===============================================================================

// Ek sir aur batate hai ki kis tareh se hum dekhenge
// to sir googke pe jate hai ek API bahut famous hai ------- random user me API


// go to first result

// to yahan pe iski API ko use karte hai
// ek API ka response hum lete hai

// scroll --- in results, ek sample response hai

// ab iss response ko hum copy karke hum wapas jayenge yahan pe code editor mei paste kar de as follows

// {
//     "results": [
//       {
//         "gender": "female",
//         "name": {
//           "title": "Miss",
//           "first": "Jennie",
//           "last": "Nichols"
//         },
//         "location": {
//           "street": {
//             "number": 8929,
//             "name": "Valwood Pkwy",
//           },
//           "city": "Billings",
//           "state": "Michigan",
//           "country": "United States",
//           "postcode": "63104",
//           "coordinates": {
//             "latitude": "-69.8246",
//             "longitude": "134.8719"
//           },
//           "timezone": {
//             "offset": "+9:30",
//             "description": "Adelaide, Darwin"
//           }
//         },
//         "email": "jennie.nichols@example.com",
//         "login": {
//           "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
//           "username": "yellowpeacock117",
//           "password": "addison",
//           "salt": "sld1yGtd",
//           "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
//           "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
//           "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
//         },
//         "dob": {
//           "date": "1992-03-08T15:13:16.688Z",
//           "age": 30
//         },
//         "registered": {
//           "date": "2007-07-09T05:51:59.390Z",
//           "age": 14
//         },
//         "phone": "(272) 790-0888",
//         "cell": "(489) 330-2385",
//         "id": {
//           "name": "SSN",
//           "value": "405-88-3636"
//         },
//         "picture": {
//           "large": "https://randomuser.me/api/portraits/men/75.jpg",
//           "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
//           "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//         },
//         "nat": "US"
//       }
//     ],
//     "info": {
//       "seed": "56d27f4a53bd5441",
//       "results": 1,
//       "page": 1,
//       "version": "1.4"
//     }
//   }

// to hume kuch bhi samajh nahi aane wala ki is API k andar kya data aa rha hai aur kitna data aa raha hai

// to hume kuch time spend karna padta hai inko samajhne k liye
// kuch online humare pas acche tools bhi hai jaise JSON formatter karke ek tool hai
// bahut sare aise tools hai, aap khud ka bhi bana sakte hai

// to json formatter tool mei online jake iss value result (random user me API wale result) ko paste kar dete hai

// aur fir dekhte hai ki mujhe uss code ko study karna hai , to click kariye format / beautify pe

// shayad humne copy paste mei gadbad kar di to random user me API mei -- how to use section mei url ko copy karte hai
// and iss url ko google browser mei enter karte hai and jo bhi result aye usko json formatter mei copy paste kar dete hai
// then click on format / beautify

// ab json formatter mei apke pas alag alag options hote hai, aap dekh sakte hai aap usko code mei convert karna chahte
// hai ya tree structure mei, ab jaise hi aap tree mei convert karenge to ab aapko thoda samajh mei aane laga hai
// achha humare pas jo response aa rha hai usme 2 objects mil rahe hai, first wala result hai , 2nd wala info hai

// agar hume results mei se kuch chahiye to yeh bol rha hai ki mai array hu, to mai array ki tareh isko handle karunga
// uske baad , fir array ki jo first value hai wo kya hai wo object hai, uske andar further options hai
// to agar hume yeh access karna hai to hum iss tareh se access kar sakte hai (dropdown karke)

// yeh access bhi hum karke dekhenge isi API ko handle karenge and sir pora batayenge kaise karte hai
// but abhi apko basic idea mil gaya hai ki jaruri nahi hai ki jab bhi sir kahe ki API hai
// to uska matlab yehi hai ki apko isi tareh se object hi milega as follows

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// usually milta hai, lekin ho sakta hai apko iss tareh ka array mile as follows

// [
//     {},
//     {},
//     {},
// ]

// to isliye humne itna time spend kara hai datatype ko spend karne k liye 

// ================================

// jitna bhi APIs hai yeh sara JSON format hi hai

// iske bare mei abhi apko chinta nahi karni ki yeh to object jaisa dikha rha hai isko JSON kyu bol rahe hai (as follows)

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// yeh to array jaisa dikh rha hai isko JSON kyu bol rahe hai (as follows)

// [
//     {},
//     {},
//     {},
// ]

// kyuki JSON jo hai wo simply JavaScript Object Notation hai, yeh sirf JS tak limited nahi hai
// yeh pori ki pori APIs industry mei chalta hai , aap chahe Ruby on Rails mei likhe
// chahe php mei likhe, apko object JSON format mei hi bhejna hota hai
// kaise karte hai wo bhi hum aage jake discuss karenge
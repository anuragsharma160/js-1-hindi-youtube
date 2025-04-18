// loops ka dusra naam iterations bhi hai
// isko (loops ko) iterators bhi bola jata hai

// kaafi tareh se iterations kar sakte hai,
// programming mei kisi bhi cheej ko karne k
// 4 se 5 tarike humesha hote hai

// to loops bhi kuch isi tareh se hai, ek tarika nahi hai
// apke pas kaafi loops hai

// =============================================================

// Achha kahan se start karenge, dekhiye sabse pehla aur basic loop
// hota hai -- for loop

// for

// Agar for loop basic samajh liya, to language chahe koi si ho
// python ho, chahe apki JavaScript ho, basic syntax uska (for loop ka)
// almost same hi rehta hai aur kahani ek dum same hi rehti hai

// Ab for loop ka syntax kaise seekhein , dekhiye sabse easy hota hai
// number print karayuye 1 se leke 10 tak , aadhi kahani to wahin
// clear ho jati hai

// yahan pe likhiye simply for as follows

// for

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// aur apko structure pata lag jayega

// for loop jo hai na, alag alag jagah bada jump karta hai kabhi
// yahan pe iska control flow jata hai, kabhi wahan jata hai
// jaise humne dekha tha function k andar bhi call kar rahe hai
// to function ka flow wahan chala gaya function ki definition pe
// wahan function execute hua , fir wapas aya , to aise hi yeh jo
// for loop hai na bada jump karta hai

// Sabse important cheej jo apko yahan pe najar aani chahiye wo
// aani chahiye yeh curly braces (for loop k first curly brace
// se leke for loop k last curly brace tak) as follows

// for

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// jaise hi curly braces aye matlab ek block scope humare pas
// aya hai (jo for loop k curly brace hai), to jo bhi iske
// andar (for loop k curly brace k andar) declare hoga iske
// through declare hoga wo aage jake apka kaam mei nahi ayega

// jaise yahan pe (inside for loop) ek index declare ho raha hai
// let index = 0 (see inside for loop) as follows

// for

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// Ab iss index ko agar aap yahan pe (outside for loop) print
// karana chahenge to apke pas access nahi hoga uska as follows

// for

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// console.log();

// aur hona bhi nahi chahiye, yehi to sahi baat hai kyuki aapne
// scope block yeh sab pehle padh liya hai to itni ab humare ko
// dikkat aa hi nahi rahi hai

// outside console.log() backspaced as follows

// for

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// to dekhiye kya keh raha hai sabse pehle iss loop ko padhte kaise hai
// kyuki kaafi complex dikh raha hai, itna nahi hai

// sabse pehle to yahan pe ek variable declare hua hai jiska naam hai
// index (let index = 0;) aur iss variable ke andar aapne value rakh di
// hai zero , theek hai ji

// uske baad aapka ata hai yeh wala portion (index < array.length;)
// jisko bolte hai condition check , yeh yahan tak semicolon ; tak
// condition check, to isne bola hai ki jo index hai (index < array.length;)
// iski length honi chahiye kum array.length se, hume pata hai array
// k andar ek property hoti hai -- array.length to usse yeh compare kar
// raha hai (index < array.length;)

// aur index ko fir yeh badhaye jaa raha hai (index++)

// to jaise jaise iteration ka kam ho jayega (circular type as loop hai)
// yeh jo index plus plus hai (index++) ispe (index++) loop directly
// nahi aata hai, jaise hi condition (index < array.length;) check ho
// jati hai, uske baad seedha loop andar ghus jata hai yahan pe
// (const element = array[index];)

// aur jab yeh poora execute ho jata hai (for loop i.e. jo bhi hum
// iss for loop k andar likhenge iske -- (const element = array[index];) baad)
// uske baad bahar jump karke aur index ki value ek baar badha deta hai (index++) (++ means ek bar increase karna)
// varna to ek hi jagah reh jaoge har bar wo hi kaam karte reh jaoge, kaam se
// bahar bhi to aana hai, jaise suppose kariye aapne koi playlist start kari,
// playlist mei fase thodi reh jaana hai, playlist ko khatam bhi karna hai

// to thoda sa print karke dekhte hai ab aap isko agar isi tareh (as follows)

// for

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// se chalayenge to nahi chalega, error aane wala hai, confirm 100 % error ayega
// kya error ayega wo bhi dekh lete hai

// save and run

// o/p for (let index = 0; index < array.length; index++) {
    // ^

    // ReferenceError: array is not defined

// to obvious si baat hai problem ayi hai ki array to aapne kabhi define
// kara hi nahi hai (see o/p)

// ab aap array ki length (index < array.length;) k hisab se aap variable
// (let index = 0;) (index in -- index < array.length;) ko compare kar rahe hai
// lekin array to kabhi aaya hi nahi (array in -- index < array.length;)

// to abhi kya karte hai abhi iss array ki length (index < array.length;) ki
// jagah hum hard coded value yahan pe 10 daal dete hai as follows

// for

// for (let index = 0; index < 10; index++) {
//     const element = array[index];
    
// }

// ki agar aapki index ki length 10 se kum hai (index < 10;)
// to to aap iss loop k andar jayiye (i.e. yahan jayiye --
// const element = array[index]; ) varna mat jayiye

// ab agar aap 10 se neeche aa rahe hai (index < 10;) (means yahan aa rahe hai
// -- const element = array[index];) (means loop k andar aa rahe hai)
// to aap ab kya kariye yeh array ka index print karane ki jagah
// ( array[index]; in const element = array[index]; ) hum kya karte hai
// seedha isko bol dete hai ki index ki jo bhi value hai wo print kara do
// as follows ( const element = index; )

// for

// for (let index = 0; index < 10; index++) {
//     const element = index;
    
// }

// to dekhiye ab wapas se usko padhte hai , humne kya kara ki ek
// index variable humne start kiya hai ( let index = 0; ) aur uss
// index variable k andar humne zero value le li hai ( let index = 0; )

// ab uske andar humne kaha hai ki index ko tab tak iss loop k andar
// leke jaao ya fir iss loop k andar tab tak jayiye jab tak index ki value
// 10 se less hai ( index < 10; )

// fir yeh yahan pe ( const element = index; ) humne isko bola hai
// ki yeh element hai ( const element = index; ) iske andar index
// ki value add kar do

// lekin ek fun k liye hum yahan pe iss element ( const element = index; )
// ko print bhi kara lete hai console.log(element) as follows

// for

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
    
// }

// aur fir kya kaha jaise hi yahan pe kaam ho jayega line number 199
// se just pehle (i.e. for loop k last curly brace se just pehle)
// iss block (for loop k scope) se just pehle hi jaise hi apka
// execution control aata hai, fir yeh execution control turant
// yahan (index++) chala jata hai, ki ab kya karo index ko badha
// do (index++)

// badhayenge kyu , kyuki wapas aake condition (index < 10;) bhi
// to check karni hai, declaration to ek hi bar hota hai (i.e.
// condition ka declaration (index < 10;) to ek hi bar hota hai
// and let index = 0; wala declaration bhi ek hi bar hota hai )
// wo to humesha aapko pata hi hai , to iss value statement
// ( i.e. let index = 0; ) pe to loop kabhi ayega hi nahi baad mei

// to sabse pehle kya hoga wapas se ek bar samajhte hai jaise hi aapne
// for keyword lagaya, uske baad sabse pehla kaam hota hai ki aapka
// index initialize hota hai ( let index = 0; ) ya jo bhi variable
// aapne initialize kiya hai

// uske baad check hoti hai aapki condition ( index < 10; )
// agar condition true hai (jaise if else mei thi) to aapka yeh
// as follows

// const element = index;
// console.log(element);

// execution hoga , to yaha pe jo bhi apko print karana hai, lock karana hai,
// database ko call karna hai wo sara kaam hoga,

// jaise hi ek bar caal ho gaya to yahan pe line number 199 pe jaise hi
// humara block scope end ho raha hai usse just pehle ( i.e. line 198)
// end hone se pehle , yeh jaake uss index ki value ko (index++) jisse bhi base pe
// aap iterate kar rahe hai usko badha deta hai (index++)

// aur wapas se aap aa jate hai iss index pe ( index < 10; )
// wapas se checking hogi, wapas se andar jayenge (true hoga to)
// as follows

// const element = index;
// console.log(element);

// wapas se index pe aa jayenge (index++) increment ho jayega

// wapas se checking hogi ( index < 10; ) , agar checking fail ho gayi
// (false ho gayi) to seedha bahar aa jayenge line number 200 pe
// bas itni si hi kahani hai

// bola tha loop itna jada difficult hai hi nahi

// save & run

// o/p 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

// dekhiye yeh 9 tak print ho gaya (see o/p)
// ab 9 tak kyu print hua hai, kyuki jaise hi value
// 10 ho gayi (index < 10;) to humne kya bola ,
// kya 10 , 10 se chota hai (index < 10;) , bilkul
// nahi hai (false) , 10, 10 k barabar hai chota thodi hai
// to isliye (yeh loop k andar jayega hi nahi as index = 10
// kyuki humari condition hai index < 10;) 

// ==================================================================

// agar aapko 10 bhi print karana hai to ek equal aur laga do
// as follows ( index <= 10; ) yeh to humne padha hi tha

// for

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(element);
    
// }

// save and run

// o/p 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// ===========================================================================

// for

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(element);
    
// }

// Ab kya hota hai kayi bar index ki jagah ( let index = 0; )
// aap yahan kuch aur variables bhi le sakte hai as follows

// for

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
    
// }

// to ab humara index ki jagah i ho gaya hai variable ka naam (8:01)
// as above

// yeh aap kaafi bar dekhenge iss tareh k loops print hona

// save and run

// o/p 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// to dekhiye yeh print h gaya

// yeh to ho gaya humara basic

// =======================================================

// for

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
    
// }

// Ab yahan pe ek cheej hyaan rakhiyega ki yeh jo element hai
// yeh vaise to apko pata hi hai already but yeh jo element hai
// yeh apke pas kahin pe bhi bahar (outside scope of for loop) iska access nahi hai as follows
// (console.log(element) outside for loop )

// for

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
    
// }

// console.log(element);

// kyu nahi hai , kyuki yeh jo element hai ( const element = i; (see inside for loop) )
// yeh declare hi yahan pe (inside scope of for loop) hua hai scope k andar
// to humne kaafi charcha kari thi iske bare mei

// save and run

// o/p console.log(element);
// ^

// ReferenceError: element is not defined

// yeh dekhiye (see o/p) element bahar accessible nahi hai aur hona bhi nahi
// chahiye, kyuki varna bahut jada spilling ho jati hai bahut jada
// problem ho jati hai

// ==============================================================================================

// for

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
    
// }

// console.log(element);

// Ab yahan pe kya hai ki aap isko mix bhi kar sakte hai ki
// abhi suppose kariye abhi yeh to obvious si baat hai pata
// hi hai aapko (bahar wala console.log(element) is commented out)

// Lekin ab suppose kariye isko humari purani knowledge se agar isko
// include karna hai to bhi hum kar sakte hai

// kaise kar sakte hai ki suppose kariye yeh element i to aa hi raha hai
// (const element = i;)

// hum yahan pe (inside for loop) ek condition bhi print kara lete hai
// if humne padha tha as follows

// for

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (condition) {
        
//     }
//     console.log(element);

// }

// to hum kya bolte hai ki agar element jo hai iski value agar
// equal equal ho jaye 5 ke to kya karo ek console.log() print
// kar do aur print kar do console.log("5 is best number") as follows

// for

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is best number");
            
//     }
//     console.log(element);

    
// }

// to 5 best number hai iske alawa koi best number nahi hota hai (just example)
// to humne yahan pe print kar liya, to ab kaise print hoga,
// 5 tak to basic print hoga, jaise hi 5 hoga uske baad kya hoga,
// yeh number ( console.log("5 is best number"); ) print hoga

// achha pehle batayiye yeh number ( console.log("5 is best number"); ) print hoga
// ya fir yeh 5 print hoga ( console.log(element); )

// yeh interesting cheej hai ki pehle number 5 print hoga ( console.log(element); )
// ki pehle yeh message print hoga ( console.log("5 is best number");

// Agar apko yeh visualize karna aa gaya na ki kya pehle ho raha hai
// to matlab aap code ko samajhne lag gaye hai, likhna abhi nahi aa raha hai
// koi baat nahi, but aap samajhne lag gaye hai atleast, aapko flow
// pata lag raha hai ki konsa cheej kab execute hoga

// to hum isko save and run karte hai

// o/p 0
// 1
// 2
// 3
// 4
// 5 is best number
// 5
// 6
// 7
// 8
// 9
// 10

// to hum thoda sa upar jaate hai (iss o/p mei) to dekhiye 4,
// (see o/p) 4 k baad jaise hi number k andar 5 value ayi
// ( const element = i; ) (means 4 k baad jaise hi element k andar 5 value ayi)
// to abhi yahan pe uss loop k 4 k baad khatam hua 5,
// to sabse pehle yeh condition as follows

// if (element == 5) {
//     console.log("5 is best number");
        
// }

// execute hogi aur uske baad 5 ( console.log(element) ) print
// ho jayega

// ========================================================================================

// Ab itna hi nahi hai loops k andar bhi loops aa sakte hai
// yeh to bahut hi basic ho gaya, to humne above for loop
// k andar console.log("5 is best number") ko aur
// console.log(element) ko comment out kar diya
// isse loop chaelga but kuch print nahi hoga humare pas

// ============================================================================================

// Chaliye ek aur loop likh k dekh lete hai to ek for loop lete hai
// as follows

// Hum chahe to wapas yahan pe i likh sakte hai index ki jagah as follows

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// kyu likh sakte hai wapas se i kyuki previous for loop ka scope
// sirf uske first curly brace se leke uske last curly brace tak hai
// to uss previous for loop k andar jo variable hai i likha , element likha
// wo sab uske (previous for loop k scope k andar) andar hi khatam ho gaye hai
// aap bahar aate hi (previous for loop k bahar aate hi) wapas se usko (variables ko) re-use kar sakte hai

// theek hai to hum kya kar sakte hai iss array.length ko hatate hai
// arrays pe loop kaise lagate hai uske liye aur achhe loops bhi hai
// humare pas, hum yahan pe simply 10 likh lete hai aur isko bhi
// less than equal to kar lete hai as follows (i <= 10;) taki 10 value
// print ho

// for (let i = 0; i <= 10; i++) {
//     const element = array[i];
    
// }

// yeh ho gaya humara ek loop , iss line ( const element = array[i]; )
// ko backspace kar diya as follows

// for (let i = 0; i <= 10; i++) {
    
    
// }

// to abhi aapne jaise dekha ki jis tareh se loop k andar if else laga sakte ho
// to vaise hi loop k andar loop bhi likh sakte ho , koi problem hai hi nahi
// to wapas se likh dijiye chaliye ek for loop aur likh diya iss just above
// for loop k andar as follows

// for (let i = 0; i <= 10; i++) {
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
        
//     }
    
// }

// iske andar (andar wale for loop k andar) bhi wapas se aap index lena chahe index ki jagah
// ya fir i lena chahe index ki jagah, dekhiye i lene ko to hum le sakte hai lekin
// yahan problem ho jayegi i lete hi, kya problem ho jayegi kyuki hum usi
// scope k andar hai (bahar wale for loop k scope k andar hi andar wala for loop hai)
// to wahan pe (andar wale for loop mei) mis match ho jayega

// to better rahega hum j le lete hai yahan pe (andar wale for loop k andar)

// for (let i = 0; i <= 10; i++) {
//     for (let j = 0; j < array.length; j++) {
//         const element = array[j];
        
//     }
    
// }

// aur isko array.length (array ki length) ko (andar wale for loop mei) apko kab tak chalana hai,
// aap chahe to koi hard coded number tak bhi chala sakte hai , jaise hum isko bhi
// (andar wale for loop mei array.length ko) 10 tak chala lete hai aur less than equal to
// kar diya as follows (aap ki jaisi marji ho, aap wahan tak isko chaliye)

// for (let i = 0; i <= 10; i++) {
//     for (let j = 0; j <= 10; j++) {
//         const element = array[j];
        
//     }
    
// }

// andar wale for loop ki iss line ( const element = array[j]; ) ko
// backspace kar diya as follows

// for (let i = 0; i <= 10; i++) {
//     for (let j = 0; j <= 10; j++) {
        
        
//     }
    
// }

// theek hai ab dekhiye , ab iss position pe humare pas kya hai, ek loop
// to yeh hoga (bahar wala for loop) jo 10 tak chalega, kya kar rahe hai
// uske (bahar wale for loop k) 10 (dus) k andar wo alag baat hai

// ek loop yeh hai (andar wala for loop) jo bhi 10 (dus) tak chalega

// theek hai dono baat ho gayi

// ab chaliye console.log karke dekhte hai as follows

// for (let i = 0; i <= 10; i++) {
//     console.log();
    
//     for (let j = 0; j <= 10; j++) {
        
        
//     }
    
// }

// to isko bolte hai hum outer loop, to suppose kariye wapas se back ticks
// use karte hai aur likhte hai -- Outer loop value:

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value:`);
    
//     for (let j = 0; j <= 10; j++) {
        
        
//     }
    
// }

// Aur dollar sign se hum humara variable inject kar dete hai as follows

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${}`);
    
//     for (let j = 0; j <= 10; j++) {
        
        
//     }
    
// }

// yeh ho gaya variable inject as follows (variable i hai outer loop mei)

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
    
//     for (let j = 0; j <= 10; j++) {
        
        
//     }
    
// }

// Ab yahan pe humko chahiye i ki value ( ${i} ) ( outer loop mei )

// theek hai ab isi tareh se jo inner loop hai, uske andar bhi humko chahiye

// to pehle console.log karke dekhte hai inner loop mei as follows

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
    
//     for (let j = 0; j <= 10; j++) {
//         console.log();
        
        
        
//     }
    
// }

// Aur isko bolte hai wohi back ticks k saath -- Inner loop value

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
    
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop value`);
        
        
        
//     }
    
// }

// Aur yahan pe bhi hum do values (two values) print kar lete hai using dollar sign as follows

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
    
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop value ${}`);
        
        
        
//     }
    
// }

// to yeh lijiye pehle hum print kar lete hai j as follows

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
    
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop value ${j}`);
        
        
        
//     }
    
// }

// fir likhte hai -- and inner loop , as follows

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
    
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop value ${j} and inner loop`);
        
        
        
//     }
    
// }

// fir hum use karte hai dollar sign (as hume two values print karni hai
// kyuki humara inside for loop ka scope outside for loop k scope k andar hai)

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
    
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop value ${j} and inner loop ${}`);
        
        
        
//     }
    
// }

// Aur yahan pe bhi hum iski i value print karte hai (2nd dollar sign mei ${})
// as follows

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
    
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop value ${j} and inner loop ${i}`);
        
        
        
//     }
    
// }

// Ab j k andar (means inner for loop k andar) aapke pas i value ka access
// hai kyuki aap scope k andar hai (means hum outer for loop k scope k andar hai)

// save and run

// o/p Outer loop value: 0
// Inner loop value 0 and inner loop 0
// Inner loop value 1 and inner loop 0
// Inner loop value 2 and inner loop 0
// Inner loop value 3 and inner loop 0
// Inner loop value 4 and inner loop 0
// Inner loop value 5 and inner loop 0
// Inner loop value 6 and inner loop 0
// Inner loop value 7 and inner loop 0
// Inner loop value 8 and inner loop 0
// Inner loop value 9 and inner loop 0
// Inner loop value 10 and inner loop 0
// Outer loop value: 1
// Inner loop value 0 and inner loop 1
// Inner loop value 1 and inner loop 1
// Inner loop value 2 and inner loop 1
// Inner loop value 3 and inner loop 1
// Inner loop value 4 and inner loop 1
// Inner loop value 5 and inner loop 1
// Inner loop value 6 and inner loop 1
// Inner loop value 7 and inner loop 1
// Inner loop value 8 and inner loop 1
// Inner loop value 9 and inner loop 1
// Inner loop value 10 and inner loop 1
// Outer loop value: 2
// Inner loop value 0 and inner loop 2
// Inner loop value 1 and inner loop 2
// Inner loop value 2 and inner loop 2
// Inner loop value 3 and inner loop 2
// Inner loop value 4 and inner loop 2
// Inner loop value 5 and inner loop 2
// Inner loop value 6 and inner loop 2
// Inner loop value 7 and inner loop 2
// Inner loop value 8 and inner loop 2
// Inner loop value 9 and inner loop 2
// Inner loop value 10 and inner loop 2
// Outer loop value: 3
// Inner loop value 0 and inner loop 3
// Inner loop value 1 and inner loop 3
// Inner loop value 2 and inner loop 3
// Inner loop value 3 and inner loop 3
// Inner loop value 4 and inner loop 3
// Inner loop value 5 and inner loop 3
// Inner loop value 6 and inner loop 3
// Inner loop value 7 and inner loop 3
// Inner loop value 8 and inner loop 3
// Inner loop value 9 and inner loop 3
// Inner loop value 10 and inner loop 3
// Outer loop value: 4
// Inner loop value 0 and inner loop 4
// Inner loop value 1 and inner loop 4
// Inner loop value 2 and inner loop 4
// Inner loop value 3 and inner loop 4
// Inner loop value 4 and inner loop 4
// Inner loop value 5 and inner loop 4
// Inner loop value 6 and inner loop 4
// Inner loop value 7 and inner loop 4
// Inner loop value 8 and inner loop 4
// Inner loop value 9 and inner loop 4
// Inner loop value 10 and inner loop 4
// Outer loop value: 5
// Inner loop value 0 and inner loop 5
// Inner loop value 1 and inner loop 5
// Inner loop value 2 and inner loop 5
// Inner loop value 3 and inner loop 5
// Inner loop value 4 and inner loop 5
// Inner loop value 5 and inner loop 5
// Inner loop value 6 and inner loop 5
// Inner loop value 7 and inner loop 5
// Inner loop value 8 and inner loop 5
// Inner loop value 9 and inner loop 5
// Inner loop value 10 and inner loop 5
// Outer loop value: 6
// Inner loop value 0 and inner loop 6
// Inner loop value 1 and inner loop 6
// Inner loop value 2 and inner loop 6
// Inner loop value 3 and inner loop 6
// Inner loop value 4 and inner loop 6
// Inner loop value 5 and inner loop 6
// Inner loop value 6 and inner loop 6
// Inner loop value 7 and inner loop 6
// Inner loop value 8 and inner loop 6
// Inner loop value 9 and inner loop 6
// Inner loop value 10 and inner loop 6
// Outer loop value: 7
// Inner loop value 0 and inner loop 7
// Inner loop value 1 and inner loop 7
// Inner loop value 2 and inner loop 7
// Inner loop value 3 and inner loop 7
// Inner loop value 4 and inner loop 7
// Inner loop value 5 and inner loop 7
// Inner loop value 6 and inner loop 7
// Inner loop value 7 and inner loop 7
// Inner loop value 8 and inner loop 7
// Inner loop value 9 and inner loop 7
// Inner loop value 10 and inner loop 7
// Outer loop value: 8
// Inner loop value 0 and inner loop 8
// Inner loop value 1 and inner loop 8
// Inner loop value 2 and inner loop 8
// Inner loop value 3 and inner loop 8
// Inner loop value 4 and inner loop 8
// Inner loop value 5 and inner loop 8
// Inner loop value 6 and inner loop 8
// Inner loop value 7 and inner loop 8
// Inner loop value 8 and inner loop 8
// Inner loop value 9 and inner loop 8
// Inner loop value 10 and inner loop 8
// Outer loop value: 9
// Inner loop value 0 and inner loop 9
// Inner loop value 1 and inner loop 9
// Inner loop value 2 and inner loop 9
// Inner loop value 3 and inner loop 9
// Inner loop value 4 and inner loop 9
// Inner loop value 5 and inner loop 9
// Inner loop value 6 and inner loop 9
// Inner loop value 7 and inner loop 9
// Inner loop value 8 and inner loop 9
// Inner loop value 9 and inner loop 9
// Inner loop value 10 and inner loop 9
// Outer loop value: 10
// Inner loop value 0 and inner loop 10
// Inner loop value 1 and inner loop 10
// Inner loop value 2 and inner loop 10
// Inner loop value 3 and inner loop 10
// Inner loop value 4 and inner loop 10
// Inner loop value 5 and inner loop 10
// Inner loop value 6 and inner loop 10
// Inner loop value 7 and inner loop 10
// Inner loop value 8 and inner loop 10
// Inner loop value 9 and inner loop 10
// Inner loop value 10 and inner loop 10

// o/p explanation -- ab kya hai humara yeh jo loop hai dekhiye sabse
// pehle value aapki thi zero -- Outer loop value: 0 (see o/p),
// ab inner loop k andar gaye to inner loop 10 bar (dus bar) print hoga
// (see for loop) , to aap pehle loop k andar gaye (inner loop mei)
// jaise hi yahan pe ( console.log(`Inner loop value ${j} and inner loop ${i}`); )
// aye to yahan pe ( console.log(`Inner loop value ${j} and inner loop ${i}`); ) aap fas gaye
// ki yeh loop (inner for loop) bhi dus bar ( 10 bar ) chalna tha
// to jaise hi zero value ayi ( Outer loop value: 0 ), inner loop wapas se
// dus bar ( 10 bar ) chalega (see o/p as follows)

// Inner loop value 0 and inner loop 0
// Inner loop value 1 and inner loop 0
// Inner loop value 2 and inner loop 0
// Inner loop value 3 and inner loop 0
// Inner loop value 4 and inner loop 0
// Inner loop value 5 and inner loop 0
// Inner loop value 6 and inner loop 0
// Inner loop value 7 and inner loop 0
// Inner loop value 8 and inner loop 0
// Inner loop value 9 and inner loop 0
// Inner loop value 10 and inner loop 0

// to dekhiye inner loop chalta gaya

// dekhiye yeh zero hua -- Outer loop value: 0 (see o/p)
// inner loop apka yahan se leke -- Inner loop value 0 and inner loop 0 (see o/p)
// yahan tak -- Inner loop value 10 and inner loop 0 (see o/p)
// dus bar chala kyu kyuki andar k loop ko to dus bar ( 10 bar ) chalna hi tha

// inner loop ka jo number hai wo iske 10 bar execute hone k baad wapas se
// aata hai, fir iska number , fir wapas se 10 bar aa jata hai

// to yeh jo hai kayi bar visualize karne mei logo ko problem hoti hai isliye
// sir ne apko iss tareh se visualize karke dikhaya hai ki outer loop ek bar
// chala hai -- Outer loop value: 1 (see o/p) , inner loop wapas se 10
// bar chala hai as follows (see o/p)

// Inner loop value 0 and inner loop 1
// Inner loop value 1 and inner loop 1
// Inner loop value 2 and inner loop 1
// Inner loop value 3 and inner loop 1
// Inner loop value 4 and inner loop 1
// Inner loop value 5 and inner loop 1
// Inner loop value 6 and inner loop 1
// Inner loop value 7 and inner loop 1
// Inner loop value 8 and inner loop 1
// Inner loop value 9 and inner loop 1
// Inner loop value 10 and inner loop 1

// chalna hi tha , dekhiye taki outer loop ki value to one hi hai
// ( Inner loop value 10 and inner loop 1 , mei i is 1 (see o/p) ), yeh inner loop ki value to khatam honi
// hi thi ,( Inner loop value 10 and inner loop 1 , mei j is 10 (see o/p) )

// to iska thoda sa dhyan rakhiyega log confuse ho jate hai
// isliye sir ne diya hai

// ==================================================================================

// Achha iske andar aap aur bhi cheejein kar sakte the

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
    
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop value ${j} and inner loop ${i}`);
        
        
        
//     }
    
// }

// jaise sir yeh line -- console.log(`Inner loop value ${j} and inner loop ${i}`);
// to comment out kar dete hai as hume samajh to aa hi gaya hai
// as follows

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
    
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop value ${j} and inner loop ${i}`); commented out
        
        
        
//     }
    
// }

// ab yahan pe kya hai multiplication etc kuch bhi karna hai
// to aap wo bhi kar sakte hai

// theek hai to kaise kar sakte hai, dekhiye i value li humne 
// ( in inside for loop console.log(i) ) as follows

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
    
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop value ${j} and inner loop ${i}`); commented out
//         console.log(i);
        
        
        
        
//     }
    
// }


// iske andar yeh add kar diya string hai

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
    
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop value ${j} and inner loop ${i}`); commented out
//         console.log(i + '');
        
        
        
        
//     }
    
// }

// iske andar kya kara i value to li aapne aur yahan pe ab humara
// multiplication symbol, sir table print karne ki koshish kar rahe hai yahan pe
// i times as follows

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
    
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop value ${j} and inner loop ${i}`); commented out
//         console.log(i + '*');
        
        
        
        
//     }
    
// }

// ab yahan pe hum le lete hai + aur , yahan pe hum seedhe value
// likh dete hai -- j as follows (14:02)

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
    
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop value ${j} and inner loop ${i}`); commented out
//         console.log(i + '*' + j);
        
        
        
        
//     }
    
// }

// aur wapas se + le liya aur humne kya kara yeh likh diya equals -- ' = '
// as follows

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
    
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop value ${j} and inner loop ${i}`); commented out
//         console.log(i + '*' + j + ' = ');
        
        
        
        
//     }
    
// }

// fir + likh diya 

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
    
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop value ${j} and inner loop ${i}`); commented out
//         console.log(i + '*' + j + ' = ' + );
        
        
        
        
//     }
    
// }

// aur i multiply by j karna hai, to yeh i*j as follows

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
    
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop value ${j} and inner loop ${i}`); commented out
//         console.log(i + '*' + j + ' = ' + i*j);
        
        
        
        
//     }
    
// }

// bada hi basic sa hai to sir ne kya isko bola hai thoda sa
// liknne mei bada problem ho jata hai isliye sir back ticks jada
// prefer karte hai kyuki kya hai variables inject kar do sir usse hi jada
// comfortable hai

// to humne kya bola i times j ( console.log(i + '*' + j + ' = ' + i*j); mei i + '*' + j )
// equals hoga kitna i multiply by j
// ( console.log(i + '*' + j + ' = ' + i*j); mei i*j )

// but likhne ka jo syntax hai structure hai kahin humne usme
// string inject kari hai ( '*' ) , kahin variable inject kara hai
// ( j ) wo thoda sa problamatic hai

// sir thoda sa isme problematic feel karte hai kyuki sir ko
// back ticks ki jada aadat hai

// again write (just for understanding) as follows

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
    
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop value ${j} and inner loop ${i}`); commented out
//         console.log(i + '*' + j + ' = ' + i*j);
        
        
        
        
//     }
    
// }

// save and run

// o/p Outer loop value: 0
// 0*0 = 0
// 0*1 = 0
// 0*2 = 0
// 0*3 = 0
// 0*4 = 0
// 0*5 = 0
// 0*6 = 0
// 0*7 = 0
// 0*8 = 0
// 0*9 = 0
// 0*10 = 0
// Outer loop value: 1
// 1*0 = 0
// 1*1 = 1
// 1*2 = 2
// 1*3 = 3
// 1*4 = 4
// 1*5 = 5
// 1*6 = 6
// 1*7 = 7
// 1*8 = 8
// 1*9 = 9
// 1*10 = 10
// Outer loop value: 2
// 2*0 = 0
// 2*1 = 2
// 2*2 = 4
// 2*3 = 6
// 2*4 = 8
// 2*5 = 10
// 2*6 = 12
// 2*7 = 14
// 2*8 = 16
// 2*9 = 18
// 2*10 = 20
// Outer loop value: 3
// 3*0 = 0
// 3*1 = 3
// 3*2 = 6
// 3*3 = 9
// 3*4 = 12
// 3*5 = 15
// 3*6 = 18
// 3*7 = 21
// 3*8 = 24
// 3*9 = 27
// 3*10 = 30
// Outer loop value: 4
// 4*0 = 0
// 4*1 = 4
// 4*2 = 8
// 4*3 = 12
// 4*4 = 16
// 4*5 = 20
// 4*6 = 24
// 4*7 = 28
// 4*8 = 32
// 4*9 = 36
// 4*10 = 40
// Outer loop value: 5
// 5*0 = 0
// 5*1 = 5
// 5*2 = 10
// 5*3 = 15
// 5*4 = 20
// 5*5 = 25
// 5*6 = 30
// 5*7 = 35
// 5*8 = 40
// 5*9 = 45
// 5*10 = 50
// Outer loop value: 6
// 6*0 = 0
// 6*1 = 6
// 6*2 = 12
// 6*3 = 18
// 6*4 = 24
// 6*5 = 30
// 6*6 = 36
// 6*7 = 42
// 6*8 = 48
// 6*9 = 54
// 6*10 = 60
// Outer loop value: 7
// 7*0 = 0
// 7*1 = 7
// 7*2 = 14
// 7*3 = 21
// 7*4 = 28
// 7*5 = 35
// 7*6 = 42
// 7*7 = 49
// 7*8 = 56
// 7*9 = 63
// 7*10 = 70
// Outer loop value: 8
// 8*0 = 0
// 8*1 = 8
// 8*2 = 16
// 8*3 = 24
// 8*4 = 32
// 8*5 = 40
// 8*6 = 48
// 8*7 = 56
// 8*8 = 64
// 8*9 = 72
// 8*10 = 80
// Outer loop value: 9
// 9*0 = 0
// 9*1 = 9
// 9*2 = 18
// 9*3 = 27
// 9*4 = 36
// 9*5 = 45
// 9*6 = 54
// 9*7 = 63
// 9*8 = 72
// 9*9 = 81
// 9*10 = 90
// Outer loop value: 10
// 10*0 = 0
// 10*1 = 10
// 10*2 = 20
// 10*3 = 30
// 10*4 = 40
// 10*5 = 50
// 10*6 = 60
// 10*7 = 70
// 10*8 = 80
// 10*9 = 90
// 10*10 = 100

// o/p - to yeh humne run kara to dekhiye aapka jo table print
// hai wo print ho raha hai ki 10*0 = 10, 10*1 = 10
// see o/p as follows

// Outer loop value: 10
// 10*0 = 0
// 10*1 = 10

// to aapne 0 se leke (Outer loop value: 0)
// 0*0 = 0, 0*1 = 0, ... (see o/p)
// saari tables ek hi saath mei print kar li hai

// to yeh outer value 0 ki hai -- Outer loop value: 0 (see o/p)
// to yeh ho agyi aapki zero ki table as follows

// 0*0 = 0
// 0*1 = 0
// 0*2 = 0
// 0*3 = 0
// 0*4 = 0
// 0*5 = 0
// 0*6 = 0
// 0*7 = 0
// 0*8 = 0
// 0*9 = 0
// 0*10 = 0 (see o/p)

// isi tareh se 1 ho gaya -- Outer loop value: 1 (see o/p)
// to one ki table as follows

// 1*0 = 0
// 1*1 = 1
// 1*2 = 2
// 1*3 = 3
// 1*4 = 4
// 1*5 = 5
// 1*6 = 6
// 1*7 = 7
// 1*8 = 8
// 1*9 = 9
// 1*10 = 10 (see o/p)

// isi tareh se two ho gaya -- Outer loop value: 2 (see o/p)
// to 2 ki table (see o/p)

// ================================================================================

// theek hai ab aapko lagta hai nahi yeh zero se nahi (let i = 0; see outer for loop)
// mujhe to one se print karna tha to kya karna hai iss outer loop mei
// (let i = 1; see outer loop) aur yahan pe (inner loop mei let j = 0; ki jagah
// let j = 1; kar denge) inner loop mei bhi one kar denge as follows

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
    
//     for (let j = 1; j <= 10; j++) {
//         console.log(`Inner loop value ${j} and inner loop ${i}`); commented out
//         console.log(i + '*' + j + ' = ' + i*j);
        
        
        
        
//     }
    
// }

// save and run

// o/p Outer loop value: 1
// 1*1 = 1
// 1*2 = 2
// 1*3 = 3
// 1*4 = 4
// 1*5 = 5
// 1*6 = 6
// 1*7 = 7
// 1*8 = 8
// 1*9 = 9
// 1*10 = 10
// Outer loop value: 2
// 2*1 = 2
// 2*2 = 4
// 2*3 = 6
// 2*4 = 8
// 2*5 = 10
// 2*6 = 12
// 2*7 = 14
// 2*8 = 16
// 2*9 = 18
// 2*10 = 20
// Outer loop value: 3
// 3*1 = 3
// 3*2 = 6
// 3*3 = 9
// 3*4 = 12
// 3*5 = 15
// 3*6 = 18
// 3*7 = 21
// 3*8 = 24
// 3*9 = 27
// 3*10 = 30
// Outer loop value: 4
// 4*1 = 4
// 4*2 = 8
// 4*3 = 12
// 4*4 = 16
// 4*5 = 20
// 4*6 = 24
// 4*7 = 28
// 4*8 = 32
// 4*9 = 36
// 4*10 = 40
// Outer loop value: 5
// 5*1 = 5
// 5*2 = 10
// 5*3 = 15
// 5*4 = 20
// 5*5 = 25
// 5*6 = 30
// 5*7 = 35
// 5*8 = 40
// 5*9 = 45
// 5*10 = 50
// Outer loop value: 6
// 6*1 = 6
// 6*2 = 12
// 6*3 = 18
// 6*4 = 24
// 6*5 = 30
// 6*6 = 36
// 6*7 = 42
// 6*8 = 48
// 6*9 = 54
// 6*10 = 60
// Outer loop value: 7
// 7*1 = 7
// 7*2 = 14
// 7*3 = 21
// 7*4 = 28
// 7*5 = 35
// 7*6 = 42
// 7*7 = 49
// 7*8 = 56
// 7*9 = 63
// 7*10 = 70
// Outer loop value: 8
// 8*1 = 8
// 8*2 = 16
// 8*3 = 24
// 8*4 = 32
// 8*5 = 40
// 8*6 = 48
// 8*7 = 56
// 8*8 = 64
// 8*9 = 72
// 8*10 = 80
// Outer loop value: 9
// 9*1 = 9
// 9*2 = 18
// 9*3 = 27
// 9*4 = 36
// 9*5 = 45
// 9*6 = 54
// 9*7 = 63
// 9*8 = 72
// 9*9 = 81
// 9*10 = 90
// Outer loop value: 10
// 10*1 = 10
// 10*2 = 20
// 10*3 = 30
// 10*4 = 40
// 10*5 = 50
// 10*6 = 60
// 10*7 = 70
// 10*8 = 80
// 10*9 = 90
// 10*10 = 100

// o/p explanation - to sari tables aa gayi hai , one ki table aa gayi
// uske baad 2 ki table aa gayi, aur yeh hume samajh mei kyu aa raha hai kyuki
// humne ek bar sirf zero aur one ko print karke dekha hai ki achha values iss
// tareh se print hoti hai

// theek hai aasaan tha

// ==================================================================================

// Achha yeh values kya hai arrays k upar bhi hoti hai
// agar aapne gaur se dekha ho to har bar hum jab yeh jo for loop
// ka basic structure likhte hai , iss line -- console.log(i + '*' + j + ' = ' + i*j);
// aur iss line -- console.log(`Outer loop value: ${i}`); ko comment out
// kar lete hai as follows

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`); commented out
    
//     for (let j = 1; j <= 10; j++) {
//         console.log(`Inner loop value ${j} and inner loop ${i}`); commented out
//         console.log(i + '*' + j + ' = ' + i*j); commented out
        
        
        
        
//     }
    
// }

// naye field mei hum baat karte hai

// to dekhiye jaise hi hum yahan pe for loop likhte hai as follows

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// to aap dekhenge basic yeh  kya bolta hai ki array k upar sara
// kaam karne ki koshish karta hai ( index < array.length; ) (as just above for loop)
// 16:07

// theek hai to hum kya karte hai ek array bhi declare kar lete hai
// theek hai ji as follows

// to myArray likh lete hai kyuki keyword k naam se vaisa hi
// datatype bhi hai to kuch achhi baat nahi lagti hai

// let myArray = []

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// theek hai to hum iske andar kuch super heroes daal dete hai
// myArray k andar as follows

// const myArray = ["flash", "batman", "superman"]

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


// ab yeh jo myArray hai, obvious si baat hai replace ho jayega
// iss array se (jo for loop k andar likha hai -- index < array.length;
// aur yeh -- array[index];) , variable ka naam hi to hai
// as follows

// const myArray = ["flash", "batman", "superman"]

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
    
// }

// array ko access karne k liye hume pata hai uska index value ( myArray[index]; )
// dena hota hai

// to ab yeh loop (yeh for loop) kispe lag gaya hai, iss array (myArray)
// pe lag gaya hai simply, vaise array pe loop lagane k liye aur better
// structure hai JS mei but basic hum dekh lete hai

// to humne kya kara theek hai hume pata hai ki array ka index zero
// se start hota hai ( let index = 0; see inside for loop ) , wo basic
// mujhe mil hi raha hai

// kab tak chalana hai iss index ko ( index < myArray.length; ) jab tak
// ki array ki length se wo chota rahe ( index < myArray.length; )
// obvious si baat hai

// aur index++ aur yeh basic ( const element = myArray[index]; )
// (see for loop)

// bas to ek loop k andar humne bas variable change kare hai aur
// aapne array k upar loop laga liya hai

// print to humne karaya hi nahi hai, to print kara lete hai uss
// element ko as follows (console.log(element);)

// const myArray = ["flash", "batman", "superman"]

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }

// save and run

// o/p flash
// batman
// superman

// o/p explanation -- to obvious si baat hai humare flash, batman, superman
// print ho gaye hai, kyuki humne loop kahan tak chalaya hai
// zero se start (let index = 0;) kara hai aur jab tak array ki length
// (index < myArray.length;) wahan pe nahi aa jaye print.....

// to array ki length kya aati hai yeh bhi aapko bata dete hai ji 
// to yeh ho gaya humara myArray aur dot length (myArray.length in console.log())
// as follows 17:26

// let myArray = ["flash", "batman", "superman"]

// console.log(myArray.length);

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }

// save and run

// o/p 3
// flash
// batman
// superman

// o/p explanation -- to dekhiye array ki length kitni hai 3 hai (see o/p)
// 3 matlab array ki length to 3 hai (3 items hai myArray k andar) lekin
// humne usse less ka chalaya hai (for loop) (index < myArray.length;)
// dhyan se rahiyega = nahi likha hai (means yeh - (index <= myArray.length;)
// nahi likha hai, yeh -- (index < myArray.length;) likha hai)
// equal to (less than equal to) kyu nahi likha hai kyuki array k andar
// (myArray k andar) yeh -- "flash" zero value hai, yeh -- "batman" one value hai,
// aur yeh -- "superman" two value hai, isliye sir ne yahan pe yeh -- index <= myArray.length;
// nahi likha for loop k andar

// ================================================================================================

// agar aisa -- index <= myArray.length; kar denge for loop k andar to kya hoga as follows

// let myArray = ["flash", "batman", "superman"]

// console.log(myArray.length);

// for (let index = 0; index <= myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }

// agar aisa -- index <= myArray.length; kar denge for loop k andar to kya hoga
// abhi aap array se (myArray se) bahar hi chale gaye hai , to aisa -- index <= myArray.length;
// to karna theek nahi hai, save and run

// o/p 3
// flash
// batman
// superman
// undefined

// to aapko yahan pe yeh undefined milta hai (see o/p)

// Achha JS k andar kya hota hai ki wo -- out of bound,
// exception , etc nahi hote hai, but yeh undefined (see o/p)
// bhi apne aap mei ek bahut badi problematic cheej hai to isliye iska
// dhyan rakhiyega, yeh (undefined see o/p) usually nahi aana chahiye

// but theek hai abhi apko basic samajh mei aa gaya hai ki kis tareh se
// arrays k loops aate hai

// ===============================================================================================================

// Achha ek cheej isme khaas taur se dhyaan mei rakhiyega

// let myArray = ["flash", "batman", "superman"]

// console.log(myArray.length);

// for (let index = 0; index <= myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }

// yeh jo index++ hai na, iska bahut role hai, agar yeh index++ nahi hoga na
// to bahut problem ho jati hai, kaise, suppose kariye agar yahan
// index++ ki jagah aap index hi karte , means aap index as it is hi 
// return kar rahe the as follows

// let myArray = ["flash", "batman", "superman"]

// console.log(myArray.length);

// for (let index = 0; index <= myArray.length; index) {
//     const element = myArray[index];
//     console.log(element);
    
// }

// to ab aapne condition to change hi nahi kari, change agar nahi karenge
// to loop wahin ki wahin hi chalta jayega, to problem  kya ho jati hai
// isko jaise hi save and run karnege as follows

// o/p flash
// flash
// flash
// flash
// flash
// flash
// flash
// ---
// ---
// ---
// ---
// ---
// ---

// (aise hi chalta jayega o/p mei flash , flash , flash , .....)

// ab dekhiye (see o/p) flash pe hi atak gaya hai, kuch badh hi nahi raha hai
// (kyuki index mei increment operator ++ nahi hai)

// ab isko o/p ko ctrl + c karke hume rokna padega in terminal
// vaise to memory nahi consume karega bahut memory, bahut memory hai sir k pas (laptop mei)
// but fir bhi sahi baat to nahi hai, aise to nahi chalna chahiye tha, to dhyan rahiyega
// yeh jo condition change hoti hai (i.e. index++) iska change hona bahut bahut jaruri hai

// =====================================================================================================

// Theek hai yeh to ho agya basic

// Ab iske baad ek chote mote keywords k bare mei aur dekhte hai, wo bhi bahut achhe syntax hai
// apko kaafi maja ayega uske andar bhi, to isko -- console.log(myArray.length); hum
// comment out kar dete hai , aur isko -- console.log(element) ko bhi hum
// comment out kar dete hai (above for loop example mei) taki humare pas kuch
// additional comments na ho

// =======================================================================================================

// Theek hai ab humare chalte hai kuch keywords k bare mei

// Dekhiye loops k andar aapko pata hai ki aapne one se leke ten tak print kara,
// poora array print kara but aisa jaruri nahi hai ki loop ek bar start kar diya
// to poora hi print karna hai aur bahut saare cases mei aap aage jaake dekhenge
// jaise database se values aati hai wahan pe bhi aati hai, to aapke pas suppose
// kariye hazaar books ka data aaya, ab hazaar books ek bar mei ek page pe thodi na
// print karni hai hume ya fir ek card mei thodi na show karni hai, ho sakta hai
// hume paanch (5 books) hi show karni hai, 5 se leke 10 tak hum agle page pe
// show karenge (5th book se leke 10th book tak), to aise kayi conditions aati hai
// jahan pe aapko aisa jaruri nahi hai ki ek bar loop start kar diya to end tak hi
// khatam karna hai

// kayi bar aisa hota hai ki beech mei koi condition aa gayi (loop k) to uss condition
// k basis pe hume loop ko hatana hai, khatam karna hai, to uske liye do (2) aapke
// important keyword hote hai jo aapko pata hone chahiye infact har programmer ko
// pata hone chahiye -- break and continue

// ==========================================================================================================

// break and continue 

// Ab inn continue ko agar samjhaane baitho na to kya hota hai ki poori
// raat hi beet jayegi apni

// to hum samjhaane se better kya prefer karte hai ki code mei apko
// seedha ka seedha demonstration de, theek hai

// to ek number print karate hai ek (1) se leke 20 tak, practice bhi
// ho jayegi , theek hai

// yeh for loop liya as follows

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// index hi rehne dete hai for loop k andar

// array ki length (index < array.length;) tak to nahi chahiye hume
// abki bar kahan tak chahiye hume -- 20 tak

// to index < 20; kar diya humne as follows

// for (let index = 0; index < 20; index++) {
//     const element = array[index];
    
// }

// lekin yeh to 19 tak hi jayega as less than hai (index < 20;)
// to equal to bhi laga diya humne less than k saath (index <= 20;)
// as follows

// for (let index = 0; index <= 20; index++) {
//     const element = array[index];
    
// }

// index ki value bhi har bar badha rahe hai (index++)
// theek hai ji bahut achhi baat hai

// yeh zero se (let index = 0;) hume samajh nahi aa raha
// to hum 1 se 20 tak kar lete hai

// to humne (let index = 1;) kar diya as follows

// for (let index = 1; index <= 20; index++) {
//     const element = array[index];
    
// }

// theek hai ji 1 se 20 tak kar liya

// ab yeh value (const element = array[index];) hume print karani
// hai to iss tareh se (const element = array[index];) kyu print karein
// hum direct hi i ki value (index ki value) print kara lete hai

// to humne iss line -- (const element = array[index];) ko backspace kiya
// aur iski jagah console.log likh diya as follows

// for (let index = 1; index <= 20; index++) {
//     console.log();
    
    
// }

// to hum yaahn pe back ticks lenge wapas se as follows

// for (let index = 1; index <= 20; index++) {
//     console.log(``);
    
    
// }

// to seedha bolte hai -- Value of index is , as follows

// for (let index = 1; index <= 20; index++) {
//     console.log(`Value of index is`);
    
    
// }

// Aur yahan pe apne variable inject kar diye using dollar sign as follows

// for (let index = 1; index <= 20; index++) {
//     console.log(`Value of index is ${}`);
    
    
// }

// Aur seedha bol diya index tak print kar do as follows

// for (let index = 1; index <= 20; index++) {
//     console.log(`Value of index is ${index}`);
    
    
// }

// save and run

// o/p Value of index is 1
// Value of index is 2
// Value of index is 3
// Value of index is 4
// Value of index is 5
// Value of index is 6
// Value of index is 7
// Value of index is 8
// Value of index is 9
// Value of index is 10
// Value of index is 11
// Value of index is 12
// Value of index is 13
// Value of index is 14
// Value of index is 15
// Value of index is 16
// Value of index is 17
// Value of index is 18
// Value of index is 19
// Value of index is 20

// theek hai yeh humare pas value print ho gayi 1 se leke 20 tak
// (see o/p)

// Ab hum chahte hai kyuki favourite number 5 tha, to favourite number jaise hi
// 5 detect ho jaye to hum iss loop se bahar aa jaye

// theek hai ji, to kya karenge, console.log k baad likhenge ya console.log
// k pehle (i.e. iss line -- console.log(`Value of index is ${index}`); k 
// baad likhenge ya iss line k pehle) , pehle hi likhna padega varna to
// print hi ho jayega 5 (means 20 tak print hi ho jayega) kyuki 5 best hai,
// hai na jaise DSA best hai vaise 5 number best hai, bina 5 number aye aapka
// kuch nahi ho sakta life mei

// to hum if condition likh lete hai before this line -- console.log(`Value of index is ${index}`
// inside for loop as follows

// for (let index = 1; index <= 20; index++) {
//     if (condition) {
        
//     }
//     console.log(`Value of index is ${index}`);
    
    
// }

// theek hai chaliye humne kya bola (inside if condition) ki yeh jo index hai
// agar jaise hi yeh 5 detect kare i.e. index == 5, theek hai to kuch karna hai
// as follows

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
        
//     }
//     console.log(`Value of index is ${index}`);
    
    
// }

// Kya karna hai , sabse pehle console.log() print karna hai 
// ki 5 detect ho gaya hai as follows

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log();
        
//     }
//     console.log(`Value of index is ${index}`);
    
    
// }

// Now using back ticks write `Detected 5` inside console.log(),
// yahan pe ( console.log(`Detected 5`); ) direct hi likh sakte hai aap chahe to index value likh
// sakte hai, but hume pata hai condition mei check hoke aaya hai 5,
// to 5 detect ho gaya hoga wahan pe (21:34) as follows

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
        
//     }
//     console.log(`Value of index is ${index}`);
    
    
// }

// theek hai ab kya hai ki ek keyword use kar sakte ho yahan pe -- break
// as follows

// aapko yaad ho to switch case mei bhi humne use kara tha

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`Value of index is ${index}`);
    
    
// }

// to jaise hi switch case mei bhi use karte hai, usi tareh se yeh bhi (jo break likha) yahan pe
// (iss for loop mei) bhi kaam karega

// to hum dekhte hai kasia humara code print ho raha hai

// save and run 

// o/p Value of index is 1
// Value of index is 2
// Value of index is 3
// Value of index is 4
// Detected 5

// o/p explanation -- to dekhiye index ki value 1 hui (Value of index is 1 , see o/p),
// 2 hui (Value of index is 2 , see o/p), 3 hui (Value of index is 3 , see o/p),
// 4 hui (Value of index is 4 , see o/p) aur 5 jaise hi detect hui (Detected 5 , see o/p)
// to iske baad kya ho gaya ki aapke loop ne kaam karna hi band kar diya
// (console.log(`Value of index is ${index}`);)

// aap seedhe jump kar gaye line number 1908 k scope k bahar, theek hai ji
// to break bahut aasaan tha

// kisi bhi control flow ko break karna ho to hum break likhte hai

// humne yehi control flow aapko yaad ho to humne switch case mei
// bhi dekha tha ki jahan pe bhi break aa jata hai to wahan se control flow
// poora bahar chal jata hai yahan pe (means last curly brace k bahar)
// uske baad kuch execute nahi hota hai

// ab obvious si baat hai switch case mei last case mei agar break nahi hota
// to default case etc jitne bhi hote hai sab k sab hi print ho jate
// to wo hi same kahani yahan pe (for loop) mei hai

// ===================================================================================

// Achha ab kya karte hai isi ko (just above for loop example ko) hi ek bar
// copy aur paste karte hai

// to yeh to aapko samajh mei aa hi gaya hai ki break se aap control
// execution ko seedha hi bahar faink dete ho , to baaki ka print nahi
// hoga, lekin obvious si baat hai koi condition match honi chahiye

// ab isi tareh se ek aur keyword bhi aata hai -- continue
// as follows

// to break ki jagah continue likh diya copy pasted for loop mei
// as follows

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of index is ${index}`);
    
    
}

// yeh (continue) bada hi interesting hai dono k andar, break aur continue
// mei difference

// ab difference sirf itna sa hai, continue kya bolta hai -- ki yaar
// ek baar maaf kar do, theek hai

// to aise ho jata hai na game mei foul ho jate hai, kuch galti aap kar
// dete hai to ek baar to maafi mil jaati hai to yeh (continue) usi
// tareh se kuch continue hai, ki nahi nahi khelte raho, games mei
// hota hai especially basketball etc mei are continue continue, theek hai
// galti ho gayi ho jaane do

// to uss galti ko ignore kar diya jata hai, ab uss galti ko galti boliye,
// ek iteration boliye, condition boliye, kuch bhi boliye, to wo ignore ho jata hai

// to yahan pe humne dekha save and run

// o/p Value of index is 1
// Value of index is 2
// Value of index is 3
// Value of index is 4
// Detected 5
// Value of index is 6
// Value of index is 7
// Value of index is 8
// Value of index is 9
// Value of index is 10
// Value of index is 11
// Value of index is 12
// Value of index is 13
// Value of index is 14
// Value of index is 15
// Value of index is 16
// Value of index is 17
// Value of index is 18
// Value of index is 19
// Value of index is 20

// o/p explanation -- to dekhiye print to sab ho gaya lekin gaur se dekhiye,
// to yahan pe dekhiye 1 se leke (Value of index is 1 , see o/p) 4 tak
// to ho gaya print (Value of index is 4, see o/p)
// 5 pe humne ek checking laga rakhi thi , to 5 humara detect ho gaya hai
// (Detected 5 , see o/p)
// Lekin 5 print to hua hi nahi (see o/p) (Value of index is 6 , after Detected 5)
// to ek condition usne (continue ne) bol diya arre... ek condition k liye
// aapko maafi di jati hai continue kariye aur ek condition pe apko ho gaya
// aur aap skip karke 6 (Value of index is 6), 7 (Value of index is 7),
// 8 (Value of index is 8) ,.... baaki as it is continue

// to dono mei (break and continue mei) difference sirf itna sa hi hai
// bas ki continue bolta hai ki apka jo condition hai usko ek bar k liye hum
// ( condition -- if (index == 5) {} ) skip kar denge

// jaise hi detect ho gayi yahan pe condition ( condition -- if (index == 5) {} )
// aur continue aa gaya (continue after console.log(`Detected 5`))
// to ek bar (uss condition k anusar sirf ek bar) mei jo bhi yahan print hona hai (console.log(`Value of index is ${index}`);)
// wo bolta hai (continue) mai print nahi karunga, lekin aisa nahi hai ki
// mai (continue) loop se bahar hi aa jaunga

// aur break k andar kya hota hai nahi nahi aap detect ho gaye ab kuch nahi
// hoga ab yahin ki yahin sab band karenge

// ============================== LECTURE END ==============================================

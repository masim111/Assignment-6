// //question #1//

// var user1a=prompt("Enter your first name")
// var user1b=prompt("Enter your last name")
// var fullName= user1a+" "+user1b

// alert(fullName +" "+"we are welcoming You")

// //question #2//

// var user1=prompt("Tell us about your fvr8 mobile brand")
// document.write("my fvr8 phone is:"+" "+user1)
// document.write("lenght of string is "+" " + user1.length+"<br>")

// //question #3//

// var firstName = "pakistani"
// var char = firstName.indexOf("n")
// document.write("String:" + " " + firstName + "<br>")
// document.write('index of "n" is:' + " " + char)

// //question #4//

// var firstName= "hello world"
// var char=firstName.lastIndexOf("l")
// document.write("String:"+" "+firstName+"<br>")
// document.write('last index of "l" is:'+ " "+char)

// //question #5//

// var firstName= "pakistani"
// var char=firstName.charAt(3)
// document.write("String:"+" "+firstName+"<br>")
// document.write('char at index 3:'+ " "+char)

// //question #6//

// var firstName2 = prompt("Enter your first name")
// var lastName2 = prompt("Enter your last name")
// var fullName2 = firstName2.concat(" "+lastName2);
// document.write("My name is "+fullName2)

// //question #7//

// var city= "hyderabad"
// var rep= city.replace("hyder","Islam")
// document.write("city:"+" "+city+"<br>")
// document.write("After replacement:"+" "+rep)

// //question #8//

// var city=  "Ali and Sami are best friends. They play cricket and football together"
// var rep= city.replace(/and/g,"&")
// document.write("city:"+" "+city+"<br>")
// document.write("After replacement:"+" "+rep)

// //question #9//

// var value= 472
// document.write("value:"+value+"<br>")
// var a=typeof(value)

// document.write("type:"+a+"<br>")
// document.write("value:"+" "+value+" <br>")
// var str=value.toString()
// var b=typeof(str)
// document.write("type:"+b+"<br>")

// //question #10//

// var inp= prompt("Enter value")
// var inputCap=inp.toUpperCase()
// document.write(inputCap)

// //question #11//

// var inp= prompt("Enter value")
// var inputCap=inp.charAt(0).toUpperCase() + inp.substr(1).toLowerCase();
// document.write(inputCap)

// //question #12//

// var value = 35.36
// document.write("number:" + value + "<br>")
// var value2 = value.toString()

// var deci = value2.replace(".", "")
// document.write("result" + " " + deci)


// //question #13//

// var nam = prompt("enter your username")
// for(i=0; i<nam.length; i++){

//     if (nam.charAt(i) === "@" || nam.charAt(i) === "." || nam.charAt(i) === "," || nam.charAt(i) === "!") {
//         prompt("please enter a correct user name")
//         break;

//     }
    
// }

// document.write(nam)


// //question #14//

// document.writeln("<br><br>")
// var bakery = new Array('cake', 'apple pie', 'cookie', 'chips', 'patties')
// var order = prompt('Welcome to ABC Bakery. What do you want to order Sir/Mam?')
// var index = [0,1,2,3,4]
// order = order.toLowerCase();
// for(var i=0;i<bakery.length && index.length ;i++){
//     if(order === bakery[i]){
//         document.writeln('<br>'+order+' is available at index '+index[i]+' in our bakery.')
//     }
//     else{
//         document.writeln('<br>We are sorry. '+order+' is not available in our bakery.')
//     }    
// }

// //question #15//

// document.writeln("<br><br>")
// var pswrd = prompt('Enter a password')
// document.write('Enter password: '+pswrd)
// if(pswrd === String || Number){
//     if(pswrd.length > 6){
//         if(pswrd.startsWith() === Number){
//             document.write('<br>Password can not begin with a number')
//             document.write('<br>Please Enter a valid password')
//         }
//     }
//     else{
//         document.writeln('<br>Password must be contain more than 6 characters')
//     }
// }

// //question #16//

// document.write("<br><br>")
// var university = 'University of Karachi';
// var convertInArr = university.split('');
// for(var i=0; i< convertInArr.length;i++){
//     document.writeln(convertInArr[i]+'<br>')
// }

// //quetion #17//

// document.write("<br><br>")
// var aChar = prompt('Enter a word')
// document.write('User Input: '+aChar)
// document.write('<br>Last character of input: '+aChar.slice(aChar.length - 1))

// //question 18//

// ocument.write("<br><br>")
// var para ='The quick brown fox jumps over the lazy dog';
// var upperPara = para.toLowerCase()
// document.write('Text: '+para)
// var count = upperPara.match(/the/g).length;
// document.write('<br>There are '+count+' occurences of the word "the"')

    ///////////////***********chapter26-30******************* */

// //Question #1//


// var a = parseFloat(prompt('Enter a positive float number',3.45214))
// var b=Math.round(a)
// var c=Math.floor(a)
// var d=Math.ceil(a)
// document.write("NUMBER:"+a+"<br>"+"round of value:"+b+"<br>"+"floor value:"+c+"<br>"+"ceil value:"+d)

// //Question #2//

// var a = parseFloat(prompt('Enter a negative float number',-2.673))
// var b=Math.round(a)
// var c=Math.floor(a)
// var d=Math.ceil(a)
// document.write("NUMBER:"+a+"<br>"+"round of value:"+b+"<br>"+"floor value:"+c+"<br>"+"ceil value:"+d)

// //Question #3//

// var a=prompt("enter number")
// var b=Math.abs(a)
// document.write("Absolute value:"+ b)

// //Question #4//

//  var randm=Math.floor(Math.random()*6)
//  document.write(randm)
     
// //Question #5//

//  var prom1= prompt("enter your side")
//  var prom2= prompt("enter your side")

//         var randm= Math.random()*2
//         var floor= Math.floor(randm)
//         document.write(floor)
//         if(floor=== 0){
//             alert("random coin toss value: head")
//         }else{
//             alert("random coin toss value: tail")
//         }
// //Question #6//

// var randm= Math.random()*100
// var round=Math.round(randm)
// document.write("random number between 1-100 is:"+" "+round)

// // questrion #7//

// document.writeln("<br><br>")
// var weight = parseInt(prompt('Enter your weight in kilogram'))
// var weightInKg = (Math.random() + weight).toFixed(1);
// document.writeln('The weight of user is '+weightInKg+' kilograms')

// // question #8//

// document.writeln("<br><br>")
// var aNumber5 = parseInt(prompt('Enter a number between 1 and 10'))
// var randomNumber = Math.floor(Math.random() * 10 + 1)
// if(aNumber5 === randomNumber){
//     document.writeln('Congratulation! Your answer is correct')
// }
// else{
//     document.writeln('Try Again')
// }

//************chapter31-34 */


//Question #1//

// var a= new Date();
// document.write(a)

// //Question #2//

// var a= new Date();
// var b=a.toLocaleString('default', { month: 'long' })
// document.write("Current Month:"+" " +b)

// //Question #3//

// var a= new Date();
// var b=a.toLocaleString('default', { weekday: 'long' })
// var d= b.slice(0,3)

// document.write("today is "+" "+d)

// //Question #4//

// var a= new Date();
// var b=a.toLocaleString('default', { weekday: 'long' })
// document.write(b)
// if(b==="Sunday" || c==="Saturday"){
//     alert("its funday")
// }

// //Question #5//

// var a= new Date();
// var b= a.getDate()
// document.write(b)
// if(b<16){
//     alert(" First fifteen days of the month")
// }
// else{
//     alert( "Last days of the month")
// }
// // question #6//

// var currentDate6 = new Date();
// var currentTime6 = currentDate6.getTime();
// document.write(currentDate6)
// var givenDate = new Date('Jan 1, 1970');
// var givenTime = givenDate.getTime();
// var diffOfTime = currentTime6 - givenTime;
// document.write('<br>Elapsed miliseconds since January 1, 1970: '+diffOfTime)
// var timeInMin = diffOfTime/(1000*60)
// document.write('<br>Elapsed minutes since January 1, 1970: '+timeInMin)

// // question #7//

// var currentDate7 = new Date();
// var getCurrentTime7 = currentDate7.getHours()
// if(getCurrentTime7 < 12){
//     document.write("It's A.M")
// }
// else{
//     document.write("It's P.M")
// }

// // question #8//

// var currentDate8 = new Date(2020, 12, 0, 24, 0, -1)
// document.write('Later Date: '+currentDate8)

// // question #9//

// var ramzanDate = new Date('April 25, 2020').getTime();
// var currentDate9 = new Date().getTime();
// var remainTime = currentDate9 - ramzanDate;
// var remainDays = Math.floor(remainTime/(1000*60*60*24))
// document.write(remainDays+' days have passed since 1st Ramadan, 2020')

// // question #10//

// var currentDate10 = new Date();
// var beginDate = new Date('Jan 1, 2015');
// var diffDate = currentDate10 - beginDate;
// var passedSec = diffDate/1000;
// document.write('On reference date '+currentDate10+',<br>'+passedSec+' seconds has passed since begin of 2015')


// // question #11//

// var currentDate11 = new Date();
// document.write('Current time: '+currentDate11)
// var anHourAgo = currentDate11.setHours(currentDate11.getHours() - 1);
// var anHourDate = new Date(anHourAgo)
// document.write('<br>1 hour ago, it was '+anHourDate)

// // question #12//

// var currentDate12 = new Date();
// document.write('Current time: '+currentDate12)
// var _100yearAgo = currentDate12.setFullYear(currentDate12.getFullYear() - 100);
// var _100yearBack = new Date(_100yearAgo)
// document.write('<br>100 years back, it was '+_100yearBack)

// // question #13//
// var currentDate13 = new Date().getFullYear();
// var ageDate = new Date('Oct 24, 1998').getFullYear();
// var diffAge = currentDate13 - ageDate;
// document.write('Your age is '+diffAge)
// document.write('<br>Your birth year is '+ageDate)

// // question #14//


// document.write('<h1>K-Electric Bill</h1>')
// var customerName = 'kiran maqsood';
// document.write('Customer Name: '+customerName)
// var  months1 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var currentDate14 = new Date();
// var monthName1=months1[currentDate14.getMonth()];
// document.write('<br>Month: '+monthName1)
// var numOfUnit = 410;
// document.write('<br>Number of unit: '+numOfUnit.toFixed(2))
// var chargesPerUnit = 16;
// document.write('<br>Charges per unit: '+chargesPerUnit.toFixed(2))
// document.write('<br><br>')
// var netAmount = numOfUnit * chargesPerUnit;
// document.write('Net amount payable(within Due Date): '+netAmount.toFixed(2))
// var lateCharges = 350;
// document.write('<br>Late payment charges: '+lateCharges.toFixed(2))
// var grossAmount = netAmount +lateCharges;
// document.write('<br>Gross amount payable(within Due Date): '+grossAmount.toFixed(2))

///**********************chapter35-38 */

// // question #1//

// var currentTime;
// function dateTime(){
//     currentTime = new Date();
//     document.write(currentTime)
// }

// dateTime();

// // question #2//


// function greet(firstName,lastName){
//     document.write('Hello '+firstName+' '+lastName)
// }

// greet('kiran','maqsood');

// // question #3//

// var a = parseInt(prompt('Enter a number'))
// var b = parseInt(prompt('Enter another number'))

// function sumOfTwoNum(){
//     var c = a + b;
//     document.write('The sum of two numbers is '+c)
// }

// sumOfTwoNum();

// // question #4//

// var aNum = parseInt(prompt('Enter a number'))
// var anNum = parseInt(prompt('Enter another number'))
// var opertaor = prompt('Enter an operator')
// var ans;
// function calculator(firstNumber,secondNumber,optr){
//     if(optr === '+'){
//         ans = aNum + anNum;
//     }
//     else if(optr === '-'){
//         ans = aNum - anNum;
//     }
//     else if(optr === '*'){
//         ans = aNum * anNum;
//     }
//     else if(optr === '/'){
//         ans = aNum / anNum;
//     }
//     else if(optr === '%'){
//         ans = aNum % anNum;
//     }
//     document.write('The result is '+ans)
// }

// calculator(aNum,anNum,opertaor);


// // question #6//


// var sq = Math.pow(5,2);
// function square(sqOfNum){
//     return sq;
// }

// document.write('The sqaure of 5 is '+square(sq))

// // question #6//


// function Factorial(n){ 
//     var ans1=1; 
      
//     for (var i = 2; i <= n; i++){ 
//         ans1 = ans1 * i;  
//     }
//     return ans1;
// } 

// document.write('The factorial of 9 is '+Factorial(9))

// // question #7//


// var startNum =parseInt(prompt('Starting number of counting'))
// var endNum =parseInt(prompt('Ending number of counting'))

// function counting(countStart,countEnd){
//     for(var i = startNum; i <= endNum; i++){
//         document.write(i+'<br>')
//     }
// }
// counting(startNum,endNum);

// // question #8//

// var base = parseInt(prompt('Enter the base value'))
// var per = parseInt(prompt('Enter the perpendicular value'))
// var sqOfBase = Math.pow(base,2)
// var sqOfPer = Math.pow(per,2)

// function calculateHypoteneus(){
//     document.write('Hypotenuse^2 = Base^2 + Perpendicular^2')
//     document.write('<br>Hypotenuse^2 = '+sqOfBase+' + '+sqOfPer)
//     document.write('<br>Hypotenuse^2 = '+calculateSquare(base,per));
// }

// function calculateSquare(value1,value2){
//     return sqOfBase + sqOfPer;
// }

// calculateHypoteneus();

// // question #9//

// function areaOfRect(width,height){
    
//     var area = width * height;
//     document.write('Area = width * height ')
//     document.write('<br>Area = '+width+ ' * '+height)
//     return area;
// }

// document.write('<br>Area = '+areaOfRect(5,6));

// // question #10//


// var aPalindrome = prompt('Write a palindrome')
// var reverse = aPalindrome.split('').reverse().join('')
// function palindrome(word){
//     if(reverse === word){
//         document.write('It is a palindrome word')
//     }
//     else{
//         document.write('It is not a palindrome word')
//     }
// }

// palindrome(aPalindrome);

// // question #11//


// var sentence = "the quick brown fox";
// function upperCase(str)
// {
//   var arr1 = str.split(' ');
//   var arr2 = [];
    
//   for(var i = 0; i < arr1.length; i++){ 
//       var inUpper = arr1[i].charAt(0).toUpperCase();
//       var firstChar = arr1[i].slice(1);
//       var pushChar = arr2.push(inUpper+firstChar);
//       pushChar = arr2.join(' ');
//   }
//   document.write('Example String: '+sentence)
//   return pushChar;
// }

// document.write('<br>Expected Output: '+upperCase(sentence));

// // question #12//


// var sent = 'Web Development Tutorial';

// function longestWord(str){
//     var arr13 = str.match(/\w[a-z]{0,}/gi);
//     var result = arr13[0];

//     for(var i = 1 ; i < arr13.length ; i++){
//         if(result.length < arr13[i].length){
//             result = arr13[i];
//         }   
//     }
//     document.write("EXAMPLE STRING : 'Web Development Tutorial'")
//     return result;
// }

// document.write("<br>EXPECTED OUTPUT : "+longestWord(sent));

// // question #13//

// var wordOfOccur = 'JSResourceS.com';
// var letterOfOccur = 'o';
// function occurence(str, letter) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str.charAt(i) === letter) {
//             count += 1;
//         }
//     }
//     return count;
// }

// document.write('The number of occurence of letter '+letterOfOccur+' in '+wordOfOccur+' is '+occurence(wordOfOccur,letterOfOccur));

// // question #14//


// document.write('<h1>The Geometrizer</h1>')
// var r = parseInt(prompt('Enter radius value'))
// var pi = 3.142;
// function calcCircumference(radius){
//     var circumOfCircle = 2 * pi * radius;
//     return circumOfCircle;
// }

// function calcArea(radius){
//     document.write('The circumference is '+calcCircumference(r))
//     var areaOfCircle = pi * radius * radius;
//     return areaOfCircle;
// }

// document.write('<br>The area is '+calcArea(r))




































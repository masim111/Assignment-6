// if(charter >= 'A' && charter <= 'Z'){
//     alert("This is an Capital Letter")
//     }
// document.write(chartert)

// if (EnterNumber >=80) {

//     document.write(Grade1);
    
//     if(EnterNumber >=70){
//     document.write("Congs you got A")
//     }
    
//     } else if(EnterNumber >=60){
//     document.write("Congs you got b")
//     }else{
//     document.write("Your Fail")
//     }


// for( var a =1; a <= 100 ; a=a+10) {
//     for( var b = a ; b < a+10 ; b++) {
//         document.write( b + "  ");

//     } 

//      document.write("<br>")
// }


// var city = prompt("Enter your city")
//  city = city.toLowerCase()
//  var arr = ["karachi", "islamabad", "peshawar"]
//  for (var i = 0; i < arr.length; i++) {
//  if (arr[i] === city) {
//  alert("City has found");
//  }else { alert('city not found')}
//  }


// var city = prompt("Enter your city")
//  city = city.toUpperCase()
//  var arr = ["KARACHI", "ISLAMABAAD", "PESHAWAR"]
//  for (var i = 0; i < arr.length; i++) {
//  if (arr[i] === city) {
//  alert("City has found");
//  }else { alert('city not found')}
//  }

////////////////////////////////////////
// var city = prompt("Enter your city Name")
//  var firstchar = city.slice(0,1);
 
// firstchar = firstchar.toUpperCase()
// var otherchar = city.slice(1)
// otherchar = otherchar.toLowerCase()
// var city = firstchar + otherchar;
// console.log(city)

//  var arr = ["Karachi", "Islamabad", "Peshawar"]
//  for (var i = 0; i < arr.length; i++) {
//  if (arr[i] === city) {
//  alert("City has found");
//  }else { alert('city not found')}
//  }
////////////////// Double Spaces///////////////////////


// var str = 'Karac  hi';
// var numChars = str.length;
// for (var i = 0; i < numChars; i++){
//     if (str.slice (i,i + 2) === " "){
//         alert("Double Spaces are found!");
        
//     }
// }

/////////////////Double Spaces////////////

// var str = prompt('enter some text');

//  var numChars = str.length;
//  for (var i = 0; i < numChars; i++) {
//  if (str.slice(i, i + 2) === "  ") {
//  alert("Double Spaces are found!");
//  }
//  }
/////////////Finding a character at a location///////

// var a = "Ghous";
// console.log(a.charAt(2))
// console.log(a.charAt(3))
//////////////Replacing characters
//////////////
//  var para = "this is example";
//  var para1 = para.replace("example","text");
//  console.log ( para1)
 ///////////////////////////////////////

//////////////////Replacing characters////////////
// var para = "this is example ,this is example ";
//   var para1 = para.replace(/example/g,"text");
//   console.log ( para1)



/////////////////////////////////////////////

////////////////Rounding numbers/////////////

// var num = 3.5;
// var round = Math.round(num)
// console.log(round)

// var num = 2.3;
//  var round = Math.ceil(num)
//  console.log(round)


//  var num = 2.6;
//   var round = Math.floor(num)
//  console.log(round)


/////////////Generating random numbers/////////////////////

// var randomNumber = Math.random();
// console.log(randomNumber)

// var randomNumber = Math.random()*2;
// console.log(randomNumber)

// var headuser = prompt("enter head username");
// var tailuser = prompt("enter tail username");
// var toss = Math.random()*2;
// var floor = Math.floor(toss)
 
// if (floor === 0){
//     alert("head" + headuser + "win the toss")
// }else{
//     alert("Tail" + tailuser + "win the toss")

// }

// console.log(floor)



//////////////////Converting strings to integers and decimals//////////
// Number("10");

// parseInt("10");///////////////////////////////////////


/////////////////////Converting strings to numbers, numbers to strings////


// var num = 10;
// console.log(num.toString)

/////Controlling the length of decimals////

// var num = 10.54545454;
// var cont = num.toFixed(2)
// console.log(cont)
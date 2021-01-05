// ---chapter 1----
// alert("hello")
// alert("Error! Please a valid Password")
// alert("Welcome to js land... \n Happy Coding!")
// alert("Welcome to js land")
// alert("Happy coding!")


// ---chapter 2------
// var username;
// var MyName =  "Muhammad Danish";
// alert(MyName)
// var message="Hello World"
// alert(message)
// var Fullname="Muhammad Danish"
// var age= "20"
// var cer="certified mobile application development"
// alert(Fullname)
// alert (age)
// alert (cer)
// var pizza;
// pizza="pizza \npizz \npiz \npi \np"
// alert(pizza)
// var dan="M.danish7642@gmail.com"
// var ish=" my email address is:  "
// var email=(ish.concat(dan))
// alert (email)
// var book=" A smarter way to learn JavaScript"
// var learn="I am trying to learn javascript from the book"
// var al=(learn.concat(book))
// alert(al)
// var page="Yah! I can write html content through javascript"
// document.write(page)
// var str="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// alert(str)


// --chapter 3-----
// var age= "I am 20 year old";
// alert(age)
// var visit="you have visit this websites 14 times"
// alert(visit)
// var birthyear=2000;
// var year="My birthday year is ";
// var birthday=(year.concat(birthyear))
// document.write(birthday) 
// var fname="John Doe"
// var order="5 T-shirt(s)"
// var result=fname + " ordered " + order + " on Xyz clothing store"
// document.write(result)



// ---chapter 4-----
// var firstname = "Danish",
// cnic = "42101",
// age = 20;
// alert(firstname)
// alert(cnic)
// alert(age)
// --illegal--
// var space path
// var 1gae
// var greeting user58
// var 12
// var khan 12
// ---legal---
// var user_name
// var _user
// var $age
// var username
// var hello


// ---chapter 5---
// **Question 1**
// var num1=5;
// var num2=3;
// sum=num1+num2;
// document.write("sum of "+num1+" and " +num2+" is " +sum);
// **Question 2**
// var num1=5;
// var num2=3;
// var sub=5-3;
// var mul=5*3;
// var div=5/3;
// var mod=5%3;
// document.write("subtraction is: " +sub+" ----\n" )
// document.write("multiply is: " +mul+" ----\n")
// document.write("divide is: " +div+" ----\n")
// document.write("modulus is: "+mod+" ---\n")
// **Question3**
// var k;
// document.write("value after variable declaration is "+k)
// var k=5;
// document.write("initial value is "+k +"</br>")
// ++k;
// document.write("after increment "+k +"</br>")
// var add=k+7;
// document.write("value after addition is: "+add+"</br>")
// --add;
// document.write("value after decrement: "+add +"</br>")
// var modls=add%3;
// document.write("reminder is: "+modls +"</br>")
// **question 4**
// var ticketprice=600;
// var totalticket=5;
// var total=ticketprice*totalticket;
// document.write("total cost of buy " + totalticket + " tickets for movie is " +total+ "PKR")
// **Question 5**
// document.write("Table of 7"+ " </br>")
// var table=7;
// for (var d= 1; d <= 10; d++) {
//     document.write(+table+" * " +d+" =" +table*d +"</br>")
// }
// **question 6**+
// var celsius=25;
// var convert=(celsius*9/5)+32;
// document.write(celsius+" C is "+convert+" F  </br>")
// var fehrenhiet=70;
// var convert1=(fehrenhiet-32)*5/9
// document.write(fehrenhiet+" F is" + convert1 +" C </br>")
// **Question 7**
// var item1=650; 
// var item2=100;
// var shippingcharges=100;
// var quantity1=3
// var quantity2=7
// var price1=item1*quantity1
// var price2=item2*quantity2
// var total=(price1+price2)+shippingcharges
// document.write("Price of item1 is "+item1 +"</br>")
// document.write("price of item2 is "+item2+"</br>")
// document.write("quantity of item1 is "+quantity1+"</br>")
// document.write("quantity of item2 is "+quantity2+"</br>")
// document.write("shipping charges is "+shippingcharges+"</br>" )
// document.write("total price is "+total)
// **Question 8**
// var totalmarks=980;
// var Marksobtain=804;
// var percentage=(804/980)*100;
// document.write("Total marks: "+totalmarks  +"</br>")
// document.write("Marks obtained: "+Marksobtain +"</br>")
// document.write("Percentange: "+percentage)
// **question 9**
// var expression=10*104.88+25*28
// document.write("Total currency in pkr: "+expression) 

// **question 10**
// var x = 5+ 5*10/2;
// document.write(x)
// **Question 11**
// var current_year=2021
// var birth_year=2000
// var age=current_year-birth_year
// document.write("Current year:"+current_year +"<br>")
// document.write("Birth year:"+birth_year  +"<br>")
// document.write("Age:"+age  +"<br>")


// ***question 13**
// var fav_snck="chocolate chips";
// var crnt_age=15
// var est_age=65
// var amnt_snk=3
// var need=crnt_age*3
// document.write("You will need "+need+" to last you until the ripe old age of "+est_age)

// ----chapter 6 to 9---
// ****question 1****
// var num= 10;
// document.write("RESULT: </br>" )
// document.write("The value of num is: "+num +"</br>")
// document.write("......................................................... </br>")
// ++num;
// document.write("The value of ++num is: "+num+"</br>")
// document.write("Now the value of Num is: "+num+"</br>")
// num++;
// document.write("The value of num++ is: "+num+"</br>")
// document.write("Now the value of Num is: "+num+"</br>")
// --num
// document.write("The value of --num is: "+num+"</br>")
// document.write("Now the value of Num is: "+num+"</br>")
// num--
// document.write("The value of num-- is: "+num+"</br>")
// document.write("Now the value of Num is: "+num+"</br>")
// ****question 2****
// var a=2;
// var b=1;
// var result=--a - --b + ++b + b--;
// --a: 1
// --a - --b: 1
// --a - --b + ++b: 3
// --a - --b + ++b + b--: 3
// ****question 3****
// var nme=prompt("Enter your name: ")
// alert("Have a good day "+nme)
// ****question 4****
// var e=parseInt (prompt("Enter a number: "))
// if (e>0) {
//     for (var i=1 ; i<=10; i++) {
//         document.write(e +" * "+i+ " = "+e*i + "</br>")
//     }
// }else{
//     e=5
//     for (var i=1 ; i<=10; i++) {
//         document.write(e +" * "+i+ " = "+e*i + "</br>")
//     }
// }
// ****question 5****
// var nme_1="english"
// var nme_2="urdu"
// var nme_3="pst"
// var t1=100;
// var t2=100;
// var t3=100;
// var o1=parseInt(prompt("Enter obtianed marks of subject 1: "))
// var o2=parseInt(prompt("Enter obtianed marks of subject 2: "))
// var o3=parseInt(prompt("Enter obtianed marks of subject 3: "))
// var tt=t1+t2+t3
// var ot=o1+o2+o3
// document.write("total marks of subject 1: "+t1 +" </br>")
// document.write("total marks of subject 2: "+t2 +" </br>")
// document.write("total marks of subject 3: "+t3 +" </br>")
// document.write("marks obtained of suject 1: " +o1 +" </br>")
// document.write("marks obtained of suject 2: " +o2 +" </br>")
// document.write("marks obtained of suject 3: " +o3 +" </br>")
// var Percentange=ot/tt*100
// document.write("Percentage is: "+Percentange)
// -----chapter 9 to 11--------
// ****question 1****
// var city;
// city=prompt("Enter a city Name: ")
// if (city=="karachi") {
//     document.write("Welcome the city of light")
// }
// else{
//     document.write("you are not from karachi")
// }
// ****question 2****
// var gender=prompt("Enter your gender: ")
// if (gender=="male") {
//     alert("goodmorning sir")
// }
// else if (gender=="female") {
//     alert("goodmorning mam")

// }
// else{
//     document.write("you are not a male or a female")
// }
// ****question 3****
// var color=prompt("Enter signal colour: ")
// if (color=="red") {
//     alert("Must stop")
// }
// else if (color=="yellow") {
//     alert("Ready to move")
// }
// else if (color=="green") {
//     alert("Move on")
// }
// ****question 4****
// var petrol=0;
// petrol=prompt("Enter remaining fuel: ")
// if (petrol<0.25) {
//     alert("Please refill the fuel")
// }
// else{
//     alert("you have enough fuel")
// }
// ****question 5****
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// } ......displayed.........
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }...........not display.......
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }............not display...........
// if (c === 13) {
//     alert("condition 2 is true");
// }............displayed.............
// if (++c < 14) {
//     alert("condition 3 is true");
// }...............not display.........
// if (c === 14) {
//     alert("condition 4 is true");
// }.............display...............
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }...................................display................
// if (true) {
//     alert("True");
// }..................................display..................
// if (false) {
//     alert("False");
// }...................................not display,...................
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }..............display....................
// ****question 6****
// var sub1=parseInt (prompt("Enter your subject 1 marks: "))
// var sub2=parseInt (prompt("Enter your subject 2 marks: "))
// var sub3=parseInt (prompt("Enter your subject 3 marks: "))
// var total=300;
// var total_obt=sub1+sub2+sub3
// var per=(total_obt/total)*100
// if (per>=80 && per<100) {
//     document.write("Total marks: "+total +"</br>")
//     document.write("Marks Obtained: "+total_obt +"</br>")
//     document.write("Percentage: "+per +"</br>")
//     document.write("Grade: A-one" +"</br>")
//     alert("Excellent")

// }
// else if (per>=70 && per<80) {
//     document.write("Total marks: "+total +"</br>")
//     document.write("Marks Obtained: "+total_obt +"</br>")
//     document.write("Percentage: "+per +"</br>")
//     document.write("Grade: A" +"</br>")
//     alert("good")

// }
// else if (per>=60 && per<70) {
//     document.write("Total marks: "+total +"</br>")
//     document.write("Marks Obtained: "+total_obt +"</br>")
//     document.write("Percentage: "+per +"</br>")
//     document.write("Grade: B" +"</br>")
//     alert("need to work hard")
// }
// else{
//     document.write("Total marks: "+total +"</br>")
//     document.write("Marks Obtained: "+total_obt +"</br>")
//     document.write("Percentage: "+per +"</br>")
//     document.write("Grade: fail" +"</br>")
//     alert("sorry")
// }
// ****question 7****
// var num=6;
// var guess=parseInt(prompt("Enter any number: "))
// if (num===guess) {
//     alert("Bingo Correct answer")
// }
// else if (guess===7) {
//     alert("Close Enough to the correct answer")  
// }
// else{
//     alert("Try Again")
// }
// ****question 8****
// var num=parseInt(prompt("Enter a number: "))
// if (num%3===0) {
//     alert("Your number is divisible by three")
// }
// else{
//     alert("not divisible by three")

// }
// ****question 9****
// var num=parseInt(prompt("Enter Number: "))
// if (num%2===0) {
//     alert("Your input number is even")
// }
// else{
//     alert("Your number is odd")
// }
// ****question 10****
// var temp=parseInt(prompt("Enter Temperature: "))
// if (temp>40) {
//     alert("Its to hot outside")
// }
// else if (temp>30 && temp<40) {
//     alert("The whether is normal today")  
// }
// else if (temp>20 && temp<30) {
//     alert("todays wheather is cold")
// }
// else if (temp>10 && temp<20) {
//     alert("OMG! Todays wheather is so cold")   
// }
// ****question 11****
// var num1 = parseInt(prompt("Enter number 1: "))
// var num2 = parseInt(prompt("Enter number 2: "))
// var op = prompt("Enter operator: ")
// if (op == "*") {
//     var result = num2 * num1;
//     alert("Result is: " + result)
// }
// else if (op == "+") {
//     var result = num2 + num1;
//     alert("Result is: " + result)

// }
// else if (op == "-") {
//     var result = num2 - num1;
//     alert("Result is: " + result)

// }
// else if (op == "/") {
//     var result = num2 / num1;
//     alert("Result is: " + result)
// }
// else if (op == "%") {
//     var result = num2 % num1;
//     alert("Result is: " + result)
// }
// else {
//     alert("Invalid operation")
// }
// --------chapter 12 to 13-------
// ****question 1****
// var ch=prompt("Enter a character: ")
// if (ch>="A"&& ch<="Z") {
//     alert("Upper case")
// }
// else if (ch>="a" && ch<="z") {
//     alert("Lower case") 
// }
// else if (ch>=0) {
//     alert("Number")
// }
// ****question 2****
// var num1=parseInt(prompt("Enter number 1: "))
// var num2=parseInt(prompt("Enter number 2: "))
// if (num1>num2) {
//     alert("Number 1 is greater")
// }
// else if (num2>num1) {
//     alert("Number 2 is greater")
// }
// else{
//     alert("Number 1 is equal to the Number 2")
// }
// ****question 3****
// var num=parseInt(prompt("Enter Number"))
// if (num>0) {
//     alert("Number is Positive")   
// }
// else if (num<0) {
//     alert("Number is Negative")  
// }
// else{
//     alert("Number is equal to zero")
// }
// ****question 4****
// var ch=prompt("Enter any charcter")
// if (ch=="a" || ch=="e" || ch=="i" || ch=="o" || ch=="u" || ch=="A" || ch=="E" || ch=="I" || ch=="O" || ch=="U" ) {
//     alert(true)
// }
// else{
//     alert(false)
// }
// ****question 5****
// var pass="hello"
// var ps=prompt("Enter your password: ")
// if (ps>="a" && ps<="z" || ps>="A" && ps<="Z") {
//     if (ps===pass) {
//         alert("Correct! The password you entered is matches the original password")
//     }
//     else{
//         alert("Incorrect Password")
//     }
// }
// else{
//     alert("Please Enter your Password")
// }
// ****question 6****
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day"
//     alert(greeting)
// }
// else {
//     greeting = "Good evening";
//     alert(greeting)
// }
// ****question 7****
// var time=parseInt (prompt("Enter time: "))
// if (time>=0000 && time<1200) {
//     alert("Good morning")
// }
// else if (time>=1200 && time<1700) {
//     alert("Good afternoon")
// }
// else if (time>=1700 && time<2100) {
//     alert("Good evening")
// }
// else if (time>=2100 && time<2359) {
//     alert("Good night")
// }
// ---------CHP 14 to 16---------
// ****question 1****
// var listofStudents = [];
// ****question 2****
// newStudents.name = []
// ****question 3****
// var arr = ["lion", "farrukh", "ahmed"];
// console.log(arr);
// ****question 4****
// var numArr = [10, 20, 30];
// console.log(numArr);
// ****question 5****
// var boolArray = [true,false];
// console.log(boolArray);
// ****question 6****
// var mixedArray = [1, "Bob", "Now is", true];
// console.log(mixedArray)
// ****question 7****
// var qualArr = [ "<h4>1)SSC <br /> 2)HSC <br />  3)BCS<br />4)BS<br />5)BCOM<br /> 6)MS<br />7)M.Phil<br /> 8)PhD<br /></h4>"]
// var q = "<h1>Qualifications:</h1>"
// document.write(q + qualArr) 
// ****question 8****
// var nme = ["Farrukh", "Danish", "Shahzad"];
// var marks = [450., 400., 350.];
// var per = ["90%",  "80%", "70%"];
// document.write("Score of "+ nme[0]+ " is " + marks[0] + ". Percentage:"+ per[0]+"<br />")

// document.write("Score of "+ nme[1]+ " is " + marks[1] + ". Percentage:"+ per[1]+"<br />")

// document.write("Score of "+ nme[2]+ " is " + marks[2] + ". Percentage:"+ per[2])

// ****question 9****
// var colorlist = ["yellow", "green", "red"];
// document.write(colorlist)
// var user = prompt("What color do you want to add to the beginning of the array");
// colorlist.unshift(user)
// document.write ("<br /><h4> First Updated Color List </h4>");
// document.write(colorlist)

// var user = prompt("What color do you want to add to the end of the array");
// colorlist.push(user)
// document.write ("<br /><h4> Second Updated Color List </h4> </br>");
// document.write(colorlist +"</br>")

// var user_2=prompt("Enter another color which do you want: ")
// colorlist.unshift(user_2)
// var user_3=prompt("Enter first color which you want to add: ")
// colorlist.unshift(user_3)
// document.write(colorlist +"</br>")
// document.write("After adding to colors in begning </br>" +colorlist)

// //......for deleting
// colorlist.splice(0,1)
// document.write("</br> after delt </br>"+colorlist)
// colorlist.pop()
// document.write("</br> After delt last value:  </br>"+colorlist +"</br>")

// var user_4=parseInt (prompt("Which index you want to add color: "))
// colorlist[user_4]=prompt("Enter color")
// document.write(colorlist +"</br>")

// var user_5=parseInt (prompt("Enter the index number where do you want to delt: "))
// colorlist.splice(0,user_5)
// document.write(colorlist)


// ****question 10****
// var txt = "Score of Students: "
// var scoreofST = [320, 230 ,480, 120]
// document.write(txt + scoreofST)
// var txt1 = "<br />Ordered Score: "

// scoreofST.sort(function(a, b){return a-b});
// document.write(txt1 + scoreofST);
// ****question 11****
// var cities=["Karachi","Lahore","Islamabad","Queta","Peshawar"]
// document.write("Cities List: </br>  "+cities)
// var selected_cities=[cities[1],cities[2]]
// document.write("</br> Selected cities: </br>"+selected_cities)
// ****question 12****
// var arr=["This","is","my","cat"]
// document.write(arr+"</br>")
// var join=arr.join(" ");
// document.write("After joining: </br>"+join)
//  ***question 13***
// var arr=new Array();
// arr[0]="keyboard"
// arr[1]="mouse"
// arr[2]="printer"
// arr[3]="Moniter"
// document.write(arr+"</br>")
// document.write(arr[0]+"</br>")
// document.write(arr[1]+"</br>")
// document.write(arr[2]+"</br>")
// document.write(arr[3]+"</br>")
//  ***question 14***
// var arr = ['keyboard', 'mouse',  
// 'printer', 'moniter']; 
// document.write(arr); 
// var new_arr = arr.reverse(); 
// document.write("<br>"); 
// document.write(new_arr);
// 
// ----chapter 17 to 20-----
//  ***question 1***
// var Arr=[[1,2],[3,4],[5,6]];
//  ***question 2***
// var arr=[[0 ,1, 2, 3],[1,0,1,2],[2,1,0,1]]
// document.write(arr[0]+"</br>")
// document.write(arr[1]+"</br>")
// document.write(arr[2]+"</br>")
//  ***question 3***
// for (var i=1; i<=10; i++) {
//     document.write(i +"</br>")
    
// }
// ***question 4***
// var tab=parseInt(prompt("Enter Table You want to print"))
// var lenght=parseInt(prompt("Enter the lenght of the table:"))
// for (var i=1; i<=lenght; i++) {
//     document.write(tab +" * "+i+" = "+ tab*i)
//     document.write("</br>")
// }
//  ***question 5***
// var fruits=["apple","banana","mango","orange","straberry"]
// for (var i=0; i<fruits.length; i++) {
//     document.write(fruits[i] +"</br>")
// }
// for (var i=0; i<fruits.length; i++) {  
//     document.write("Element at index " +i+" is "+fruits[i]+"</br>")
// }
//  ***question 6***
// document.write("Counting: ")
// for (var i=1; i<=15; i++) {
//     document.write(i+",")   
// }
// document.write("</br>")
// document.write("Reverse Counting: ")
// for (var i=10;i>=1;i--) {
//     document.write(i+" , ")
// }
// document.write("</br>")
// document.write("Even Number: ")
// var num=2;
// for (var j=0; j<=10; j++) {
//     document.write(num*j+",")
// }
// document.write("</br>")
// document.write("Odd Number: ")
// for (var j=0; j<=20; j++) {
//     if (j%2!==0) {
//         document.write(j +",")
//     }
// }
// document.write("</br>")
// document.write("Series: ")
// var num_=2;
// for (var j=1; j<=10; j++) {
//     document.write(num_*j+"k,")
// }
//  ***question 7***
// var arr=["cake","apple pie","cokie","chips","patties"]
// var user=prompt("Welcome sir what do you want")
// if (arr[0]===user) {
//     document.write("cake is available at index 0")
// }
// else if (arr[1]===user) {
//     document.write("apple is avaulable at index 1")
    
// }
// else if (arr[2]===user) {
//     document.write("apple is avaulable at index 2")
    
// }
// else if (arr[3]===user) {
//     document.write("apple is avaulable at index 3")
    
// }
// else if (arr[4]===user) {
//     document.write("apple is avaulable at index 4")
    
// }
// else{
//     document.write("We are sorry "+user+" is not available in our bakery")
// }
//  ***question 8***
// var arr=[24,53,78,91,12]
// arr.sort(function(a, b){return a - b});
// document.write("Largest number is: "+arr[4])
//  ***question 9***
// var arr_2=[24,53,78,91,12]
// arr_2.sort(function(a, b){return b - a});
// document.write("Smallest number is: "+arr_2[4])
// ***question 10***
// var mult=5
// for (var i=1; i<=20; i++) {
//     document.write(mult*i+" , ")   
// }
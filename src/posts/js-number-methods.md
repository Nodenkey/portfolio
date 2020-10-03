---
title: "Methods of string reversal in javascript" 
date: "2020-10-02"
author: "Nii Odenkey Abbey"
tags: ["Javascript"]
image: "reverse.jpg"
summary: "There are several ways one can reverse given strings in javascript. Lets take a look at four(4) of them."
---
 
We are going to talk about some methods you can use to
reverse a given string in the javascript language. Why? because like a car, we enjoy moving forward,
but there comes a time when going in reverse might be the only option to take you out of a tight corner. 

In this blog, we are going to cover some general javascript principles and methods. We are also going to answer one of
questions that could come up at a javascript interview.  

Enough of the introduction. Let's dive right in.


##### The problem
```
//Given a string, return the reverse of the given string
//with the reversed order of their characters.

---Examples:
    reverse(Joana) === 'anaoJ'
    reverse(Mother!) === '!rehtoM'
    reverse(javascript) === 'tpircsavaj'
```

We are going to talk about four(4) approaches that could help
solve this problem. Let's take a look at them.

##### 1. The Reverse Method + Split

Well yes! Javascript does have a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse" target="_blank">reverse method</a>
which is perfect for this. How convenient right?

```javascript
 function reverse(str) {
     const arr = str.split('');
     arr.reverse();
     return arr.join('');
 } 
```  
In the above, we declare a function which we name, **reverse**. 
This function is going to accept one parameter, that is the string that
we want to reverse. <br/>
In the function, we apply, javascript's <a href="https://www.w3schools.com/jsref/jsref_split.asp#:~:text=The%20split()%20method%20is,is%20split%20between%20each%20character." target="_blank">split method.</a>
The split method is used to split a string into an array of substrings, and returns the new array. It accepts a parameter known as the seperator.
The separator shows where the string should be split.
An example can be seen below.

```javascript
const str = 'a, b, c, d'
str.split(',')

//output: ["a", "b", "c", "d"] 
```
If an empty string (note: there shouldn't be any space between the strings) is passed as the separator, the string is split between its characters.

```javascript
const str = 'abcd'
str.split('')

//output: ["a", "b", "c", "d"]
```

Hence, splitting our string with the empty string returns an array with the characters separated, which we 
store in our arr variable.

In the next line, we use the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse" target="_blank">reverse method</a>, which does as its name suggests (reverses the contents of an array), to
reverse our array's contents.

```javascript
const arr = ["a", "b", "c", "d"]
arr.reverse()

//output: ["d", "c", "b", "a"]
``` 

We now use our third and final javascript method in our function, the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join" target="_blank">join javascript method</a>.
This method is an array method which creates and returns a new string by concatenating all of its elements in an array. It is separated by commas, or a specified separator string. If the array has only one item, then that item will
be returned without using the separator.
An example is shown below:

```javascript
const arr = ["d", "c", "b", "a"]
arr.join('')

//output: "dcba"
```

Again using an empty string as a separator in the join method joins all the items in the array by their characters.
The answer is then returned using the return statement as seen in the function.

The answer could however be cleaned by removing the array which just serves as 
the "middleman" here. 

```javascript
 function reverse(str) {
     return str.split('').reverse().join('');
}
```

##### 2. The For Loop Method 
The "traditional" for loop method can be used to reverse strings. I am however going to demonstrate
string reversal using a newer <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of" target="_blank">for...of method.</a> 

```javascript
function reverse(str) {
     let reversed = '';
     let character = '';
     for (character of str){
         reversed = character + reversed;
     }
     return reversed; 
}
``` 
This function also accepts a parameter (a string). In the function, we declare two variables;
one to keep the reversed string (the reversed variable), and one to store each character of the string
parameter passed in.

In the next line, the for...of loop is used to loop through the string which was passed into the function.
In our for...of loop, the character is the loop's variable.On each iteration, a value of a different property 
is assigned to this variable. In this case, the characters of the string passed in the function.
The string passed is the iterable, which is the object whose iterable properties are iterated. In the loop, 
the character is concatenated with the reversed string. This ends up reversing the string eventually.

The code is broken down below: 

```javascript
//say string passed in function is abcd
str = 'abcd';
// initialised variables
let character = ''
let reversed = '' 

//first loop
character = "a"
reversed = ""

reversed = character + reversed //return "a"

//second loop
character = "b"
reversed = "a"

reversed = character + reversed //return "ba"

//third loop
character = "c"
reversed = "ba"

reversed = character + reversed //return "cba"

//third loop
character = "d"
reversed = "cba"

reversed = character + reversed //return "dcba"
```
Hence, at the end, the returned string from the loop is its reserved form.

 
##### 3. The Reverse Method + Spread Syntax
Spoiler! This is actually my favourite of all the methods I list in this blog. Why? 
because, it is simple to use, and it involves one of my favourite javascript methods, the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax" target="_blank">spread syntax</a>.

```javascript
function reverse(str) {
    return [...str].reverse().join('');
}
```

This method is very similar to the first method (The reverse method + Split). The only difference is the spread syntax used here, which
can be identified by the three dots before the variable being spread (...str).
So what exactly does the spread syntax do? The spread syntax (...) allows an iterable such as an array expression 
or string to be expanded in places where zero or more arguments or elements are expected, or an object expression is to be expanded.
It acts as its name suggests; it spreads itself into the object it is introduced into.
It kind of is like, picking a chunk of butter from its container and spreading it on bread. The content of the butter container is transferred 
to the surface of that bread.

Let's visualise it in our function;

```javascript
//say our string === "abcd"
function reverse(str) {
    return [...str].reverse().join('');
    //under the hood, what happens is:
    return ["a", "b", "c", "d"].reverse().join("")
}
```

The content of the str parameter is "spread" in the array such that 
all the characters appear as individual strings in the array.
The reverse method takes it from here, reversing the array. The join method
joins the array into a string, and the return statement returns the reversed string.


##### 4. The Reduce Method 
A provided string could also be reversed by using javascript's <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" target="_blank">reduce method.</a>
This method works under the hood like the for...of loop demonstrated above, but makes the code
shorter and cleaner.

Let's see it in action.

```javascript
function reverse(str) {
    return str.split('').reduce((reversed, character) => 
        character + reversed
    )  
}
```

In the function above, after accepting the string, the string is split using the split method into an array. The reduce
function then takes over. The reduce array is used to "reduce" a javascript array into a single value
by accumulating its value.

The reduce function takes two parameters: a callback function and an initializer. The callback function also takes two
parameters: the accumulator and current value.

Let's see this in action. Notice how similar it is to the loop used above.

```javascript
const arr = ["a", "b", "c", "d"]
arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, "")

// Output: "dcba"

//But how does this happen?

accumulator = ""
currentValue = "a"

accumulator = accumulator + currentValue //return "a"

//next
accumulator = "a"
currentValue = "b"

accumulator = accumulator + currentValue //return "ba"

//next
accumulator = "ba"
currentValue = "b"

accumulator = accumulator + currentValue //return "cba"

//next
accumulator = "cba"
currentValue = "d"

accumulator = accumulator + currentValue //return "dcba"
```
 
 The initializer can however be removed as was done in the original answer, to make this method even shorter!
 Removing the initializer means the reduce function takes the first value of the array as its
 initializer and the second value in the array as its first currentValue. It then proceeds from there to achieve the same
 result.
 
 
 ___
 
  
 We just looked at 4 methods to reverse strings and return the reversed string. Alongside, we had a look at several
 javascript methods that might come in handy in our everyday coding. Until next time, happy coding!
 




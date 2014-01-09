// Palindrom program logic
// created by: sszeto2

var punctuation = [":","'",".",",",";","?","!","\""," "];
var isPunctuation = false;
var isPalindrome = true; //assumptive true; until proven false
var evalText = [];
var checkPoint1 = 0; //closest possible mid-point for evalText
var checkPoint2 = 0; //checkpoint that begins at the end of evalText and moves toward its mid-point

alert("Punctuation will be ignored when checking your word or phrase to determine if it is a palindrome");
var userText = prompt("Please enter a word or a phrase:");
	if (isNaN(userText)) {
//debug		document.writeln("What you entered is a word or a phrase"+"<br>");
		userText = userText.toLowerCase();
//debug		document.writeln("userText is "+userText+"<br>");
		for(var i=0; i<userText.length; i++) {
			for(var j=0; j<punctuation.length; j++) {
				if(punctuation[j]===userText[i]) {
					isPunctuation = true;
//debug					document.writeln("Found punctuation "+punctuation[j]+"<br>");
				}
			}
			if (!isPunctuation) {
				evalText.push(userText[i]);
			}
			isPunctuation = false;	//set it false again to check if next character in userText is a punctuation
		}
//debug		document.writeln("evalText is "+evalText+"<br>");
		if(evalText.length%2===0) {
			checkPoint1 = (evalText.length/2) - 1;
			checkPoint2 = evalText.length - 1;
		} else {
			checkPoint1 = Math.floor(evalText.length/2) - 1;
			checkPoint2 = evalText.length - 1;
		}
//debug		document.writeln("checkPoint1 is "+checkPoint1+"<br>");
//debug		document.writeln("checkPoint2 is "+checkPoint2+"<br>");
		for(var k=0; k<=checkPoint1; k++) {
			if(evalText[k] !== evalText[checkPoint2]) {
				isPalindrome = false;
			} else {
//debug			document.writeln("evalText["+k+"] = "+evalText[k]+" is EQUAL to evalText["+checkPoint2+"] = "+evalText[checkPoint2]+"<br>"); 
			}
			checkPoint2--;
		}
		document.writeln("You entered: "+userText+"<br>");
//debug		document.write("value of isPalindrome is: "+isPalindrome+"<br>");
		if (isPalindrome) {
			document.writeln("It is a palindrome."+"<br>");
		} else {
			document.writeln("It is not a palindrome."+"<br>");
		}
	} else if (!userText || 0 === userText.length) {
		document.writeln("You didn't type anything!"+"<br>");
	}
	else {
		document.writeln("What you entered is a number and is not valid for evaluation."+"<br>");
	}

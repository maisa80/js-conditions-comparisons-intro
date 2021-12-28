/*
== lika med värde
!= Ej lika med
> Större än
< Mindre än
>= Större än eller lika med
<= Mindre än eller lika med
=== like med värde och datatyp

|| eller
&& och
*/

console.log('############# Conditions and Comparisions ###############');
let x = 2;
console.log(x == 2); 		// true
console.log(x == 1); 		// false

console.log('#############');
console.log(x != 2); 		// false
console.log(x != 1); 		// true

console.log('#############');
console.log(x > 1); 		// true
console.log(x > 2); 		// false

console.log('#############');
console.log(x < 1); 		// false
console.log(x < 3); 		// true

console.log('#############');
console.log(x >= 3); 		// false
console.log(x >= 2); 		// true
console.log(x >= 1); 		// true

console.log('#############');
console.log(x <= 3); 		// true
console.log(x <= 2); 		// true
console.log(x <= 1); 		// false

console.log('#############');
console.log(2 == 2); 		// true
console.log(2 == '2'); 		// true
console.log(2 === '2'); 	// false


console.log('#############');
let condition1 = x < 1 || x > 1;  // false || true = true
console.log(condition1);
let condition2 = x < 1 && x > 1;  // false && true = false
console.log(condition2);



/*
Används för att jämföra olika värden, ofta i samband med if-satser

if (villkor) {
    exekvera om villkoret är sant
}
*/

console.log("############### if-statement ############");

let age = 20;

if (age == 20) {
	console.log("Du är 20 år gammal");
}

if (age != 77) {
	console.log('Du är INTE 77 år gammal');
}

if (age < 30) {
	console.log('Du är yngre än 30 år');
}

if (age > 11) {
	console.log('Du är äldre än 11 år');
}






/*
if (villkor1 || villkor2) {
	exekvera om villkor1 ELLER villkor2 är sant
}

if (villkor1 && villkor2) {
	exekvera om villkor1 OCH villkor2 är sant
}
*/
console.log("############### if-statement with || and && ############");

age = 13;
let height = 140;

if (age >= 12 || height > 150) {
	console.log('Du är antingen +12 år gammal, ELLER längre än 150 cm');
}

if (age >= 12 && height > 130) {
	console.log('Du är +12 år gammal, OCH längre än 130 cm');
}





/*
if/else - statement

if (villkor) {
	exekvera koden om villkor är sant
} else {
	annars exekvera denna kod
}
*/

console.log("############### if/else-statement ############");

age = 18;
if (age > 15) {
	console.log('Du är äldre än 15 år')
} else {
	console.log('Du är yngre än 15 år')
}



/*
if/elseif/else - statement

if (villkor1) {
	exekvera koden om villkor1 är sant
} else if (villkor2) {
	exekvera koden om villkor2 är sant
} else if (villkor3) {
	exekvera koden om villkor3 är sant
} else if (villkor4) {
	exekvera koden om villkor4 är sant
} else if (villkor5) {
	exekvera koden om villkor5 är sant
} else if (villkor6) {
	exekvera koden om villkor6 är sant
} else {
	annars exekvera denna kod
}
*/
console.log('########### if/elseif/else - statement ############');

let time = 19;
let greeting = '';

if (time < 12) {
	greeting = "God morgon";
} else if (time > 18) {
	greeting = 'God kväll';
} else {
	greeting = 'God dag';
}

console.log(greeting);


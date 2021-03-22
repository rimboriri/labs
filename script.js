let hacker1 ='richard';
let message = 'The drivers name is'
console.log(message+' '+hacker1);

let hacker2 = 'rimbert';
let message2 = 'The navigators name is'
console.log(message2+' '+hacker2);

let message3 = 'WoW, you both have equally long names,'
console.log(message3+hacker2.length+' characters!')

console.log(hacker1.charAt(0).toUpperCase()+' '+hacker1.charAt(1).toUpperCase()+' '+hacker1.charAt(2).toUpperCase()+' '+hacker1.charAt(3).toUpperCase()+' '+hacker1.charAt(4).toUpperCase()+' '+hacker1.charAt(5).toUpperCase()+' '+hacker1.charAt(6).toUpperCase());

hacker1.split("").reverse().join("");

if (hacker1.charAt(3) > hacker2.charAt(3)) {
  console.log('The drivers name goes first.')
}  else if (hacker1.charAt(3) < hacker2.charAt(3)){
    console.log('Yo, the navigator goes first definitely.')
  } else console.log('What?! You both have the same name?')
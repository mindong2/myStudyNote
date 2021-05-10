//  string.includes

const email = (ad) => ad.includes(`@`);

console.log(email(`qlsnaos12@naver.com`));

// string.repeat

const CC_NUMBER = `6060`;

const displayName = `${"*".repeat(10)}${CC_NUMBER}`;
console.log(displayName)

//console.log(`${"*".repeat(10)}${CC_NUMBER}`)

// startsWith, endsWith 

const namem = `Mr.dongmin`;

const start = namem.startsWith(`Mr`);
console.log(start) //true

const ends = namem.endsWith(`Mr`);
console.log(ends) //false
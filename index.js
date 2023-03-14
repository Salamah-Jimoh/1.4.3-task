// Question One
console.log('Hello')
function InstagramPost(handle, content, image, views, likes){
this.handle = handle;
this.content = content;
this.image = image;
this.views = views;
this.likes = likes;
}
//Question 2

// Create First post
const myFirstPost = new InstagramPost('habibi','Hello world', 'https://www.myimage.com/', 170, 13);
// Create Second post
const mySecondPost = new InstagramPost('xxx','TGIF!', 'https://www.myimage2.com/', 10, 0);

//Question 3
function CreatePerson(name, age, location){
    var person = {};
    person.name = name;
    person.age = age;
    person.location =location;
    return person;
}
const musa =CreatePerson('Musa Dawodu', 19, 'Lekki, Lagos');

function createJambScores(eng, govt, lit, crk){
    var scores= {};
    scores.eng = eng;
    scores.eng = govt;
    scores.lit = lit;
    scores.crk = crk;
    return scores
}
const musaScore = createJambScores(70, 85, 82, 94);
musa.jambScore = musaScore

// // Question Four

// 1. The spread operator
// const myObj = {a:1, b:2, c:3}
// const myClonedObj ={...myObj}
// 2. JSON.parse() and JSON.stringify()
// const myObj = {a:1, b:2, c:3}
// const myclonedObj = JSON.parse(JSON.stringify(myObj))

 // Question Five
const PresidentialCandidate = {
 AAC: 'Omoyele Sowore',
 ACCORD: 'Christopher Imumolen',
 APC: 'Bola Ahmed Tinubu',
 LP: 'Peter Obi',
 NNPP: 'Rabiu Kwankaso',
 PDP: 'Atiku Abubakar',
}
for(let prop in PresidentialCandidate){
    console.log(`${PresidentialCandidate[prop]} is the Persidential Candidate of ${prop}`)
}








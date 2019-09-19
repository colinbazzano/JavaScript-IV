// CODE here for your Lambda Classes

class Person {
    constructor(attributes){
        this.name = attributes.name,
        this.age = attributes.age,
        this.location = attributes.location
    }//this closes constructor
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }//this closes speak method
}// this closes Person

class Instructor extends Person {
    constructor(insAttributes) {
        super(insAttributes);
        this.specialty = insAttributes.specialty,
        this.favLanguage = insAttributes.favLanguage,
        this.catchPhrase = insAttributes.catchPhrase
    }//this closes constructor
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }//this closes demo method
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }//this closes grade method
}//this closes Instructor

class Student extends Person {
    constructor(stuAttributes) {
        super(stuAttributes);
        this.previousBackground = stuAttributes.previousBackground,
        this.className = stuAttributes.className,
        this.favSubjects = stuAttributes.favSubjects
    }
    listsSubjects() {
        return this.favSubjects;
    }//this closes listsSubjects method
    PRAssignment(student, subject) {
        return `${student.name} has submitted a PR for ${subject}`;
    }//this closes PRAssignment method
    sprintChallenge(student, subject) {
        return `${student.name} has begun sprint challenge on ${subject}`;
    }//this closes sprintChallenge method
}//this closes Student

class ProjectManager extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName,
        this.favInstructor = pmAttributes.gradClassName
    }//this closes the constructor
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }//this closes standUp method 
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }//this closes debugsCode method
}//this closes ProjectManager

// OBJECTS START HERE!!!
// Person Objects found below
const john = new Person({
    name: 'John',
    age: 56,
    location: 'USA'
});

const robbie = new Person({
    name: 'Robbie',
    age: 7,
    location: 'Connecticut'
});

const sophia = new Person({
    name: 'Sophia',
    age: 11,
    location: 'Massachusetts'
});

// Person Objects end here

// Instructor Objects found below

const brit = new Instructor({
    name: 'Brit',
    age: 31,
    location: 'Canada',
    specialty: 'Web Fundamentals',
    favLanguage: 'JavaScript',
    catchPhrase: 'I love Ada!'
});

const josh = new Instructor({
    name: 'Josh',
    age: 34,
    location: 'Utah',
    specialty: 'Lambda Precourse',
    favLanguage: 'Python',
    catchPhrase: 'keep your code D.R.Y'
});

const ryan = new Instructor({
    name: 'Ryan',
    age: 32,
    location: 'Utah',
    specialty: 'Arrays',
    favLanguage: 'JavaScript',
    catchPhrase: 'Classes in JavaScript are just functions'
});

// Instructor Objects end here

// Student Objects found below

const colin = new Student({
    name: 'Colin',
    age: 23,
    location: 'Connecticut',
    previousBackground: 'Photographer',
    className: 'Web24',
    favSubjects: [
        'HTML',
        'CSS',
        'JavaScript'
    ]
});

const lily = new Student({
    name: 'Lily',
    age: 21,
    location: 'Oregon',
    previousBackground: 'Musician',
    className: 'Web25',
    favSubjects: [
        'Python',
        'Java',
        'Ruby'
    ]
});

const griffin = new Student({
    name: 'Griffin',
    age: 22,
    location: 'New York',
    previousBackground: 'Genius',
    className: 'Cornell',
    favSubjects: [
        'Python',
        'Rust',
        'C++'
    ]
});

// Student Objects end here

// Project Manager Objects found below

const joseph = new ProjectManager({
    name: 'Joseph',
    age: 27,
    location: 'Chicago',
    specialty: 'Front-End',
    favLanguage: 'JavaScript',
    catchPhrase: 'You got this!',
    gradClassName: 'WebPT9',
    favInstructor: 'Josh'
});

const justin = new ProjectManager({
    name: 'Justin',
    age: 25,
    location: 'Oregon',
    specialty: 'debugging',
    favLanguage: 'Python',
    catchPhrase: 'Keep pushing!',
    gradClassName: 'Web20',
    favInstructor: 'Brit'
});

const daisy = new ProjectManager({
    name: 'Daisy',
    age: 24,
    location: 'California',
    specialty: 'making clean code',
    favLanguage: 'Rust',
    catchPhrase: 'Practice makes perfect',
    gradClassName: 'Web01',
    favInstructor: 'Brit'
});

//Project Manager Objects end here

// console.logs start here! invoking woo!!!
//Person console.logs
console.log(john.age);
console.log(robbie.age);
console.log(sophia.age);
console.log(john.speak());
console.log(robbie.speak());
console.log(sophia.speak());

//Instructor console.logs

console.log(brit.speak());
console.log(ryan.speak());
console.log(brit.demo('JavaScript'));
console.log(josh.grade(lily, 'Python'));
console.log(josh.favLanguage);
console.log(brit.catchPhrase);

// Student console.logs

console.log(colin.listsSubjects());
console.log(griffin.PRAssignment(griffin, 'Rust'));
console.log(lily.sprintChallenge(lily, 'Ruby'));
console.log(griffin.favSubjects);
console.log(colin.className);

// Project Manager console.logs

console.log(joseph.standUp('Web24'));
console.log(justin.debugsCode(colin, 'React'));
console.log(daisy.gradClassName);
console.log(joseph.favLanguage);
console.log(justin.specialty);
console.log(daisy.catchPhrase);
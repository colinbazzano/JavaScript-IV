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
        `${student.name} receives a perfect score on ${subject}`;
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
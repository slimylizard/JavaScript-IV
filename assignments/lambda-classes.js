// CODE here for your Lambda Classes
class Person{
    constructor(perAttrs){
        this.name = perAttrs.name;
        this.age = perAttrs.age;
        this.location = perAttrs.location;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}
class Instructor extends Person{
    constructor(InstAttrs){
        super(InstAttrs);
        this.specialty = InstAttrs.specialty;
        this.favLanguage = InstAttrs.favLanguage;
        this.catchphrase = InstAttrs.catchphrase;
    }
    demo(subject){
        console.log(`today we are learning about ${subject}`);
    }
    grade(student, subject){
        console.log(`${student.name} recieves a perfect score on ${subject}`)
    }
}
class Student extends Person{
    constructor(studAttrs){
        super(studAttrs);
        this.previousBackground = studAttrs.previousBackground;
        this.className = studAttrs.className;
        this.favSubjects = studAttrs.favSubjects;
    }
    listsSubjects(){
        console.log(this.favSubjects);
    }
    PRAssignment(subject){
        console.log(`${student.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject){
        `${student.name} has begun sprint challenge on ${subject}`
    }
}
class ProjectManagers extends Instructor{
    constructor(PMAttrs){
        super(PMAttrs);
        this.gradClassName = PMAttrs.gradClassName;
        this.favInstructor = PMAttrs.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    }
    debugCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}
class User{
  firstName: string;
  lastName: string;
  birthDate: string;
  constructor(firstName: string, lastName: string, birthDate?: string){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
  }
  displayFullName(){
    console.log("Merry Christmas " + this.firstName + " " + this.lastName + " !");
  }
}

let bob: User = new User("Bob", "Dylan");
let dolly: User = new User("Dolly", "Parton", "27.03.1910");

bob.displayFullName();
dolly.displayFullName();

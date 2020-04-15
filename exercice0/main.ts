class StudentPN{
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string){
    this.firstName = firstName;
    this.lastName = lastName
  }
  displayInformations(){
    console.log("Hello my name is " + this.firstName + " " + this.lastName + " :)")
  }
}

let anneChariotte: StudentPN = new StudentPN("Anne Charlotte", "Drevensek");
//anneChariotte.displayInformations();

class Client
{
  private fullName: string;
  private accountID: number;

  constructor(fullName: string, accountID: number)
  {
    this.fullName = fullName;
    this.accountID = accountID;
  }

  getAccountID(): number
  {
    return this.accountID;
  }
}

let user1: Client = new Client("Ru Paul", 1234567890);
console.log(user1.getAccountID());

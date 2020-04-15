class Client {
  public fullName: string;
  public accountID: number;

  constructor(fullName: string, accountID: number) {
    this.fullName = fullName;
    this.accountID = accountID;
  }
}

class ClientPro extends Client {
  public siret: number;

  constructor(fullName: string, accountID: number, siret: number) {
    super(fullName, accountID);
    this.siret = siret;
  }
}
let client01: Client = new Client("Ru Paul", 1234567890);
console.log(client01.fullName, client01.accountID);
let clientPro01: ClientPro = new ClientPro("Ru Paul", 1234567890, 456789);
console.log(clientPro01.fullName, clientPro01.accountID, clientPro01.siret);

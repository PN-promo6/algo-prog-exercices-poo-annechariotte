class Client {
    public String fullName;
    public int accountID;

     Client(String fullName, int accountID){
        this.fullName = fullName;
        this.accountID = accountID;
    };
}

class ClientPro extends Client {
    public int siret;

     ClientPro(String fullName, int accountID, int siret){
        super(fullName, siret);
        this.siret = siret;
    }
}

class Playground {
    public static void main(String[ ] args) {
      Client client01 = new Client("RuPaul", 123356789);
      ClientPro clientPro01 = new ClientPro("RuPaul", 123356789, 988765432);
      System.out.println(client01.fullName + " " + client01.accountID);
     System.out.println(clientPro01.fullName + " " + clientPro01.accountID + " " + clientPro01.siret);
    }
}
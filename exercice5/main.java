class ConcertTicket {
    public String artist;
    public String city;
    public String date;
    public int placeNumber;
    public String clientName = "";

     ConcertTicket(String artist, String city, String date, int placeNumber){
        this.artist = artist;
        this.city = city;
        this.date = date;
        this.placeNumber = placeNumber;
    };

    ConcertTicket(String artist, String city, String date, int placeNumber, String clientName){
        this.artist = artist;
        this.city = city;
        this.date = date;
        this.placeNumber = placeNumber;
        this.clientName = clientName;
    };

    String htmlDetails() {
        String htmlContent = "<p>Nom de l'artiste : " + this.artist + "</p> <p>Ville : " + this.city + "</p> <p>Date : " + this.date + "</p> <p>Numéro de la place : " + this.placeNumber + "</p>";
         if(this.clientName != "") {
            htmlContent = htmlContent + "<p>Nom du titulaire : " + this.clientName + "</p>";
        }
        return htmlContent;
    };
}
class Playground {
    public static void main(String[ ] args) {
      ConcertTicket ticket01 = new ConcertTicket("Dalida", "27.03", "Marseille", 1, "AnneChariotte");
      ConcertTicket ticket02 = new ConcertTicket("Dalida", "27.03", "Marseille", 1);
      System.out.println(ticket01.htmlDetails());
      System.out.println(ticket02.htmlDetails());
    }
}

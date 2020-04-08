class ConcertTicket {
  public artist: string;
  public city: string;
  public date: string;
  public placeNumber: number;
  public clientName: string = "";

  constructor(artist: string, date: string, city: string, placeNumber: number, clientName?: string) {
    this.artist = artist;
    this.city = city;
    this.date = date;
    this.placeNumber = placeNumber;
    if(clientName) {
      this.clientName = clientName;
    }
  }

  public htmlDetails(): string {
    let htmlContent: string = `
    <p>Nom de l'artiste : ${this.artist}</p>
    <p>Ville : ${this.city}</p>
    <p>Date : ${this.date}</p>
    <p>Numéro de la place : ${this.placeNumber}</p>`;
    if(this.clientName != ""){
      htmlContent = htmlContent + `<p>Nom du titulaire : ${this.clientName}</p>`
    };

    return htmlContent;
  }
}

let ticket01: ConcertTicket = new ConcertTicket("Dalida", "27.03", "Marseille", 1, "AnneChariotte");
let ticket02: ConcertTicket = new ConcertTicket("Dalida", "27.03", "Marseille", 2);
console.log(ticket01.htmlDetails());
console.log(ticket02.htmlDetails());

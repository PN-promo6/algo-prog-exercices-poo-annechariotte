<?php

class ConcertTicket
{
  public $artist;
  public $city;
  public $date;
  public $placeNumber;
  public $clientName;

  function __construct($artist, $city, $date, $placeNumber, $clientName = null)
  {

    $this->artist = $artist;
    $this->city = $city;
    $this->date = $date;
    $this->placeNumber = $placeNumber;
    if (!is_null($clientName)) {
      $this->clientName = $clientName;
    }
  }

  function showTicketDetail()
  {
    $showTicketContent = "
    <p>Artiste : $this->artist </p>
    <p>Lieu du concert : $this->city </p>
    <p>Date du concert : $this->date </p>
    <p>Numéro de la pLace : $this->placeNumber </p>
    ";
    if (!is_null($this->name)) {
      $showTicketContent = $showTicketContent . "<p>Détenteur du ticket : $this->clientName </p>";
    }
    return $showTicketContent;
  }
}
$ticket01 = new ConcertTicket("Dalida", "Marseille", "27.03", "001", "AnneChariotte");
echo ($ticket01->showTicketDetail());

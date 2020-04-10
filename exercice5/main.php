<?php

class ShowTicket {

  $userName: userName;
  $band;
  $date;
  $location;
  $price;

  function __construct($userName, $band, $date, $location, $price=null){

    $this->userName = $userName;
    $this->band = $band;
    $this->date = $date;
    $this->location = $location;
    if(!is_null($price)){
      $this->price = $price;
    }
  }

}

function showTicketDetail() {
  $showTicketContent =
  "<p>Nom d'utilisateur : ${ $this.userName }</p>
  <p>Nom du groupe : ${ $this.band }</p>
  <p>Date du concert : ${ $this.date }</p>
  <p>Lieu du concert : ${ $this.location }</p>
  `
  if ($this.price !== "") {
    $showTicketContent = $showTicketContent + `<p>Prix de la place : ${ $this.price }</p>`
  }
}

?>

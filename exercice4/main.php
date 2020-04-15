<?php
class Client
{
  private $fullName;
  private $accountID;

  function __construct($fullName, $accountID){
    $this->fullName = $fullName;
    $this->accountID = $accountID;
  }

  function getAccountID(){
    return $this->accountID;
  }

  function getName(){
    return $this->fullName;
  }

  function setName($newName){
    $this->fullName = $newName;
  }
}

$user1 = new Client("Ru Paul", 1234567890);

$user1->setName("Michelle");
echo($user1->getName() . " " . $user1->getAccountID());

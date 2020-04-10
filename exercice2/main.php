<?php

class Furniture{
  public $editor;
  public $designer;
  public $creationYear;

  function __construct($editor,$designer,$creationYear){
    $this->editor = $editor;
    $this->designer = $designer;
    $this->creationYear = $creationYear;
  }
}
$wassily = new Furniture("Knoll", "Marcel Breuer", 1925);
print_r($wassily);

?>

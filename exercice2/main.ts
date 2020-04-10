class Furniture{
  editor: string;
  designer: string;
  creationYear: number;

  constructor(editor: string, designer: string, creationYear: number){
    this.editor = editor;
    this.designer = designer;
    this.creationYear = creationYear
  }
}

let wassily: Furniture = new Furniture("Knoll", "Marcel Breuer", 1925);
console.log(wassily.editor, wassily.designer, wassily.creationYear);
wassily.creationYear = 1926;
console.log(wassily.creationYear);

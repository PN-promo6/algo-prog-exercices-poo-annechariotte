class Furniture {
    String editor;
    String designer;
    int creationYear;

    Furniture(String editor, String designer, int creationYear) {
        this.editor = editor;
        this.designer = designer;
        this.creationYear = creationYear;
    }
}
class Playground {
    public static void main(String[ ] args) {
        Furniture wassily = new Furniture("Knoll", "Marcel Breuer", 1925);
        wassily.creationYear = 1926;
        System.out.println("Designed by " + wassily.designer + " in " + wassily.creationYear + ".");
        System.out.println("Edited by " + wassily.editor + ".");
    }
}

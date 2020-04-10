class Book {
    public String title;
    public int price;

     Book(String title, int price){
        this.title = title;
        this.price = price;
    }
}

class Playground {
    public static void main(String[ ] args) {
        Book book1 = new Book("Spirou", 12);
        System.out.print(book1.title + " " + book1.price + "€");
    }
}

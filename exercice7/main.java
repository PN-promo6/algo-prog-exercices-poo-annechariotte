
import java.util.ArrayList;
import java.util.ListIterator;
abstract class Item {
    public String name;
    public int size;

    Item(String name, int size) {
        this.name = name;
        this.size = size;
    }
}

class Teleporter extends Item {
    public int energy;

    Teleporter(String name, int energy) {
        super(name, 3);
        this.energy = energy;
    }
}

class Arrow extends Item {
    public int power;

    Arrow(String name, int power) {
        super(name, 1);
        this.power = power;
    }
}
class Player {
    public String name;
    public int nbLives;
    public ArrayList<Item> items;
    public int sizeUsed;

    Player(String name) {
        this.name = name;
        this.nbLives = 3;
        this.items = new ArrayList<Item>();
        this.sizeUsed = 0;
    }

    boolean addItem(Item item) {
        this.sizeUsed += item.size;

        if (this.sizeUsed <= 9) {
            this.items.add(item);
            System.out.println("Liste de vos items: ");
            
            ListIterator<Item> iterator = items.listIterator();
            while (iterator.hasNext()) { 
                String currentItem = iterator.next().name;
                System.out.println(currentItem); 
            }
            return true;
        }
        System.out.println("L'item ne peut pas être ajouté : faites de la place dans votre inventaire !");
        return false;
    }
}

class Playground {
    public static void main(String[ ] args) {
        Player player01 = new Player("Milosh");
        Teleporter firstTeleporter = new Teleporter("firstTeleporter", 10);
        Arrow firstArrow = new Arrow("firstArrow", 30);
        player01.addItem(firstTeleporter);
        player01.addItem(firstTeleporter);
        player01.addItem(firstArrow);
        player01.addItem(firstTeleporter);
        player01.addItem(firstTeleporter);
        player01.addItem(firstArrow);
    }
}


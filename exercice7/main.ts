abstract class Item {
    name: string;
    size: number;

    constructor(name: string, size: number) {
        this.name = name;
        this.size = size;
    }
}

class Teleporter extends Item {
    energy: number;

    constructor(name: string, energy: number) {
        super(name, 3);
        this.energy = energy;
    }
}

class Arrow extends Item {
    power: number;

    constructor(name: string, power: number) {
        super(name, 1);
        this.power = power;
    }
}
class Player {
    name: string;
    nbLives: number;
    items: Array<Item>;
    sizeUsed: number;

    constructor(name: string) {
        this.name = name;
        this.nbLives = 3;
        this.items = new Array<Item>();
        this.sizeUsed = 0;
    }

    addItem(item: Item): boolean {
        this.sizeUsed += item.size;

        if (this.sizeUsed <= 9) {
            this.items.push(item);
            console.log("Liste de vos items: ");

            for (let i = 0; i < this.items.length; i++) {
                let currentItem = this.items[i].name;
                console.log(currentItem);
            }
            return true;
        }
        console.log("L'item ne peut pas être ajouté : faites de la place dans votre inventaire !");
        return false;
    }
}

let player01: Player = new Player("Milosh");
let firstTeleporter: Teleporter = new Teleporter("firstTeleporter", 10);
let firstArrow: Arrow = new Arrow("firstArrow", 30);

player01.addItem(firstTeleporter);
player01.addItem(firstTeleporter);
player01.addItem(firstArrow);
player01.addItem(firstTeleporter);
player01.addItem(firstTeleporter);
player01.addItem(firstArrow);

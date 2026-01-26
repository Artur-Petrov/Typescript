type AnimalType = {
    isAlive: boolean;
    sound:()=> void;
}

class Hourse implements AnimalType{
    isAlive: boolean;

    constructor(isAlive: boolean) {
        this.isAlive = isAlive;
    }

    sound(): void {
    }

}
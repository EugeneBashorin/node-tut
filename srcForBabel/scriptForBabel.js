function sum(a,b){
    return a+b
}

sum(2,4);

class Hero {
    constructor(name){
        this._name =name;
    }

    get name(){
        return this._name;
    }

    set name(newName){
        this._name = newName;
    }
}

const user = new Hero("Garry")
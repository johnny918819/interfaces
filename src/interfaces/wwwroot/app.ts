interface INamed {
    name: string;
}

class Hammer implements INamed {
    constructor(public name: string) { }
}

class Computer implements INamed {
    constructor(public name: string) { }
}

class Dog implements INamed {
    constructor(public name: string) { }
}

let fido = new Dog (`Fido`);
let sledge = new Hammer(`Sledge Hammer`);
let computer = new Computer(`Computer`);
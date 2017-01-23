var Hammer = (function () {
    function Hammer(name) {
        this.name = name;
    }
    return Hammer;
}());
var Computer = (function () {
    function Computer(name) {
        this.name = name;
    }
    return Computer;
}());
var Dog = (function () {
    function Dog(name) {
        this.name = name;
    }
    return Dog;
}());
var fido = new Dog("Fido");
var sledge = new Hammer("Sledge Hammer");
var computer = new Computer("Computer");

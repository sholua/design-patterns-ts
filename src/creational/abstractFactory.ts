// Describs objects with similar structure
interface Car {
  info: () => string;
}

function bmwProducer(kind) {
  return kind === "sport" ? sportCarFactory : familyCarFactory;
}

function sportCarFactory() {
  return new Z4();
}

function familyCarFactory() {
  return new I3();
}

class Z4 implements Car {
  info() {
    return "Z4 is a Sport car!";
  }
}

class I3 implements Car {
  info() {
    return "i3 is a Family car!";
  }
}

const produce = bmwProducer('sport');

const myCar = produce();

console.log(myCar.info());
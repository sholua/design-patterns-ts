// The builder pattern is a creational design pattern that lets you construct complex objects step by step.
// In JavaScript, we can achieve this with method chaining.
class HotDog {
  constructor(
    public bread: string,
    public ketchup?: boolean,
    public mustard?: boolean,
    public kraut?: boolean
  ) {}

  addKetchup() {
    this.ketchup = true;
    return this;
  }
  addMustard() {
    this.mustard = true;
    return this;
  }
  addKraut() {
    this.kraut = true;
    return this;
  }
}

const myLunch = new HotDog("gluten free").addKetchup().addMustard().addKraut();

console.log(myLunch);

let age: number = 10;
let firstName: string = 'Dimych';
let isMentor: boolean = true;


let man1: ManType = {name: 'Dima', height: 1.78, married: true};
let man2: ManType = {name: 'Sasha', height: 1.8};
let car: ICar = {model: 'Reno Stepway', year: 2016};

let arr: ManType[] = [man1, man2];

function toUpperCase(strings: Array<string>): Array<string> {
  let result = strings.map(s => s.toUpperCase());
  return result;
}

let createMan = (name: string, height: number): ManType => {
  return {
    name,
    height
  };
}

let car1: ICar1 = {
  model: 'Reno Stepway',
  year: 2016,
  on: false,
  turnOn() {
    this.on = true;
  },
  rename(model) {
    this.model = model;
  }
}

let createGarage = (): IGarage => {
  let _cars: Array<ICar> = [];

  return {
    addCar(car: ICar) {
      _cars.push(car);
    },
    logAllCarsNames() {
      console.log('Cars in the garage: ');
      _cars.forEach(c => console.log(c.model));
    },
    getAllCars() {
      return _cars;
    }
  }
}

interface IGarage {
  addCar(car: ICar): void

  logAllCarsNames(): void

  getAllCars(): Array<ICar>
}

type ManType = {
  name: string,
  height: number,
  married?: boolean
}

interface ICar {
  model: string
  year: number
}

interface ICar1 extends ICar {
  on: boolean

  turnOn(): void

  rename(model: string): void
}


export default 1;

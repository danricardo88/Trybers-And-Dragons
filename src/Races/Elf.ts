import Race from './Race';

export default class Elf extends Race {
  private static _createdInstances = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._createdInstances += 1;
    this._maxLifePoints = 99;
  }

  static createdRacesInstances(): number {
    return Elf._createdInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

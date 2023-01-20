import Race from './Race';

export default class Dwarf extends Race {
  private static _createdInstances = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._createdInstances += 1;
    this._maxLifePoints = 80;
  }

  static createdRacesInstances(): number {
    return Dwarf._createdInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

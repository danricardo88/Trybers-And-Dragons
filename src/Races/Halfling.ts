import Race from './Race';

export default class Halfling extends Race {
  private static _createdInstances = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._createdInstances += 1;
    this._maxLifePoints = 60;
  }

  static createdRacesInstances(): number {
    return Halfling._createdInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

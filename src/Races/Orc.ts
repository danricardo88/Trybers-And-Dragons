import Race from './Race';

export default class Orc extends Race {
  private static _createdInstances = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._createdInstances += 1;
    this._maxLifePoints = 74;
  }

  private static addInstance(): void {
    this._createdInstances += 1;
  }

  static createdRacesInstances(): number {
    return Orc._createdInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

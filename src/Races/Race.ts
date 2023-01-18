export default abstract class Race {
  private _name: string;
  private _dexterity: number;
  private static _createdRacesInstances = 0;
  
  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
    // Race._createdRacesInstances++;
  }
  
  get name(): string {
    return this._name;
  }
  
  get dexterity(): number {
    return this._dexterity;
  }
  
  static get createdRacesInstances(): number {
    if (Race._createdRacesInstances === 0) {
      throw new Error('Not implemented');
    }
    return Race._createdRacesInstances;
  }
  
  abstract get maxLifePoints(): number;
}
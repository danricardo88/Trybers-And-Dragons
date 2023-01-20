import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _counter = 0;
  private _damage: number;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    this._damage = 20;
    Mage._counter += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  get damage(): number {
    return this._damage;
  }

  static createdArchetypeInstances(): number {
    return Mage._counter;
  }
}

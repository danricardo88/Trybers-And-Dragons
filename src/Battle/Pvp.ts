import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private _player1: Fighter,
    private _player2: Fighter,
  ) {
    super(_player1);
  }

  get player1(): Fighter { return this._player1; }

  get player2(): Fighter { return this._player2; }

  fight(): number {
    const round = (attacker: Fighter, defensor: Fighter): number => {
      attacker.attack(defensor);

      if (defensor.lifePoints !== -1) round(defensor, attacker);

      return attacker.lifePoints;
    };

    const result = round(this.player1, this.player2);

    return result === -1 ? -1 : 1;
  }
}

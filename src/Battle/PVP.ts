import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  protected _fighter: Fighter;
  protected _opponent: Fighter;

  constructor(fighter: Fighter, opponent: Fighter) {
    super(fighter);
    this._fighter = fighter;
    this._opponent = opponent;
  }

  fight(): number {
    while (this._fighter.lifePoints > 0 && this._opponent.lifePoints > 0) {
      this._fighter.attack(this._opponent);
      this._opponent.attack(this._fighter);
    }
    return super.fight();
  }
}
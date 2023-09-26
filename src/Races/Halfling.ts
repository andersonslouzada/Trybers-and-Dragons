import Race from './Race';

export default class Halfling extends Race {
  protected _maxLifePoints: number;
  protected static _createdInstances = 0;

  constructor(name: string, dexterity: number, maxLifePoints = 60) {
    super(name, dexterity);
    this._maxLifePoints = maxLifePoints;
    Halfling._createdInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling._createdInstances;
  }
}

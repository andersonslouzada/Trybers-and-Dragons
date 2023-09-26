import Race from './Race';

export default class Orc extends Race {
  protected _maxLifePoints: number;
  protected static _createdInstances = 0;

  constructor(name: string, dexterity: number, maxLifePoints = 74) {
    super(name, dexterity);
    this._maxLifePoints = maxLifePoints;
    Orc._createdInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc._createdInstances;
  }
}

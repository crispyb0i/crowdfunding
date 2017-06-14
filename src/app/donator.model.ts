export class Donator {
  public favorites: boolean = false;
  constructor(public name: string, public amount: number, public projectID: number, public image: string){}
}

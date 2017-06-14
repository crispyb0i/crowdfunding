export class Project {
  public featured: boolean = false;
  constructor(
    public name: string,
    public managers: string,
    public detail: string,
    public incentive: string,
    public image: string,
    public category: string,
    public goal: number
  ){}
}

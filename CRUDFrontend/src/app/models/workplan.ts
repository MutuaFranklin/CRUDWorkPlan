export class Workplan {
  id: any;
  constructor(
    public goal: string,
    public objectives: string,
    public start_time: Date,
    public end_time: Date,
    public resources: string,
    public strategy: string,
    public created_at:Date,


    ){}

}

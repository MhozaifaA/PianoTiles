
var  id = 0;

export class Tile {
  row: number;
  column: string = "";
  top: number = -168;
  private isCross = false;
  constructor(column: string) {
    this.row = ++id;
    this.column = column;
  }
  setCross = () => this.isCross = true;
  getCross = () => this.isCross;

  static rest_id() {
    id = 0;
  }
}

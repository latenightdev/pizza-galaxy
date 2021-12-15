export class Order {
  Crust: string;
  Flavor: string;
  Size: string;
  Table_No: number;

  constructor(crust?: string, flavor?: string, size?: string, table?: number) {
    this.Crust = crust || '';
    this.Flavor = flavor || '';
    this.Size = size || '';
    this.Table_No = table || 0;
  }
}

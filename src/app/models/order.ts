export class Order {
  Crust: string;
  Flavor: string;
  Order_ID: number;
  Size: string;
  Table_No: number;
  Timestamp?: string;
  
  constructor(crust?: string, flavor?: string, order?: number, size?: string, table?: number, time?: string) {
    this.Crust = crust || '';
    this.Flavor = flavor || '';
    this.Order_ID = order || 0;
    this.Size = size || '';
    this.Table_No = table || 0;
    this.Timestamp = time || '';
  }    
}

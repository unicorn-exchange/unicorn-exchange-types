import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {OrderModel} from "./order.model";

@Table({modelName: "crypto_currencies"})
export class CryptoCurrencyModel extends Model<CryptoCurrencyModel> {
  @Column(DataType.STRING)
  title!: string;

  @HasMany(() => OrderModel)
  orders!: OrderModel[];
}

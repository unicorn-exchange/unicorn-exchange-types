import {Column, DataType, Model, Table} from "sequelize-typescript";

@Table({modelName: "fiats"})
export class FiatModel extends Model<FiatModel> {
  @Column(DataType.STRING)
  title!: string;
}

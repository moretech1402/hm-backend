import { Model } from "mongoose";
import { tables } from "./sqlTables.data";

export const getTableName = (model:Model<any>) => tables.find(table => table.model === model)?.tableName;
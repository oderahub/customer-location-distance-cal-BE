import mongoose, { Document, Schema } from "mongoose";

interface ICustomer extends Document {
  name: string;
  address: string;
  contact: string;
  latitude: number;
  longitude: number;
}

const CustomerSchema: Schema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  contact: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
});

export default mongoose.model<ICustomer>("Customer", CustomerSchema);

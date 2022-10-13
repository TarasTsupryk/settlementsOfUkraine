import mongoose, { Schema } from 'mongoose'

const SettlementSchema = new Schema(
  {
    level1: Number,
    level2: Number,
    level3: Number,
    level4: Number,
    category: String,
    name: String,
    code: Number,
    region: String,
    community: String
  },
  { versionKey: false }
)

const SettlementModel = mongoose.model('settlements', SettlementSchema);

export default SettlementModel;
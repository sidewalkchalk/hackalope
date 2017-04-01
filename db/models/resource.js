import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
  id: {type: 'Number', required: true},
  title: {type: 'String', required: true},
  url: {type: 'String', required: true},
  tags: [String],
  language: {type: 'String', required: true},
  author: {type: 'String', required: true}
});

export default mongoose.model('Resource', resourceSchema)

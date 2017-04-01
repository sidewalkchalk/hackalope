import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  id: {type: 'Number', required: true, unique: true},
  name: {type: 'String', required: true},
  username: {type: 'String', required: true, unique: true},
  password: {type: 'String', required: true},
  comments: {type: 'String', required: false},
  admin: {type: 'Boolean', required: true}
});

export default mongoose.model('Users', usersSchema)

import Promise from 'bluebird'
import mongoose from 'mongoose'
import { mongo } from '../../config'

const options = mongo.options || mongo
Object.keys(options).forEach((key) => {
  mongoose.set(key, options[key])
})

mongoose.Promise = Promise
/* istanbul ignore next */
mongoose.Types.ObjectId.prototype.view = function () {
  return { id: this.toString() }
}

/* istanbul ignore next */
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error: ' + err)
  process.exit(-1)
})

export default mongoose

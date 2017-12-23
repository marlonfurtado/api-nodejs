import { User } from '../api/user'
import json from './user'

User.remove({}, (err) => {
  if (err) console.error(err)
})

User.insertMany(json, (err) => {
  if (err) console.error(err)
})

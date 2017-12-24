import bcrypt from 'bcrypt'
import { User } from '../api/user'
import userData from './user'

userData.forEach(element => {
  bcrypt.hash(element.password, 9)
    .then((hash) => {
      element.password = hash
      User.findOneAndUpdate({email: element.email}, element, { upsert: true }, (err, res) => {
        if (err) console.error(err)
      })
    })
})

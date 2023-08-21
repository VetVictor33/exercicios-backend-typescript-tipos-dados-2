import fs from 'fs/promises'
import { readUsers } from '../01/'
import { findUser } from '../03/'

// async function main() {
//   try {
//     await removeUser('1234567891011')
//     console.log('User removed')
//   } catch (error) {
//     console.log(error)
//   }
// }
// main()

async function removeUser(searchedCpf: string) {
  try {
    const user = await findUser(searchedCpf)
    const { users } = await readUsers()
    const index = users.findIndex(({ cpf }) => cpf === user.cpf)
    users.splice(index, 1)
    await fs.writeFile('../db.json', JSON.stringify({ users: users }))
  } catch (error) {
    throw error
  }
}
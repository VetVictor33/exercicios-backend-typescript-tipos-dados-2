import fs from 'fs/promises'
import { readUsers, User } from '../01/'


// async function main() {
//   try {
//     const newData: User = {
//       name: 'Adão',
//       address: null,
//       cpf: '1234567891011',
//       email: 'adão@eeva.com',
//       profession: 'repórter'
//     }
//     const oldUser = await findUser('1234567891011')
//     await editUser('1234567891011', newData)
//     const newUser = await findUser('1234567891011')
//     console.log(oldUser, newUser)
//   } catch (error) {
//     console.log(error)
//   }
// }
// main()

export async function findUser(searchedCpf: string) {
  const { users } = await readUsers()
  const foundUser = users.find(({ cpf }) => cpf === searchedCpf)
  if (!foundUser) throw new Error('User not found')
  return foundUser
}

async function editUser(searchedCpf: string, newData: User) {
  try {
    const user = await findUser(searchedCpf)
    const { users } = await readUsers()
    const index = users.findIndex(({ cpf }) => cpf === user.cpf)
    users.splice(index, 1, newData)
    await fs.writeFile('../db.json', JSON.stringify({ users: users }))
  } catch (error) {
    return error
  }
}
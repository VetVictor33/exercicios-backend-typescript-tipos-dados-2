import fs from 'fs/promises'
import { readUsers, User } from '../01/'


async function main() {
  try {
    const newData: User = {
      name: "Domingão de sol",
      email: "domingo@email.com",
      profession: "preguiça 2.0",
      address: {
        cep: "1234",
        city: "SemanaCity",
        neighborhood: "SemanaBairro",
        street: "Fight",
        details: "turn left, turn right, turn left, go ahead"
      },
      cpf: "1234567891012"
    }
    const oldUser = await findUser('1234567891012')
    await editUser('1234567891012', newData)
    const newUser = await findUser('1234567891012')
    console.log(oldUser, newUser)
  } catch (error) {
    console.log(error)
  }
}
main()

export async function findUser(searchedCpf: string) {
  const { users } = await readUsers()
  const foundUser = users.find(({ cpf }) => cpf === searchedCpf)
  if (!foundUser) throw new Error('User not found')
  return foundUser
}

async function editUser(searchedCpf: string, newData: User) {
  try {
    const { users } = await readUsers()
    const user = users.find(({ cpf }) => cpf === searchedCpf)
    if (!user) throw new Error('User not found')

    Object.assign(user, newData)
    await fs.writeFile('../db.json', JSON.stringify({ users: users }))
  } catch (error) {
    throw error
  }
}
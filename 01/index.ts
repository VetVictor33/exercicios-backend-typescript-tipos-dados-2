import fs from 'fs/promises'

export type User = {
  name: string,
  email: string,
  cpf: string,
  profession?: string,
  address: Address | null
}

type Address = {
  cep: string,
  street: string,
  details?: string,
  neighborhood: string,
  city: string
}

export const readUsers = async (): Promise<{ users: User[] }> => {
  const file = await fs.readFile('../db.json', 'utf8')
  return JSON.parse(file) as { users: User[] }
}

export const addUser = async (user: User) => {
  const { users } = await readUsers()
  users.push(user)
  await fs.writeFile('../db.json', JSON.stringify({ users: users }))
}
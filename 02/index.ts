import { addUser, readUsers, User } from '../01/'

// async function main() {
//   const user: User = {
//     name: 'Sabadão',
//     profession: 'preguiça',
//     address: null,
//     cpf: '1234567891011',
//     email: 'sabado@email.com'
//   }
//   const user2: User = {
//     name: 'Domingão',
//     email: 'domingo@email.com',
//     profession: 'preguiça 2.0',
//     address: {
//       cep: '1234', city: 'SemanaCity', neighborhood: 'SemanaBairro',
//       street: 'Fight', details: 'turn left, turn right, turn left, go ahead'
//     },
//     cpf: '1234567891012',
//   }
//   const user3: User = {
//     name: 'Segunda',
//     email: 'segunda@email.com',
//     profession: 'café na veia',
//     address: null,
//     cpf: '1234567891013',
//   }

//   await registerUser([user, user2])
//   await registerUser(user3)
//   const users = await readUsers()
//   console.log(users)
// }
// main()

async function registerUser(data: User | User[]) {
  if (Array.isArray(data)) {
    for (const user of data) {
      await addUser(user)
    }
  } else {
    await addUser(data)
  }
}
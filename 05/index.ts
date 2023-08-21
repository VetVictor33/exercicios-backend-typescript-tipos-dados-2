import { addUser, readUsers, User } from '../01/'

async function main() {
  try {
    const users = await findProfession('café na veia')
    console.log(users)
  } catch (error) {
    console.log(error)
  }
}
main()


async function findProfession(searchedProfession: string) {
  const { users } = await readUsers()
  const filteredProfessions = users.filter(({ profession }) => profession === searchedProfession)
  if (!filteredProfessions.length) throw new Error('No user with such profession')
  return filteredProfessions
}
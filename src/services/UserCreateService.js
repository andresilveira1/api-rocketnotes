const { hash } = require('bcryptjs')
const AppError = require('../utils/AppError')

class UserCreateService {
  constructor(userRespository) {
    this.userRespository = userRespository
  }

  async execute({ name, email, password }) {
    const checkUserExists = await this.userRespository.findByEmail(email)

    if (checkUserExists) {
      throw new AppError('Este e-mail já está em uso.')
    }

    const hashedPassword = await hash(password, 8)

    const userCreated = await this.userRespository.create({
      name,
      email,
      password: hashedPassword,
    })

    return userCreated
  }
}

module.exports = UserCreateService

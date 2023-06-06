/* O migrations automatiza a criação de tabela no banco de dados. Nesse caso ele está automatizando a criação de tabela e do database */

const sqliteConnection = require('../../sqlite')
const createUsers = require('./createUsers')

async function migrationsRun() {
  const schemas = [createUsers].join('')

  sqliteConnection()
    .then((db) => db.exec(schemas))
    .catch((error) => console.error(error))
}

module.exports = migrationsRun

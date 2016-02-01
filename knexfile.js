// Update with your config settings.
require('dotenv').load();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'bookCatalog'
    },
     migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true',
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

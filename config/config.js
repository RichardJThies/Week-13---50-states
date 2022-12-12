//need the production/db pw from this file for SQL server in Azure. The file will be read when it migrates and seeds the new db
module.exports = {//changed from .json to .js file because json is static, therefore can't be modified with JS commands

  "development": {
    "storage": "states.db",
    "dialect": "sqlite"
  },
  // "test": {//test object is not useful in this app
  //   "username": "root",
  //   "password": null,
  //   "database": "database_test",
  //   "host": "127.0.0.1",
  //   "dialect": "mysql"
  // },
  "production": {
    "username": "Richard",
    "password": process.env.DB_PASSWORD,
    "database": "fifty-states-visited-database-server",
    "host": "fifty-states-visited-database-server-rt.database.windows.net",
    "dialect": "mssql"
  }
}

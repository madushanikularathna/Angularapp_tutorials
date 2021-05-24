module.exports = {
    HOST: "localhost",
    USER: "madu",
    PASSWORD: "123456",
    DB: "tutorials",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
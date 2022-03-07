module.exports = {
  "development": {
    "url": process.env.DATABASE_URL,
    "dialect": "postgres",
    "dialectOptions": {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    },
    "migrationStorage": "json",
    "migrationStoragePath": "sequelizeMeta.json",
  },
  "test": {
    "url": process.env.DATABASE_URL,
    "dialect": "postgres",
    "dialectOptions": {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    },
    "migrationStorage": "json",
    "migrationStoragePath": "sequelizeMeta.json",
  },
  "production": {
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres",
    "dialectOptions": {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    },
    "migrationStorage": "json",
    "migrationStoragePath": "sequelizeMeta.json",
  }
}

const type = 'mariadb';
const username = 'root';
const password = 'pass';
const host = '172.19.0.2';
const port = 3306;
const database = 'test_db';

module.exports = {
  type,
  url:
    `${type}://${username}:${password}@${host}:${port}/${database}`,
  entities: [
    "dist/entity/**/*.js"
  ],
  migrations: [
    "dist/migration/**/*.js"
  ],
  cli: {
    entitiesDir:
      "dist/entity",
    migrationsDir:
      "dist/migration",
  },
  synchronize: false,
  logging: true,
};

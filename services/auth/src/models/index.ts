import { Sequelize } from 'sequelize';

import { UserFactory } from './user';

const db =
  process.env.NODE_ENV == 'test'
    ? new Sequelize('sqlite::memory:', { logging: false })
    : process.env.AUTH_MYSQL_URI
      ? new Sequelize(process.env.AUTH_MYSQL_URI, {
        dialect: 'mysql',
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false
          }
        }
      })
      : new Sequelize('mysql', 'root', process.env.MYSQL_ROOT_PASSWORD, {
        host: 'auth-mysql-srv',
        dialect: 'mysql',
      });

const User = UserFactory(db);

export { db, User };

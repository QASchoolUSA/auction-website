import { Sequelize } from 'sequelize';

import { ListingFactory } from './listing';
import { UserFactory } from './user';

const db =
  process.env.NODE_ENV == 'test'
    ? new Sequelize('sqlite::memory:', { logging: false })
    : new Sequelize(process.env.LISTINGS_MYSQL_URI || 'mysql://root:password@listings-mysql-srv:3306/listings', {
      dialect: 'mysql',
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
    });

const Listing = ListingFactory(db);
const User = UserFactory(db);

User.hasMany(Listing);
Listing.belongsTo(User);

export { db, Listing, User };

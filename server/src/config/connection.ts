import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
      process.env.DB_NAME || '',
      process.env.DB_USER || '',
      process.env.DB_PASSWORD,
      {
        host: 'localhost',
        dialect: 'postgres',
        dialectOptions: {
          decimalNumbers: true,
        },
      }
    );

// the code below is what the docs said to use but it kept giving us errors

// let sequelize;

// if (process.env.DB_URL) {
//   sequelize = new Sequelize(process.env.DB_URL);
// } else {
//   sequelize = new Sequelize(
//     process.env.DB_NAME || '',
//     process.env.DB_USER || '',
//     process.env.DB_PASSWORD,
//     {
//       host: 'localhost',
//       dialect: 'postgres',
//       dialectOptions: {
//         decimalNumbers: true,
//       },
//     }
//   )
// }



export default sequelize;

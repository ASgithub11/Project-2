import { Sequelize } from 'sequelize';

let sequelize: Sequelize;

if (process.env.DATABASE_URL) {
  console.log('Using DATABASE_URL');
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false,
  });
} else if (process.env.DB_URL) {
  console.log('Using DB_URL');
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  console.log('Using individual DB parameters');
  sequelize = new Sequelize(
    process.env.DB_NAME || '',
    process.env.DB_USER || '',
    process.env.DB_PW || '',
    {
      host: 'localhost',
      dialect: 'postgres',
    },
  );
}

// Test the database connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
})
  .catch((err: Error) => {
    console.error('Unable to connect to the database:', err);
});

export default sequelize;
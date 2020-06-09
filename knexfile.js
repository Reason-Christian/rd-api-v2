module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost:/rd-api'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};

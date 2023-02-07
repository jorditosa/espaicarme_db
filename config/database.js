module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cffmj6pa6gdma8kkcc50-a.frankfurt-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'espaicarme_mjky'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'ikcBAshL7YuWjxF7v144W1inrGxHG8bR'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});

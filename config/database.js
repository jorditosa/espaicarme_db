module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cpdc8tdds78s73ec27vg-a.frankfurt-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'espaicarme_web'),
      user: env('DATABASE_USERNAME', 'espaicarme_web_user'),
      password: env('DATABASE_PASSWORD', 'd7tV7w5CHQOAueKTfkh09Z98bpH8Amgv'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});

/*
OLD CREDENTIALS

root

db_name: espaicarme_mjky


postgres://root:ikcBAshL7YuWjxF7v144W1inrGxHG8bR@dpg-cffmj6pa6gdma8kkcc50-a.frankfurt-postgres.render.com/espaicarme_mjky


db_passwd:ikcBAshL7YuWjxF7v144W1inrGxHG8bR




*/
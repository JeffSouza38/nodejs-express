import express from 'express';
import { Client } from 'pg';

async function main() {
  const app = express();
  const port = 3000;

  const client = new Client();

  try {
    await client.connect();
    const res = await client.query('SELECT $1::text as message', ['Hello CodeLab Postgres!']);
    console.log(res.rows[0].message); // Hello CodeLab Postgres!
  } catch (err) {
    console.error('Error connecting to database:', err.message);
    await client.end();
    return;
  }

  await client.end();

  app.get('/', (req, res) => {
    res.send('Hello World!!!!!');
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

main();

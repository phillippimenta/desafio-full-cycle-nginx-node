const express = require('express');
const axios = require('axios').default;
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

const dbConfig = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'people_db',
};

app.get('/', (_req, res) => {
  addPerson(res);
});

app.listen(PORT, () => {
  console.log(`Application running on Port...: ${PORT} 🚀`);
});

async function getRandomName() {
  try {
    const response = await axios.get('https://api.namefake.com/');
    return response.data.name;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to get random name from API');
  }
}

async function addPerson(res) {
  const name = await getRandomName();
  const connection = mysql.createConnection(dbConfig);
  const INSERT_QUERY = `INSERT INTO people(name) values('${name}')`;

  connection.query(INSERT_QUERY, (error, _results, _fields) => {
    if (error) {
      res.status(500).send('Error inserting name');
      return;
    }
    getAll(res, connection);
  });
}

function getAll(res, connection) {
  const SELECT_QUERY = `SELECT id, name FROM people`;

  connection.query(SELECT_QUERY, (error, results) => {
    if (error) {
      res.status(500).send('Error getting people');
      return;
    }

    const tableRows = results
      .map(
        (person) => `
        <tr>
          <td>${person.id}</td>
          <td>${person.name}</td>
        </tr>
      `
      )
      .join('');
    const table = `
      <table>
        <tr>
          <th>#</th>
          <th>Name</th>
        </tr>${tableRows}
      </table>`;

    res.send(`
    <h1>Full Cycle Rocks!</h1>
      ${table}
    `);

    connection.end();
  });
}
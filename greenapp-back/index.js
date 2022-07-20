const express = require('express');
const cors = require('cors')
const PORT = 3001
const app = express();
const mysql = require('mysql2/promise');

const {dashboard} = require("./entites");

let dbConnect = null;

app.use(cors())
app.get('/', async (req, res) => {
    const [rows] = await dbConnect.execute('SELECT * FROM `greenapp`');
    res.send({msg: 'Hello from server',rows});
})
app.get('/dashboard', (req, res) => {
    res.send(dashboard)
})

const boostrap = async () => {
    try {
        dbConnect = await mysql.createConnection({
            host: '172.17.0.1',
            port: '3306',
            user: 'root',
            password: 'root',
            database: 'mysql'
        });
        console.log('db connected')
        app.listen(PORT,'localhost',() => {
        console.log('Server has been started on port ' + PORT)
        })
    } catch (e) {
        console.log('Server has been crahsed', e)
    }
}

boostrap();

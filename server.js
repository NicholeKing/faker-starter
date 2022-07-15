const express = require("express");
const app = express();
const port = 8000;
const {faker} = require('@faker-js/faker');

app.get("/", (req, res) => {
    res.json({message: faker.name.firstName()})
})

app.listen(port, () => console.log(`Running on port ${port}!`));
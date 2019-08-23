'use strict'

const express = require('express');
const bodyparser = require('body-parser');

const app = express();
const port  = process.env.port || 3000;
const prefixApi = '/api/';

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.get('/:name', (request, response) => {
    response.send({ message: `We are running by ${request.params.name}`, statusCode: 200 });
});

app.get(`${prefixApi}products`, (request, response) => {
    response.send(200, {products: []});
});

app.get(`${prefixApi}product/:productId`, (request, response) => {

});

app.post(`${prefixApi}product`, (request, response) => {
    console.log(request.body);
    response.send(200, {message: 'Saved succesfully'});
});

app.put(`${prefixApi}product/:productId`, (request, response) => {

});

app.delete(`${prefixApi}product/:productId`, (request, response) => {

});

app.listen(port, () => console.log(`API is running over ${port} port`));

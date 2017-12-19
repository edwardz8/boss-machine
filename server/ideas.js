const express = require('express');
const ideasRouter = express.Router({mergeParams: true});
const bodyParser = require('body-parser');
const checkMillionDollarIdea = require('./checkMillionDollarIdea.js');

const { getAllFromDatabase, getFromDatabaseById, addToDatabase,
  updateInstanceInDatabase, deleteFromDatabaseById, deleteAllFromDatabase }
  = require('./db');

ideasRouter.use(bodyParser.json());

ideasRouter.get('/', (req, res, next) => {
  res.send(getAllFromDatabase('ideas'));
});

ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
  const newIdea = addToDatabase(req.body, 'ideas');
  if (newIdea) {
    res.status(201).send(newIdea);
  } else {
    res.status(400).send();
  }
});

ideasRouter.get(':ideaId', (req, res, next) => {
  const foundIdea = getFromDatabaseById(req.params.ideaId, 'ideas');
  if (foundIdea) {
    res.send(foundIdea);
  } else {
    res.status(404).send('There are no ideas found.');
  }
});

ideasRouter.put('/:ideaId', (req, res, next) => {
  const foundIdea = getFromDatabaseById(req.params.ideaId, 'ideas');
  if (Number(req.params.ideaId) && foundIdea) {
    res.send(updateInstanceInDatabase(req.body, 'ideas'));
  } else {
    res.status(404).send();
  }
});

ideasRouter.delete('/:ideaId', (req, res, next) => {
  const foundIdea = getFromDatabaseById(req.params.ideaId, 'ideas');
  if (Number(req.params.ideaId) && foundIdea) {
    deleteFromDatabaseById(req.params.ideaId, 'idea');
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

module.exports = ideasRouter;

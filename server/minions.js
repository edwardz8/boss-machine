const express = require('express');
const minionsRouter = express.Router({mergeParams: true});
const bodyParser = require('body-parser');

const { getAllFromDatabase, getFromDatabaseById, addToDatabase,
  updateInstanceInDatabase, deleteFromDatabaseById, deleteAllFromDatabase }
  = require('./db');

minionsRouter.get('', (req, res, next) => {
  res.send(getAllFromDatabase('minions'));
});

minionsRouter.post('/', (req, res, next) => {
  const newMinion = addToDatabase(req.body, 'minions');
  if (newMinion) {
    res.status(201).send(newMinion);
  } else {
    res.status(400).send('Couldnt create minion');
  }
});

minionsRouter.get('/:minionId', (req, res, next) => {
  const foundMinion = getFromDatabaseById(req.params.minionId, 'minions');
  if (foundMinion) {
    res.send(foundMinion);
  } else {
    res.status(404).send('Minions not found.');
  }
});

minionsRouter.put('/:minionId', (req, res, next) => {
  const foundMinion = getFromDatabaseById(req.params.minionId, 'minions');
  if (Number(req.params.minionId) && foundMinion) {
    res.send(updateInstanceInDatabase(req.body, 'minions'));
  } else {
    res.status(404).send();
  }
});

minionsRouter.delete('/apis/minions/:minionID', (req, res, next) => {
  const minionIndex = getElementById(req.params.id, 'minions');
  if (Number(req.params.minionId) && foundMinion) {
    deleteFromDatabaseById(req.params.minionId, 'minions');
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

module.exports = minionsRouter;

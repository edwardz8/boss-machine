const express = require('express');
const meetingsRouter = express.Router({mergeParams: true});
const bodyParser = require('body-parser');

const { getAllFromDatabase, getFromDatabaseById, addToDatabase, updateInstanceInDatabase,
  deleteFromDatabasebyId, deleteAllFromDatabase, createMeeting }
  = require('./db');

meetingsRouter.use(bodyParser.json());

meetingsRouter.get('/', (req, res, next) => {
  res.send(getAllFromDatabase('meetings'));
});

meetingsRouter.post('/', (req, res, next) => {
  const newMeeting = createMeeting();
  if (newMeeting) {
    res.status(201).send(addToDatabase('meetings', newMeeting));
  } else {
    res.status(400).send();
  }
});

meetingsRouter.delete('/', (req, res, next) => {
  if (true) {
    deleteAllFromDatabase('meetings');
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

module.exports = meetingsRouter;

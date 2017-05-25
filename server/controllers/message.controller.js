import Message from '../models/message';
import cuid from 'cuid';
import validator from 'express-validator';

export function getMessages(req, res) {
  Message.find().sort('-dateAdded').exec((err, messages) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json({ messages });
  });
}

export function addMessage(req, res) {
  req.checkBody('name', 'Name must not be empty.').notEmpty();
  req.checkBody('email', 'Email must not be empty.').notEmpty();
  req.checkBody('phone', 'Phone must not be empty.').notEmpty();
  req.checkBody('message', 'Message must not be empty.').notEmpty();

  const errors = req.validationErrors();

  if(errors) {
    res.status(400).send(errors);
    return;
  }

  const message = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message
  }

  const newMessage = new Message(message);
  newMessage.cuid = cuid();

  newMessage.save((err, saved) => {
    if (err) {
      res.status(500).send();
      return;
    }
    res.json({ message: saved });
  });
}

export function getMessage(req, res) {
  Message.findOne({ cuid: req.params.cuid }).exec((err, message) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json({ message });
  });
}

export function deleteMessage(req, res) {
  Message.findOne({ cuid: req.params.cuid }).exec((err, message) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    message.remove(() => {
      res.status(200).end();
    });
  });
}

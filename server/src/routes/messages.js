const { Router } = require("express");
const { Message } = require("../models");
const sendEmail = require("../helpers/send-email.js");
const logs = require("./logs.js");

const getAll = async (req, res) => {
  try {
    const messages = await Message.findAll({
      where: { property_id: req.params.property_id },
    });
    if (!messages)
      return res.status(200).json({ message: "No messages found" });
    return res.status(200).json(messages);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const getOne = async (req, res) => {
  try {
    const message = await Message.findByPk(req.params.message_id);
    if (!message) return res.status(404).json({ error: "Message not found" });
    return res.status(200).json(message);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

const archiveOne = async (req, res) => {
  try {
    await Message.destroy({
      where: { id: req.params.message_id },
    });
    res.status(200).json({ message: "Message was archived" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const create = async (req, res) => {
  try {
    const {
      userEmail,
      agentEmail,
      userPhone,
      userName,
      message,
      propertyTitle,
      propertyID,
    } = req.body;

    const newMessage = await Message.create({
      username: userName,
      email: userEmail,
      phone: userPhone,
      message: message,
      property_id: propertyID,
    });
    if (!newMessage) {
      return res.status(400).json({ error: "Could not create a message" });
    }
    const response = sendEmail(
      agentEmail,
      userName,
      userEmail,
      userPhone,
      propertyTitle,
      propertyID,
      message
    );
    return res
      .status(201)
      .json({ message: "Message created", response: response });
  } catch (error) {
    return res.status(500).json({ error: `Internal Server Error - ${error}` });
  }
};

module.exports = Router(test)
  .get("/:property_id/messages", getAll)
  .get("/:property_id/messages/:message_id", getOne)
  .delete("/:property_id/messages/:message_id", archiveOne)
  .post("/:property_id/messages", create)
  .use("/:property_id/messages", logs);

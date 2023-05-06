const { Router } = require("express");
const { Log } = require("../models");

const getAll = async (req, res) => {
  try {
    const logs = await Log.findAll({
      where: { message_id: req.params.message_id },
    });
    if (!logs) return res.status(200).json({ logs: "No logs found" });
    return res.status(200).json(logs);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const updateLog = async (req, res) => {
  const id = req.params.log_id;
  try {
    if (!(await Log.findByPk(id)))
      return res.status(404).json({ error: `Log ID:${id} not found!` });

    await Log.update(req.body, {
      where: { id: id },
    });
    res.status(200).json({ log: `Log ID:${id} successfully updated!` });
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      res.status(422).json({ error: `Invalid data - ${error.log}` });
    } else {
      res.status(500).json({ error: `Internal Server Error - ${error.log}` });
    }
  }
};

const create = async (req, res) => {
  const log = await Log.create({
    ...req.body,
    message_id: req.params.message_id,
  });
  return res.status(201).json({ log });
};

const deleteLog = async (req, res) => {
  const { log_id } = req.params;
  try {
    const deletedLog = await Log.destroy({ where: { id: log_id } });
    if (deletedLog >= 1) {
      return res
        .status(200)
        .json({ log: `Log ID:${log_id} successfully deleted` });
    } else {
      return res.status(404).json({ error: `Log ID:${log_id} not found!` });
    }
  } catch (error) {
    res.status(500).json({ error: `Internal Server Error - ${error.log}` });
  }
};

module.exports = Router()
  .get("/:message_id/logs", getAll)
  .put("/:message_id/logs/:log_id", updateLog)
  .delete("/:message_id/logs/:log_id", deleteLog)
  .post("/:message_id/logs", create);

const db = require("../repository");
const { Client } = require("../repository/models");

module.exports = {
  findAllClients: async (req, res) => {
    try {
      const clients = await db.findAllClients();
      res.send(clients);
    } catch (error) {
      res.status(500).send({ error: "Erro ao buscar clientes" });
    }
  },

  findClientById: async (req, res) => {
    const { id } = req.params;
    console.log("ID", req.params);
    try {
      const client = await db.findClientById(id);
      if (!client) {
        return res.status(404).send({ error: "Cliente não encontrado" });
      }
      res.send(client);
    } catch (error) {
      res.status(500).send({ error: "Erro ao buscar cliente por ID" });
    }
  },

  createClient: async (req, res) => {
    const clientData = req.body;
    try {
      const createdClient = await db.createClient(clientData);
      res.status(201).send(createdClient);
    } catch (error) {
      res.status(500).send({ error: "Erro ao criar cliente" });
    }
  },

  updateClient: async (req, res) => {
    const { id } = req.params;
    const clientData = req.body;
    try {
      const updatedClient = await db.updateClient(id, clientData);
      res.send(updatedClient);
    } catch (error) {
      res.status(500).send({ error: "Erro ao atualizar cliente" });
    }
  },

  deleteClient: async (req, res) => {
    const { id } = req.params;
    try {
      const deleteResult = await db.deleteClient(id);
      res.send({ deleted: deleteResult });
    } catch (error) {
      res.status(500).send({ error: "Erro ao deletar cliente" });
    }
  }
};
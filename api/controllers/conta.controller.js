const db = require("../repository");
const { Contas } = require("../repository/models");

module.exports = {
    findAllContas: async (req, res) => {
        try {
          const contas = await db.findAllContas();
          console.log("CONTAS", contas);
          res.send(contas);
        } catch (error) {
          res.status(500).send({ error: "Erro ao buscar contas" });
        }
      },
    
      findContaById: async (req, res) => {
        const { id } = req.params;
        try {
          const conta = await db.findContaById(id);
          if (!conta) {
            return res.status(404).send({ error: "Conta não encontrada" });
          }
          res.send(conta);
        } catch (error) {
          res.status(500).send({ error: "Erro ao buscar conta por ID" });
        }
      },
    
      createConta: async (req, res) => {
        const contaData = req.body;
        try {
          const createdConta = await db.createConta(contaData);
          res.status(201).send(createdConta);
        } catch (error) {
          res.status(500).send({ error: "Erro ao criar conta" });
        }
      },
    
      updateConta: async (req, res) => {
        const { id } = req.params;
        const contaData = req.body;
        try {
          const updatedConta = await db.updateConta(id, contaData);
          res.send(updatedConta);
        } catch (error) {
          res.status(500).send({ error: "Erro ao atualizar conta" });
        }
      },
    
      deleteConta: async (req, res) => {
        const { id } = req.params;
        try {
          const deleteResult = await db.deleteConta(id);
          res.send({ deleted: deleteResult });
        } catch (error) {
          res.status(500).send({ error: "Erro ao deletar conta" });
        }
      }
  };
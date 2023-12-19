const db = require("../repository");
const { ContaReceber } = require("../repository/models"); // Supondo que você importou o modelo ContaReceber corretamente

module.exports = {

  findAllContasReceber: async (req, res) => {
    try {
      const contasReceber = await db.findAllContasReceber();
      console.log("CONTAS A RECEBER", contasReceber);
      res.send(contasReceber);
    } catch (error) {
      res.status(500).send({ error: "Erro ao buscar contas a receber" });
    }
  },

  findAllContasReceberByMonthBySum: async (req, res) => {
    try {
      const contasReceber = await db.findAllContasReceber(); // Obtenha todas as contas
  
      const valoresPorMes = {};
  
      contasReceber.forEach(conta => {

        const dataVencimento = new Date(conta.dataVencimento);
        const month = dataVencimento.getMonth() + 1;
        const valorTotal = parseFloat(conta.valorTotal);
  
        if (!valoresPorMes[month]) {
          valoresPorMes[month] = 0;
        }
  
        console.log(dataVencimento,month,valorTotal);
        valoresPorMes[month] += valorTotal;
      });
  
      
      console.log("valoresPorMes", valoresPorMes);
      res.send(valoresPorMes);

      
    } catch (error) {
      res.status(500).send({ error: "Erro ao buscar contas a receber por mês" });
    }
  },
  
  

  findContaReceberById: async (req, res) => {
    const { id } = req.params;
    try {
      const contaReceber = await db.findContaReceberById(id);
      if (!contaReceber) {
        return res.status(404).send({ error: "Conta a receber não encontrada" });
      }
      res.send(contaReceber);
    } catch (error) {
      res.status(500).send({ error: "Erro ao buscar conta a receber por ID" });
    }
  },

  createContaReceber: async (req, res) => {
    const contaReceberData = req.body;
    console.log(contaReceberData);
    try {
      const createdContaReceber = await db.createContaReceber(contaReceberData);
      res.status(201).send(createdContaReceber);
    } catch (error) {
      res.status(500).send({ error: "Erro ao criar conta a receber" });
    }
  },
  updateContaReceber: async (req, res) => {
    const { id } = req.params;
    const contaReceberData = req.body;
    try {
      const updatedContaReceber = await db.updateContaReceber(id, contaReceberData);
      res.send(updatedContaReceber);
    } catch (error) {
      res.status(500).send({ error: "Erro ao atualizar conta a receber" });
    }
  },

  deleteContaReceber: async (req, res) => {
    const { id } = req.params;
    try {
      const deleteResult = await db.deleteContaReceber(id);
      res.send({ deleted: deleteResult });
    } catch (error) {
      res.status(500).send({ error: "Erro ao deletar conta a receber" });
    }
  }
};
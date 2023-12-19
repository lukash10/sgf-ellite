const db = require("../repository");
const { ContaPagar } = require("../repository/models"); // Supondo que você importou o modelo ContaPagar corretamente

module.exports = {

  findAllContasPagar: async (req, res) => {
    try {
      const contasPagar = await db.findAllContasPagar();
      console.log("CONTAS A RECEBER", contasPagar);
      res.send(contasPagar);
    } catch (error) {
      res.status(500).send({ error: "Erro ao buscar contas a pagar" });
    }
  },

  findAllContasPagarByMonthBySum: async (req, res) => {
    try {
      const contasPagar = await db.findAllContasPagar(); // Obtenha todas as contas
  
      const valoresPorMes = {};
  
      contasPagar.forEach(conta => {

        if (conta.statusPagamento === 'Pendente'){
          const dataVencimento = new Date(conta.dataVencimento);
          const month = dataVencimento.getMonth() + 1;
          const valorTotal = parseFloat(conta.valorTotal);
    
          if (!valoresPorMes[month]) {
            valoresPorMes[month] = 0;
          }
    
          console.log(dataVencimento,month,valorTotal);
          valoresPorMes[month] += valorTotal;
        }
      
      });
  
      
      console.log("valoresPorMes", valoresPorMes);
      res.send(valoresPorMes);

      
    } catch (error) {
      res.status(500).send({ error: "Erro ao buscar contas a pagar por mês" });
    }
  },
  
  

  findContaPagarById: async (req, res) => {
    const { id } = req.params;
    try {
      const contaPagar = await db.findContaPagarById(id);
      if (!contaPagar) {
        return res.status(404).send({ error: "Conta a pagar não encontrada" });
      }
      res.send(contaPagar);
    } catch (error) {
      res.status(500).send({ error: "Erro ao buscar conta a pagar por ID" });
    }
  },

  createContaPagar: async (req, res) => {
    const contaPagarData = req.body;
    console.log(contaPagarData);
    try {
      const createdContaPagar = await db.createContaPagar(contaPagarData);
      res.status(201).send(createdContaPagar);
    } catch (error) {
      res.status(500).send({ error: "Erro ao criar conta a pagar" });
    }
  },
  updateContaPagar: async (req, res) => {
    const { id } = req.params;
    const contaPagarData = req.body;
    try {
      const updatedContaPagar = await db.updateContaPagar(id, contaPagarData);
      res.send(updatedContaPagar);
    } catch (error) {
      res.status(500).send({ error: "Erro ao atualizar conta a pagar" });
    }
  },

  deleteContaPagar: async (req, res) => {
    const { id } = req.params;
    try {
      const deleteResult = await db.deleteContaPagar(id);
      res.send({ deleted: deleteResult });
    } catch (error) {
      res.status(500).send({ error: "Erro ao deletar conta a pagar" });
    }
  }
};
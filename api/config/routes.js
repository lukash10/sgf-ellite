module.exports = () => {
  require('express-async-errors');

  const loginController = require('../controllers/login.controller.js');
  const clientController = require("../controllers/client.controller.js");
  const contaController = require('../controllers/conta.controller.js');
  const contaReceberController = require('../controllers/receber.controller.js');

  const router = require('express').Router();

  // Usuario e Login
  router.post('/login', loginController.doAuth);
  router.post('/user', loginController.create);
  router.get('/users', loginController.findListAndOne);
  router.put('/user/:id', loginController.edit);
  router.delete('/user/:id',loginController.delete);

  // Rotas para clientes
  router.get("/clients", clientController.findAllClients);
  router.get("/clients/:id", clientController.findClientById);
  router.post("/clients", clientController.createClient);
  router.put("/clients/:id", clientController.updateClient);
  router.delete("/clients/:id", clientController.deleteClient);

 // Rotas para Contas
  router.get('/contas', contaController.findAllContas);
  router.get('/contas/:id', contaController.findContaById);
  router.post('/contas', contaController.createConta);
  router.put('/contas/:id', contaController.updateConta);
  router.delete('/contas/:id', contaController.deleteConta);

  // Rotas para Contas a Receber
  

  router.get('/contasreceber', contaReceberController.findAllContasReceber);
  router.get('/contasreceber/:id', contaReceberController.findContaReceberById);
  router.post('/contasreceber', contaReceberController.createContaReceber);
  router.put('/contasreceber/:id', contaReceberController.updateContaReceber);
  router.delete('/contasreceber/:id', contaReceberController.deleteContaReceber);

  return router;
};

const { User, Clients, Contas , ContaReceber} = require('./models.js');
const { Op } = require('sequelize');
const sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const { randomUUID } = require('crypto');

module.exports = {
  
  doLogin: async (auth) => {
    try {
      var result = {
        success: false,
        token: null,
      };

      const user = await User.findOne({ where: { email: auth.login } });
      console.log(user);

      if (!user) {
        return result;
      }

      result.success = bcrypt.compareSync(auth.password, user.password);
      console.log(result.success);

      user.password = undefined;

      if (result.success) {
        result.token = jwt.sign({ userId: user.id }, 'myjwtsecret', {
          expiresIn: '10000000d',
        });
      }

      return result;
    } catch (e) {
      console.log(e);
    }
  },
  createUser: async (user) => {
    try {
      user.password = bcrypt.hashSync(user.password, 10);

      const result = await User.create(user);

      return result;
    } catch (e) {
      console.log(e);
    }
  },
  updateUser: async (id, user) => {
    try {
      const userToUpdate = await User.findOne({ where: { id: id } });

      if (user.password) {
        user.password = bcrypt.hashSync(user.password, 10);
      }

      userToUpdate.update(user);

      return userToUpdate;
    } catch (e) {
      console.log(e);
    }
  },
  deleteUser: async (id) => {
    try {
      const code = await User.destroy({ where: { id: id } });

      return code;
    } catch (e) {
      console.log(`Error ao deletar o usuario ${id}`, e);
    }
  },
  findAllUsers: async () => {
    try {
      var users = await User.findAll({
        order: [['name', 'ASC']],
        attributes: { exclude: ['password']}
      });

      return users;
    } catch (e) {
      console.log(e);
    }
  },
  findOneUser: async (id) => {
    try {
      var user = await User.findOne({
        where: { id: id },
        attributes: { exclude: ['password']}
      });

      return user;
    } catch (e) {
      console.log(e);
    }
  },

  //Clientes//

  createClient: async (client) => {
    try {
      const result = await Clients.create(client);
      return result;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao criar cliente");
    }
  },

  updateClient: async (id, client) => {
    try {
      const clientToUpdate = await Clients.findOne({ where: { id: id } });

      if (!clientToUpdate) {
        throw new Error("Cliente não encontrado");
      }

      clientToUpdate.update(client);

      return clientToUpdate;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao atualizar cliente");
    }
  },

  deleteClient: async (id) => {
    try {
      const code = await Clients.destroy({ where: { id: id } });
      return code;
    } catch (error) {
      console.log(`Erro ao deletar o cliente ${id}`, error);
      throw new Error("Erro ao deletar cliente");
    }
  },

  findAllClients: async () => {
    try {
      const clients = await Clients.findAll({
        order: [['nome', 'ASC']],
        // Coloque aqui os atributos que deseja retornar, excluindo dados sensíveis se necessário
      });

      return clients;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao buscar clientes");
    }
  },

  findClientById: async (id) => {

    try {
      console.log("ID",id);
      const client = await Clients.findOne({
        where: { id: id },
        // Coloque aqui os atributos que deseja retornar, excluindo dados sensíveis se necessário
      });

      if (!client) {
        throw new Error("Cliente não encontrado");
      }

      return client;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao buscar cliente por ID");
    }
  },

  //Contas//

  createConta: async (contaData) => {
    try {
      const result = await Contas.create(contaData);
      return result;
    } catch (error) {
      console.log(error);
      throw new Error('Erro ao criar conta');
    }
  },

  updateConta: async (id, contaData) => {
    try {
      const contaToUpdate = await Contas.findOne({ where: { id: id } });

      if (!contaToUpdate) {
        throw new Error('Conta não encontrada');
      }

      contaToUpdate.update(contaData);

      return contaToUpdate;
    } catch (error) {
      console.log(error);
      throw new Error('Erro ao atualizar conta');
    }
  },

  deleteConta: async (id) => {
    try {
      const code = await Contas.destroy({ where: { id: id } });
      return code;
    } catch (error) {
      console.log(`Erro ao deletar a conta ${id}`, error);
      throw new Error('Erro ao deletar conta');
    }
  },

  findAllContas: async () => {
    try {
      const contas = await Contas.findAll({
        order: [['descricao', 'ASC']],
        // Coloque aqui os atributos que deseja retornar, excluindo dados sensíveis se necessário
      });

      return contas;
    } catch (error) {
      console.log(error);
      throw new Error('Erro ao buscar contas');
    }
  },

  findContaById: async (id) => {
    try {
      const conta = await Contas.findOne({
        where: { id: id },
        // Coloque aqui os atributos que deseja retornar, excluindo dados sensíveis se necessário
      });

      if (!conta) {
        throw new Error('Conta não encontrada');
      }

      return conta;
    } catch (error) {
      console.log(error);
      throw new Error('Erro ao buscar conta por ID');
    }
  },

  // Contas a Receber

  createContaReceber: async (contaReceberData) => {
    try {
      const result = await ContaReceber.create(contaReceberData);
      return result;
    } catch (error) {
      console.log(error);
      throw new Error('Erro ao criar conta a receber');
    }
  },
  
  updateContaReceber: async (id, contaReceberData) => {
    try {
      const contaReceberToUpdate = await ContaReceber.findOne({ where: { id: id } });
  
      if (!contaReceberToUpdate) {
        throw new Error('Conta a receber não encontrada');
      }
  
      await contaReceberToUpdate.update(contaReceberData);
  
      return contaReceberToUpdate;
    } catch (error) {
      console.log(error);
      throw new Error('Erro ao atualizar conta a receber');
    }
  },
  
  deleteContaReceber: async (id) => {
    try {
      const code = await ContaReceber.destroy({ where: { id: id } });
      return code;
    } catch (error) {
      console.log(`Erro ao deletar a conta a receber ${id}`, error);
      throw new Error('Erro ao deletar conta a receber');
    }
  },
  
  findAllContasReceber: async () => {
    try {
      const contasReceber = await ContaReceber.findAll({
        order: [['descricao', 'ASC']],
        // Coloque aqui os atributos que deseja retornar, excluindo dados sensíveis se necessário
      });
  
      return contasReceber;
    } catch (error) {
      console.log(error);
      throw new Error('Erro ao buscar contas a receber');
    }
  },
  
  findContaReceberById: async (id) => {
    try {
      const contaReceber = await ContaReceber.findOne({
        where: { id: id },
        // Coloque aqui os atributos que deseja retornar, excluindo dados sensíveis se necessário
      });
  
      if (!contaReceber) {
        throw new Error('Conta a receber não encontrada');
      }
  
      return contaReceber;
    } catch (error) {
      console.log(error);
      throw new Error('Erro ao buscar conta a receber por ID');
    }
  }
  

};

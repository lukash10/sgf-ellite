const { sequelize, db } = require('../config/sequelize.js');

const generateModels = (model, dataTypes) => {
  
  const User = model.define('users', {
    id: {
      type: dataTypes.UUID,
      defaultValue: dataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: dataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    active: {
      type: dataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    role: {
      type: dataTypes.STRING,
      allowNull: false,
      defaultValue: "COLAB",
    }
  });

  const Clients = model.define('clients', {
    id: {
      type: dataTypes.UUID,
      defaultValue: dataTypes.UUIDV4,
      primaryKey: true,
    },
    nome: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    cpf: {
      type: dataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    telefone: {
      type: dataTypes.STRING,
      allowNull: true,
    },
    celular: {
      type: dataTypes.STRING,
      allowNull: true,
    },
    clienteFornecedor: {
      type: dataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: dataTypes.STRING,
      allowNull: true,
      unique: true,
    },
  });

  const Contas = model.define('contas', {
    descricao: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    tipoConta: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    tipoDespesa: {
      type: dataTypes.STRING,
      allowNull: false,
    },
  });

  const ContaReceber = model.define('contasreceber', {
    descricao: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    tipoCliente: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    dataVencimento: {
      type: dataTypes.DATE,
      allowNull: false,
    },
    statusRecebimento: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    valorTotal: {
      type: dataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  });

  const ContaPagar = model.define('contaspagar', {
    descricao: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    emissaoPagamento: {
      type: dataTypes.DATE,
      allowNull: false,
    },
    dataVencimento: {
      type: dataTypes.DATE,
      allowNull: false,
    },
    statusPagamento: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    valorTotal: {
      type: dataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  });

  Clients.hasMany(ContaReceber, {
    foreignKey: 'ClientId',
    as: 'contasreceber',
  });

  ContaReceber.belongsTo(Clients, { 
    foreignKey: 'ClientId', 
    as: 'clientes' }
  );

  Clients.hasMany(ContaPagar, {
    foreignKey: 'ClientId',
    as: 'contaspagar',
  });

  ContaPagar.belongsTo(Clients, { 
    foreignKey: 'ClientId', 
    as: 'clientes' }
  );
 
  return { User, Clients, Contas, ContaReceber, ContaPagar };
};

module.exports = generateModels(db, sequelize);

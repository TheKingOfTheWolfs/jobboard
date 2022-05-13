const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Account = sequelize.define('account', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Company = sequelize.define('company', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    logo: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
})

const Job = sequelize.define('job', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},    
})

const JobDescription = sequelize.define('jobdescription', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: false, allowNull: false},
    description: {type: DataTypes.STRING, unique: false, allowNull: false},
    position: {type: DataTypes.STRING, unique: false, allowNull: false},
    contract: {type: DataTypes.STRING, unique: false, allowNull: false},
    level: {type: DataTypes.STRING, unique: false, allowNull: false},
    role: {type: DataTypes.STRING, unique: false, allowNull: false},
    location: {type: DataTypes.STRING, unique: false, allowNull: false},
})





User.hasOne(Account)
Account.belongsTo(User)

Company.hasOne(Account)
Account.belongsTo(Company)

Company.hasMany(Job)
JobDescription.belongsTo(Job)


module.exports = {
    User,
    Account,
    Company,
    Job,
    JobDescription,
}



//Drop all the tables in case you messed up in initial setup (DEV stage):
 
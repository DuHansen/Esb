const Sequelize = require('sequelize');

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.db = new Sequelize(
            'javascript_teste',
            'root',
            '8525',
            { host: 'localhost', dialect: 'mysql' }
        )
    }
}

module.exports = new Database();
var db = require('../index');

var User = bookshelf.Model.extend({
    tableName: 'users'
  });

module.exports = User;
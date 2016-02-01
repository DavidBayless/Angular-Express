
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('books', function(table){
            table.increments('id');
            table.string('bookName', 50);
            table.string('author', 50);
            table.text('bookDescription');
            table.string('imageUrl', 255);
        })
    ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTable('bookList')
  ])
};

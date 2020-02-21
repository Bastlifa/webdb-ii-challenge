
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl =>
    {
        tbl.increments()
        tbl.string('VIN', 128).unique().notNullable()
        tbl.string('make', 128).notNullable()
        tbl.string('model', 128).notNullable()
        tbl.float('mileage', 128).notNullable()
        tbl.string('transmission type', 128)
        tbl.string('title status', 128)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars')
};

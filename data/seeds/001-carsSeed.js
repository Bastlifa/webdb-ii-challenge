
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          VIN: 'asf1qf51654ew6541',
          make: "Chevy",
          model: "Chevallier",
          mileage: 120741.2,
          ['transmission type']: 'Stick',
          ['title status']: 'clean'
        },
        {
          VIN: 'fjhkqb2384fyg',
          make: "Mazda",
          model: "RX-20",
          mileage: 741,
          ['transmission type']: 'Rotary',
          ['title status']: 'clean'
        },
        {
          VIN: 'qlewkuf9874fyh',
          make: "Nissan",
          model: "Unreliant",
          mileage: 42917.82,
          ['transmission type']: 'Automatic',
          ['title status']: 'Salvage'
        },
      ]);
    });
};

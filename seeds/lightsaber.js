exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('lightsabers').del()
    .then(function() {
      // Inserts seed entries
      return knex('lightsabers').insert([{
          id: 1,
          color: 'blue'
        },
        {
          id: 2,
          color: 'purple'
        },
        {
          id: 3,
          color: 'red'
        },
        {
          id: 4,
          color: 'green'
        }
      ]);
    });
};

  /*

  Event
  - Title : String
  - Begin Time : Datetime
  /// /// Set to -1 if all day
  - End Time : Datetime
  - Username: String
  /// /// Foreign key associated to user

  */

const knex = require('knex')(require('./knexfile'))

var id = knex('users').where({
  username: 'testuser15'/*,
  last_name:  'User'*/
  }).select('id');

console.log(id);
/*
knex.from('events').select("title", "begin_time").where('id', '=', '1')
    .then((rows) => {
        for (row of rows) {
            console.log(`${row['title']} ${row['begin_time']}`);
        }
    })
    .catch((err) => { console.log( err); throw err })
    .finally(() => {
        knex.destroy();
    });
*/
/*
// below code used to create table for events
knex.schema.createTable('events', (table) => {
    //table.increments('id')
    table.string('title');
    table.datetime('begin_time');
    table.datetime('end_time');
    table.integer('id').unsigned();
    table.foreign('id').references('id').inTable('user');
}).then(() => console.log("table created"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });*/
/*
// sample events
const events = [
	{ title: "Job Interview", begin_time: "2019-01-01 23:00:00", end_time: "2015-10-21 23:30:00", id: "4" },
	{ title: "CS 127", begin_time: "2019-12-20 09:00:00", end_time: "2019-12-20 10:00:00", id: "4" },
	{ title: "Dentist", begin_time: "2015-10-21 18:00:00", end_time: "2015-10-21 19:00:00", id: "4" }
]

knex('events').insert(events).then(() => console.log("data inserted"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });
*/
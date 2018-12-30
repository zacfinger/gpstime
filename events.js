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

// sample events
const events = [
	{ title: "CS 335", begin_time: "2015-12-20 09:00:00", end_time: "2015-12-20 10:00:00", id: "1" },
	{ title: "Meeting", begin_time: "2018-12-30 18:00:00", end_time: "2018-12-30 19:00:00", id: "3" }
/*
    { name: 'Audi', price: 52642 },
    { name: 'Mercedes', price: 57127 },
    { name: 'Skoda', price: 9000 },
    { name: 'Volvo', price: 29000 },
    { name: 'Bentley', price: 350000 },
    { name: 'Citroen', price: 21000 },
    { name: 'Hummer', price: 41400 },
    { name: 'Volkswagen', price: 21600 },*/
]

knex('events').insert(events).then(() => console.log("data inserted"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });

/* Create and use the starwars db */
CREATE DATABASE  `starwars`;
USE `starwars`;

/* Create a table for all your star wars characters */
CREATE TABLE `allcharacters` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`routeName` VARCHAR( 255) NOT NULL,
	`name` VARCHAR( 255 ) NOT NULL,
	`role` VARCHAR( 255 ) NOT NULL,
	`age` Int(11) NOT NULL,
	`forcePoints` Int(11) NOT NULL,

	PRIMARY KEY ( `id` ) ); /* Set ID as primary key */

  // This may be confusing but here Sequelize (capital) references the standard library
  var Sequelize = require("sequelize");
  // sequelize (lowercase) references our connection to the DB.
  var sequelize = require("../config/connection.js");

  // Creates a "Chirp" model that matches up with DB
  var Chirp = sequelize.define("chirp", {
    routeName: {
      type: Sequelize.STRING
    },
    body: {
      type: Sequelize.STRING
    },
    created_at: {
      type: Sequelize.DATE
    }
  }, {
    timestamps: false
  });

  // Syncs with DB
  Chirp.sync();

  // Makes the Chirp Model available for other files (will also create a table)
  module.exports = Chirp;

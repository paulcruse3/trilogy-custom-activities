# Project Requirements

This document outlines the base requirements for Project 2.

### Requirements

Your project must:

* Use a Node and Express Web Server;

* Be backed by a MySQL and build your own ORM:
	* Minimum of 4 generic functions (`insert()`, `select()`, `update()`, `delete()`).
	* Must be able to use those functions to dynamically `CRUD` any table in your project.

* Database requirements are as follows:
	* Must include a `schema.sql` file in your project OR develop auto-generating tables functionality similar to how `Sequelize.sync()` works
	* Follow proper database naming conventions (the word `database` or `db` not needed)
	* Follow proper table naming conventions; just plurals of your singluar model (i.e. user table named `users` NOT `allUsers` `appUsers` etc)
	* Follow proper column naming conventions (avoid columns like `id` and `name`, etc; be explicit with your naming) and fronted follows that model naming
	* Follow proper typing for columns (not everything is a VARCHAR)
	* No `NULL` columns (use seperate table for optional fields) [EXCEPTION: `modified` timestamp fields and session holders]
	* Use explicit foreign key contstraints (i.e real FKs not just two columns that share the same data value)
	* Use joins where appropriate (don't use two seperate queries where 1 join will work)

* Have `POST`, `GET`, `PUT`/`PATCH` and `DELETE` routes for retrieving and adding new data;

* Be deployed using Heroku (with Data);

* Have a polished frontend / UI;

* Have folder structure that meets MVC Paradigm;

* Meet good quality coding standards (indentation, scoping, naming).

* Need help getting started, see: [Getting Started](./INIT.md)

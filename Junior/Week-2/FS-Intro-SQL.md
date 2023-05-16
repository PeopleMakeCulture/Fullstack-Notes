FS-Intro-SQL

1. What is SQL?
	- Structured query language
	- A declarative language - telling it exactly what to do; less concerned with what's happening under the hood (ex CSS background-color: blue)
	- Properties(/attributes/fields) in columns, instances(/tuples) in rows
	- IDs are integers
	- Normalizing vs denormalizing - gluing two tables together; pulling them apart
	- **ACID compliant: atomized, consistent, isolated, durable**	

2. How do we create a database?
		`CREATE DATABASE dbname;`
		or
		`CREATE DATABASE dbname TEMPLATE templatename`

3. How do we create a table in a database?
	`CREATE TABLE students(
  		id SERIAL PRIMARY KEY,                        
	  	name TEXT NOT NULL,
	  	password TEXT NOT NULL
	);`


4. How do we make a query?
	`
	SELECT columnname(s)
	FROM table
	(WHERE type = 'type'	//optional decorators/limiters/aggregators
	LIMIT <num>)
	`
	- returns a smaller table

5. How do we generate new tables?
	SELECT:
		- SELECT column1, column2, columnN 
	FROM:
		- FROM table_name; (important to use single quotes and semicolon)
	JOIN:
		- JOIN table2 ON table1.column = column.ID
		- JOIN clause can be attached to a FROM statement (for select)
	ON:
	WHERE:
		- limitation/filtering condition

6. Types of Joins:
		- inner: union of two; no NULL in eather 
		-outer: a and b; NULL ok on both
		- left: all a, overlapping b; no NULL on left
		- right join: all b overlapping a; no NULL on right

6. How do we change tables?
	INSERT:
		- INSERT INTO TABLE_NAME (column1,...columnN) VALUES (value1,...valueN);; (important to use single quotes and semicolon)


6. What is a schema?
	- a table's blueprint, the shape/format of the data
	- where the content goes
	- a schema i sused to validate incoming content

7. Parallels to HTTP:
	CRUD: create/read/update/delete from a deatabase
	Post/Get/Put/Delete from http

8. Pivot tables
	- a table that relates two other tables
	- How do we join two tables related via a pivot table?
			- join both to pivot table
			`
			SELECT *
			FROM
				Student INNER JOIN Enrollment ON Student.id = Enrollment.StudentID
				INNER JOIN School ON Enrollment.SchoolID = School.id
			`

9. Sub-queries

`
SELECT sub.*
  FROM (
        SELECT *
          FROM tutorial.sf_crime_incidents_2014_01
         WHERE day_of_week = 'Friday'
       ) subName
 WHERE sub.resolution = 'NONE'
 `



3. What is Sequalize?
	- a JS wrapper to write functions to construct these Queries
	- an ORM 

4. What is NoSQL?
	- Document databses (eg MondoDB) 
	- Graph databases (eg Neo4J)
	- Hybrids (eg PostgreSQL)

5. How does Express get info from a database?
	- psql CLI shell
	- Postgresql translates SQL to Express, also a protocol (like HTTP)

6. PSQL Commands
		\c dbname  	Connect
		\?			Help? 
		\l(+) 		List all databses (with additional info)
		\d(+) 		Describe a table (list all tables with additional information)
		\dt 		Describe tables only
		\dtvs		Describe tables, views, and sequences
		\c 			Connect to another database
		\q 			Quit
		\e 			Opens default text editor inside psql shell for handy query modifications

7. Database Terms
		- `view`: something a database administrator might assign to a specific user so that when that user queries a table, only a subset of information (like rows and columns) that the DBA has deemed relevant for them will appear in the output
		- `sequence`: a way for postgres to keep track of sequences of numbers so that it can auto-increment things like ids


Misc
- Review solutions code/videos for daily workshops after class
- Still so confused about `done`!
- Graph based vs table based databases - What does graph based mean?
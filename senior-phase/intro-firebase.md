# Intro-to-Firebase

## What is Firebase?
	- a mobile and web application development platform
	- Backend-as-a-Service 
	- acquired by Google in 2014
	- server, API, datastore

## Things it can do
	- Cloud Firestone / Realtime DB
	- Cloud storage
	- Hosting
	- Authentication
	- ML Kit
	- ...and more! (analytics)

## What is a realtime database?
	- faster than HTTP calls bc runs on WebSockets
	- data updates inr eal time
	- saves files (images) directly to Google Cloud Storage

## What is Firebase?
	- [Docs](https://aws.amazon.com/nosql/)
	- NoSQL cloud database
	- Records are stored as JSON objects, NOT dissembled (ie normalized) tables
	- Advantages: 	
		- More flexible schemas better for semi-structured or unstructured data
		- Designed to cale by useing distributed hardware (cloud)
		- Build PAIs optimized for each data type
	- Types:
		- key-value
		- document
		- graph
		- in-memory
		- search 

## Hosting?
	- hosts and serves you ryour static files 
	- uses `Susperstatic` which can run locally for all testing
		- replicates Firebase hosting locally (localhost?) so that you can deploy straigt to Firebase for production
	- (another middleware to consider is BrowserSync)
	- (also consider gulp)

## What is NoSQL?
	- Non-relationship database
	- Data models include doc, graph, key-value, in-memory, and search

## How does the API work?

## How does DB querying work?
	- traditional relational data models are not applicable to NoSQL?

## What is Firestore?
	- Gen 2 DB for Firebase
	- Stores data in 'documents' (similar to JSON )
	- Documents are organized into collections
	- Documents contain key-value pairs
	- Indexed queries with compound sorting and filtering 

## How do I get data from Firestore?
	Ex: let adaRef = db.collection('users').doc('alovelace');
	Ex w/ nested: let messageRef = db.collection('rooms').doc('roomA')
                .collection('messages').doc('message1');

## How should I structure my database?
	- Docs: https://firebase.google.com/docs/database/web/structure-data
	- It's a JSON tree!

## Avoid deeply nesting!
	- When you fetch data at a location in your database, you also retrieve all of its child nodes

## Read/Write to DB
	1. create instance of db

		```
		var database = firebase.database();
		```
	2. set() for basic operations
		```
		function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

		```

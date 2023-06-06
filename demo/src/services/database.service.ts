// External Dependencies
import * as mongoDB from "mongodb";
import { DB_CONN_STRING } from '$env/static/private';
import { DB_NAME } from '$env/static/private';

// Global Variables
export const collections: { users?: mongoDB.Collection } = {}

// Initialize Connection
export async function connectToDatabase() {
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(DB_CONN_STRING);

  await client.connect();
  
  const db: mongoDB.Db = client.db(DB_NAME);

  const usersCollection: mongoDB.Collection = db.collection("users");

  collections.users = usersCollection;

  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${usersCollection.collectionName}`);
}
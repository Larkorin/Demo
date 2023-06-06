import type { ObjectId } from "mongodb";

export default class User {
  constructor(public name: string, public lastName: string, public id?: ObjectId) {}
}
import type { ObjectId } from "mongodb";

export default class User {
  constructor(public name: string, public lastName: string, public email: string, public password: string, public gender: string, public id?: ObjectId) {}
}
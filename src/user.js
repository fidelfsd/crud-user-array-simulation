import { usersDataSource } from "./database.js";

export default class User {
   #id;
   #name;
   #email;
   #password;
   #isActive;
   #roleId;
   static idCounter = 1;

   get id() {
      return this.#id;
   }

   get name() {
      return this.#name;
   }

   set name(name) {
      this.#name = name;
   }

   get email() {
      return this.#email;
   }

   set email(email) {
      this.#email = email;
   }

   get password() {
      return this.#password;
   }

   set password(password) {
      this.#password = password;
   }

   get isActive() {
      return this.#isActive;
   }

   set isActive(isActive) {
      this.#isActive = isActive;
   }

   get roleId() {
      return this.#roleId;
   }

   set roleId(roleId) {
      this.#roleId = roleId;
   }

   static create(data) {
      const user = { id: User.idCounter++, ...data };
      usersDataSource.push(user);
      return data;
   }

   static find() {
      return usersDataSource;
   }

   static findById(id) {
      return usersDataSource.find((user) => user.id === id);
   }

   static update(id, data) {
      let index = usersDataSource.findIndex((user) => user.id === id);
      if (index !== -1) {
         usersDataSource[index] = { ...usersDataSource[index], ...data };
         return usersDataSource[index];
      } else {
         return null;
      }
   }

   static delete(id) {
      let index = usersDataSource.findIndex((user) => user.id === id);
      if (index !== -1) {
         usersDataSource.splice(index, 1);
         return true;
      } else {
         return false;
      }
   }
}

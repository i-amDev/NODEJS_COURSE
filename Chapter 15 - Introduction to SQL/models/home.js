// Local Modules
const db = require("../utils/databaseUtil");

module.exports = class Home {
  constructor(houseName, price, location, rating, imageUrl, description, id) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.imageUrl = imageUrl;
    this.description = description;
    this.id = id;
  }

  save() {
      return db.execute('INSERT INTO homes (houseName, price, location, rating, imageUrl, description) VALUES (?, ?, ?, ?, ?, ?)', [this.houseName, this.price, this.location, this.rating, this.imageUrl, this.description]);
  }

  static fetchAll() {
      return db.execute('SELECT * FROM homes');
  }

  static findById() {
  }

  static deleteById() {
  }
};

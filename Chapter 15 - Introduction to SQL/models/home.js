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
      if (this.id) { // update
          return db.execute('UPDATE homes SET houseName=?, price=?, location=?, rating=?, imageUrl=?, description=? WHERE id=?', [this.houseName, this.price, this.location, this.rating, this.imageUrl, this.description, this.id]);
      }
      else { // insert
          return db.execute('INSERT INTO homes (houseName, price, location, rating, imageUrl, description) VALUES (?, ?, ?, ?, ?, ?)', [this.houseName, this.price, this.location, this.rating, this.imageUrl, this.description]);
      }
  }

  static fetchAll() {
      return db.execute('SELECT * FROM homes');
  }

  static findById(homeId) {
      return db.execute('SELECT * FROM homes WHERE id = ?', [homeId]);
  }

  static deleteById(homeId) {
      return db.execute('DELETE FROM homes WHERE id = ?', [homeId]);
  }
};

// Core Modules
const fs = require('fs');
const path = require('path');

module.exports = class Home {
    constructor(houseName, price, location, rating, photoUrl) {
        this.houseName = houseName;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.photoUrl = photoUrl;
    }

    save() {
        Home.fetchAll((registeredHomes) => {
            registeredHomes.push(this);
            const p = path.dirname(require.main.filename);
            const homePath = path.join(p, "data", "homeDetails.json")
            fs.writeFile(homePath, JSON.stringify(registeredHomes), (err) => {
                console.log("File writing concluded", err);
            });
        })
    }

    static fetchAll(callback) {
        const p = path.dirname(require.main.filename);
        const homePath = path.join(p, "data", "homeDetails.json")
        fs.readFile(homePath, (err, data) => {
            console.log("File read", err, data);
            if (!err) callback(JSON.parse(data.toString()));
            else callback([]);
        });
    }
};
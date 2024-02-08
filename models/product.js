const fs = require('fs');
const path = require('path');
const products = [];

module.exports = class Product {
    constructor(title){
        this.title = title;
    }


    save() {            // save the product
        const p = path.join(path.dirname(process.mainModule.filename), 'data','products.json');
        fs.readFile(p,(err,fileContent) => {
            let products = []
            if(!err){
                products = JSON.parse(fileContent);
            }
            products.push(this.title);
            fs.writeFile(p,JSON.stringify(products),(err) => {
                console.log(err);
            })
        })
        // products.push(this.title);
        console.log("data stored successfully");
    }

    static fetchAll(cb)  {   // to fetch all products and static means we can access it even without initiating as it can be avialable without even creating a copy of product class
        const p = path.join(path.dirname(process.mainModule.filename), 'data','products.json');
        fs.readFile(p,(err,fileContent) => {
            if(err){
                cb([])
            };
            cb(JSON.parse(fileContent));
        })
    }
}
const products = [];

module.exports = class Product {
    constructor(title){
        this.title = title;
    }


    save() {                // save the product
        products.push(this.title);
    }

    static fetchAll()  {   // to fetch all products and static means we can access it even without initiating as it can be avialable without even creating a copy of product class
        return products;
    }
}
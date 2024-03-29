const Product = require('./model/product');

class SampleDb{

  constructor() {
    this.products = [
      {
        coverImg: './assets/img/phone-cover.jpg',
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens',
        heading1: 'サンプルテキスト１',
        heading2: 'サンプルテキスト２',
        heading3: 'サンプルテキスト３',
        headingdescription1: 'サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１',
        headingdescription2: 'サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２',
        headingdescription3: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
      },
      {
        coverImg: './assets/img/phone-cover.jpg',
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras',
        heading1: 'サンプルテキスト１',
        heading2: 'サンプルテキスト２',
        heading3: 'サンプルテキスト３',
        headingdescription1: 'サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１',
        headingdescription2: 'サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２',
        headingdescription3: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
      },
      {
        coverImg: './assets/img/phone-cover.jpg',
        name: 'Phone Standard',
        price: 299,
        description: 'A great phone with one of the best quality',
        heading1: 'サンプルテキスト１',
        heading2: 'サンプルテキスト２',
        heading3: 'サンプルテキスト３',
        headingdescription1: 'サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１',
        headingdescription2: 'サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２',
        headingdescription3: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
      },
      {
        coverImg: './assets/img/phone-cover.jpg',
        name: 'Phone Special',
        price: 999,
        description: 'A worst phone with one of the best quality',
        heading1: 'サンプルテキスト１',
        heading2: 'サンプルテキスト２',
        heading3: 'サンプルテキスト３',
        headingdescription1: 'サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１サンプルテキスト１',
        headingdescription2: 'サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２サンプルテキスト２',
        headingdescription3: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
      }
    ];
  };

  async initDb() {
    await this.cleanDb();
    this.pushProductsToDb();
  };

  async cleanDb() {
    await Product.deleteMany({});
  };

  pushProductsToDb() {
    this.products.forEach(
      (product) => {
        const newProduct = new Product(product)
        newProduct.save()
      }
    );
  };

};

module.exports = SampleDb;

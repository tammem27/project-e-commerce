import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: 'Tammem',
      email: 'tammemayadi@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'Firas',
      email: 'firastrab@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
    products: [
      {
        
        name: 'GIGI Studios',
        category: 'sunglass',
        image: '/images/p1.jpg',
        price: 120,
        countInStock: 20,
        brand: 'GIGI Studios',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: 'GUESS',
        category: 'Shirts',
        image: '/images/p2.jpg',
        price: 230,
        countInStock: 20,
        brand: 'GUESS',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: 'Julia Becker',
        category: 'glass',
        image: '/images/p3.jpg',
        price: 160,
        countInStock: 0,
        brand: 'Julia Becker',
        rating: 4.8,
        numReviews: 17,
        description: 'high quality product',
      },
      {
        
        name: 'GIGI Studios',
        category: 'glass',
        image: '/images/p4.jpg',
        price: 78,
        countInStock: 20,
        brand: 'GIGI Studios',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
      },
      {
        
        name: 'Julia Becker',
        category: 'glass',
        image: '/images/p5.jpg',
        price: 65,
        countInStock: 20,
        brand: 'Julia Becker',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: 'Julia Becker',
        category: 'glass',
        image: '/images/p6.jpg',
        price: 139,
        countInStock: 20,
        brand: 'Julia Becker',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
    ],
  };
  export default data;
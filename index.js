const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app'

// Connection to the database "recipe-app"
mongoose.connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any documents to the database, let's delete all previous entries
    mongoose.connection.dropDatabase();
    return self.connection.dropDatabase();
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
    Recipe.create({title:"Sandwich", level:"UltraPro",  ingredients:["bacon", "bread", "turkey"], cuisine:"fastfood", dishType:"snack", image:"" , duration: 2, creator:"French", created: 2020-01-10})
    .then(() => {
      console.log("Data inserted")
      console.log("Sandwich")
    })
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
  // .then(() => {
  // Recipe.insertMany( [{title:  } ] )
  // .then((response) => {
  //     // response will be array of data inserted
  //     console.log('Data inserted')
  // })
  // .catch(() => {
  //     console.log('Something went wrong while inserting')
  // })
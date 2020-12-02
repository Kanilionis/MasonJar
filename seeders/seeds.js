let mongoose = require("mongoose");
let db = require("../models");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/shakeIt", options)

let shakeItSeed = [
  {
    theme: "Netflix & Chill",
    activities: [
      {
        name: "E.T. The Extra-Terrestrial",
        submittedBy: "Admin"
      },
      {
        name: "Jurassic Park",
        submittedBy: "Admin"
      },
      {
        name: "Easy A",
        submittedBy: "Admin"
      },
      {
        name: "ParaNorman",
        submittedBy: "Admin"
      },
      {
        name: "Moneyball",
        submittedBy: "Admin"
      },
      {
        name: "Enola Holmes",
        submittedBy: "Admin"
      },
      {
        name: "Hunt For The Wilderpeople",
        submittedBy: "Admin"
      },
      {
        name: "Fargo",
        submittedBy: "Admin"
      },
      {
        name: "Lady Bird",
        submittedBy: "Admin"
      },
      {
        name: "A Knight's Tale",
        submittedBy: "Admin"
      },
      {
        name: "The Back To The Future Trilogy",
        submittedBy: "Admin"
      },
      {
        name: "Her",
        submittedBy: "Admin"
      },
      {
        name: "Spider-Man: Into The Spider-Verse",
        submittedBy: "Admin"
      },
      {
        name: "Pride And Prejudice",
        submittedBy: "Admin"
      },
      {
        name: "Spider-Man: Into The Spider-Verse",
        submittedBy: "Admin"
      },
      {
        name: "Nightcrawler",
        submittedBy: "Admin"
      },
      {
        name: "Being John Malkovich",
        submittedBy: "Admin"
      },
      {
        name: "Uncut Gem",
        submittedBy: "Admin"
      },
      {
        name: "Django Unchained",
        submittedBy: "Admin"
      },
      {
        name: "The Social Network",
        submittedBy: "Admin"
      }
    ]
  },
  {
    theme: "Date Night In",
    activities: [
      {
        name: "Play a Board Game",
        submittedBy: "Admin"
      },
      {
        name: "Play a Card Game",
        submittedBy: "Admin"
      },
      {
        name: "Eat Take-Out by Candlelight",
        submittedBy: "Admin"
      },
      {
        name: "Make Dessert Together",
        submittedBy: "Admin"
      },
      {
        name: "Play 20 Questions",
        submittedBy: "Admin"
      },
      {
        name: "Play Truth or Dare",
        submittedBy: "Admin"
      },
      {
        name: "Create an Indoor Mini-Golf Game",
        submittedBy: "Admin"
      },
      {
        name: "Do a Puzzle Together",
        submittedBy: "Admin"
      },
      {
        name: "Have a Backyard Picnic",
        submittedBy: "Admin"
      },
      {
        name: "Make a Craft Together",
        submittedBy: "Admin"
      },
      {
        name: "Take a Bubble Bath",
        submittedBy: "Admin"
      },
      {
        name: "Have a Fireplace? Roast Some 'Mallows! (Or use the microwave)",
        submittedBy: "Admin"
      },
      {
        name: "Take Turns Playing Favorite Songs",
        submittedBy: "Admin"
      },
      {
        name: "Take a Bubble Bath",
        submittedBy: "Admin"
      },
      {
        name: "Create a Bucket List Together",
        submittedBy: "Admin"
      },
      {
        name: "Build a Fort",
        submittedBy: "Admin"
      },
      {
        name: "Create a Spa Experience",
        submittedBy: "Admin"
      },
      {
        name: "Create a Signature Cocktail",
        submittedBy: "Admin"
      },
      {
        name: "Play Would You Rather",
        submittedBy: "Admin"
      },
      {
        name: "Play Old Video Games",
        submittedBy: "Admin"
      }
    ]
  }
];

db.Themes.deleteMany({})
  .then(() => db.Themes.collection.insertMany(shakeItSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
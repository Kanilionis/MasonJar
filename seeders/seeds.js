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
        name: "Uncut Gems",
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
        name: "Have a Fireplace? Roast Some 'Mallows!",
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
  },
  {
    theme: "Weekend Warriors",
    activities: [
      {
        name: "Road trip! Make a playlist, hop in the car, and drive.",
        submittedBy: "Admin"
      },
      {
        name: "Hotel room in the city! Get dressed up and spend the weekend on the town.",
        submittedBy: "Admin"
      },
      {
        name: "Remote Airbnb getaway. Looking for some R&R? Find yourself a superhost in the countryside. ",
        submittedBy: "Admin"
      },
      {
        name: "Spa weekend",
        submittedBy: "Admin"
      },
      {
        name: "Go camping!",
        submittedBy: "Admin"
      },
      {
        name: "Ski weekend. Book a cozy chalet and hit the slopes.",
        submittedBy: "Admin"
      },
      {
        name: "Indoor waterpark. You're never too old for a waterslide.",
        submittedBy: "Admin"
      },
      {
        name: "Feeling Lucky! Hit the casinos this weekend.",
        submittedBy: "Admin"
      },
      {
        name: "Backyard camping. Bring the great outdoors to your backyard.",
        submittedBy: "Admin"
      },
      {
        name: "Pick a park! Find a national/state park near you and explore.",
        submittedBy: "Admin"
      },
      {
        name: "Bust out the bikes. See your hometown or a new city from a new perspective.",
        submittedBy: "Admin"
      },
      {
        name: "Take a tour!",
        submittedBy: "Admin"
      },
      {
        name: "Cooking classes. Italian, French, Chilean! You can expeirence the world without stepping on a plane.",
        submittedBy: "Admin"
      },
      {
        name: "Book a flight. The Friday to Sunday itenerary leaves plenty of time to experience a new place.",
        submittedBy: "Admin"
      },
      {
        name: "Go rafting. There's no problem a weekend on the water can't fix.",
        submittedBy: "Admin"
      },
      {
        name: "Hit the beach! Find you closest body of water and soak up the sun.",
        submittedBy: "Admin"
      },
      {
        name: "Bed and Breakfast",
        submittedBy: "Admin"
      },
      {
        name: "Visit family!",
        submittedBy: "Admin"
      },
      {
        name: "Visit a vineyard!",
        submittedBy: "Admin"
      },
      {
        name: "Find an orchard!",
        submittedBy: "Admin"
      }
    ]
  },
  {
    theme: "Outdoor Adventures",
    activities: [
      {
        name: "Go for a bike ride around the neighborhood",
        submittedBy: "Admin"
      },
      {
        name: "Take a hike at your nearest trail",
        submittedBy: "Admin"
      },
      {
        name: "Spend a few hours at the park",
        submittedBy: "Admin"
      },
      {
        name: "Spend a day at your nearest lake",
        submittedBy: "Admin"
      },
      {
        name: "Watch the sunset with your loved ones",
        submittedBy: "Admin"
      },
      {
        name: "Play mini golf with your friends",
        submittedBy: "Admin"
      },
      {
        name: "Take an hour long walk",
        submittedBy: "Admin"
      },
      {
        name: "Relax and sit on the patio of your favorite restaurant",
        submittedBy: "Admin"
      },
      {
        name: "Go for a bike ride around the neighborhood",
        submittedBy: "Admin"
      },
      {
        name: "Take a trip to the pool",
        submittedBy: "Admin"
      },
      {
        name: "Spend a day at the zoo",
        submittedBy: "Admin"
      },
      {
        name: "Star gaze",
        submittedBy: "Admin"
      },
      {
        name: "Take your dog on a hike.",
        submittedBy: "Admin"
      },
      {
        name: "Make a campfire!",
        submittedBy: "Admin"
      },
      {
        name: "Play tennis or pickleball at your local courts",
        submittedBy: "Admin"
      },
      {
        name: "Take a day fishing trip",
        submittedBy: "Admin"
      },
      {
        name: "Set up a picnic at your favorite outdoor spot",
        submittedBy: "Admin"
      },
      {
        name: "Take a day trip to the mountains",
        submittedBy: "Admin"
      },
      {
        name: "Go snowboarding or skiing!",
        submittedBy: "Admin"
      },
      {
        name: "Build a garden",
        submittedBy: "Admin"
      }
    ]
  },
  {
    theme: "Night On The Town",
    activities: [
      {
        name: "Sing Your Heart Out At Karaoke",
        submittedBy: "Admin"
      },
      {
        name: "Dance Like No One Is Watching",
        submittedBy: "Admin"
      },
      {
        name: "Find a Local Concert",
        submittedBy: "Admin"
      },
      {
        name: "Trivia Night! Better Study Up",
        submittedBy: "Admin"
      },
      {
        name: "Vist Local Museum",
        submittedBy: "Admin"
      },
      {
        name: "Go To The Zoo",
        submittedBy: "Admin"
      },
      {
        name: "Shop Till You Drop",
        submittedBy: "Admin"
      },
      {
        name: "Canvas and Cocktails...Emphasis on the Cocktails",
        submittedBy: "Admin"
      },
      {
        name: "Host a Murder Mystery Party",
        submittedBy: "Admin"
      },
      {
        name: "Escape Room. Better Hurry, Time is Running Out",
        submittedBy: "Admin"
      },
      {
        name: "Go Bowling",
        submittedBy: "Admin"
      },
      {
        name: "Top Golf",
        submittedBy: "Admin"
      },
      {
        name: "Beer Pedal Bar",
        submittedBy: "Admin"
      },
      {
        name: "Mini Golf",
        submittedBy: "Admin"
      },
      {
        name: "Go Karts",
        submittedBy: "Admin"
      },
      {
        name: "Arcade",
        submittedBy: "Admin"
      },
      {
        name: "Comedy Club",
        submittedBy: "Admin"
      },
      {
        name: "Rock Climbing",
        submittedBy: "Admin"
      },
      {
        name: "Casino",
        submittedBy: "Admin"
      },
      {
        name: "Axe Throwing",
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
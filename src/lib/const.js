export const questions = [
  {
    id: 1,
    text: "What kind of activity do you want to do?",
    options: [
      { label: "Indoor", nextQuestion: 2 },
      { label: "Outdoor", nextQuestion: 3 },
    ],
  },
  {
    id: 2,
    text: "Do you want to play a game or learn something?",
    options: [
      { label: "Play a game", nextQuestion: 4 },
      { label: "Learn something", nextQuestion: 5 },
    ],
  },
  {
    id: 3,
    text: "Do you want to play sports or explore nature?",
    options: [
      { label: "Sports", nextQuestion: 6 },
      { label: "Nature", nextQuestion: 7 },
    ],
  },
  {
    id: 4,
    text: "What kind of game do you prefer?",
    options: [
      { label: "Puzzle", result: "Jigsaw Puzzle" },
      { label: "Board Game", result: "Monopoly" },
    ],
  },
  {
    id: 5,
    text: "What topic are you interested in?",
    options: [
      { label: "Science", result: "Watch a Science Experiment Video" },
      { label: "History", result: "Explore a History Website" },
    ],
  },
  {
    id: 6,
    text: "Which sport do you want to play?",
    options: [
      { label: "Team Sport", result: "Play Soccer with Friends" },
      { label: "Solo Sport", result: "Practice Tennis" },
    ],
  },
  {
    id: 7,
    text: "What kind of nature activity do you prefer?",
    options: [
      { label: "Exploration", result: "Go for a Hike" },
      { label: "Relaxation", result: "Have a Picnic" },
    ],
  },
  {
    id: 8,
    text: "Do you like animals?",
    options: [
      { label: "Yes", nextQuestion: 9 },
      { label: "No", nextQuestion: 10 },
    ],
  },
  {
    id: 9,
    text: "What animal would you like to learn about?",
    options: [
      { label: "Mammals", nextQuestion: 11 },
      { label: "Reptiles", nextQuestion: 12 },
    ],
  },
  {
    id: 10,
    text: "Do you prefer video games or books?",
    options: [
      { label: "Video Games", nextQuestion: 13 },
      { label: "Books", nextQuestion: 14 },
    ],
  },
  {
    id: 11,
    text: "Which mammal interests you?",
    options: [
      { label: "Elephant", result: "Learn about Elephants" },
      { label: "Whale", result: "Learn about Whales" },
    ],
  },
  {
    id: 12,
    text: "Which reptile would you like to learn about?",
    options: [
      { label: "Snake", result: "Learn about Snakes" },
      { label: "Lizard", result: "Learn about Lizards" },
    ],
  },
  {
    id: 13,
    text: "What genre of video games do you enjoy?",
    options: [
      { label: "Adventure", result: "Play Minecraft" },
      { label: "Puzzle", result: "Play Tetris" },
    ],
  },
  {
    id: 14,
    text: "What genre of books do you like?",
    options: [
      { label: "Fantasy", result: "Read Harry Potter" },
      { label: "Mystery", result: "Read Sherlock Holmes" },
    ],
  },
  {
    id: 15,
    text: "Do you enjoy drawing?",
    options: [
      { label: "Yes", nextQuestion: 16 },
      { label: "No", nextQuestion: 17 },
    ],
  },
  {
    id: 16,
    text: "What would you like to draw?",
    options: [
      { label: "Animals", nextQuestion: 18 },
      { label: "Landscapes", nextQuestion: 19 },
    ],
  },
  {
    id: 17,
    text: "What do you prefer instead of drawing?",
    options: [
      { label: "Crafting", nextQuestion: 20 },
      { label: "Building", nextQuestion: 21 },
    ],
  },
  {
    id: 18,
    text: "Which animal would you like to draw?",
    options: [
      { label: "Dog", result: "Draw a Dog" },
      { label: "Cat", result: "Draw a Cat" },
    ],
  },
  {
    id: 19,
    text: "What type of landscape would you like to draw?",
    options: [
      { label: "Mountain", result: "Draw a Mountain" },
      { label: "Ocean", result: "Draw the Ocean" },
    ],
  },
  {
    id: 20,
    text: "What kind of crafting would you like to do?",
    options: [
      { label: "Making Jewelry", result: "Create Handmade Jewelry" },
      { label: "Origami", result: "Create Origami" },
    ],
  },
  {
    id: 21,
    text: "What would you like to build?",
    options: [
      { label: "Lego Structures", result: "Build with Legos" },
      { label: "Wooden Models", result: "Build Wooden Models" },
    ],
  },
  {
    id: 22,
    text: "Do you like music?",
    options: [
      { label: "Yes", nextQuestion: 23 },
      { label: "No", nextQuestion: 24 },
    ],
  },
  {
    id: 23,
    text: "What kind of music do you enjoy?",
    options: [
      { label: "Pop", result: "Listen to Top Pop Songs" },
      { label: "Rock", result: "Listen to Classic Rock" },
    ],
  },
  {
    id: 24,
    text: "Do you like sports?",
    options: [
      { label: "Yes", nextQuestion: 25 },
      { label: "No", nextQuestion: 26 },
    ],
  },
  {
    id: 25,
    text: "What kind of sports do you like?",
    options: [
      { label: "Team Sports", nextQuestion: 27 },
      { label: "Individual Sports", nextQuestion: 28 },
    ],
  },
  {
    id: 26,
    text: "Do you like watching TV shows?",
    options: [
      { label: "Yes", nextQuestion: 29 },
      { label: "No", nextQuestion: 30 },
    ],
  },
  {
    id: 27,
    text: "Which team sport would you like to play?",
    options: [
      { label: "Basketball", result: "Play Basketball" },
      { label: "Football", result: "Play Football" },
    ],
  },
  {
    id: 28,
    text: "Which individual sport would you like to try?",
    options: [
      { label: "Tennis", result: "Play Tennis" },
      { label: "Swimming", result: "Go Swimming" },
    ],
  },
  {
    id: 29,
    text: "What type of TV shows do you like?",
    options: [
      { label: "Comedy", result: "Watch a Comedy Show" },
      { label: "Adventure", result: "Watch an Adventure Show" },
    ],
  },
  {
    id: 30,
    text: "Do you like reading books?",
    options: [
      { label: "Yes", nextQuestion: 31 },
      { label: "No", nextQuestion: 32 },
    ],
  },
  {
    id: 31,
    text: "What kind of books do you like?",
    options: [
      { label: "Fiction", result: "Read a Fiction Book" },
      { label: "Non-Fiction", result: "Read a Non-Fiction Book" },
    ],
  },
  {
    id: 32,
    text: "Do you like technology?",
    options: [
      { label: "Yes", nextQuestion: 33 },
      { label: "No", nextQuestion: 34 },
    ],
  },
  {
    id: 33,
    text: "What technology interests you?",
    options: [
      { label: "Robotics", result: "Build a Robot" },
      { label: "Gaming", result: "Try Gaming Technology" },
    ],
  },
  {
    id: 34,
    text: "Do you like exploring nature?",
    options: [
      { label: "Yes", nextQuestion: 35 },
      { label: "No", nextQuestion: 36 },
    ],
  },
  {
    id: 35,
    text: "What outdoor activity do you enjoy?",
    options: [
      { label: "Hiking", result: "Go Hiking" },
      { label: "Birdwatching", result: "Try Birdwatching" },
    ],
  },
  {
    id: 36,
    text: "Would you like to be an astronaut?",
    options: [
      { label: "Yes", result: "Learn about Space" },
      { label: "No", result: "Explore Other Careers" },
    ],
  },
  {
    id: 37,
    text: "Do you like puzzles?",
    options: [
      { label: "Yes", nextQuestion: 38 },
      { label: "No", nextQuestion: 39 },
    ],
  },
  {
    id: 38,
    text: "What kind of puzzle do you like?",
    options: [
      { label: "Jigsaw", result: "Complete a Jigsaw Puzzle" },
      { label: "Crossword", result: "Solve a Crossword Puzzle" },
    ],
  },
  {
    id: 39,
    text: "Would you like to play a board game?",
    options: [
      { label: "Yes", nextQuestion: 40 },
      { label: "No", nextQuestion: 41 },
    ],
  },
  {
    id: 40,
    text: "Which board game would you prefer?",
    options: [
      { label: "Monopoly", result: "Play Monopoly" },
      { label: "Scrabble", result: "Play Scrabble" },
    ],
  },
  {
    id: 41,
    text: "Would you like to build a robot?",
    options: [
      { label: "Yes", result: "Start Building a Robot" },
      { label: "No", result: "Try Other Activities" },
    ],
  },
  {
    id: 42,
    text: "Do you enjoy cooking?",
    options: [
      { label: "Yes", nextQuestion: 43 },
      { label: "No", nextQuestion: 44 },
    ],
  },
  {
    id: 43,
    text: "What would you like to cook?",
    options: [
      { label: "Cookies", result: "Bake Cookies" },
      { label: "Pizza", result: "Make Pizza" },
    ],
  },
  {
    id: 44,
    text: "Would you prefer watching cooking shows?",
    options: [
      { label: "Yes", result: "Watch a Cooking Show" },
      { label: "No", result: "Explore Other Interests" },
    ],
  },
  {
    id: 45,
    text: "Would you like to start a garden?",
    options: [
      { label: "Yes", result: "Grow a Garden" },
      { label: "No", result: "Learn About Gardening" },
    ],
  },
  {
    id: 46,
    text: "Do you like solving mysteries?",
    options: [
      { label: "Yes", nextQuestion: 47 },
      { label: "No", nextQuestion: 48 },
    ],
  },
  {
    id: 47,
    text: "Would you like to be a detective?",
    options: [
      { label: "Yes", result: "Investigate a Mystery" },
      { label: "No", result: "Explore Other Career Ideas" },
    ],
  },
  {
    id: 48,
    text: "Would you like to explore space?",
    options: [
      { label: "Yes", result: "Learn About Space Exploration" },
      { label: "No", result: "Discover Earth Adventures" },
    ],
  },
  {
    id: 49,
    text: "Do you enjoy watching movies?",
    options: [
      { label: "Yes", nextQuestion: 50 },
      { label: "No", nextQuestion: 51 },
    ],
  },
  {
    id: 50,
    text: "What genre of movies do you like?",
    options: [
      { label: "Adventure", result: "Watch an Adventure Movie" },
      { label: "Action", result: "Watch an Action Movie" },
    ],
  },
];

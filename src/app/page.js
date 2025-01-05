"use client";

import {
  GlassesIcon,
  MagicWand01Icon,
  PuzzleIcon,
  RoboticIcon,
  SkullIcon,
  StarIcon,
} from "hugeicons-react";
import {
  BabyIcon,
  Bike,
  BookOpen,
  CameraIcon,
  CloudRain,
  Gamepad2,
  GamepadIcon,
  HeadphonesIcon,
  IceCream,
  LucideZapOff,
  Palette,
  Snowflake,
  Sun,
  TreeDeciduousIcon,
  Umbrella,
  Wallet2Icon,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [currentNode, setCurrentNode] = useState("start");
  const [path, setPath] = useState([]);

  const nodes = {
    start: {
      question: "Is it raining outside?",
      icon: <Umbrella className="w-16 h-16 text-blue-500 animate-bounce" />,
      options: [
        { text: "Yes", next: "indoor" },
        { text: "No", next: "outdoor" },
      ],
    },
    indoor: {
      question: "What would you like to do inside?",
      icon: <GamepadIcon className="w-16 h-16 text-purple-500 animate-pulse" />,
      options: [
        { text: "Play video games", next: "gaming" },
        { text: "Read a book", next: "reading" },
      ],
    },
    gaming: {
      question: "What type of game would you like to play?",
      icon: <Gamepad2 className="w-16 h-16 text-pink-500" />,
      options: [
        { text: "Action", next: "actionGames" },
        { text: "Adventure", next: "adventureGames" },
      ],
    },
    actionGames: {
      question: "Which character type would you choose in the action game?",
      icon: <Gamepad2 className="w-16 h-16 text-pink-500" />,
      options: [
        { text: "Hero", next: "actionHero" },
        { text: "Villain", next: "actionVillain" },
      ],
    },
    actionHero: {
      question: "Your hero is ready! Do you want to save the world?",
      icon: <Gamepad2 className="w-16 h-16 text-pink-500" />,
      options: [
        { text: "Yes", next: "resultHero" },
        { text: "No", next: "resultHero" },
      ],
    },
    actionVillain: {
      question: "You are the villain! What will be your evil plan?",
      icon: <Gamepad2 className="w-16 h-16 text-pink-500" />,
      options: [
        { text: "Take over the world", next: "resultVillain" },
        { text: "Steal the treasure", next: "resultVillain" },
      ],
    },
    adventureGames: {
      question: "What type of adventure would you prefer?",
      icon: <Gamepad2 className="w-16 h-16 text-pink-500" />,
      options: [
        { text: "Fantasy", next: "adventureFantasy" },
        { text: "Sci-fi", next: "adventureSciFi" },
      ],
    },
    adventureFantasy: {
      question: "You are in a fantasy world! What will you do?",
      icon: <Gamepad2 className="w-16 h-16 text-pink-500" />,
      options: [
        { text: "Defeat the dragon", next: "resultFantasy" },
        { text: "Find the treasure", next: "resultFantasy" },
      ],
    },
    adventureSciFi: {
      question: "Welcome to the future! What technology will you use?",
      icon: <Gamepad2 className="w-16 h-16 text-pink-500" />,
      options: [
        { text: "Spaceship", next: "resultSciFi" },
        { text: "Laser sword", next: "resultSciFi" },
      ],
    },
    puzzleGames: {
      question: "Would you like a challenging puzzle or a relaxing one?",
      icon: <Gamepad2 className="w-16 h-16 text-pink-500" />,
      options: [
        { text: "Challenging", next: "puzzleChallenging" },
        { text: "Relaxing", next: "puzzleRelaxing" },
      ],
    },
    puzzleChallenging: {
      question: "Ready to solve a tough puzzle?",
      icon: <Gamepad2 className="w-16 h-16 text-pink-500" />,
      options: [
        { text: "Yes, let's do it!", next: "resultPuzzleChallenging" },
        { text: "Maybe later", next: "resultPuzzleChallenging" },
      ],
    },
    puzzleRelaxing: {
      question: "This is a relaxing puzzle. Ready to start?",
      icon: <Gamepad2 className="w-16 h-16 text-pink-500" />,
      options: [
        { text: "Yes", next: "resultPuzzleRelaxing" },
        { text: "No, I need a break", next: "resultPuzzleRelaxing" },
      ],
    },
    reading: {
      question: "What genre do you prefer to read?",
      icon: <BookOpen className="w-16 h-16 text-green-500" />,
      options: [
        { text: "Fantasy", next: "readingFantasy" },
        { text: "Mystery", next: "readingMystery" },
      ],
    },
    readingFantasy: {
      question: "You are reading a fantasy novel! What happens next?",
      icon: <BookOpen className="w-16 h-16 text-green-500" />,
      options: [
        { text: "Fight a monster", next: "resultReadingFantasy" },
        { text: "Find a hidden spell", next: "resultReadingFantasy" },
      ],
    },
    readingMystery: {
      question: "You are reading a mystery book. What will you do?",
      icon: <BookOpen className="w-16 h-16 text-green-500" />,
      options: [
        { text: "Solve the case", next: "resultReadingMystery" },
        { text: "Find a clue", next: "resultReadingMystery" },
      ],
    },
    music: {
      question: "What genre of music would you like?",
      icon: <HeadphonesIcon className="w-16 h-16 text-teal-500" />,
      options: [
        { text: "Pop", next: "musicPop" },
        { text: "Rock", next: "musicRock" },
      ],
    },
    musicPop: {
      question: "You are listening to pop music! What's your favorite artist?",
      icon: <HeadphonesIcon className="w-16 h-16 text-teal-500" />,
      options: [
        { text: "Ariana Grande", next: "resultMusicPop" },
        { text: "Taylor Swift", next: "resultMusicPop" },
      ],
    },
    musicRock: {
      question: "You're rocking out! What's your favorite band?",
      icon: <HeadphonesIcon className="w-16 h-16 text-teal-500" />,
      options: [
        { text: "Queen", next: "resultMusicRock" },
        { text: "The Beatles", next: "resultMusicRock" },
      ],
    },
    arts: {
      question: "What would you like to create?",
      icon: <Palette className="w-16 h-16 text-yellow-500" />,
      options: [
        { text: "Painting", next: "artsPainting" },
        { text: "Sculpture", next: "artsSculpture" },
      ],
    },
    artsPainting: {
      question: "You are painting! What will you paint?",
      icon: <Palette className="w-16 h-16 text-yellow-500" />,
      options: [
        { text: "A sunset", next: "resultPainting" },
        { text: "A landscape", next: "resultPainting" },
      ],
    },
    artsSculpture: {
      question: "You are sculpting! What will you create?",
      icon: <Palette className="w-16 h-16 text-yellow-500" />,
      options: [
        { text: "A statue", next: "resultSculpture" },
        { text: "A bust", next: "resultSculpture" },
      ],
    },
    outdoor: {
      question: "Is it hot outside?",
      icon: <Sun className="w-16 h-16 text-yellow-500 animate-spin-slow" />,
      options: [
        { text: "Yes", next: "hotDay" },
        { text: "No", next: "niceDay" },
      ],
    },
    hotDay: {
      question: "What do you want to do on a hot day?",
      icon: <IceCream className="w-16 h-16 text-red-500" />,
      options: [
        { text: "Eat ice cream", next: "resultIcecream" },
        { text: "Go swimming", next: "resultSwimming" },
      ],
    },
    niceDay: {
      question: "What would you like to do on a nice day?",
      icon: <Bike className="w-16 h-16 text-orange-500" />,
      options: [
        { text: "Ride a bike", next: "bikeRide" },
        { text: "Go for a walk", next: "resultwalk" },
      ],
    },
    resultIcecream: {
      message: "Go and Swim Bro!",
      icon: <StarIcon className="w-16 h-16 text-yellow-500" />,
    },
    resultHero: {
      message: "You are a hero! Go save the world!",
      icon: <StarIcon className="w-16 h-16 text-yellow-500" />,
    },
    resultVillain: {
      message: "You are a villain with big plans for the world!",
      icon: <SkullIcon className="w-16 h-16 text-red-500" />,
    },
    resultFantasy: {
      message: "You're living a fantasy adventure!",
      icon: <LucideZapOff className="w-16 h-16 text-green-500" />,
    },
    resultSciFi: {
      message: "You're in a sci-fi adventure!",
      icon: <RoboticIcon className="w-16 h-16 text-blue-500" />,
    },
    resultPuzzleChallenging: {
      message: "You solved the tough puzzle!",
      icon: <PuzzleIcon className="w-16 h-16 text-purple-500" />,
    },
    resultPuzzleRelaxing: {
      message: "Go Enjoy a relaxing puzzle!",
      icon: <PuzzleIcon className="w-16 h-16 text-purple-500" />,
    },
    resultReadingFantasy: {
      message: "You're in a magical fantasy world!",
      icon: <MagicWand01Icon className="w-16 h-16 text-pink-500" />,
    },
    resultReadingMystery: {
      message: "You've solved the mystery!",
      icon: <GlassesIcon className="w-16 h-16 text-black" />,
    },
    resultMusicPop: {
      message: "You're a fan of pop music!",
      icon: <HeadphonesIcon className="w-16 h-16 text-teal-500" />,
    },
    resultMusicRock: {
      message: "You're rocking to some great tunes!",
      icon: <HeadphonesIcon className="w-16 h-16 text-teal-500" />,
    },
    resultPainting: {
      message: "Your painting is a masterpiece!",
      icon: <Palette className="w-16 h-16 text-yellow-500" />,
    },
    resultSculpture: {
      message: "Your sculpture is incredible!",
      icon: <Palette className="w-16 h-16 text-yellow-500" />,
    },
    resultSwimming: {
      message: "Go enjoy your swimming!",
      icon: <Palette className="w-16 h-16 text-yellow-500" />,
    },
    bikeRide: {
      message: "Go Enjoy a peaceful Bike ride outside!",
      icon: <Wallet2Icon className="w-16 h-16 text-green-500" />,
    },
    resultWalk: {
      message: "Go Enjoy a peaceful walk outside!",
      icon: <Wallet2Icon className="w-16 h-16 text-green-500" />,
    },
  };

  const handleChoice = (next) => {
    if (nodes[next]) {
      setPath([...path, currentNode]);
      setCurrentNode(next);
    } else {
      console.error("Node not found: ", next); // Log invalid node names
    }
  };

  // Function to reset the tree when the user wants to start over
  const resetTree = () => {
    setCurrentNode("start");
    setPath([]);
  };

  const currentNodeData = nodes[currentNode];

  // If the current node data is not available, show an error message
  if (!currentNodeData) {
    return (
      <div className="text-center text-xl text-red-500">
        Sorry, something went wrong. Please try again later.
      </div>
    );
  }

  // If the current node is a result node, display the result
  if (currentNodeData.message) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-300 to-purple-300 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-purple-700 mb-4 flex items-center justify-center gap-4 animate-bounce">
              <TreeDeciduousIcon className="w-12 h-12 text-green-400" />
              Let's Learn Decision Trees!
            </h1>
            <p className="text-xl text-purple-600">
              Make fun choices by answering questions, one step at a time!
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex flex-col items-center space-y-6">
              {currentNodeData.icon}
              <h2 className="text-3xl font-bold text-gray-800">
                {currentNodeData.message}
              </h2>
            </div>
            <div className="mt-6">
              <button
                onClick={resetTree}
                className="px-8 py-4 text-lg font-semibold rounded-lg bg-gradient-to-r from-pink-400 to-purple-500 text-white hover:from-pink-500 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 shadow-2xl"
              >
                Start Over
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-purple-300 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-purple-700 mb-4 flex items-center justify-center gap-4 animate-bounce">
            <TreeDeciduousIcon className="w-12 h-12 text-green-400" />
            Let's Learn Decision Trees!
          </h1>
          <p className="text-xl text-purple-600">
            Make fun choices by answering questions, one step at a time!
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex flex-col items-center space-y-6">
            {currentNodeData.icon}
            <h2 className="text-3xl font-bold text-gray-800">
              {currentNodeData.question}
            </h2>

            <div className="flex gap-6">
              {currentNodeData.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleChoice(option.next)} // Go to the next node based on user choice
                  className="px-8 py-4 text-lg font-semibold rounded-lg bg-gradient-to-r from-pink-400 to-purple-500 text-white hover:from-pink-500 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 shadow-2xl"
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6 mt-8">
          <h3 className="text-xl font-bold text-purple-700 mb-4">
            Your Journey:
          </h3>
          <div className="flex items-center gap-4 flex-wrap">
            {path.map((node, index) => (
              <div key={index} className="flex items-center">
                <div className="px-4 py-2 rounded-lg bg-purple-100 text-purple-700">
                  {nodes[node].question}
                </div>
                {index < path.length - 1 && (
                  <div className="mx-2 text-purple-500">→</div>
                )}
              </div>
            ))}
            {path.length > 0 && (
              <div className="px-4 py-2 rounded-lg bg-purple-100 text-purple-700">
                {nodes[currentNode].question}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

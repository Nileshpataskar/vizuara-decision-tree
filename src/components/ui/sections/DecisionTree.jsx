"use client";

import { questions } from "@/lib/const"; // Ensure this path is correct
import React, { useState } from "react";
import { FaSmile, FaPizzaSlice, FaIceCream, FaLeaf } from "react-icons/fa";
import { MdCake, MdReplay } from "react-icons/md";
import TreeNode from "./CustomTree"; // Ensure TreeNode is imported correctly

const DecisionTree = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [treeData, setTreeData] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOptions((prev) => [
      ...prev,
      { question: questions[currentQuestion].text, choice: option.label },
    ]);

    // If the option has a result, end the tree and show the result
    if (option.result) {
      setSelectedOptions((prev) => [
        ...prev,
        { question: "Your Decision", choice: option.result },
      ]);
      setCurrentQuestion(null); // End the question flow
      setTreeData({ name: option.result, children: [] }); // Set result node as leaf
    } else {
      setCurrentQuestion(option.nextQuestion - 1); // Update current question
      setTreeData(option.treeStructure); // Update tree structure with choices
    }
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setSelectedOptions([]);
    setTreeData(null);
  };

  return (
    <div className="min-h-screen w-full flex flex-row items-start justify-center">
      {/* Left Section - Interactive Game */}
      <div className="bg-gray-900 p-6 rounded-lg shadow-xl max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-green-700">
          Decision Tree Explorer 🌳
        </h1>

        {currentQuestion !== null && (
          <div className="text-center">
            <p className="text-xl mb-4 font-semibold">
              {questions[currentQuestion].text}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="flex flex-col items-center justify-center w-24 h-24 bg-green-800 rounded-lg shadow hover:bg-green-700 transition transform hover:scale-105"
                >
                  <span className="text-2xl mb-2">{option.icon}</span>
                  <span className="text-sm font-medium">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {currentQuestion === null && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Your Decisions:
            </h2>
            <ul className="list-disc list-inside mb-4 text-left text-lg">
              {selectedOptions.map((option, index) => (
                <li key={index}>
                  <span className="font-semibold">{option.question}</span>:{" "}
                  {option.choice}
                </li>
              ))}
            </ul>
            <button
              onClick={restartGame}
              className="px-6 py-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-105 flex items-center gap-2"
            >
              <MdReplay className="text-xl" />
              Restart Game
            </button>
          </div>
        )}
      </div>

      {/* Right Section - Tree Visualization */}
      <div className="flex-1 p-6" style={{ height: "600px" }}>
        <h2 className="text-2xl font-bold mb-4 text-center text-green-700">
          Decision Tree Visualization 🌲
        </h2>
        {treeData && (
          <div className="bg-gray-800 p-4 rounded-lg shadow-xl">
            <TreeNode node={treeData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DecisionTree;

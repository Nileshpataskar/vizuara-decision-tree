import { GitBranch, Leaf, SplitSquareHorizontal, TreeDeciduous, TreePine } from "lucide-react";


export const questions = [
  {
    text: "What is a Decision Tree?",
    explanation:
      "Let's start with the basics! Think about how you make choices...",
    icon: <TreeDeciduous className="w-12 h-12 text-green-500" />,
    options: [
      {
        text: "A flowchart-like structure that helps make decisions",
        correct: true,
      },
      {
        text: "A type of plant that grows decisions",
        correct: false,
      },
    ],
  },
  {
    text: "How does a Decision Tree split data?",
    explanation: "Think about how we organize things into different groups...",
    icon: <SplitSquareHorizontal className="w-12 h-12 text-blue-500" />,
    options: [
      {
        text: "By asking yes/no questions",
        correct: true,
      },
      {
        text: "By random guessing",
        correct: false,
      },
    ],
  },
  {
    text: "What's at the top of a Decision Tree?",
    explanation: "Every tree starts somewhere...",
    icon: <TreePine className="w-12 h-12 text-emerald-500" />,
    options: [
      {
        text: "The Root Node - our first decision point",
        correct: true,
      },
      {
        text: "The Leaf Node - where we get answers",
        correct: false,
      },
    ],
  },
  {
    text: "What happens at each split in a Decision Tree?",
    explanation: "When we reach a decision point...",
    icon: <GitBranch className="w-12 h-12 text-purple-500" />,
    options: [
      {
        text: "We ask a question and follow different paths based on the answer",
        correct: true,
      },
      {
        text: "We randomly choose a direction",
        correct: false,
      },
    ],
  },
  {
    text: "What are Leaf Nodes in a Decision Tree?",
    explanation: "At the end of each path...",
    icon: <Leaf className="w-12 h-12 text-green-600" />,
    options: [
      {
        text: "The final answers or decisions at the end of branches",
        correct: true,
      },
      {
        text: "The starting points of new trees",
        correct: false,
      },
    ],
  },
];

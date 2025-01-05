import { create } from "zustand";
import { questions } from "./questions";

export const useQuizStore = create((set) => ({
  currentQuestion: 1,
  correctAnswers: 0,
  isComplete: false,
  totalQuestions: questions.length,
  answerQuestion: (correct) =>
    set((state) => {
      const nextQuestion = state.currentQuestion + 1;
      const newCorrectAnswers = correct
        ? state.correctAnswers + 1
        : state.correctAnswers;

      return {
        currentQuestion: nextQuestion,
        correctAnswers: newCorrectAnswers,
        isComplete: nextQuestion > questions.length,
      };
    }),
}));

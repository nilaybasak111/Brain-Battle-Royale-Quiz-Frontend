import React from "react";

export interface QuestionType {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface UserContextType {
  username: string;
  setUsername: (name: string) => void;
  quizData: QuestionType[];
  setQuizData: (data: QuestionType[]) => void;
}

const UserContext = React.createContext<UserContextType>({
  username: "",
  setUsername: () => {},
  quizData: [],
  setQuizData: () => {},
});
console.log("This is UserContext", UserContext);
export default UserContext;

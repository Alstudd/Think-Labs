"use client";
import { cn } from "@/lib/utils";
import { Video, Quest } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import axios from "axios";
import { getQuestionsFromTranscript } from "@/lib/youtube";
import { get } from "http";

// type Props = {
//   video: Video & {
//     quests: Quest[];
//   };
// };

const QuizCards = ({ video }) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [questionState, setQuestionState] = useState<
  Record<string, boolean | null>
  >({});
  const [myQuestions, setMyQuestions] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      if(video.transcript != "Subtitles Disabled"){
        const res = await axios.post("/api/chapter/getInfo", { vScript: video.transcript, vName: video.name });
        console.log(res.data)
        setMyQuestions(res.data.questions);
      }
    };
    if(video){
      fetchData();
    }
  },[video])

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Generate random index between 0 and i
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements at indices i and j
    }
    return array;
  }
  const checkAnswer = React.useCallback(() => {
    const newQuestionState = { ...questionState };
    myQuestions.forEach((question) => {
      const user_answer = answers[question.id];
      if (!user_answer) return;
      if (user_answer === question.answer) {
        newQuestionState[question.id] = true;
      } else {
        newQuestionState[question.id] = false;
      }
      setQuestionState(newQuestionState);
    });
  }, [answers, questionState, myQuestions]);
  return (
    <div className="flex-[1] mt-16 ml-8">
      <h1 className="text-2xl font-bold">Concept Check</h1>
      <div className="mt-2">
        {myQuestions.map((question) => {
          let options = [question.option1, question.answer, question.option2, question.option3];
          // options = shuffleArray(options);
          return (
            <div
              key={question.id}
              className={cn("p-3 mt-4 border border-secondary rounded-lg", {
                "bg-green-700": questionState[question.id] === true,
                "bg-red-700": questionState[question.id] === false,
                "bg-secondary": questionState[question.id] === null,
              })}
            >
              <h1 className="text-lg font-semibold">{question.question}</h1>
              <div className="mt-2">
                <RadioGroup
                  onValueChange={(e) => {
                    setAnswers((prev) => {
                      return {
                        ...prev,
                        [question.id]: e,
                      };
                    });
                  }}
                >
                  {options.map((option, index) => {
                    return (
                      <div className="flex items-center space-x-2" key={index}>
                        <RadioGroupItem
                          value={option}
                          id={question.id + index.toString()}
                        />
                        <Label htmlFor={question.id + index.toString()}>
                          {option}
                        </Label>
                      </div>
                    );
                  })}
                </RadioGroup>
              </div>
            </div>
          );
        })}
      </div>
      <Button className="w-full mt-2" size="lg" onClick={checkAnswer}>
        Check Answer
        <ChevronRight className="w-4 h-4 ml-1" />
      </Button>
    </div>
  );
};

export default QuizCards;
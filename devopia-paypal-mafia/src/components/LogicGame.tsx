"use client";
import { MessageCircleX, PartyPopper } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LogicGame = () => {
  const Arr = [
    {
      name: "x",
      img: "/apple.png",
      value: 5,
    },
    {
      name: "y",
      img: "/banana.png",
      value: 8,
    },
    {
      name: "z",
      img: "/mango.png",
      value: 3,
    },
    {
      name: "w",
      img: "/pear.png",
      value: 1,
    },
  ];

  interface Fruit {
    name: string;
    img: string;
    value: number;
  }

  const getRandomElements = (arr: Fruit[], count: number): Fruit[] => {
    const result: Fruit[] = [];
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      result.push(arr[randomIndex]);
    }
    return result;
  };

  const [quesDone, setQuesDone] = useState(true);
  const [newRandomElements, setNewRandomElements] = useState<Fruit[]>([]);
  const [sum, setSum] = useState<number>(0);
  const [calcSum, setCalcSum] = useState<number | null>(null);

  const GenQuestion = () => {
    const randomElements = getRandomElements(Arr, 3);
    setNewRandomElements(randomElements);
    let total = 0;
    randomElements.forEach((element) => {
      total += element.value;
    });
    setSum(total);
    setQuesDone(false);
  };

  const AnsQuestion = (e: any) => {
    e.preventDefault();
    const id = toast.loading("Please wait...", {
        theme: "dark",
      });
    if (sum == calcSum) {
        toast.update(id, {
            render: "Congratulations !!",
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            isLoading: false,
            icon: ({ theme, type }) => <PartyPopper className="text-white" />,
          });
    } else {
        toast.update(id, {
            render: "Better Luck Next Time",
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            isLoading: false,
            icon: ({ theme, type }) => <MessageCircleX className="text-white" />,
          });
    }
    setQuesDone(true);
    setCalcSum(null);
  };

  return (
    <div className="bg-[#FFFBE0]">
        <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="w-[80%] h-screen mx-auto py-20">
        <h1 className="text-2xl font-bold mb-3 text-black">Chart System</h1>
        <div className="grid grid-cols-4 gap-8">
          {Arr.map((values, i) => {
            return (
              <div key={i}>
                <div className="flex ">
                  <Image
                    height={70}
                    width={70}
                    src={values.img}
                    alt={values.name}
                  />
                  <Image
                    height={70}
                    width={70}
                    src="/equal.png"
                    alt="egual"
                    className="my-auto"
                  />
                  <h1 className="text-black font-bold text-6xl my-auto">
                    {values.value}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          {quesDone ? (
            <button
              onClick={GenQuestion}
              className="px-5 py-2 rounded-md text-black border my-7 w-[30%] border-black hover:border-b-4 hover:bg-white hover:font-semibold hover:border-l-4 hover:rounded-lg hover:translate-x-1 hover:-translate-y-1"
            >
              Generate Questions
            </button>
          ) : (
            <>
              <h1 className="text-2xl font-bold mt-16 mb-3 text-black">
                Question
              </h1>
              <div className="w-[80%] mx-auto grid grid-cols-4">
                {newRandomElements.map((values, i) => {
                  return (
                    <div key={i}>
                      <div className="flex ">
                        <Image
                          height={70}
                          width={70}
                          src={values.img}
                          alt={values.name}
                        />
                        {i === 2 ? (
                          <Image
                            height={70}
                            width={70}
                            src="/equal.png"
                            alt="equal"
                            className="ml-5 my-auto"
                          />
                        ) : (
                          <Image
                            height={70}
                            width={70}
                            src="/plus.png"
                            alt="plus"
                            className="ml-5 my-auto"
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
                <form onSubmit={AnsQuestion} className="w-[200px]">
                  <input
                    value={calcSum ?? ""}
                    onChange={(e: any) => setCalcSum(e.target.value)}
                    className="text-black border-b bg-transparent border-0 border-yellow-700 focus:ring-0 w-full font-bold text-6xl my-auto"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-md text-black border my-5 border-black hover:border-b-4 hover:bg-white hover:font-semibold hover:border-l-4 hover:rounded-lg hover:translate-x-1 hover:-translate-y-1"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LogicGame;

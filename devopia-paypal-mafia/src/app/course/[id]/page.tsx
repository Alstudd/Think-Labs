"use client";
import CourseSideBar from "@/components/CourseSideBar";
import MainVideoSummary from "@/components/MainVideoSummary";
import Navbar from "@/components/Navbar";
import QuizCards from "@/components/QuizCards";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function CoursePage({ params }) {
  const [data, setData] = useState([]);
  const [currUnit, setCurrUnit] = useState(0);
  const [allUnits, setAllUnits] = useState([]);
  const id = params.id;
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post("/api/getCourses", { courseId: id });
        setData(res.data);
        let units = [];
        res.data.forEach((element) => {
          units = units.concat(element.children);
        });
        setAllUnits(units);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [id]);

  const changeCurrUnit = (unitId) => {
    const index = allUnits.findIndex((unit) => unit.id === unitId);
    if (index !== -1) {
      setCurrUnit(index);
    }
  };

  return (
    <div>
      {/* <Navbar /> */}
      <CourseSideBar
        data={data}
        currentChapterId={allUnits[currUnit]?.id}
        changeCurrUnit={changeCurrUnit}
      />
      <div>
        <div className="ml-[400px] px-8">
          <div className="flex">
            {data.length > 0 && allUnits.length > 0 && (
              <MainVideoSummary video={allUnits[currUnit]} currUnit={currUnit} />
            )}
            <QuizCards video={allUnits[currUnit]} />
          </div>

          <div className="flex-[1] h-[1px] mt-4 text-gray-500 bg-gray-500" />
          <div className="flex pb-8">
            <div
              onClick={() =>
                setCurrUnit((currUnit - 1 + allUnits.length) % allUnits.length)
              }
              className="flex mt-4 mr-auto w-fit cursor-pointer"
            >
              <div className="flex items-center">
                <ChevronLeft className="w-6 h-6 mr-1" />
                <div className="flex flex-col items-start">
                  <span className="text-sm text-secondary-foreground/60">
                    Previous
                  </span>
                  <span className="text-xl font-bold">
                    {allUnits[(currUnit - 1 + allUnits.length) % allUnits.length]?.name}
                  </span>
                </div>
              </div>
            </div>

            <div
              onClick={() =>
                setCurrUnit((currUnit + 1) % allUnits.length)
              }
              className="flex mt-4 ml-auto w-fit cursor-pointer"
            >
              <div className="flex items-center">
                <div className="flex flex-col items-start">
                  <span className="text-sm text-secondary-foreground/60">
                    Next
                  </span>
                  <span className="text-xl font-bold">
                    {allUnits[(currUnit + 1) % allUnits.length]?.name}
                  </span>
                </div>
                <ChevronRight className="w-6 h-6 ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

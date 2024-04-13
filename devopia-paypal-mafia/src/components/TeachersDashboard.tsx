"use client";
import React from "react";
import {
    BarChart,
  BarList,
  Card,
  CategoryBar,
  LineChart,
  ProgressCircle,
  Tracker,
} from "@tremor/react";
import Image from "next/image";

const TeachersDashboard = () => {
  const chartdata = [
    {
      date: "Jan 22",
      "Videos Per Day": 7,
    },
    {
      date: "Feb 22",
      "Videos Per Day": 3,
    },
    {
      date: "Mar 22",
      "Videos Per Day": 9,
    },
    {
      date: "Apr 22",
      "Videos Per Day": 8,
    },
    {
      date: "May 22",
      "Videos Per Day": 2,
    },
    {
      date: "Jun 22",
      "Videos Per Day": 4,
    },
  ];

  const datahero = [
    { name: "Cognitive", value: 46 },
    { name: "Verbal", value: 31 },
    { name: "Vocabulary", value: 4 },
    { name: "Knowledge", value: 10 },
  ];

  const dataFormatter = (number: number) =>
    `${Intl.NumberFormat("us").format(number).toString()}`;
  return (
    <div>
      <div className="pt-20 text-black w-[80%] mx-auto py-10">
        Teacher / Parent Dashboard
        <div className="my-5">
          <Card className="mb-7 flex items-center">
            <div className="flex-shrink-0">
              <Image
                src="/eddieLogo.png"
                width={40}
                height={40}
                className="rounded-full"
                alt="Image"
              />
            </div>
            <div className="flex-1 min-w-0 mx-5">
              <p className="text-sm font-medium text-gray-900 truncate ">
                Student Name
              </p>
              <p className="text-sm text-gray-500 truncate">Student Id</p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900">
              <div>
                {/* Use the split values inside JSX */}
                <div>Standard</div>
                <div className="text-xs font-light">Age</div>
              </div>
            </div>
          </Card>
        </div>

        <div className="flex flex-row gap-3">
          <Image
            src="/eddieSmile.png"
            className="p-3"
            height={120}
            width={120}
            alt="Eddie "
          />
          <div className="py-2 flex items-start gap-2.5">
            {/* <Image
              src="/eddieLogo.png"
              width={40}
              height={40}
              className="rounded-full"
              alt="Image"
            /> */}
            <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-sm font-semibold text-gray-900 ">
                  Eddie, Your Buddy
                </span>
                <span className="text-sm font-normal text-gray-500">Now</span>
              </div>
              <p className="text-sm font-normal py-2.5 text-gray-900 ">
                Your Doing Great!! Keep Working like this and your&apos;e nearly
                there. <span className="font-bold">"Ribbit"!</span>
              </p>
              {/* <span className="text-sm font-normal text-gray-500">
                Delivered
              </span> */}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 my-2">
            <div className="space-y-3">
              <Card className="mx-auto max-w-sm">
                <div className="flex justify-start space-x-5 items-center">
                  <ProgressCircle value={75} size="md">
                    <span className="text-xs font-medium text-slate-700">
                      75%
                    </span>
                  </ProgressCircle>
                  <div>
                    <p className="text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
                      No. of Courses
                    </p>
                    <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                      Child&apos;s course completion ratio
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-3">
              <Card className="mx-auto max-w-sm">
                <div className="flex justify-start space-x-5 items-center">
                  <ProgressCircle value={75} size="md">
                    <span className="text-xs font-medium text-slate-700">
                      75%
                    </span>
                  </ProgressCircle>
                  <div>
                    <p className="text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
                      No. of Tests
                    </p>
                    <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                    Child&apos;s test Attempts
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div className="my-5">
          Student&apos;s Core Performance
          <div className="grid grid-cols-2 gap-3 my-2">
            <div className="space-y-3">
              <div className="flex justify-center gap-3">
                <Card className="">
                  <p className="text-start mb-5 font-mono text-sm text-slate-500">
                    Performance Ratio
                  </p>
                  <CategoryBar
                    values={[40, 30, 20, 10]}
                    colors={["rose", "orange", "yellow", "emerald"]}
                    markerValue={62}
                  />
                </Card>
              </div>
              <Card>
                <p className="text-start mb-4 font-mono text-sm text-slate-500">
                    Strength
                  </p>
                <BarList
                  data={datahero}
                  sortOrder="ascending"
                  className="mx-auto"
                />
              </Card>
            </div>

            <Card>
              <BarChart
                className="h-80"
                data={chartdata}
                index="date"
                categories={["Videos Per Day"]}
                colors={["emerald"]}
                valueFormatter={dataFormatter}
                yAxisWidth={60}
                onValueChange={(v) => console.log(v)}
              />
            </Card>
          </div>
        </div>

        <div className="my-5">
          Student&apos;s Recent Performance
          <div className="grid grid-cols-3 gap-3 my-2">
            <div className="space-y-3">
              <Card className="mx-auto max-w-sm">
                <div className="flex justify-start space-x-5 items-center">
                  <ProgressCircle value={80} size="md">
                    <span className="text-xs font-medium text-slate-700">
                      80%
                    </span>
                  </ProgressCircle>
                  <div>
                    <p className="text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
                      Countries 
                    </p>
                    <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                      Test on Countries of the world
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-3">
              <Card className="mx-auto max-w-sm">
                <div className="flex justify-start space-x-5 items-center">
                  <ProgressCircle value={30} size="md">
                    <span className="text-xs font-medium text-slate-700">
                      30%
                    </span>
                  </ProgressCircle>
                  <div>
                    <p className="text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
                      BlockChain
                    </p>
                    <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                      Test on Decentralized Control
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-3">
              <Card className="mx-auto max-w-sm">
                <div className="flex justify-start space-x-5 items-center">
                  <ProgressCircle value={65} size="md">
                    <span className="text-xs font-medium text-slate-700">
                      65%
                    </span>
                  </ProgressCircle>
                  <div>
                    <p className="text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
                      History
                    </p>
                    <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                      Test on Harappan Civilization
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* <div className="my-7">
          Student Daily Usage
          <div className="grid grid-cols-3 gap-3 my-2">
            <Card className="space-y-3">
              <Tracker
                data={[
                  { color: "emerald", tooltip: "Tracker Info" },
                  { color: "emerald", tooltip: "Tracker Info" },
                  { color: "emerald", tooltip: "Tracker Info" },
                  { color: "emerald", tooltip: "Tracker Info" },
                  { color: "red", tooltip: "Tracker Info" },
                  { color: "emerald", tooltip: "Tracker Info" },
                  { color: "emerald", tooltip: "Tracker Info" },
                  { color: "emerald", tooltip: "Tracker Info" },
                  { color: "emerald", tooltip: "Tracker Info" },
                  { color: "red", tooltip: "Tracker Info" },
                  { color: "emerald", tooltip: "Tracker Info" },
                  { color: "emerald", tooltip: "Tracker Info" },
                  { color: "emerald", tooltip: "Tracker Info" },
                  { color: "emerald", tooltip: "Tracker Info" },
                  { color: "emerald", tooltip: "Tracker Info" },
                  { color: "red", tooltip: "Tracker Info" },
                  { color: "red", tooltip: "Tracker Info" },
                  { color: "red", tooltip: "Tracker Info" },
                  { color: "emerald", tooltip: "Tracker Info" },
                  { color: "emerald", tooltip: "Tracker Info" },
                  { color: "emerald", tooltip: "Tracker Info" },
                ]}
              />
            </Card>

            <div className="grid grid-cols-2 gap-3">
            <Card className="mx-auto my-auto h-full p-4">
              <div className="mx-2 ">
                  <p className=" text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                    Streaks
                  </p>
                  <div className="mb-0 flex flex-row justify-between ">
                  <p className="text-xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
                    10
                  </p>
                  <Flame className="text-orange-600"/>
                  </div>
              </div>
            </Card>
            </div>

          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TeachersDashboard;

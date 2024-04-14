import React from "react";

interface AlertProps {
  moveCount: number;
  onTryAgain: () => void;
}

function Alert(props: AlertProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-gray-800 rounded-lg text-white text-center p-8">
        <p className="text-4xl mb-6">
          Win With <span className="text-orange-500">{props.moveCount}</span>{" "}
          Move!
        </p>
        <p
          className="text-xl cursor-pointer text-yellow-500 hover:text-yellow-400"
          onClick={props.onTryAgain}
        >
          Try Again?
        </p>
      </div>
    </div>
  );
}

export default Alert;

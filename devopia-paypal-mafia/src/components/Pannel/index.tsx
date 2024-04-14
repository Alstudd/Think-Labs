import React from "react";

interface PannelProps {
  moveCount: number;
}

function Pannel(props: PannelProps) {
  return (
    <div className="bg-purple-800 text-white h-16 w-full flex items-center justify-center">
      <span className="text-lg">{props.moveCount}</span>
    </div>
  );
}

export default Pannel;

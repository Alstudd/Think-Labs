import React from "react";

interface BlockProps {
  value?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}

function Block(props: BlockProps) {
  return (
    <div
      className={`bg-teal-500 text-white font-light text-8xl rounded-lg cursor-pointer outline-none flex justify-center items-center ${
        props.value === " " || props.value === "" ? "bg-transparent" : ""
      }`}
      style={{
        width: props.width,
        height: props.height,
      }}
      onClick={props.onClick}
    >
      {props.value}
    </div>
  );
}

export default Block;

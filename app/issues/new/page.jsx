"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor").then((mod) => mod.default),
  { ssr: false }
);

function NewIssuePage() {
  const [value, setValue] = useState("**Hello world!!!**");

  return (
    <div data-color-mode="light" className="max-w-xl mx-4 space-y-3">
      <input
        className="w-full rounded-l-lg p-4 border-2 border-blue-200 text-gray-800 shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        placeholder="Title"
      />
      <div className="shadow-xl">
        <MDEditor
          value={value}
          onChange={(newValue) => setValue(newValue || "")}
        />
      </div>
      <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow-xl">
        <div className="absolute inset-0 w-3 bg-blue-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span className="relative text-black group-hover:text-white">
          Submit
        </span>
      </button>
    </div>
  );
}

export default NewIssuePage;

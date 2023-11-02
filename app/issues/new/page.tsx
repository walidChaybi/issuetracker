"use client ";

import React from "react";
import { TextArea, TextField } from "@radix-ui/themes";

function NewIssuePage() {
  return (
    <div className="max-w-xl mx-4 space-y-3">
      <input
        className="w-full rounded-l-lg p-4 border-2 border-amber-200 text-gray-800  bg-white"
        placeholder="Title"
      />
      <textarea
        spellCheck={false}
        id="chat"
        className="block p-2.5 w-full text-lg text-gray-900 bg-white rounded-lg border-2 border-amber-200"
        placeholder="Your message..."
      ></textarea>
      <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
        <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span className="relative text-black group-hover:text-white">
          Submit
        </span>
      </button>
    </div>
  );
}

export default NewIssuePage;

"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
import { Callout } from "@radix-ui/themes";
import Spinner from "../components/Spinner";

interface IssueForm {
  title: string;
  description: string;
}

function NewIssuePage() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<IssueForm>();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div data-color-mode="light" className="max-w-xl mx-4 space-y-3">
      {error && (
        <Callout.Root color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        onSubmit={handleSubmit(async (data) => {
          try {
            setIsSubmitting(true);
            await axios.post("/api/issues", data);
            router.push("/issues");
          } catch (error) {
            setIsSubmitting(false);
            setError("An unexpected error occurred.");
          }
        })}
        className="max-w-xl  space-y-3"
      >
        <input
          className="w-full rounded-l-lg p-4 border-2 border-blue-200 text-gray-800 shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          placeholder="Title"
          {...register("title")}
        />
        <textarea
          {...register("description")}
          className="shadow-xl w-full rounded-l-lg p-4 border-2 border-blue-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        ></textarea>
        {/* MD Editor */}
        <button
          disabled={isSubmitting}
          className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow-xl"
        >
          <div className="absolute inset-0 w-3 bg-blue-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span className="relative text-black group-hover:text-white">
            Submit
          </span>
          {isSubmitting && <Spinner />}
        </button>
      </form>
    </div>
  );
}

export default NewIssuePage;

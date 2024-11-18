import React from "react";
import { Link } from "react-router-dom";

const AddExerciseSegment = () => {
  return (
    <div>
      <div className="m-2 text-red-700">
        <Link to="/exercisesegment">
          <strong>&#8592; Back</strong>
        </Link>
        <hr />
      </div>
      <div className="pl-10 pt-4 pr-10">
        <form class="w-full max-w-lg ">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-purple-500 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Segment Number
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="number"
                placeholder="Type something..."
              />
              <label
                class="block uppercase tracking-wide text-purple-500text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Audio File
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="file"
                placeholder="Type something..."
              />
              <label
                class="block uppercase tracking-wide text-purple-500 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Transcript
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="file"
                placeholder="Type something..."
              />
              <label
                class="block uppercase tracking-wide text-purple-500 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Created at
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="datetime-local"
                placeholder="Type something..."
              />
              <label
                class="block uppercase tracking-wide text-purple-500 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Updated at
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="datetime-local"
                placeholder="Type something..."
              />
            </div>
            <Link to="">
            <button
              type="button"
              class="mt-6 ml-6 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Add New Exercise Segment
            </button>
          </Link>
          </div>
        </form><hr/>
      </div>
    </div>
  );
};

export default AddExerciseSegment;

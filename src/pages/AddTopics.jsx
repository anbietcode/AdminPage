import React from "react";
import { Link } from "react-router-dom";

const AddTopics = () => {
  return (
    <div>
      <div className="m-2 text-red-700">
        <Link to="/topic">
          <strong>&#8592; Back</strong>
        </Link>
      </div>
      <hr className="shadow-lg" />
      <div className="pl-10 pt-4 pr-10">
        <form class="w-full max-w-lg ">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-purple-500 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Type something..."
              />
              <label
                class="block uppercase tracking-wide text-purple-500 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Level
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Type something..."
              />

              <label
                class="block uppercase tracking-wide text-purple-500 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Description
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
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
                class="appearance-none block w-full bg-gray-200 text-grey-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="datetime-local"
                placeholder="Type something..."
              />
              <label
                class="block uppercase tracking-wide text-purple-500 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Topic Avatar
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="file"
                placeholder="Type something..."
              />
            </div>
            <Link to="">
              <button
                type="button"
                class=" mt-6 ml-6 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
                Add New Topics
              </button>
            </Link>
          </div>
        </form>
        <hr />
      </div>
    </div>
  );
};

export default AddTopics;

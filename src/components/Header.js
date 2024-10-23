"use client";

import React from "react";
import Link from "next/link";
import displayNewThreadForm from "@/helpers/displayNewThreadForm";
import submitPost from "@/helpers/submitPost";

const formId = "form-id";

function Header() {
  return (
    <>
      {/* Start a new thread logic */}
      <div className="flex justify-center pt-5 select-none">
        <p>[</p>
        <p
          className="text-blue-800 cursor-pointer mb-4"
          onClick={() => displayNewThreadForm(formId)}
        >
          Start a New Thread
        </p>
        <p>]</p>
      </div>
      <form
        action={submitPost}
        id={formId}
        className="flex flex-col gap-2 font-black hidden"
      >
        {/* <input type="text" placeholder="Username" className="m-52 mt-0 mb-0" /> */}
        <input
          type="text"
          name="title"
          placeholder="Post Title"
          className="m-52 mt-0 mb-0 p-3"
        />
        <input
          type="text"
          name="description"
          placeholder="Post description"
          className="m-52 mb-0 mt-0 h-32 p-3"
        />
        <button
          type="submit"
          className="bg-[#D5D9F4] m-4 shadow-[0_3px_3px_rgba(0,0,0,0.24)] p-2 m-auto hover:shadow-[]"
        >
          Submit
        </button>
      </form>
      {/* Catalog */}
      <div className="flex pl-6">
        <p>[</p>
        <Link href="/" className="text-blue-800">
          Catalog
        </Link>
        <p>]</p>
      </div>
    </>
  );
}

export default Header;

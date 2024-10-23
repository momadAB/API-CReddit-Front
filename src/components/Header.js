"use client";

import React from "react";
import Link from "next/link";
import displayNewThreadForm from "@/helpers/displayNewThreadForm";

const formId = "form-id";

function Header() {
  return (
    <>
      {/* Start a new thread logic */}
      <div className="flex justify-center pt-5">
        <p>[</p>
        <p
          className="text-blue-300 cursor-pointer"
          onClick={() => displayNewThreadForm(formId)}
        >
          Start a New Thread
        </p>
        <p>]</p>
      </div>
      <form action="" id={formId} className="flex flex-col gap-2 font-black">
        <input type="text" defaultValue="Username" className="m-52 mt-0 mb-0" />
        <input
          type="text"
          defaultValue="Post Title"
          className="m-52 mt-0 mb-0"
        />
        <input
          type="text"
          defaultValue="Post text"
          className="m-52 mb-0 mt-0 h-32"
        />
      </form>
      {/* Catalog */}
      <div className="flex pl-6">
        <p>[</p>
        <Link href="/" className="text-blue-300">
          Catalog
        </Link>
        <p>]</p>
      </div>
    </>
  );
}

export default Header;

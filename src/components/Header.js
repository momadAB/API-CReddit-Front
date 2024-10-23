import React from "react";
import Link from "next/link";

function Header() {
  return (
    <>
      <div className="flex justify-center pt-5">
        <p>[</p>
        <p
        // TODO: onClick={}
        >
          Start a New Thread
        </p>
        <p>]</p>
      </div>
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

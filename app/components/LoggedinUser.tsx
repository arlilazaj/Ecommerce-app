"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

const LoggedinUser = () => {
  const pathname = usePathname();
  console.log(pathname);
  const [user, setUser] = useState<string | null>();

  const clear = () => {
    localStorage.clear();
    window.location.reload();
  };
  useEffect(() => {
    console.log("entered");
    setUser(localStorage.getItem("userId"));
  }, [pathname]);

  return (
    <div className="flex items-center space-x-2">
      {user ? (
        <button onClick={() => clear()}>Logout</button>
      ) : (
        <>
          <Link href={"/auth/Login"}>Login</Link>{" "}
          <span className="text-slate-400">or</span>
          <Link href={"/auth/Register"}>Register</Link>
        </>
      )}
    </div>
  );
};

export default LoggedinUser;

"use client";

import { logout } from "@/actions/logout";

import { useCurrentUser } from "@/hooks/use-current-user";
import { useSession, signIn, signOut } from "next-auth/react";

// import { auth, signOut } from "@/auth";

const SettingPage = () => {
  // const session = useSession()
  const user = useCurrentUser();

  const onClick = () => {
    // logout() //Using server action to logout
    signOut();
  };

  return (
    <div className="glassmophism p-10 rounded-xl ">
      {/* {JSON.stringify(user)} */}

      <form>
        <button type="submit" onClick={onClick}>
          Sign Out
        </button>
      </form>
    </div>
  );
};

export default SettingPage;

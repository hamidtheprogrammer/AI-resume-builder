"use client"

import { signOut } from "next-auth/react";


const SignOutButton = () => {
    
  return (
    <button className="text-xs cursor-pointer" onClick={()=>signOut({callbackUrl:"/"})}>
      Sign out
    </button>
  )
}

export default SignOutButton

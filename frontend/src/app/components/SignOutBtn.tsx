import { signOut } from "next-auth/react";
import { FaSignOutAlt } from "react-icons/fa";

export const SignOutBtn = () => {
    return(
        <button className="flex rounded-md mr-2 text-black u gap-1 items-center
         py-3 px-3 bg-orange-200 transition-colors duration-500 hover:bg-blue-400
        hover:text-white midtw1:text-[12px]" onClick={() => signOut()}>Sair <FaSignOutAlt/></button>
    )
}
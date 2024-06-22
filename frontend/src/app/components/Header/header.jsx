'use client'
import Image from "next/image";
import DiscoveryLogo from "../../../../public/assets/img/DiscoveryLogoHeader.png";
import "./header.css";
import Link from "next/link";
import { GiHamburgerMenu } from 'react-icons/gi';
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import DropDown from "../Dropdown/DropDown";

export default function Header() {
    const [isActive, setIsActive] = useState(false);

    const sideList = [
        {
          title: 'Home',
          path: '/',
        },
        {
          title: 'Tipos',
          path: '#tipos',
        },
        {
          title: 'Sobre',
          path: '/about',
        },
      ];

  
    const toggleMenu = () => {
        setIsActive(!isActive);
    }
  
    useEffect(() => {
        const handleEscKeyPress = (e) => {
            if (e.keycode === 27 && isActive) {
                setIsActive(false);
            }
        };
  
        if (isActive) {
            document.body.style.setProperty("overflow", "hidden");
        }else {
            document.body.style.setProperty("overflow", "auto");
        }
  
        document.addEventListener("keydown", handleEscKeyPress);
        
        return () => {
            document.removeEventListener("keydown", handleEscKeyPress);
        };
    }, [isActive]);
  
    return(
      <div className="h-[100px]">
        <header className="h-[100px] w-full lowone:h-[85px] fixed z-[1000]">
            <nav className="justify-between flex">
            <Link href="/"><Image className="midtwo4:w-[140px] lowtwo:w-[110px]" src={DiscoveryLogo} alt="Discovery Logo"/></Link>
                <ul className="flex flex-row gap-16 mt-8 majortwo4:hidden">
                    <Link href="/"><li>Home</li></Link>
                    <DropDown/>
                    <Link href="/about"><li>Sobre</li></Link>
                    <Link href="#tipos"><li>Tipos</li></Link>
                </ul>
                <button aria-label="Open Menu" onClick={toggleMenu} className="btn-hamburguer hidden self-center majortwo4:flex">
                <GiHamburgerMenu size={60} className="text-green-400" />
</button>
                <Link href="/testpage"><button className="rounded bg-green-600 text-white w-40 h-16 mt-4 mr-3 midfour:w-32
                midfour1:w-24 midfour1:text-[14px]">Faça o Teste</button></Link>
                {isActive && (
        <div className="z-10 fixed inset-0 transition-opacity">
          <div
            onClick={() => setIsActive(false)}
            className="absolute inset-0 bg-black opacity-50"
            tabIndex="0"
          ></div>
        </div>
      )}

      <aside
        className={`transform top-0 left-0 w-64 bg-red-200 bg-opacity-95 lowtwo2:w-44 lowthreetwo:w-36 text-white font-extrabold fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
          isActive ? "translate-x-0" : "-translate-x-full"
        }`}
      >
         
         {sideList.map(({ title, path }, index) => (
    <Link href={path} key={index}>
        <span className="flex items-center p-4 hover:bg-white hover:text-black">
          <span className="border-b-4">{title}</span>
        </span>
    </Link>
  ))}
      </aside>
            </nav>
        </header>
        </div>
    )
}
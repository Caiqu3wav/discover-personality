import React from "react";
import Image from "next/image";
import DiscoveryLogo from "../../../../public/assets/img/DiscoveryLogoHeader.png"
import "./header.css"
import Link from "next/link";

export default function Header() {

    return(
        <header>
            <nav className="justify-between flex">
            <Image src={DiscoveryLogo} alt="Discovery Logo"/>
                <ul className="flex gap-16 mt-8">
                    <Link href="/"><li>Home</li></Link>
                    <li>Testes</li>
                    <li>Teoria MBTI</li>
                        <Link href="/about"><li>Sobre</li></Link>
                </ul>
                <Link href="/testmbtipage"><button className="rounded bg-green-600 text-white w-40 h-16 mt-4 mr-3">Faça o Teste</button></Link>
            </nav>
        </header>
    )
}
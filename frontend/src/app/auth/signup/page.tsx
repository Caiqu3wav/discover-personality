'use client'
import Header from "../../components/Header/header";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { BiShowAlt } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import axios from "axios";
import React from "react";

export default function SignUpPage() {
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { data: session, status: sessionStatus } = useSession();
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (sessionStatus === "authenticated") {
            router.replace("/");
        }
    }, [sessionStatus, router]);
 
    const isValidEmail = (email: string) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    };
    
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const nome = e.target[0].value;
        const email = e.target[1].value;
        const senha = e.target[2].value;
 
        if (!isValidEmail(email)) {
          setMessage("Email is invalid");
            return;
        }

 
        if (!senha || senha.length < 8) {
          setMessage("Senha inválida (deve ter + de 8 caracteres)");
            return;
        }

        setIsLoading(true);
 
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_SPRING_API_URL}/api/users/create`, {
              username: nome, email, password: senha
            })
            
            setMessage(res.data);
        } catch (error) {
          setMessage("Erro, tente novamente");
            console.log(error);
        } finally {
          setIsLoading(false);
        }
    };
 
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    }

  return (
    sessionStatus !== "authenticated" && (
    <div className="flex flex-col h-[100vh]">
      <Header />
      <div className='hero-container h-[100vh] flex items-center justify-center'>
        {sessionStatus === "loading" &&  (
             <h1>Carregando...</h1>
        )}
      {isLoading ? (
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      ) : (
      <form className={`bg-gray-400 w-[400px] gap-3 ${sessionStatus === "loading" ? 'hidden' : ''}
       rounded-xl flex flex-col items-center justify-center
     h-[300px]`} onSubmit={handleSubmit}>
      <h1 className='text-xl font-semibold text-black'>Cadastro</h1>
      <div className='flex gap-2'>
      <label htmlFor="name">Nome:</label>
      <input className='text-black  rounded-lg'
        type="name" 
        id="name" 
        name="name" 
        required 
      />
    </div>
    <div className='flex gap-2'>
      <label htmlFor="email">Email:</label>
      <input className='bg-gray-600 text-white  rounded-lg'
        type="email" 
        id="email" 
        name="email"
        required 
      />
    </div>
    <div className='flex gap-2'>
      <label htmlFor="password">Password:</label>
      <input  className='bg-gray-600 text-white rounded-lg'
        type={!showPassword ? "password" : "text"} 
        id="password" 
        name="password" 
        required 
      />
       <button 
        type="button" 
        onClick={togglePasswordVisibility}
        className='bg-gray-600 text-white rounded-lg px-2'
      >
        {showPassword ? <BiShowAlt/> : <BiHide/>}
      </button>
    </div>
    <button className='px-3 py-1 rounded-xl bg-black text-white 
    hover:bg-red-600 hover:text-black transition-all duration-500' type="submit">Sign Up</button>
    {message && <p>{message}</p>} 
    <Link href="/auth/signin"><p className="text-blue-500">Já tem uma conta? Entre</p></Link>
  </form>
  )}
      </div>
    </div>
    )
  );
}
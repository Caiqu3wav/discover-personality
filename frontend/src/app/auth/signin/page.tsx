'use client'
import Header from "../../components/Header/header";
import SignInForm from "../../components/SignInForm";

export default function SignInPage() {

return (
<div className="flex flex-col gap-3 pb-3 h-[100vh]">
<Header/>
<div className="flex h-full w-full items-center justify-center">
<div className="flex flex-col w-full self-center items-center justify-between rounded-lg px-2 py-2 bg-slate-300">
<h1 className="text-3xl text-green-600">Entre com sua conta</h1>
<div className="mt-2 flex flex-col">
  <SignInForm/>
</div>
</div>
</div>
</div>
)
}
'use client'
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
export default function SignIn() {
    const router= useRouter()
    return (
        <>
            <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: "url('/cutlery.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <motion.div initial={{opacity:0, y:40}} animate={{opacity:1, y:0}} transition={{duration:0.7, ease:"easeIn"}} className="bg-white rounded-xl w-[400px] h-[340px] p-8 shadow-lg flex flex-col items-center gap-6">
                    <p className="text-2xl font-bold text-center">Sign in to Foodaura</p>

                    <input
                        type="text"
                        placeholder="Username"
                        className="w-full h-10 px-3 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full h-10 px-3 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />

                    <button className="w-full h-10 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition">
                        Sign In
                    </button>

                    <p>Don't have an account? <span className="text-decoration-line: underline cursor-pointer" onClick={()=>{router.push('/sign-up')}}>Sign up!</span></p>
                </motion.div>
            </div>
        </>
    )
}
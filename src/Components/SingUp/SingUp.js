'use client'
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const SingUp = () => {
    const session = useSession();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [photo, setPhoto] = useState('');
    const [password, setPassWord] = useState('');

    // 

    const handleRegister = async (e) => {
        e.preventDefault();
        // console.log(name, email,password,photo);
        try {
            const res = await fetch('api/singup', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    photo
                })
            });

            if (res.ok) {
                const from = e.target;
                from.reset();
            }
            else {
                console.log('user Registration Failed')
            }

        } catch (error) {
            console.log("Something Error In server", error);
        }
    }

    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className='flex-1 hidden lg:flex justify-center items-center'>
                    <Image property='true' src='https://github.com/Asif3359/online-Assignment/blob/main/src/assets/images/login/12085707_20944201.jpg?raw=true' width={500} height={500} alt='login image'></Image>
                </div>
                <div className='flex-1'>
                    <section className="">
                        <div className="flex flex-col items-center justify-center px-2 py-4 mx-auto my-5 ">
                            <div className="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                                <div className="p-6 sm:p-8">
                                    <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl ">
                                        Register
                                    </h1>
                                    {/* onSubmit={handleRegister} */}
                                    <form onSubmit={handleRegister} className="space-y-2 md:space-y-3 mt-5 mb-3" action="#">
                                        <div>
                                            <label htmlFor="name" className="block mb-2 text-sm font-medium ">Your name</label>
                                            <input onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" className=" border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="full name" required />
                                        </div>
                                        <div>
                                            <label htmlFor="photo" className="block mb-2 text-sm font-medium ">Your photo url</label>
                                            <input onChange={(e) => setPhoto(e.target.value)} type="text" name="photo" id="photo" className=" border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium ">Your email</label>
                                            <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className=" border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium ">Password</label>
                                            <input onChange={(e) => setPassWord(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className=" border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required="please select this" />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded  focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300"> Accept Our Terms And Condition</label>
                                                </div>
                                            </div>
                                        </div>
                                        <input type="submit" value="Register" className="w-full btn btn-sm " />
                                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                            Already have an account yet? <Link href="/login" className="font-medium text-primary-600 hover:underline text-yellow-500">login</Link>
                                        </p>
                                    </form>
                                    <div className='text-center flex flex-col space-y-2'>
                                        <h1 className=''>Login WIth</h1>
                                        <div className='border'></div>
                                        <div className='flex justify-start item-center w-full'>
                                            <button className='btn btn-sm bg-black hover:bg-white text-white hover:text-black hover:border-black' onClick={() => signIn('google')}>Google</button>
                                        </div>
                                    </div>
                                    {/* {
                                    registerSuccessMessage
                                    &&
                                    <div className='py-1'>
                                        <p className='text-green-500'>{registerSuccessMessage}</p>
                                    </div>
                                }
                                {
                                    registerErrorMessage
                                    &&
                                    <div>
                                        <p className='text-red-500'>{registerErrorMessage}</p>
                                    </div>
                                } */}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default SingUp;
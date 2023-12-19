import Link from 'next/link';
import React from 'react';

const logInPage = () => {
    return (
        <div>
            <div>
                <div className='flex justify-center items-center'>
                    <div className='flex-1 hidden lg:flex justify-center items-center '>
                        {/* <img src={img1} alt="" className='w-3/4 rounded-3xl' /> */}
                    </div>
                    <section className="  flex-1">
                        <div className="flex flex-col items-center justify-center px-2 py-4 mx-auto my-5 ">
                            <div className="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  ">
                                <div className="p-6 sm:p-8">
                                    <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl ">
                                        Sign in to your account
                                    </h1>
                                    {/* onSubmit={handleLogIn} */}
                                    <form className="space-y-4 md:space-y-6 mt-5 mb-3" action="#">
                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium  ">Your email</label>
                                            <input type="email" name="email" id="email" className=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium  ">Password</label>
                                            <input type="password" name="password" id="password" placeholder="••••••••" className=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required="please select this" />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border  rounded  focus:ring-3 focus:ring-primary-300   dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="remember" className=" dark:text-gray-300">Remember me</label>
                                                </div>
                                            </div>
                                        </div>
                                        <input type="submit" value="log in" className="w-full btn btn-sm " />
                                        <p className="text-sm font-light  ">
                                            Don’t have an account yet? <Link href="/singUp" className="font-medium text-primary-600 hover:underline text-yellow-500">Register</Link>
                                        </p>
                                    </form>
                                    <div className='text-center flex flex-col space-y-2'>
                                        <h1 className=''>Login With</h1>
                                        <div className='border'></div>
                                        <div className='flex justify-start item-center w-full'>
                                            {/* <button onClick={() => socialLoginWith(socialLogIn)} className='btn btn-sm w-1/2 '>Google</button> */}

                                        </div>
                                    </div>
                                    {/* {
                                        loginSuccessMessage
                                        &&
                                        <div className='py-1'>
                                            <p className='text-green-500'>{loginSuccessMessage}</p>
                                        </div>
                                    }
                                    {
                                        loginErrorMessage
                                        &&
                                        <div>
                                            <p className='text-red-500'>{loginErrorMessage}</p>
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

export default logInPage;
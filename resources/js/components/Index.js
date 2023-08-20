import React from 'react';
import ReactDOM from 'react-dom';

function Root() {
    return (
            <>
                <header className="max-w-lg mx-auto">
                    <h1 className="text-4xl font-bold text-gray-600  text-center">
                         Turbine Inspections
                    </h1>
                </header>
    
                <main className="bg-black max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                    <section>
                        <h3 className="font-bold text-2xl">Welcome</h3>
                        <p className="text-gray-500 pt-2">
                            Sign in to your account.
                        </p>
                    </section>
    
                    <section className="mt-10">
                        <form className="flex flex-col" method="POST" action="#">
                            <div className="mb-6 pt-3 rounded bg-gray-200">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-yellow-400 transition duration-500 px-3 pb-3"
                                />
                            </div>
                            <div className="mb-6 pt-3 rounded bg-gray-200">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-yellow-400 transition duration-500 px-3 pb-3"
                                />
                            </div>
                           
                            <button
                                className="bg-yellow-400 hover:bg-yellow-300 text-black-100 font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                                type="submit"
                            >
                                Sign In
                            </button>
                        </form>
                    </section>
                </main>
    
                <div className="max-w-lg mx-auto text-center mt-12 mb-6">
                    <p className="text-gray">
                        Don't have an account?{" "}
                        <a href="#" className="font-bold hover:underline">
                            Sign up
                        </a>
                        .
                    </p>
                </div>
    
                <footer className="max-w-lg mx-auto flex justify-center text-white">
                    
                    <span className="mx-3">•</span>
                   
                </footer>
            </>
        );
}

export default Root;

if (document.getElementById('root')) {
    ReactDOM.render(<Root/>, document.getElementById('root'));
}

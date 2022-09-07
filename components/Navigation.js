export default function Navigation() {

    return (
        <nav className="bg-slate-300 px-14 py-4 shadow">
            <div className="flex space-between justify-between items-center">
                <div className="flex items-center">
                    <a href="/" className="text-4xl font-600 italic border-b-2 px-6 p-2">TETONIC</a>
                    {/* <span className="px-4 ">Building web solutions that work.</span> */}
                </div>
                <ul className="flex w-96 justify-between">
                    <li className="px-4 text-lg	 text-slate-600 hover:text-slate-800"><a href="/services">services</a></li>
                    <li className="px-4 text-lg	 text-slate-600 hover:text-slate-800"><a href="/about">about</a></li>
                    <li className="px-4 text-lg	 text-slate-600 hover:text-slate-800"><a href="/contact">contact</a></li>
                </ul>
            <a href="/logout" className="text-lg text-center border-t-2 px-6 py-2 hover:bg-slate-200 text-black">
                logout
            </a>
        </div>
        </nav>
    )
}
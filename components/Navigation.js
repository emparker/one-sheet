import { useState } from 'react'


export default function Navigation() {
    const [ openNavDrop, setOpenNavDrop ] = useState(false)


    return (
        <nav class="bg-black h-12 pt-4 px-2">
            <div class="relative">
                    <a href="/" class="absolute left-0 inline-block w-36 border-t-[10px] text-white hover:text-army-green"></a>
                    <div onMouseEnter={() => setOpenNavDrop(!openNavDrop)} class="inline-block absolute right-0 w-12 h-6  group ">
                        <span class="block border-t-4 text-white"></span>
                        <span class="absolute right-0 w-[50%] h-2 border-b-4 text-white"></span>
                    </div>
                { openNavDrop && (
                    <div onMouseLeave={() => setOpenNavDrop(false)} class="absolute right-0 z-10 mt-2 w-60  origin-top-right bg-white shadow-lg ring-8 ring-dark-green ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                    <div class="py-1 m-8" role="none">
                        <p class="relative group">
                            <a href="/services" class="text-xl block  group-hover:text-white" role="menuitem" tabindex="-1" id="menu-item-0">services</a>
                            <span class="absolute left-0 -bottom-1 w-full h-2 bg-black -z-10 group-hover:h-full group-hover:transition-all"></span>
                        </p>
                        <p class="relative group">
                            <a href="/about" class="text-xl block  group-hover:text-white" role="menuitem" tabindex="-1" id="menu-item-0">about</a>
                            <span class="absolute left-0 -bottom-1 w-full h-2 bg-black -z-10 group-hover:h-full group-hover:transition-all"></span>
                        </p>
                        <p class="relative group">
                            <a href="/contact" class="text-xl block  group-hover:text-white" role="menuitem" tabindex="-1" id="menu-item-0">contact</a>
                            <span class="absolute left-0 -bottom-1 w-full h-2 bg-black -z-10 group-hover:h-full group-hover:transition-all"></span>
                        </p>
                        <p class="relative group">
                            <a href="/projects" class="text-xl block  group-hover:text-white" role="menuitem" tabindex="-1" id="menu-item-0">projects</a>
                            <span class="absolute left-0 -bottom-1 w-full h-2 bg-black -z-10 group-hover:h-full group-hover:transition-all"></span>
                        </p>
                      <form method="POST" action="#" role="none">
                        <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm hover:text-dark-orange" role="menuitem" tabindex="-1" id="menu-item-3">logout</button>
                      </form>
                    </div>
                  </div>
                )}
        </div>
        </nav>
    )
}
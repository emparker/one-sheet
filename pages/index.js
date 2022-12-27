
export default function Home() {
  return (
      <main class="h-screen bg-black_sand bg-cover bg-center bg-no-repeat">
          <p class="text-[300px] font-semibold text-white">Tetonic</p>
        <div class="w-[85%] max-h-screen float-right">
            {/* <h2 className="custom-class">Hello i am a test</h2> */}
            <a href="/services" class="float-right -mr-32" >
              <img class="block bg-arrow_vector bg-cover bg-center bg-no-repeat h-[600px] w-[600px]"></img>
            </a>
            <h1 class="text-lg text-right font-sans align-text-bottom text-white font-extralight mt-28 md:text-3xl lg:text-6xl">creating and managing digital projects</h1>
              {/* <span class="mr-32"></span> */}
            <span class="block -mt-2 border-t-[12px] text-army-green ml-auto"></span>
        </div>
      </main>
  )
}



export default function Home() {
  
  return (
      <main className="h-screen bg-black_sand bg-cover bg-center bg-no-repeat">
          <h1 className="p-4 md:p-8 xl:p-12 text-6xl md:text-[150px] lg:text-[300px] font-semibold text-white">Tetonic</h1>
        <div className="pl-8 md:w-[80%] max-h-screen float-right">
            {/* <a href="/services" className="float-right -mr-32" >
              <img className="block bg-arrow_vector bg-cover bg-center bg-no-repeat h-[600px] w-[600px]"></img>
            </a> */}
            <h1 className="text-right pr-4 leading-[1.8rem]  font-sans align-text-bottom text-white font-extralight mt-28 text-xl md:text-3xl lg:text-6xl">creating and managing digital projects</h1>
            <span className="block -mt-2 border-t-8 md:border-t-[12px] text-army-green ml-auto"></span>
        </div>
      </main>
  )
}


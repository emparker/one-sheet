import styles from '../styles/Home.module.css'


export default function Home() {
  return (
      <main className={styles.main}>
        <div class="sm:text-center lg:text-left">
            <h1 class="text-4xl tracking-tight font-bold text-dark-green sm:text-5xl sm:tracking-tight md:text-6xl md:tracking-tight">
              <span class="block xl:inline">We develop all the web things, </span>
              <span class="block text-amber-400 xl:inline">let's work together</span>
            </h1>
            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-md shadow">
                <a href="/services" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-slate-800 bg-slate-600 hover:border-yellow md:py-4 md:text-lg md:px-10"> Get Started </a>
              </div>
              {/* <div class="mt-3 sm:mt-0 sm:ml-3">
                <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-slate-700 bg-slate-100 hover:bg-slate-200 md:py-4 md:text-lg md:px-10"> Contact </a>
              </div> */}
            </div>
          </div>
          {/* <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="" />
          </div> */}
      </main>
  )
}

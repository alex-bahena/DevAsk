// import './Login.css'

const Login = () => {
  return (
    <>
      <div className="flex justify-center my-5 md:text-lg sm:text-base text-justify text-white leading-10">
        <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-10 lg:px-8 xl:mt-10">
          <div class="sm:text-center lg:text-center">
            <h1 class="text-4xl tracking-tight font-bold text-white sm:text-5xl sm:tracking-tight md:text-6xl md:tracking-tight">
              <p>
                <span class="block xl:inline">Welcome to </span>
                <span class="block text-sky-600 xl:inline">dev-ask!</span>
              </p>
            </h1>
            <p class="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">The number one spot for all developers. Find inspiration, connect with others, share your work
              and get support from a great community of developers.</p>
          </div>
        </main>
      </div>
      {/* <div className="flex justify-center my-10 md:text-lg sm:text-base text-justify text-white leading-10">
        <div className="flex justify-center md:w-1/2 sm:w-4/5 my-5 text-center">
          <p>
            Welcome to <span className='text-sky-400 font-bold'>dev-ask!</span>
            <br></br>
            <br></br>
            The number one spot for all <span className='text-sky-400 font-bold'>developers.</span>
            <br></br>
            <br></br>
            Find <span className='text-sky-400 font-bold'>inspiration</span>, connect with others, <span className='text-sky-400 font-bold'>share</span> your work
            <br></br>
            and get <span className='text-sky-400 font-bold'>support</span> from a great <span className='text-sky-400 font-bold'>community</span> of developers.
          </p>
        </div>
      </div> */}
      <div className="flex justify-center flex-wrap my-10">
        <div className="flex justify-center">
          <div className="block rounded-3xl shadow-sm bg-gray-300 sm:w-7/10 md:w-3/4 text-left">
            <div className='title-page my-5 text-center text-sky-500 text-3xl font-bold'>
              <h1>Login</h1>
            </div>
            <div className="p-6">
              <label className="text-grey-500 text-lg font-medium" for="email">
                Email:
              </label>
              <input className="rounded-xl w-full py-2 px-3 text-gray-600 border-none focus:outline-none focus:shadow-outline mb-5" id="message" type="text" placeholder="email"></input>
              <label className="text-grey-500 text-lg font-medium" for="email">
                Password:
              </label>
              <br></br>
              <input className="rounded-xl w-full py-2 px-3 text-gray-600 border-none focus:outline-none focus:shadow-outline mb-5" id="message" type="text" placeholder="*********"></input>
              <div className="flex flex-row justify-evenly">
                <button className="transition hover:duration-150 mt-5 mx-4 w-40 h-12 bg-teal-500 rounded-2xl hover:bg-teal-600 hover:font-bold text-white">Login </button>
                <button className="transition hover:duration-150 mt-5 mx-4 w-40 h-12 bg-rose-500 rounded-2xl hover:bg-rose-600 hover:font-bold text-white">Sign up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
const Signup = () => {
  return (
    <>
      <div className="flex justify-center flex-wrap my-10">
        <div className="flex justify-center mt-5">
          <div className="block rounded-3xl shadow-sm bg-gray-200 sm:w-7/10 md:w-3/4 text-left">
            <div className="p-6">
              <div className='title-page my-5 text-center text-sky-400 text-3xl font-bold'>
                <h1>SIGN UP</h1>
              </div>
              <label className="text-grey-500 text-lg font-medium" for="name">
                Name:
              </label>
              <br></br>
              <input className="rounded-xl w-full py-2 px-3 text-gray-600 border-none focus:outline-none focus:shadow-outline mb-5" id="email" type="text" placeholder="name" requiredx></input>
              <label className="text-grey-500 text-lg font-medium" for="email">
                Email:
              </label>
              <input className="rounded-xl w-full py-2 px-3 text-gray-600 border-none focus:outline-none focus:shadow-outline mb-5" id="message" type="text" placeholder="email"></input>
              <label className="text-grey-500 text-lg font-medium" for="email">
                Password:
              </label>
              <br></br>
              <input className="rounded-xl w-full py-2 px-3 text-gray-600 border-none focus:outline-none focus:shadow-outline mb-5" id="message" type="text" placeholder="password"></input>
              <div className="flex flex-row justify-evenly">
                <button className="transition hover:duration-150 ase-in-out mt-10 w-40 h-12 bg-teal-500 rounded-xl hover:bg-teal-600 text-white font-bold">Sign up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
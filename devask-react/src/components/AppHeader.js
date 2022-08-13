const Nav = () => {
  return (

    <header className='header text-white flex flex-row justify-evenly items-center bg-blue-700 bg-gradient-to-r from-blue-500 to-blue-600 h-20'>
      <div className="flex flex-row items-center justify-center basis-1/5 md:m-0 mr-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="md:mx-1 h-7 w-7 fill-white" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
        </svg>
        dev-ask
      </div>
      <form className="flex basis-3/5 justify-center">
        <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
        <div className="relative w-1/2">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-300 rounded-2xl bg-gray-600" placeholder="Search Devs" required></input>
          <button type="submit" className="text-white absolute right-2.5 bottom-2.5 top-2.5 hover:bg-teal-600 transition hover:duration-150 font-bold rounded-xl text-sm px-4 py-2 bg-teal-500">Search</button>
        </div>
      </form>
      <div className="flex flex-row items-center justify-evenly basis-1/5 md:m-0 mr-6">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:h-8 hover:w-8 transition hover:duration-150" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </button>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:h-8 hover:w-8 transition hover:duration-150" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
          </svg>
        </button>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:h-8 hover:w-8 transition hover:duration-150" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Nav;
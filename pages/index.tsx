export default function IndexPage() {
  return (
    <div className="max-w-xl mx-auto p-8">
      <h2 className="uppercase tracking-wide font-semibold text-lg text-fuchsia-600 mb-2">
        Introducing...
      </h2>
      <p className="font-bold leading-none text-5xl lg:text-6xl text-gray-900 mb-6">
        Tailwind stories.
      </p>
      <ul className="flex space-x-6">
        <li className="flex flex-col flex-shrink-0 items-center space-y-1">
          <div className="relative bg-gradient-to-tr from-yellow-400 to-fuchsia-500 p-1 rounded-full">
            <a
              className="block bg-white p-1 rounded-full transform transition hover:-rotate-6"
              href="#"
            >
              <img
                className="h-24 w-24 rounded-full"
                src="https://placekitten.com/200/204"
                alt="Cute kitty"
              />
            </a>
            <button className="create-story">+</button>
          </div>
          <a href="#">You</a>
        </li>
        <li className="flex flex-col flex-shrink-0 items-center space-y-1">
          <div className="relative bg-gradient-to-tr from-yellow-400 to-fuchsia-500 p-1 rounded-full">
            <a
              className="block bg-white p-1 rounded-full transform transition hover:-rotate-6"
              href="#"
            >
              <img
                className="h-24 w-24 rounded-full"
                src="https://placekitten.com/200/202"
                alt="Cute kitty"
              />
            </a>
          </div>
          <a href="#">Kitty One</a>
        </li>
        <li className="flex flex-col flex-shrink-0 items-center space-y-1">
          <div className="relative bg-gradient-to-tr from-yellow-400 to-fuchsia-500 p-1 rounded-full">
            <a
              className="block bg-white p-1 rounded-full transform transition hover:-rotate-6"
              href="#"
            >
              <img
                className="h-24 w-24 rounded-full"
                src="https://placekitten.com/201/200"
                alt="Cute kitty"
              />
            </a>
          </div>
          <a href="#">Kitty Two</a>
        </li>
        <li className="flex flex-col flex-shrink-0 items-center space-y-1">
          <div className="relative bg-gradient-to-tr from-yellow-400 to-fuchsia-500 p-1 rounded-full">
            <a
              className="block bg-white p-1 rounded-full transform transition hover:-rotate-6"
              href="#"
            >
              <img
                className="h-24 w-24 rounded-full"
                src="https://placekitten.com/205/200"
                alt="Cute kitty"
              />
            </a>
          </div>
          <a href="#">Kitty Three</a>
        </li>
        <li className="flex flex-col flex-shrink-0 items-center space-y-1">
          <div className="relative bg-gradient-to-tr from-yellow-400 to-fuchsia-500 p-1 rounded-full">
            <a
              className="block bg-white p-1 rounded-full transform transition hover:-rotate-6"
              href="#"
            >
              <img
                className="h-24 w-24 rounded-full"
                src="https://placekitten.com/200/210"
                alt="Cute kitty"
              />
            </a>
          </div>
          <a href="#">Kitty Four</a>
        </li>
      </ul>
    </div>
  )
}

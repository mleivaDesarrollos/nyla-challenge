export const ProductCard = ({ imgUrl }: { imgUrl: string }) => (
  <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-lime-800 dark:border-gray-700">
    <a href="#">
      <img className="rounded-t-lg" src={imgUrl} alt="" />
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit..."
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id turpis
        vel nisl consectetur convallis a in lorem. Nam congue mauris consequat
        sapien mollis congue. Nunc ut malesuada nunc. Fusce at gravida magna.
        Integer vitae odio dolor. Fusce ut suscipit est. Phasellus condimentum
        tempus feugiat. Mauris ultricies nunc quis auctor eleifend. Donec
        interdum, nisi vel eleifend sagittis, odio nibh aliquam leo, semper
        interdum nulla enim et urna. Phasellus posuere lorem id justo congue
        pellentesque.
      </p>
      <a
        href="#"
        className="inline-flex items-center py-1 px-3 text-sm font-medium text-center text-white bg-lime-400 rounded-lg hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
      >
        Read more
        <svg
          aria-hidden="true"
          className="ml-2 -mr-1 w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  </div>
);

import Link from "next/link";

export default function Blog() {
  return (
    <>
      <h1>Hello, Blog Page!</h1>
      <Link href="/">
        <button
          type="submit"
          className="rounded-md bg-indigo-900 px-4 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Go to Home Page
        </button>
      </Link>
      <br></br>
      <Link href="/blog/1">
        <p className="w-1/12 border-solid border-2 border-sky-500 mb-2 bg-sky-900 hover:bg-sky-700">
          Go to blog 1
        </p>
      </Link>
      <Link href="/blog/2">
        <p className="w-1/12 border-solid border-2 border-sky-500 mb-2 bg-sky-900 hover:bg-sky-700">
          Go to blog 2
        </p>
      </Link>
      <Link href="/blog/3">
        <p className="w-1/12 border-solid border-2 border-sky-500 mb-2 bg-sky-900 hover:bg-sky-700">
          Go to blog 3
        </p>
      </Link>
    </>
  );
}

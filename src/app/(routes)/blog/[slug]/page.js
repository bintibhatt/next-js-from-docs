import Link from "next/link";

export default function Page({ params }) {
  return (
    <>
      <div>My Post: {params.slug}</div>
      <Link href="/">
        <button
          type="submit"
          className="rounded-md bg-indigo-900 px-4 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Go to Home Page
        </button>
      </Link>
      <Link href="/blog">
        <button
          type="submit"
          className="rounded-md bg-indigo-900 px-4 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Go to Blog Page
        </button>
      </Link>
    </>
  );
}

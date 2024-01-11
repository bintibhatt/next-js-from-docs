import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Hello, Home page!</h1>
      <Link href="/dashboard">
        <button
          type="submit"
          class="rounded-md bg-indigo-900 px-4 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Go to Dashboard
        </button>
      </Link>
    </>
  );
}

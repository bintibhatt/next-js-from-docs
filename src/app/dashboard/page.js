import Content from "../components/content";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Hello, Dashboard Page!</h1>
      <Link href="/">
        <button
          type="submit"
          class="rounded-md bg-indigo-900 px-4 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Go to Home Page
        </button>
      </Link>
      <Link href="/dashboard#settings">
        <button
          type="submit"
          class="rounded-md bg-indigo-900 px-4 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Go to Settings
        </button>
      </Link>
      <div>
        {/* <Content />
        <Content />
        <Content /> */}
      </div>
      <div id="settings">
        <h1>Settings</h1>
      </div>
    </>
  );
}

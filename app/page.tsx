// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-linear-to-b from-slate-50 to-white flex items-center"
      aria-label="Alyx hero"
    >
      <div className="container mx-auto px-6 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <section className="flex flex-col justify-center items-center text-center -mt-20">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              Automate Your Emails & Meetings
            </h1>

            <p className="mt-4 text-slate-600 max-w-xl mx-auto md:mx-0">
              Alyx M1 handles your emails, replies, and meeting scheduling—so you stay focused on the work that matters.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:justify-start items-center gap-3">
              <Link
                href="/#"
                aria-label="Get started with Alyx"
                className="inline-flex w-full sm:w-auto items-center justify-center bg-blue-600 text-white px-5 py-3 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              >
                Get Started
              </Link>
            </div>

            <p className="mt-4 text-sm text-slate-500">Unlimited free use (3 meetings/day) — forever.</p>
          </section>
        </div>
      </div>
    </main>
  );
}

import Image from "next/image";
import Developer from "../../public/developer.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-16 text-center">
      {/* Hero Section */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-4">
        Hello World, I&apos;m Fakrul 👋
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
        I&apos;m a frontend developer learning{" "}
        <span className="text-amber-500 font-semibold">SASS, Next.js, and TypeScript</span>. From tomorrow, my serious journey begins. Let’s build something amazing!
      </p>

      {/* CTA Button */}
      <div className="mt-8">
        <a
          href="/about"
          className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow hover:bg-indigo-700 transition"
        >
          Learn More About Me
        </a>
      </div>

      {/* Hero Image */}
      <div className="mt-12">
        <Image
          src={Developer}
          alt="Developer illustration"
          width={500}
          height={300}
          className="rounded-xl shadow-md"
        />
      </div>
    </div>
  );
}

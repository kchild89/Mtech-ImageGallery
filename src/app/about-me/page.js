"use client";

export default function AboutMe() {
  return (
    <main className="flex-grow px-4 py-8 max-w-3xl mx-auto text-center bg-[var(--background)] text-[var(--foreground)]">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <p className="mb-4">
        Hi there! My name is <strong>Kevin</strong>, and I’m an aspiring
        software developer currently diving into the world of coding. My focus
        includes modern web development with <strong>React</strong> and{" "}
        <strong>Next.js</strong>.
      </p>
      <p className="mb-4">
        One of my favorite projects is a custom image gallery app. It fetches
        photos from an API, categorizes them, and allows dynamic exploration of
        filtered images. I’m learning to integrate hooks, reducers, and dynamic
        rendering to create seamless user experiences.
      </p>
      <p className="mb-4">
        Beyond coding, I love discovering new technologies and solving creative
        challenges. Feel free to connect and explore my work!
      </p>
      <button className="px-6 py-2 mt-6 rounded text-[var(--foreground)] bg-[var(--background)] border-2 border-transparent hover:border-white transition-colors duration-300">
        Let’s Connect
      </button>
    </main>
  );
}

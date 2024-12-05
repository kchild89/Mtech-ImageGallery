"use client";

export default function Contact() {
  return (
    <main className="flex-grow px-4 py-8 max-w-3xl mx-auto text-center bg-[var(--background)] text-[var(--foreground)]">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>
      <p className="mb-4">
        I’d love to hear from you! Feel free to reach out if you’d like to
        collaborate or connect about software development or creative projects.
      </p>
      <div className="flex justify-center gap-4 mt-6">
        <a
          href="https://github.com/kchild89"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded text-[var(--foreground)] bg-[var(--background)] border-2 border-transparent hover:border-white transition-colors duration-300"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/kevin-child-0931bb304/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded text-[var(--foreground)] bg-[var(--background)] border-2 border-transparent hover:border-white transition-colors duration-300"
        >
          LinkedIn
        </a>
      </div>
    </main>
  );
}

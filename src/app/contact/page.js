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
        {/* GitHub Button */}
        <a
          href="https://github.com/kchild89"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-2 rounded text-[var(--foreground)] bg-[var(--background)] border-2 border-transparent hover:border-white transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M12 2c-5.523 0-10 4.477-10 10 0 4.418 2.867 8.166 6.839 9.49.5.091.682-.217.682-.482v-1.687c-2.782.605-3.369-1.342-3.369-1.342-.455-1.156-1.11-1.464-1.11-1.464-.907-.62.069-.608.069-.608 1.004.07 1.531 1.031 1.531 1.031.892 1.53 2.341 1.088 2.913.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.954 0-1.093.39-1.988 1.031-2.688-.103-.254-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.026a9.562 9.562 0 0 1 5 0c1.91-1.296 2.75-1.026 2.75-1.026.545 1.378.202 2.396.099 2.65.642.7 1.031 1.595 1.031 2.688 0 3.853-2.336 4.7-4.565 4.947.359.31.678.923.678 1.86v2.753c0 .267.18.575.688.477C19.135 20.163 22 16.417 22 12c0-5.523-4.477-10-10-10z"
              clipRule="evenodd"
            />
          </svg>
          GitHub
        </a>

        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/kevin-child-0931bb304/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-2 rounded text-[var(--foreground)] bg-[var(--background)] border-2 border-transparent hover:border-white transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3.5 9h3v12h-3V9zM10 9h2.882v1.734h.04c.401-.747 1.383-1.539 2.847-1.539 3.044 0 3.75 2.004 3.75 4.609V21H16.5v-6.543c0-1.559-.029-3.564-2.173-3.564-2.17 0-2.503 1.696-2.503 3.448V21h-3V9z" />
          </svg>
          LinkedIn
        </a>
      </div>
    </main>
  );
}

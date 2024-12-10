"use client";

export default function AboutMe() {
  return (
    <main className="flex-grow px-4 py-8 max-w-3xl mx-auto text-center bg-[var(--background)] text-[var(--foreground)]">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <p className="mb-4">
        Hello, my name is <strong>Kevin</strong>, and I’m an aspiring software
        developer passionate about modern web development, particularly with{" "}
        <strong> JavaScript </strong>
        and <strong>React</strong>. My journey into coding has been driven by a
        love for creating seamless and user-focused applications.
      </p>
      <p className="mb-4">
        This project is a custom image gallery app designed to simplify the way
        users explore photos. It fetches images from an API, categorizes them,
        and provides dynamic filtering options for an intuitive browsing
        experience. By leveraging React hooks, reducers, and dynamic rendering,
        I’ve built a platform that prioritizes functionality and smooth
        navigation.
      </p>
      <p className="mb-4">
        My diverse background as a journeyman electrician with 17 years of
        high-voltage and industrial experience has instilled in me a
        detail-oriented and problem-solving mindset. In addition to web
        development, I’m love the field of pentesting to deepen my understanding
        of cybersecurity. When I’m not coding, I enjoy playing ice hockey,
        downhill mountain biking, and spending time with my twin daughters.
        These interests inspire my creative approach to tackling technical
        challenges.
      </p>
      <p className="mb-4">
        Feel free to explore this project and connect with me to share feedback
        or discuss ideas!
      </p>
    </main>
  );
}

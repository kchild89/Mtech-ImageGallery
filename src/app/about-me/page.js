import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function AboutMe() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        color: "#333",
      }}
    >
      <main
        style={{
          padding: "20px",
          maxWidth: "800px",
          margin: "40px auto",
          backgroundColor: "#f9f9f9",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            textAlign: "center",
            color: "#2c3e50",
            marginBottom: "20px",
          }}
        >
          About Me
        </h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "15px" }}>
          Hi there! My name is <strong>Kevin</strong>, and I’m an aspiring
          software developer currently embarking on an exciting journey into the
          world of coding. As a college student with a deep passion for
          creating, I’m diving into the intricacies of modern web development.
          My areas of focus include <strong>React</strong> and{" "}
          <strong>Next.js</strong>, where I’m learning to bring ideas to life
          through elegant, dynamic web applications.
        </p>
        <p style={{ fontSize: "1.2rem", marginBottom: "15px" }}>
          One of my recent projects showcases my enthusiasm for front-end
          development: a custom image gallery app. This app fetches photos from
          an API, categorizes them, and lets users filter through and explore
          full-page views of selected images. By integrating React concepts like
          hooks, context, reducers, and dynamic page rendering, I’m honing my
          ability to design seamless user experiences.
        </p>
        <p style={{ fontSize: "1.2rem", marginBottom: "15px" }}>
          Beyond coding, I’m always curious about learning new technologies and
          finding innovative ways to solve problems. If you’re interested in
          collaborating, sharing insights, or just want to chat about software
          development, feel free to reach out!
        </p>
        <p
          style={{
            fontSize: "1.2rem",
            textAlign: "center",
            fontWeight: "bold",
            color: "#000",
          }}
        >
          Welcome to my world of growth, creativity, and code!
        </p>
      </main>
    </div>
  );
}

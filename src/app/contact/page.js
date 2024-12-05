import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Contact() {
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
          Contact
        </h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "15px" }}>
          Thank you for stopping by! If you’d like to get in touch, feel free to
          reach out. I’m always happy to connect, collaborate, and share ideas
          about software development and creative projects.
        </p>
        <p style={{ fontSize: "1.2rem", marginBottom: "15px" }}>
          You can find me on <strong>GitHub</strong> and{" "}
          <strong>LinkedIn</strong> where I showcase my work, connect with
          professionals, and share insights about my journey in software
          development. Check out my profiles below!
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <a
            href="https://github.com/kchild89"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#3498db",
              textDecoration: "none",
              fontWeight: "bold",
              border: "2px solid #3498db",
              padding: "10px 15px",
              borderRadius: "5px",
              display: "inline-block",
            }}
          >
            Visit My GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kevin-child-0931bb304/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#0077b5",
              textDecoration: "none",
              fontWeight: "bold",
              border: "2px solid #0077b5",
              padding: "10px 15px",
              borderRadius: "5px",
              display: "inline-block",
            }}
          >
            Visit My LinkedIn
          </a>
        </div>
        <p
          style={{
            fontSize: "1.2rem",
            textAlign: "center",
            marginBottom: "15px",
          }}
        >
          Alternatively, feel free to reach out via email at{" "}
          <a
            href="mailto:kchild89@example.com"
            style={{
              color: "#3498db",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            kchild89@example.com
          </a>
          .
        </p>
        <p
          style={{
            fontSize: "1.2rem",
            textAlign: "center",
            fontWeight: "bold",
            color: "#2c3e50",
          }}
        >
          Let’s build something amazing together!
        </p>
      </main>
    </div>
  );
}

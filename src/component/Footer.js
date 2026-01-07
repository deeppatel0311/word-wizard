import React from "react";

export default function Footer() {
  return (
    <footer
      style={{ background: "#1f2937", color: "white", padding: "2rem 1rem" }}
    >
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            marginBottom: "2rem",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: "600",
                color: "white",
                marginBottom: "1rem",
              }}
            >
              🪄 WordWizard
            </h3>
            <p style={{ color: "#d1d5db" }}>
              A simple text processing tool with essential transformation functions including case conversion, 
              text manipulation, encoding, and real-time statistics.
            </p>
          </div>
          <div>
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: "600",
                marginBottom: "1rem",
              }}
            >
              Features
            </h3>
            <ul style={{ color: "#d1d5db", listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "0.5rem" }}>
                Case Conversion (6 types)
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                Text Manipulation (6 tools)
              </li>
              <li style={{ marginBottom: "0.5rem" }}>Base64 Encoding</li>
              <li style={{ marginBottom: "0.5rem" }}>Real-time Statistics</li>
              <li style={{ marginBottom: "0.5rem" }}>Undo/Redo Support</li>
            </ul>
          </div>
          <div>
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: "600",
                marginBottom: "1rem",
              }}
            >
              Quick Links
            </h3>
            <ul style={{ color: "#d1d5db", listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "0.5rem" }}>
                <a
                  href="/"
                  style={{ color: "#d1d5db", textDecoration: "none" }}
                >
                  Home
                </a>
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <a
                  href="/about"
                  style={{ color: "#d1d5db", textDecoration: "none" }}
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid #374151",
            paddingTop: "2rem",
            color: "#9ca3af",
          }}
        >
          <p>&copy; 2026 WordWizard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

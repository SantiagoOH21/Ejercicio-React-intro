function Home() {
  return (
    <main style={styles.main}>
      <h2>About Me</h2>
      <p>
        I'm currently learning to become a fullstack developer, driven by a deep
        passion for technology and software development. I’ve built backend APIs
        using tools like <strong>Express</strong>, <strong>MongoDB</strong>, and{" "}
        <strong>MySQL</strong>, and I’m now diving into the world of frontend
        development using <strong>React</strong>.
      </p>

      <h2>Technologies I Use</h2>
      <ul>
        <li>React / Vite</li>
        <li>Node.js / Express</li>
        <li>MongoDB / MySQL</li>
        <li>JavaScript</li>
        <li>CSS Modules</li>
        <li>Git / GitHub / Docker</li>
      </ul>
    </main>
  );
}

const styles = {
  main: {
    padding: "2rem",
    fontFamily: "Roboto, sans-serif",
    lineHeight: "1.6",
  },
};

export default Home;

function Header() {
  return (
    <header style={styles.header}>
      <h1>Hi, I'm Santiago Orozco</h1>
      <p>Full Stack Developer | React Enthusiast | Tech Explorer</p>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#282c34",
    color: "white",
    padding: "2rem",
    textAlign: "center",
  },
};

export default Header;

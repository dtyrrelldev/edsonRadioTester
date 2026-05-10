export default function Welcome() {
  return (
    <div style={styles.container}>
      <h1 style={styles.text}>Home Screen</h1>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },

  text: {
    fontSize: "24px",
  },
};
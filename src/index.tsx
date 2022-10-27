import { Container, createStyles } from "@mantine/core";
import { createRoot } from "react-dom/client";
import { PokeList } from "./domain/pokemon/components";

function App() {
  const { classes } = useStyles();
  return (
    <Container className={classes.container} size="lg">
      <PokeList />
    </Container>
  );
}

const container = document.getElementById("app")!;
const root = createRoot(container);
root.render(<App />);

const useStyles = createStyles(() => ({
  container: {
    marginTop: 50,
    border: "1px solid #000",
    borderRadius: 8,
    padding: 20,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
}));

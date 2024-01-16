import { Container } from "react-bootstrap";
import "./App.css";
import Message from "./components/Message";
function App() {
  return (
    <Container className="my-5">
      <Message phrase="my friend" />
    </Container>
  );
}

export default App;

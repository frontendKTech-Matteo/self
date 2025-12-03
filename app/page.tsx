import { Container, Header } from "../components/shared";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <Container>
      <Header />
      <div className="">
        <Button>Click me</Button>
      </div>
    </Container>
  );
}

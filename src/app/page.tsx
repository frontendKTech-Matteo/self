import { Button } from "@/components/ui/button";
import { Container, Header } from "../components/shared";

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

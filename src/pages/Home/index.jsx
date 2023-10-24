import { Container } from "./styles";
import FileDownload from "js-file-download";
import { api } from "../../services/api";
import { useState } from "react";

export function Home() {
  const [load, setLoad] = useState(false);

  async function handleGenerate() {
    setLoad((prevState) => !prevState);
    const response = await api.get("/sounds");
    FileDownload(response.data, "aitmosphere.wav");
    setLoad((prevState) => !prevState);
  }

  return (
    <Container>
      <section>
        <h1>Aitmosphere</h1>
        <button disabled={load} onClick={handleGenerate}>
          {load ? "Generating..." : "Generate"}
        </button>
      </section>
    </Container>
  );
}

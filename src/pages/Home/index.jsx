import { useEffect, useState } from "react";
import { Container } from "./styles";
import { client } from "@gradio/client";

export function Home() {
  const [load, setLoad] = useState(false);
  const [animation, setAnimation] = useState(false);

  const audio = new Audio("src/assets/audios/titanium.wav");

  async function handleGenerate() {
    setLoad(true);
    setAnimation((prevState) => !prevState);

    audio.play();

    const app = await client(
      "https://leonardoboulitreau-aitmospheric.hf.space/--replicas/9kmwh/"
    );
    const result = await app.predict(0, []);

    const audioUrl = result.data[0].data;

    try {
      const response = await fetch(audioUrl);
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "aitmosphere.wav";
      a.click();

      setLoad(false);

      const element = document.getElementById("container");
      element.classList.remove("active");

      setAnimation(false);
    } catch (error) {
      console.error("Erro ao baixar o arquivo de áudio:", error);
      setLoad(false);
    }
  }

  return (
    <Container id="container" className={animation ? "active" : ""}>
      <video loop autoPlay muted>
        <source src="src/assets/videos/video-output-79DC9029-C7F8-42AA-A578-B8F60F5EDD3D.mov" />
      </video>

      <audio src="src/assets/som_ambiente.mp3" autoPlay loop></audio>

      <section>
        <h1>Aitmospheric</h1>
        <button disabled={load} onClick={handleGenerate}>
          {load ? "Generating..." : "Generate"}
        </button>
      </section>
    </Container>
  );
}

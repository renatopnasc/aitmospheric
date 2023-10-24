import { useState } from "react";
import { Container } from "./styles";
import { client } from "@gradio/client";

import audioBg from "../../assets/som_ambiente.mp3";
import audio from "../../assets/audios/titanium.wav";

import videoBg from "../../assets/videos/video-output-79DC9029-C7F8-42AA-A578-B8F60F5EDD3D.mov";

export function Home() {
  const [load, setLoad] = useState(false);
  const [animation, setAnimation] = useState(false);

  const audioLight = new Audio(audio);

  async function handleGenerate() {
    setLoad(true);
    setAnimation((prevState) => !prevState);

    audioLight.play();

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
        <source src={videoBg} />
      </video>

      <audio src={audioBg} autoPlay loop></audio>

      <section>
        <h1 className="title">Aitmospheric</h1>
        <button disabled={load} onClick={handleGenerate}>
          {load ? "Generating..." : "Generate"}
        </button>
      </section>
    </Container>
  );
}

"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState(""); // "" | "bespoke" | "sync"
  const [activeImage, setActiveImage] = useState("");
  const [activeBio, setActiveBio] = useState("");
  const [activeComposer, setActiveComposer] = useState(null);

  const bespokeComposers = [
    { 
      name: "Daniel Ball", 
      img: "/danielball.jpg", 
      bio: "Daniel Ball is a producer, DJ and multidisciplinary artist. Spanning commissioned composition for fashion and film, hyperactive dance pop with collaborators Elphi and Aria SL, his music is characterised by an early background in jazz and classical followed by a strong shift towards modern electronic production. Recent production work includes a score Yenesai's SS25 runway show at the Palais De Tokyo (alongside longtime collaborator Aria SL) and Elphi's 'Lullaby', alongside research into the affective nature of bass music through ending summers.",
      link: "https://www.instagram.com/__danielball__/"
    },
    { 
      name: "FLOCO", 
      img: "/floco.png", 
      bio: "Singer, producer and violinist FLOCO inhabits a world between the old and the new. Weaving remnants of her musical upbringing on English folk music through live electronics and experimental production, FLOCO explores the more abstract lands of Cyberfolk and Dream Pop.", 
      link: "https://www.instagram.com/floco_rj/"
    },
    { 
      name: "Halden Cooke", 
      img: "/astralhalden.jpg", 
      bio: "Astral Bandit crafts immersive sonic worlds that stretch between dreamlike introspection and kinetic dancefloor energy. A core member of bands The Long Faces and Sons of Ivaldi with experimental and art folk touches, Astral Bandit is also drawn to the faster subgenres of techno and trance, shaping a signature sound defined by hypnotic pulses, shadowy textures, and unexpected twists at every turn.", 
      link: "https://www.instagram.com/astral.bandit/"
    },
    { 
      name: "Jabes", 
      img: "/jabes copy.jpg", 
      bio: "Jabes is a London-based composer and producer known for sculpting immersive, high-tension sound worlds that bridge experimental electronic music and cinematic design. With a background in UK club culture and a focus on sonic detail, his work is equally at home on the dancefloor or the screen.", 
      link: "https://www.instagram.com/j.abes_/"
    },
    { 
      name: "Olson", 
      img: "/olson.jpg", 
      bio: "Olson is a Sheffield-based producer and composer whose work drifts between introspective ambient soundscapes and high-velocity club mutations. Since 2023, he has been releasing a series of immersive projects via the LOFS label — a diverse body of work, covering every shade of the ambient spectrum. Through heavy sample manipulation and synthesis, Olson creates vivid textural worlds — auditory myths that evoke something ambiguous yet ultimately peaceful and sincere.", 
      link: "https://www.instagram.com/olson_fus/"
    },
    { 
      name: "Oshi Moon", 
      img: "/jabes c.jpg", 
      bio: "Underground Pop star Oshi Moon is obsessed with exploring duality through their art, treading the knife's edge of digital and analogue, hard and soft, masculine and feminine. Piecing together discarded fragments of the net, Oshi wields multiple creative disciplines to manifest their latest project CATFLAP.", 
      link: "https://www.instagram.com/oshi_moon/"
    },
    { 
      name: "Renslink", 
      img: "/renslink3000.jpg", 
      bio: "Renslink is an Electronic music producer and live performer based in Manchester, UK. He cultivates a unique sound through deep experimentation and exploration of new and interesting ideas, pushing the boundaries of every corner of electronic music from Ambient to Club.", 
      link: "https://www.instagram.com/renslink/"
    },
    { 
      name: "Stolen Velour", 
      img: "/jonas.png", 
      bio: "Stolen Velour is a Leeds-based experimental club producer and vocalist whose music fuses glitch-inspired sound design, UK-funky rhythms, hyperpop energy, and euphoric club beats to create immersive, visceral electronic tracks. With collaborations like Cali Girl For Now, they blend pop sensibilities, nostalgic lo-fi textures, and post-internet experimentalism.", 
      link: "https://www.instagram.com/stolenvelour__/"
    },
    { 
      name: "Ziyiz", 
      img: "/ZiyizPress 2.jpg", 
      bio: "Ziyiz is a Leeds-based composer and sound artist whose work blends experimental electronics, ambient abstraction, and corrupted, immersive techno. Drawing on generative processes, AI, and speculative design, their music constructs fractured sonic worlds where memory, artifact, and signal loss converge.", 
      link: "https://www.instagram.com/ziyiziyiziyiz/"
    },
  ];

  // Preload images
  useEffect(() => {
    bespokeComposers.forEach(item => new Image().src = item.img);
  }, []);

  const resetPage = () => {
    setActiveTab("");
    setActiveImage("");
    setActiveBio("");
    setActiveComposer(null);
  };

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // Smooth scroll to iframe
  const slowScrollTo = (element, duration = 2500) => {
    if (!element) return;
    const target = element.getBoundingClientRect().top + window.scrollY;
    const start = window.scrollY;
    const distance = target - start;
    let startTime = null;

    const easeInOut = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      window.scrollTo(0, easeInOut(elapsed, start, distance, duration));
      if (elapsed < duration) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (activeTab === "sync") {
      const iframe = document.getElementById("disco-playlist-25806701");
      slowScrollTo(iframe);
    }
  }, [activeTab]);

  return (
    <main className="bg-white text-gray-700 min-h-screen font-mono relative">

      {/* Top-left menu */}
      <div className="absolute top-8 left-8 text-xs flex flex-col space-y-1 z-50">
        <p className="cursor-pointer" onClick={resetPage}>✿ LOFS Publishing</p>
        <p className="cursor-default">
          <span
            className="hover:underline cursor-pointer lowercase"
            onMouseEnter={() => { if (!isMobile) setActiveTab("bespoke"); setActiveImage(""); setActiveBio(""); }}
            onClick={() => setActiveTab("bespoke")}
          >
            bespoke composers
          </span>
          {" · "}
          <span
            className="hover:underline cursor-pointer lowercase"
            onMouseEnter={() => !isMobile && setActiveTab("sync")}
            onClick={() => setActiveTab("sync")}
          >
            sync sampler
          </span>
        </p>
      </div>

      {/* Flower */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 pointer-events-none">
        <img src="/publishingflower.png" alt="flower" className="w-64 opacity-90" />
      </div>

      {/* BESPOKE COMPOSERS */}
      {activeTab === "bespoke" && (
        <>
          {/* Composer List */}
          {!activeComposer && (
            <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 w-[90%] md:w-[40rem] px-4 md:px-0">
              <ul className="text-center text-sm space-y-1">
                {bespokeComposers.map((member, index) => (
                  <li key={index} className="whitespace-nowrap">
                    <span
                      className="cursor-pointer hover:opacity-60 transition"
                      onMouseEnter={() => { if (!isMobile) { setActiveImage(member.img); setActiveBio(member.bio); } }}
                      onClick={() => { if (isMobile) setActiveComposer(member); }}
                    >
                      {member.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Desktop hover bio */}
          {!isMobile && activeImage && (
            <div className="absolute top-20 right-20 text-right max-w-xs hidden md:block">
              <img src={activeImage} alt="artist" className="w-72 rounded-lg transition-all duration-300" />
              <p className="mt-2 text-xs">{activeBio}</p>
              <a href={bespokeComposers.find(m => m.img === activeImage)?.link || "#"} target="_blank" rel="noopener noreferrer" className="text-xs block mt-1 hover:underline">more</a>
              <a href="mailto:lofspublishing@gmail.com" className="text-xs block mt-1 hover:underline">contact</a>
            </div>
          )}

          {/* Mobile full-width card */}
          {isMobile && activeComposer && (
            <div className="fixed inset-0 bg-white z-50 p-6 overflow-auto">
              <button className="text-xs mb-4 underline" onClick={() => setActiveComposer(null)}>✕ close</button>
              <img src={activeComposer.img} alt={activeComposer.name} className="w-full rounded-lg mb-4" />
              <p className="text-xs mb-2">{activeComposer.bio}</p>
              <a href={activeComposer.link} target="_blank" rel="noopener noreferrer" className="text-xs block mt-1 hover:underline">more</a>
              <a href="mailto:lofspublishing@gmail.com" className="text-xs block mt-1 hover:underline">contact</a>
            </div>
          )}
        </>
      )}

      {/* SYNC SAMPLER */}
      <div className={`absolute top-[50%] left-0 w-full transform mt-4 transition-opacity duration-300 px-4 md:px-0 ${activeTab === "sync" ? "opacity-100" : "opacity-0"}`}>
        <div className="max-w-full overflow-hidden">
          <iframe
            id="disco-playlist-25806701"
            name="disco-playlist-25806701"
            allowFullScreen
            frameBorder="0"
            className="disco-embed w-full h-[395px] sm:h-[calc(100vh-100px)]"
            src="https://lofs-publishing.disco.ac/e/p/25806701?download=false&s=zGQtJ_ZvwoX9BevMD_YWGxgIuDA%3ANkOJIzWq&artwork=true&color=%2332B57C&theme=white"
            style={{
              position: activeTab === "sync" ? "static" : "absolute",
              top: activeTab === "sync" ? "auto" : "-9999px",
            }}
          ></iframe>
        </div>
      </div>
    </main>
  );
}

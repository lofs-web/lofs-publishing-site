"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState(""); // "" | "bespoke" | "sync"
  const [activeImage, setActiveImage] = useState("");
  const [activeBio, setActiveBio] = useState("");
  const [activeMobileComposer, setActiveMobileComposer] = useState(null);

  const bespokeComposers = [
    { 
      name: "Daniel Ball", 
      img: "/danielball.jpg", 
      bio: "Daniel Ball is a producer, DJ and multidisciplinary artist. He has a signature sound that spans experimental, techno, and electronic music. Expect intricate rhythms, hypnotic textures, and dynamic live performances.", 
      link: "https://www.instagram.com/__danielball__/" 
    },
    { 
      name: "FLOCO", 
      img: "/floco.png", 
      bio: "Singer, producer and violinist FLOCO inhabits a world between electronic pop and avant-garde classical. His productions often merge lush string arrangements with hypnotic beats, creating a sound that is cinematic and emotive.", 
      link: "https://www.instagram.com/floco_rj/" 
    },
    { 
      name: "Halden Cooke", 
      img: "/astralhalden.jpg", 
      bio: "Astral Bandit crafts immersive sonic worlds, blending fast-paced techno and trance subgenres. Expect high energy, hypnotic elements, dark shades, and unexpected twists in every production.", 
      link: "https://www.instagram.com/astral.bandit/" 
    },
    { 
      name: "Jabes", 
      img: "/jabes copy.jpg", 
      bio: "Jabes is a London-based composer and producer whose work fuses ambient textures with glitchy electronic rhythms. His music balances minimalism with complex layers, making every track a unique journey.", 
      link: "https://www.instagram.com/j.abes_/" 
    },
    { 
      name: "Olson", 
      img: "/olson.jpg", 
      bio: "Olson is a Sheffield-based producer and composer, known for atmospheric soundscapes and intricate sound design. His productions often explore the tension between organic textures and digital manipulation.", 
      link: "https://www.instagram.com/olson_fus/" 
    },
    { 
      name: "Oshi Moon", 
      img: "/jabes c.jpg", 
      bio: "Underground Pop star Oshi Moon is obsessed with exploring duality — between light and dark, melodic and percussive. Her tracks blend vocal experimentation with electronic pop sensibilities.", 
      link: "https://www.instagram.com/oshi_moon/" 
    },
    { 
      name: "Renslink", 
      img: "/renslink3000.jpg", 
      bio: "Renslink is an Electronic music producer with a focus on deep, immersive club sounds. His music merges driving beats with intricate textures, perfect for late-night dancefloor journeys.", 
      link: "https://www.instagram.com/renslink/" 
    },
    { 
      name: "Stolen Velour", 
      img: "/jonas.png", 
      bio: "Stolen Velour is a Leeds-based experimental club producer. He pushes boundaries with glitchy, distorted sounds, complex rhythms, and atmospheric effects that create a sense of controlled chaos.", 
      link: "https://www.instagram.com/stolenvelour__/" 
    },
    { 
      name: "Ziyiz", 
      img: "/ZiyizPress 2.jpg", 
      bio: "Ziyiz is a Leeds-based composer and sound artist. Her work blends field recordings, electronic processing, and traditional instruments, exploring textures, space, and abstract narratives in sound.", 
      link: "https://www.instagram.com/ziyiziyiziyiz/" 
    },
  ];

  // Preload images
  useEffect(() => {
    bespokeComposers.forEach(item => new Image().src = item.img);
  }, []);

  // Reset page
  const resetPage = () => {
    setActiveTab("");
    setActiveImage("");
    setActiveBio("");
    setActiveMobileComposer(null);
  };

  // Slow scroll to iframe
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
      slowScrollTo(iframe, 2500);
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
            onMouseEnter={() => { setActiveTab("bespoke"); setActiveImage(""); setActiveBio(""); }}
          >
            bespoke composers
          </span>
          {" · "}
          <span
            className="hover:underline cursor-pointer lowercase"
            onMouseEnter={() => setActiveTab("sync")}
          >
            sync sampler
          </span>
        </p>
      </div>

      {/* Flower */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2">
        <img src="/publishingflower.png" alt="flower" className="w-64" />
      </div>

      {/* Bespoke Composers */}
      {activeTab === "bespoke" && (
        <>
          <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 w-[40rem] md:w-full px-4 md:px-0">
            <ul className="text-center text-sm space-y-1">
              {bespokeComposers.map((member, index) => (
                <li key={index} className="w-full">
                  <span
                    className="cursor-pointer hover:opacity-60 transition"
                    onMouseEnter={() => { if (window.innerWidth >= 768) { setActiveImage(member.img); setActiveBio(member.bio); } }}
                    onClick={() => { if (window.innerWidth < 768) setActiveMobileComposer(member); }}
                  >
                    {member.name}
                  </span>

                  {/* Mobile full-width pop-up card */}
                  {activeMobileComposer === member && window.innerWidth < 768 && (
                    <div className="md:hidden mt-2 bg-white p-4 rounded-lg shadow-lg text-left w-full">
                      <img src={member.img} alt={member.name} className="w-full rounded-lg mb-2" />
                      <p className="text-xs mb-2">{member.bio}</p>
                      <a href={member.link} target="_blank" rel="noopener noreferrer" className="text-xs block mb-1 hover:underline">more</a>
                      <a href="mailto:lofspublishing@gmail.com" className="text-xs block hover:underline">contact</a>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop right-side image */}
          {activeImage && window.innerWidth >= 768 && (
            <div className="absolute top-20 right-20 text-right max-w-xs hidden md:block">
              <img src={activeImage} alt="artist" className="w-72 rounded-lg transition-all duration-300" />
              <p className="mt-2 text-xs">{activeBio}</p>
              <a href={bespokeComposers.find(m => m.img === activeImage)?.link || "#"} target="_blank" rel="noopener noreferrer" className="text-xs block mt-1 hover:underline">more</a>
              <a href="mailto:lofspublishing@gmail.com" className="text-xs block mt-1 hover:underline">contact</a>
            </div>
          )}
        </>
      )}

      {/* Sync Sampler */}
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

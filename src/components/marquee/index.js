import React from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";


export const Marquee = () => {
  gsap.registerPlugin(ScrollTrigger);

  const images = gsap.utils.toArray("img");
  const loader = document.querySelector(".loader--text");
  const updateProgress = (instance) =>
    (loader.textContent = `${Math.round(
      (instance.progressedCount * 100) / images.length
    )}%`);

  const showDemo = () => {
    document.body.style.overflow = "auto";
    document.scrollingElement.scrollTo(0, 0);
    gsap.to(document.querySelector(".loader"), { autoAlpha: 0 });

    gsap.utils.toArray("section").forEach((section, index) => {
      const w = section.querySelector(".wrapper");
      const [x, xEnd] =
        index % 2
          ? ["100%", (w.scrollWidth - section.offsetWidth) * -1]
          : [w.scrollWidth * -1, 0];
      gsap.fromTo(
        w,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 0.5
          }
        }
      );
    });
  };

  imagesLoaded(images).on("progress", updateProgress).on("always", showDemo);
  // useEffect(
  // 	() => {
  // 		showDemo();
  // 	},
  // 	[ 0 ]
  // );
  return (
    <div className="primary--animated--wrapper">
      <div className="loader df aic jcc">

      </div>
      <div className="demo-wrapper">
        <section className="demo-text">
          <div className="wrapper text">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
        </section>
        <section className="demo-text">
          <div className="wrapper text">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
        </section>
      </div>
    </div>
  );
};

export default Marquee;

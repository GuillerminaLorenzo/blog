import Image from "next/image";

import HeroStyle from "./hero.module.css";

export default function Hero() {
  return (
    <section className={HeroStyle.hero}>
      <div className={HeroStyle.image}>
        <Image
          src="/images/site/guille.jpg"
          alt="An image showing Guillermina"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Guillermina</h1>
      <p>
        I'm a junior software engineer that recently graduated from Makers
        Academy a 4 months full-time coding bootcamp. Currently working at the
        University of Southampton as Apprentice Junior Software Developer.
      </p>
    </section>
  );
}

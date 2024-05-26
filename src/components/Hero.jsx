import { motion } from 'framer-motion'; // Library for creating cool animations

import { styles } from '../styles'; // Import our website's styling from the styles file
import { ComputersCanvas } from './canvas'; // This imports a 3D computercanvas

// This is the main Hero component. It renders the Hero section of our website.

const Hero = () => {
  // This is the main function that creates the "Hero" section of our website.
  // The Hero section is usually the big, attention-grabbing part at the top. 

  return (
    <section className="relative w-full h-screen mx-auto">
      {/* 
        This is the main container for the Hero section. Let's break down the parts:
        - relative: This lets us position things inside it more easily.
        - w-full: Makes it take up the full width of the screen.
        - h-screen: Makes it as tall as the screen. 
        - mx-auto: Centers the container on the page.
      */}

      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        {/* 
          This div positions the content within the Hero section. 
          - styles.paddingX: Applies padding from the left and right sides (from our styles file).
          - absolute:  Positions it relative to the parent (the section above it).
          - inset-0:  A shortcut to position it at the top-left corner.
          - top-[120px]:  Moves it down a bit from the very top.
          - max-w-7xl: Sets a maximum width so it doesn't get too wide on big screens.
          - mx-auto:  Centers the content horizontally.
          - flex flex-row items-start gap-5: These control how items are arranged inside. 
              - flex:  Makes it a flexbox container.
              - flex-row:  Arranges items in a row.
              - items-start: Aligns items to the top of the row.
              - gap-5: Adds some spacing between the items. 
        */}

        <div className="flex flex-col justify-center items-center mt-5">
          {/* 
            This div is for the small circle and vertical line.
            - flex flex-col: Arranges items vertically in a column.
            - justify-center: Centers items vertically.
            - items-center: Centers items horizontally.
            - mt-5: Adds some top margin.
          */}
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          {/* This is the small purple circle. */}

          <div className="w-1 h-40 sm:h-80 rounded-full violet-gradient" />
          {/* This is the vertical gradient line. */}
        </div>

        <div>
          {/* This div holds the main heading and paragraph text. */}
          <h1 className={`${styles.heroHeadText} text-white`}>
            {/* 
              This is the main heading.
              - styles.heroHeadText: Applies heading styles from our styles file.
              - text-white:  Makes the text white.
            */}
            Yo, It's me <span className="text-[#401d8d]  transition duration-700 ease-in-out hover:text-red-800">NEAZYIT</span>
            {/* 
              This is the "NEAZYIT" part, which has a purple color.
              - text-[#401d8d]: Sets the initial purple color. 
              - transition:  Makes color changes smooth.
              - duration-300: Sets the transition time to 0.3 seconds.
              - ease-in-out:  Specifies the transition speed curve.
              - hover:text-purple-800: Changes the color to a darker purple on hover.
            */}
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {/* 
              This is the paragraph text below the main heading.
              - styles.heroSubText: Applies paragraph styles from our styles file.
              - mt-2: Adds some top margin.
              - text-white-100:  Makes the text white. 
            */}
            🚀 Aspiring Sorcerer of Code, weaving spells in the realm of software development! 🧙‍♂️ 🌐 Junior Software Dev | Networking & DevOps Enthusiast | Lifelong ✨
          </p>
        </div>

        <ComputersCanvas /> {/* This renders the 3DComputer canvas. */}

      </div>
    </section>
  );
};

export default Hero; 
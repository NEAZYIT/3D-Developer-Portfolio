import { motion } from 'framer-motion'; // Library for creating cool animations

import { styles } from '../styles'; // Import our website's styling from the styles file

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
          <div className="w-5 h-5 rounded-full bg-[#5025bd]" />
          {/* This is the small purple circle. */}

          <div className="w-1 h-40 sm:h-80 rounded-full violet-gradient" />
          {/* This is the vertical gradient line. */}
        </div>

        <div className="text-center py-12">
          {/* This div holds the main heading and paragraph text. */}
          <h1 className={`${styles.heroHeadText} text-white text-5xl font-bold mb-6`}>
            {/* 
              This is the main heading.
              - styles.heroHeadText: Applies heading styles from our styles file.
              - text-white: Makes the text white.
              - text-5xl: Increases the font size to extra large.
              - font-bold: Applies a bold font weight.
              - mb-6: Adds some bottom margin for separation.
            */}
            Yo, It's me <span className="text-purple-700 transition duration-500 ease-in-out hover:text-red-500">NEAZYIT</span>
            {/* 
              This is the "NEAZYIT" part, which has a purple color.
              - text-purple-700: Sets the initial purple color.
              - transition: Makes color changes smooth.
              - duration-500: Sets the transition time to 0.5 seconds.
              - ease-in-out: Specifies the transition speed curve.
              - hover:text-red-500: Changes the color to red on hover.
            */}
          </h1>
          <p className={`${styles.heroSubText} text-white text-lg mb-8`}>
            {/* 
              This is the paragraph text below the main heading.
              - styles.heroSubText: Applies paragraph styles from our styles file.
              - text-white: Makes the text white.
              - text-lg: Increases the font size to large.
              - mb-8: Adds some bottom margin for separation.
            */}
            🚀 Aspiring Sorcerer of Code, weaving spells in the realm of software development! 🧙‍♂️ 🌐 Junior Software Dev | Networking & DevOps Enthusiast | Lifelong ✨
          </p>
        </div>

        {/* Right Side Elements*/}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#5025bd]" />
          <div className="w-1 h-40 sm:h-80 rounded-full violet-gradient" />
        </div>

      </div>

      {/* This div is the main container for the animated button. */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        {/* 
              - This div is the main container for the animated button.
              - It's positioned absolutely, meaning it sits on top of other content.
              - xs:bottom-10 bottom-32 controls its distance from the bottom on different screen sizes.
              - flex justify-center items-center centers the button horizontally and vertically.
            */}
        <a href="#about">
          {/* 
              - This <a> tag turns the button into a link to the section with the id "about".
             */}
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            {/* 
              - This div styles the outer part of the button.
              - w-[35px] h-[64px] sets its width and height.
              - rounded-3xl gives it rounded corners.
              - border-4 border-secondary adds a border.
              - flex justify-center items-start positions the inner circle at the top.
              - p-2 adds some internal padding.
             */}
            <motion.div
              animate={{ y: [0, 29, 0] }}
              transition={{
                duration: 1.9,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            >
              {/* 
              - This motion.div is the inner circle that animates.
              - animate={{ y: [0, 29, 0] }} makes it move up and down 29 pixels.
              - transition controls the animation speed, repetition, and type.
              - className styles the circle with a specific size, shape, and color. 
               */}
            </motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero; 
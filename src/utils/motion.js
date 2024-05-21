/**
 * This function creates an animation for text elements, making them slide up and fade in.
 *
 * @param {number} delay The delay before the animation starts (in seconds).
 *
 * @returns {object} An object containing the animation properties.
 *
 * @example
 * ```javascript
 * import { textVariant } from './utilty/motion';
 *
 * <motion.h1 variants={textVariant(0.5)}>Hello, World!</motion.h1>
 * ```
 * This will make the "Hello, World!" heading slide up and fade in with a delay of 0.5 seconds.
 */
export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50, // Initial position: 50 pixels above the final position
      opacity: 0, // Initial opacity: fully transparent
    },
    show: {
      y: 0, // Final position: at its normal position
      opacity: 1, // Final opacity: fully opaque
      transition: {
        type: "spring", // Type of animation: spring-like for a more natural feel
        duration: 1.25, // Duration of the animation: 1.25 seconds
        delay: delay, // Delay before the animation starts: based on the provided delay
      },
    },
  };
};


/**
 * This function creates an animation for elements that fade in from a specified direction.
 *
 * @param {string} direction The direction from which the element fades in (e.g., "left", "right", "up", "down").
 * @param {string} type The type of animation (e.g., "spring", "tween").
 * @param {number} delay The delay before the animation starts (in seconds).
 * @param {number} duration The duration of the animation (in seconds).
 *
 * @returns {object} An object containing the animation properties.
 *
 * @example
 * ```javascript
 * import { fadeIn } from './utility/motion';
 *
 * <motion.div variants={fadeIn("left", "spring", 0.5, 1)}>...</motion.div>
 * ```
 * This will make the div element fade in from the left with a delay of 0.5 seconds and a duration of 1 second.
 */
export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0, // Initial position: off-screen in the specified direction
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0, // Initial position: off-screen in the specified direction
      opacity: 0, // Initial opacity: fully transparent
    },
    show: {
      x: 0, // Final position: at its normal position
      y: 0, // Final position: at its normal position
      opacity: 1, // Final opacity: fully opaque
      transition: {
        type: type, // Type of animation: based on the provided type
        delay: delay, // Delay before the animation starts: based on the provided delay
        duration: duration, // Duration of the animation: based on the provided duration
        ease: "easeOut", // Easing function: "easeOut" for a smoother animation
      },
    },
  };
};

/**
 * This function creates an animation for elements that zoom in from a small size.
 *
 * @param {number} delay The delay before the animation starts (in seconds).
 * @param {number} duration The duration of the animation (in seconds).
 *
 * @returns {object} An object containing the animation properties.
 *
 * @example
 * ```javascript
 * import { zoomIn } from './utility/motion';
 *
 * <motion.div variants={zoomIn(0.5, 1)}>...</motion.div>
 * ```
 * This will make the div element zoom in from a small size with a delay of 0.5 seconds and a duration of 1 second.
 */
export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0, // Initial scale: 0 (very small)
      opacity: 0, // Initial opacity: fully transparent
    },
    show: {
      scale: 1, // Final scale: 1 (normal size)
      opacity: 1, // Final opacity: fully opaque
      transition: {
        type: "tween", // Type of animation: "tween" for a smooth scaling effect
        delay: delay, // Delay before the animation starts: based on the provided delay
        duration: duration, // Duration of the animation: based on the provided duration
        ease: "easeOut", // Easing function: "easeOut" for a smoother animation
      },
    },
  };
};

/**
 * This function creates an animation for elements that slide in from a specified direction.
 *
 * @param {string} direction The direction from which the element slides in (e.g., "left", "right", "up", "down").
 * @param {string} type The type of animation (e.g., "spring", "tween").
 * @param {number} delay The delay before the animation starts (in seconds).
 * @param {number} duration The duration of the animation (in seconds).
 *
 * @returns {object} An object containing the animation properties.
 *
 * @example
 * ```javascript
 * import { slideIn } from './utility/motion';
 *
 * <motion.div variants={slideIn("right", "spring", 0.5, 1)}>...</motion.div>
 * ```
 * This will make the div element slide in from the right with a delay of 0.5 seconds and a duration of 1 second.
 */
export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0, // Initial position: off-screen in the specified direction
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0, // Initial position: off-screen in the specified direction
    },
    show: {
      x: 0, // Final position: at its normal position
      y: 0, // Final position: at its normal position
      transition: {
        type: type, // Type of animation: based on the provided type
        delay: delay, // Delay before the animation starts: based on the provided delay
        duration: duration, // Duration of the animation: based on the provided duration
        ease: "easeOut", // Easing function: "easeOut" for a smoother animation
      },
    },
  };
};

/**
 * This function creates an animation for a container element, making its children animate with a staggered delay.
 *
 * @param {boolean} staggerChildren Whether the children of the container should have staggered animations.
 * @param {number} delayChildren The delay between each child's animation (in seconds).
 *
 * @returns {object} An object containing the animation properties.
 *
 * @example
 * ```javascript
 * import { staggerContainer } from './utility/motion';
 *
 * <motion.ul variants={staggerContainer(true, 0.1)}>
 *   <motion.li>Item 1</motion.li>
 *   <motion.li>Item 2</motion.li>
 *   <motion.li>Item 3</motion.li>
 * </motion.ul>
 * ```
 * This will make the list items animate with a staggered delay of 0.1 seconds between each item.
 */
export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {}, // Initial state: empty
    show: {
      transition: {
        staggerChildren: staggerChildren, // Whether children should be staggered: based on the provided staggerChildren
        delayChildren: delayChildren || 0, // Delay between children: based on the provided delayChildren or 0 if none is provided
      },
    },
  };
};
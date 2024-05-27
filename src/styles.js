/**
 * This file contains a collection of pre-defined styles that can be used to easily apply different looks to different parts of your website.
 *
 * It's like a toolbox full of design elements that make your website look consistent and professional.
 */

const styles = {
  /**
   * Adds horizontal padding to elements.
   *
   * - `sm:px-16`: Adds 16 pixels of padding on the left and right for screens that are medium size or larger.
   * - `px-6`: Adds 6 pixels of padding on the left and right for all other screen sizes.
   */
  paddingX: "sm:px-16 px-6",

  /**
   * Adds vertical padding to elements.
   *
   * - `sm:py-16`: Adds 16 pixels of padding on the top and bottom for screens that are medium size or larger.
   * - `py-6`: Adds 6 pixels of padding on the top and bottom for all other screen sizes.
   */
  paddingY: "sm:py-16 py-6",

  /**
   * Adds padding to all sides of elements.
   *
   * - `sm:px-16`: Adds 16 pixels of padding on the left and right for screens that are medium size or larger.
   * - `px-6`: Adds 6 pixels of padding on the left and right for all other screen sizes.
   * - `sm:py-16`: Adds 16 pixels of padding on the top and bottom for screens that are medium size or larger.
   * - `py-10`: Adds 10 pixels of padding on the top and bottom for all other screen sizes.
   */
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  /**
   * Styles for the main heading on the homepage (like a welcome message).
   *
   * - `font-black`: Uses a very bold font weight.
   * - `text-white`: Sets the text color to white.
   * - `lg:text-[80px]`: Sets the text size to 80 pixels for large screens.
   * - `sm:text-[60px]`: Sets the text size to 60 pixels for medium screens.
   * - `xs:text-[50px]`: Sets the text size to 50 pixels for small screens.
   * - `text-[40px]`: Sets the text size to 40 pixels for extra small screens.
   * - `lg:leading-[98px]`: Sets the line height to 98 pixels for large screens.
   * - `mt-2`: Adds a 2 pixel margin at the top.
   */
  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",

  /**
   * Styles for the subheading on the homepage.
   *
   * - `text-[#dfd9ff]`: Sets the text color to a light purple.
   * - `font-medium`: Uses a medium font weight.
   * - `lg:text-[30px]`: Sets the text size to 30 pixels for large screens.
   * - `sm:text-[20px]`: Sets the text size to 20 pixels for medium screens.
   * - `xs:text-[20px]`: Sets the text size to 20 pixels for small screens.
   * - `text-[16px]`: Sets the text size to 16 pixels for extra small screens.
   * - `lg:leading-[40px]`: Sets the line height to 40 pixels for large screens.
   */
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[20px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  /**
   * Styles for headings in other sections of your website.
   *
   * - `text-white`: Sets the text color to white.
   * - `font-black`: Uses a very bold font weight.
   * - `md:text-[60px]`: Sets the text size to 60 pixels for medium screens or larger.
   * - `sm:text-[50px]`: Sets the text size to 50 pixels for small screens.
   * - `xs:text-[40px]`: Sets the text size to 40 pixels for extra small screens.
   * - `text-[30px]`: Sets the text size to 30 pixels for extra extra small screens.
   */
  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",

  /**
   * Styles for subheadings in other sections of your website.
   *
   * - `sm:text-[18px]`: Sets the text size to 18 pixels for small screens or larger.
   * - `text-[14px]`: Sets the text size to 14 pixels for extra small screens.
   * - `text-secondary`: Uses a secondary color for the text (usually a lighter shade of the main color).
   * - `uppercase`: Makes all the letters uppercase.
   * - `tracking-wider`: Increases the spacing between letters.
   */
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};

/**
 * Makes the `styles` object available to other parts of your website so you can use these styles in different places.
 */
export { styles };

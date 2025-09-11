// Utility: get random number between -max and +max
function randomRange(max) {
  return (Math.random() * 2 - 1) * max;
}

function randomWithinRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Remap a value from one numeric range to another.
 * @param {number[]} fromRange - [min, max] of the source range
 * @param {number[]} toRange - [min, max] of the target range
 * @param {number} value - value to remap
 * @returns {number} remapped value
 */
function remap(fromRange, toRange, value, isClamped) {
  const [fromMin, fromMax] = fromRange;
  const [toMin, toMax] = toRange;

  // Calculate the ratio of the input within the source range
  const ratio = (value - fromMin) / (fromMax - fromMin);

  if (isClamped) {
    const clamped = Math.min(Math.max(ratio, 0), 1);
    return toMin + clamped * (toMax - toMin);
  } else {
    // Apply the ratio to the target range
    return toMin + ratio * (toMax - toMin);
  }
}

// Set random transforms to matching DOM elements
/**
 *
 * Example usage:
 * ```
 * scatterElements(
 *  'div.tech-icon-container > img',
 *  {
 *      maxRotation: 40,
 *      maxTranslateX: 10,
 *      maxTranslateY: 10,
 *      maxScale: 1.1
 *  },
 *  5
 * );
 * ```
 * @param {string} selector
 * @param {{ maxRotation:number, maxTranslateX:number, maxTranslateY:number, maxScale:number}} limits
 * @param {number} transition
 */
function scatterElements(selector = "img", limits, transition = 3) {
  const {
    maxRotation = 12,
    maxTranslateX = 4,
    maxTranslateY = 4,
    maxScale = 1.4,
  } = limits;
  document.querySelectorAll(selector).forEach((img) => {
    // if (Math.random() > 0.5) {
    //   return;
    // }
    const rotate = randomRange(maxRotation);
    const translateX = randomRange(maxTranslateX);
    const translateY = randomRange(maxTranslateY);
    const scale = randomWithinRange(0.6, maxScale);
    const blur = remap([0.6, maxScale], [5, 0], scale, true);
    const zIndex = remap([0.6, maxScale], [1, 1000], scale, true);

    img.style.transform = `scale(${scale}) rotate(${rotate}deg) translate(${translateX}px, ${translateY}px)`;
    img.style.filter = `blur(${blur}px)`;
    img.style.zIndex = zIndex;
    img.style.transition = `all ${transition}s cubic-bezier(0.69,0.00,0.00,1.03)`;
  });
}


// Utility: get random number between -max and +max
function randomRange(max) {
    return (Math.random() * 2 - 1) * max;
}

function randomWithinRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
 *      translateX: 10,
 *      translateY: 10,
 *      scale: 1.1
 *  },
 *  5
 * );
 * ```
 * @param {string} selector
 * @param {{ maxRotation:number, maxTranslateX:number, maxTranslateY:number, maxScale:number}} limits
 * @param {number} transition
 */
function scatterElements(selector = 'img', limits, transition = 3) {
    const { maxRotation = 12, maxTranslateX = 4, maxTranslateY = 4, maxScale = 1.4} = limits;
    document.querySelectorAll(selector).forEach(img => {
    if (Math.random() > 0.5){ return; }
    const rotate = randomRange(maxRotation);
    const translateX = randomRange(maxTranslateX);
    const translateY = randomRange(maxTranslateY);
    const scale = randomWithinRange(0.6, maxScale);

    img.style.transform = `scale(${scale}) rotate(${rotate}deg) translate(${translateX}px, ${translateY}px)`;
    img.style.transition = `all ${transition}s ease-in-out`;
    });
}
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

let registered = false;

/** Register GSAP plugins exactly once (browser only). */
export function registerGsap(): void {
  if (registered) {
    return;
  }
  gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleTextPlugin, TextPlugin, ScrollToPlugin);
  registered = true;
}

export function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

/** Code-flavoured glyph set for the scramble/decode effect. */
export const SCRAMBLE_CHARS = '01<>-_/[]{}=+*!?#';

export { gsap, ScrollTrigger, SplitText };

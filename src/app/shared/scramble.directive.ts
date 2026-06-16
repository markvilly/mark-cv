import { Directive, ElementRef, afterNextRender, inject, input } from '@angular/core';
import { SCRAMBLE_CHARS, ScrollTrigger, gsap, prefersReducedMotion, registerGsap } from './gsap-core';

/**
 * Decodes the host element's text with a "terminal scramble" effect.
 * `[gsapScramble]="'load' | 'scroll'"` — when to play (default: scroll-into-view).
 * Apply only to plain-text elements (no child elements).
 */
@Directive({ selector: '[gsapScramble]' })
export class ScrambleDirective {
  readonly on = input<'load' | 'scroll'>('scroll', { alias: 'gsapScrambleOn' });
  readonly delay = input<number>(0, { alias: 'gsapScrambleDelay' });

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  constructor() {
    afterNextRender(() => {
      const el = this.host.nativeElement;
      const finalText = (el.textContent ?? '').trim();
      if (!finalText || prefersReducedMotion()) {
        return;
      }
      registerGsap();

      const play = (): void => {
        gsap.fromTo(
          el,
          { opacity: 1 },
          {
            duration: Math.min(1.6, 0.6 + finalText.length * 0.035),
            ease: 'none',
            scrambleText: {
              text: finalText,
              chars: SCRAMBLE_CHARS,
              revealDelay: 0.12,
              speed: 0.5,
            },
          },
        );
      };

      if (this.on() === 'load') {
        gsap.delayedCall(this.delay(), play);
      } else {
        ScrollTrigger.create({ trigger: el, start: 'top 88%', once: true, onEnter: play });
      }
    });
  }
}

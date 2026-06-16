import {
  Directive,
  ElementRef,
  OnDestroy,
  afterNextRender,
  inject,
  input,
} from '@angular/core';
import { gsap, prefersReducedMotion, registerGsap } from './gsap-core';

/**
 * Types the host element through a list of phrases on a loop (TextPlugin).
 * `[gsapTypewriter]="['phrase 1', 'phrase 2', …]"`.
 * Under reduced motion it simply shows the first phrase, statically.
 * Apply to an `aria-hidden` element and keep an sr-only copy for assistive tech.
 */
@Directive({ selector: '[gsapTypewriter]' })
export class TypewriterDirective implements OnDestroy {
  readonly phrases = input<string[]>([], { alias: 'gsapTypewriter' });

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private timeline?: gsap.core.Timeline;

  constructor() {
    afterNextRender(() => {
      const el = this.host.nativeElement;
      const list = this.phrases().length ? this.phrases() : [(el.textContent ?? '').trim()];

      if (prefersReducedMotion()) {
        el.textContent = list[0] ?? '';
        return;
      }

      registerGsap();
      el.textContent = '';
      el.classList.add('typewriter');

      const tl = gsap.timeline({ repeat: -1, delay: 1 });
      for (const phrase of list) {
        tl.to(el, {
          duration: Math.max(0.8, phrase.length * 0.06),
          ease: 'none',
          text: { value: phrase, delimiter: '' },
        });
        tl.to(el, { duration: 3.6, ease: 'none' }); // hold long enough to read
        tl.to(el, {
          duration: Math.max(0.45, phrase.length * 0.03),
          ease: 'none',
          text: { value: '', delimiter: '' },
        });
        tl.to(el, { duration: 0.4, ease: 'none' }); // brief beat before next phrase
      }
      this.timeline = tl;
    });
  }

  ngOnDestroy(): void {
    this.timeline?.kill();
  }
}

import {
  Directive,
  ElementRef,
  OnDestroy,
  afterNextRender,
  inject,
  input,
} from '@angular/core';
import { SplitText, ScrollTrigger, gsap, prefersReducedMotion, registerGsap } from './gsap-core';

/**
 * Splits the host text and reveals it with a soft stagger.
 * `[gsapSplitReveal]="'chars' | 'lines'"` — split granularity (default: lines).
 * `gsapSplitRevealOn="'load' | 'scroll'"` — trigger (default: scroll-into-view).
 * Chars get a blur fade (great for the hero name); lines clip-reveal behind a mask.
 */
@Directive({ selector: '[gsapSplitReveal]' })
export class SplitRevealDirective implements OnDestroy {
  readonly splitType = input<'chars' | 'lines'>('lines', { alias: 'gsapSplitRevealType' });
  readonly on = input<'load' | 'scroll'>('scroll', { alias: 'gsapSplitRevealOn' });
  readonly delay = input<number>(0, { alias: 'gsapSplitRevealDelay' });

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private split?: SplitText;
  private trigger?: ScrollTrigger;

  constructor() {
    afterNextRender(() => {
      if (prefersReducedMotion()) {
        return;
      }
      registerGsap();
      const el = this.host.nativeElement;
      // Wait for fonts so line wrapping / glyph widths are final before splitting.
      const fonts = (document as Document & { fonts?: FontFaceSet }).fonts;
      if (fonts?.ready) {
        fonts.ready.then(() => this.animate(el));
      } else {
        this.animate(el);
      }
    });
  }

  private animate(el: HTMLElement): void {
    const chars = this.splitType() === 'chars';

    // Mask wraps each char/line in an overflow-clip box so the real glyph
    // (gradient and all) slides up into view — keeps bg-clip-text intact.
    this.split = new SplitText(el, {
      type: this.splitType(),
      mask: this.splitType(),
    } as ConstructorParameters<typeof SplitText>[1]);

    const targets = chars ? this.split.chars : this.split.lines;

    const tween = gsap.from(targets, {
      yPercent: 120,
      // Chars keep opacity (gradient-safe clip reveal); lines may also fade.
      opacity: chars ? 1 : 0,
      ease: chars ? 'back.out(1.3)' : 'power3.out',
      duration: chars ? 0.65 : 0.9,
      stagger: chars ? 0.03 : 0.12,
      delay: this.delay(),
      onComplete: () => this.split?.revert(),
    });

    if (this.on() === 'scroll') {
      tween.pause();
      this.trigger = ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => tween.play(),
      });
    }
  }

  ngOnDestroy(): void {
    this.trigger?.kill();
    this.split?.revert();
  }
}

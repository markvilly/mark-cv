import { Directive, ElementRef, OnDestroy, OnInit, inject, input } from '@angular/core';

/**
 * Scroll-reveal: fades/slides the host in when it enters the viewport.
 * Usage: `<div reveal>` or `<div [reveal]="120">` (stagger delay in ms).
 * No-ops entirely under prefers-reduced-motion.
 */
@Directive({
  selector: '[reveal]',
})
export class RevealDirective implements OnInit, OnDestroy {
  /** Stagger delay in milliseconds. */
  readonly reveal = input<number | string>(0);

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const el = this.host.nativeElement;
    el.classList.add('reveal');

    const delay = Number(this.reveal()) || 0;
    if (delay > 0) {
      el.style.setProperty('--reveal-delay', `${delay}ms`);
    }

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.observer?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}

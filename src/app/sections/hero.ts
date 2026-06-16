import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent } from '../shared/icon';
import { RevealDirective } from '../shared/reveal.directive';
import { ScrambleDirective } from '../shared/scramble.directive';
import { SplitRevealDirective } from '../shared/split-reveal.directive';
import { TypewriterDirective } from '../shared/typewriter.directive';
import { INFO, TAGLINE } from '../data/resume';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IconComponent,
    RevealDirective,
    ScrambleDirective,
    SplitRevealDirective,
    TypewriterDirective,
  ],
  template: `
    <section id="top" class="relative overflow-x-clip px-6 pt-36 pb-16 sm:px-8 sm:pt-44 sm:pb-24">
      <div class="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
        <!-- Intro -->
        <div reveal>
          <p class="eyebrow mb-5 flex items-center gap-2.5">
            <span class="inline-block h-px w-8 bg-accent/70"></span>
            <span gsapScramble gsapScrambleOn="load" [gsapScrambleDelay]="0.25">// {{ info.roleShort }}</span>
          </p>

          <span
            class="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-3 py-1.5 text-sm"
          >
            <span class="relative flex h-2 w-2">
              <span
                class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-75 motion-reduce:animate-none"
              ></span>
              <span class="relative inline-flex h-2 w-2 rounded-full bg-sage"></span>
            </span>
            {{ info.availability }}
          </span>

          <h1 class="font-display text-[2.65rem] leading-[1.04] sm:text-6xl lg:text-[4.7rem]">
            <span class="mb-2 block font-mono text-base font-normal tracking-tight text-ink-soft">
              Hi, I'm
            </span>
            <span
              class="inline-block"
              gsapSplitReveal
              gsapSplitRevealType="chars"
              gsapSplitRevealOn="load"
              [gsapSplitRevealDelay]="0.2"
            >Mark Paul <span class="text-accent">Nkulila</span></span>
          </h1>

          <p class="mt-5 font-display text-lg text-ink sm:text-xl">{{ info.title }}</p>
          <p
            class="mt-4 min-h-[5.5rem] max-w-xl text-lg leading-relaxed text-ink-soft sm:min-h-[3.5rem]"
          >
            <span class="sr-only">{{ tagline }}</span>
            <span aria-hidden="true" [gsapTypewriter]="taglinePhrases"></span>
          </p>

          <div class="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" class="btn btn-primary">
              Get in touch <app-icon name="arrow-up-right" [size]="18" />
            </a>
            <a href="#work" class="btn btn-ghost">View work</a>
          </div>

          <div class="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-ink-soft">
            <span class="inline-flex items-center gap-2">
              <app-icon name="pin" [size]="16" /> {{ info.location }}
            </span>
            <span class="hidden h-4 w-px bg-border sm:block"></span>
            <div class="flex items-center gap-1">
              <a
                [href]="info.socials.github.href"
                target="_blank"
                rel="noopener"
                class="grid h-9 w-9 place-items-center rounded-full transition hover:bg-surface-2 hover:text-accent"
                aria-label="GitHub profile"
              >
                <app-icon name="github" [size]="18" />
              </a>
              <a
                [href]="info.socials.linkedin.href"
                target="_blank"
                rel="noopener"
                class="grid h-9 w-9 place-items-center rounded-full transition hover:bg-surface-2 hover:text-accent"
                aria-label="LinkedIn profile"
              >
                <app-icon name="linkedin" [size]="18" />
              </a>
              <a
                [href]="'mailto:' + info.email"
                class="grid h-9 w-9 place-items-center rounded-full transition hover:bg-surface-2 hover:text-accent"
                aria-label="Send an email"
              >
                <app-icon name="mail" [size]="18" />
              </a>
            </div>
          </div>
        </div>

        <!-- Portrait -->
        <div [reveal]="120" class="relative mx-auto w-full max-w-sm">
          <div class="blob animate-float -top-10 -left-10 h-44 w-44" style="background: var(--clay)"></div>
          <div
            class="blob animate-float -right-8 -bottom-12 h-48 w-48"
            style="background: var(--sage); animation-delay: -5s"
          ></div>

          <div class="glass relative rounded-[2rem] p-3">
            <div class="photo-mono aspect-[4/5] w-full overflow-hidden rounded-[1.5rem]">
              <img src="Mark.jpeg" alt="Portrait of Mark Paul Nkulila" />
            </div>
            <div class="mt-3 px-1.5">
              <span class="tag">// mark_paul.jpeg</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {
  protected readonly info = INFO;
  protected readonly tagline = TAGLINE;
  protected readonly taglinePhrases = [
    'I turn Figma into pixel-accurate, accessible interfaces.',
    'I wire clean UIs to robust REST APIs, end to end.',
    'Angular · React · Next.js · Flutter · NestJS.',
  ];
}

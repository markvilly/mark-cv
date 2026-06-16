import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent } from '../shared/icon';
import { RevealDirective } from '../shared/reveal.directive';
import { ScrambleDirective } from '../shared/scramble.directive';
import { SplitRevealDirective } from '../shared/split-reveal.directive';
import { INFO, PROFILE_TRAITS, SPOKEN_LANGUAGES, SUMMARY } from '../data/resume';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, RevealDirective, ScrambleDirective, SplitRevealDirective],
  template: `
    <section id="about" class="relative px-6 py-24 sm:px-8 sm:py-28">
      <div class="mx-auto max-w-6xl">
        <header reveal class="mb-12 max-w-2xl">
          <p class="eyebrow mb-3" gsapScramble>01 // about</p>
          <h2 class="text-3xl sm:text-4xl" gsapSplitReveal>Frontend-led, end to end</h2>
        </header>

        <div class="grid gap-6 lg:grid-cols-[1.45fr_1fr]">
          <div reveal class="glass rounded-[2rem] p-8 sm:p-10">
            @for (line of summary; track $index) {
              <p class="mb-4 text-lg leading-relaxed text-ink last:mb-0">{{ line }}</p>
            }

            <div class="mt-7 flex flex-wrap gap-2">
              @for (trait of traits; track trait) {
                <span class="pill"><app-icon name="check" [size]="14" /> {{ trait }}</span>
              }
            </div>
          </div>

          <div [reveal]="120" class="grid content-start gap-4">
            <div class="glass rounded-2xl p-5">
              <p class="eyebrow mb-2">based in</p>
              <p class="inline-flex items-center gap-2 text-lg">
                <app-icon name="pin" [size]="18" /> {{ info.location }}
              </p>
            </div>

            <div class="glass rounded-2xl p-5">
              <p class="eyebrow mb-3">languages</p>
              <ul class="flex flex-col gap-2.5">
                @for (lang of languages; track lang.name) {
                  <li class="flex items-center justify-between">
                    <span>{{ lang.name }}
                      <span class="text-sm text-ink-soft">· {{ lang.note }}</span>
                    </span>
                    <span class="tag rounded-full border border-border px-2 py-0.5">{{ lang.level }}</span>
                  </li>
                }
              </ul>
            </div>

            <div class="glass rounded-2xl p-5">
              <p class="eyebrow mb-2">status</p>
              <p class="inline-flex items-center gap-2">
                <span class="h-2 w-2 rounded-full bg-sage"></span> {{ info.availability }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {
  protected readonly info = INFO;
  protected readonly summary = SUMMARY;
  protected readonly traits = PROFILE_TRAITS;
  protected readonly languages = SPOKEN_LANGUAGES;
}

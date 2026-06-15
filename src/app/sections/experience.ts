import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent } from '../shared/icon';
import { RevealDirective } from '../shared/reveal.directive';
import { EDUCATION, EXPERIENCE } from '../data/resume';

@Component({
  selector: 'app-experience',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, RevealDirective],
  template: `
    <section id="work" class="relative px-6 py-24 sm:px-8 sm:py-28">
      <div class="mx-auto max-w-6xl">
        <header reveal class="mb-12 max-w-2xl">
          <p class="eyebrow mb-3">03 // experience</p>
          <h2 class="text-3xl sm:text-4xl">Where I've been shipping</h2>
        </header>

        <div class="grid gap-5">
          @for (job of experience; track job.company; let i = $index) {
            <article [reveal]="i * 90" class="glass rounded-[1.5rem] p-7 sm:p-8">
              <div class="flex flex-wrap items-start justify-between gap-x-4 gap-y-3">
                <div>
                  <div class="flex items-center gap-2.5">
                    <span class="grid h-9 w-9 place-items-center rounded-xl bg-accent/15 text-accent">
                      <app-icon name="briefcase" [size]="18" />
                    </span>
                    <h3 class="text-xl sm:text-2xl">{{ job.company }}</h3>
                  </div>
                  <p class="mt-2 text-ink-soft">{{ job.role }}</p>
                </div>

                <div class="flex flex-col items-end gap-2">
                  <span class="pill whitespace-nowrap">
                    @if (job.current) {
                      <span class="h-1.5 w-1.5 rounded-full bg-sage"></span>
                    }
                    {{ job.period }}
                  </span>
                  <span class="tag">{{ job.type }}</span>
                </div>
              </div>

              <ul class="mt-6 grid gap-2.5 sm:grid-cols-2">
                @for (point of job.highlights; track point) {
                  <li class="flex gap-3 text-ink-soft">
                    <span class="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent/70"></span>
                    <span>{{ point }}</span>
                  </li>
                }
              </ul>
            </article>
          }

          <!-- Education -->
          <article [reveal]="180" class="glass rounded-[1.5rem] p-7 sm:p-8">
            <div class="flex flex-wrap items-start justify-between gap-x-4 gap-y-3">
              <div>
                <div class="flex items-center gap-2.5">
                  <span class="grid h-9 w-9 place-items-center rounded-xl bg-sage/20 text-sage">
                    <app-icon name="cap" [size]="18" />
                  </span>
                  <h3 class="text-xl sm:text-2xl">{{ education.institution }}</h3>
                </div>
                <p class="mt-2 text-ink-soft">{{ education.degree }}</p>
              </div>
              <span class="pill whitespace-nowrap">{{ education.period }}</span>
            </div>
            <p class="mt-5 text-ink-soft">{{ education.coursework }}</p>
          </article>
        </div>
      </div>
    </section>
  `,
})
export class ExperienceComponent {
  protected readonly experience = EXPERIENCE;
  protected readonly education = EDUCATION;
}

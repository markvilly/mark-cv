import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent } from '../shared/icon';
import { RevealDirective } from '../shared/reveal.directive';
import { ScrambleDirective } from '../shared/scramble.directive';
import { SplitRevealDirective } from '../shared/split-reveal.directive';
import { SKILL_GROUPS } from '../data/resume';

@Component({
  selector: 'app-skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, RevealDirective, ScrambleDirective, SplitRevealDirective],
  template: `
    <section id="skills" class="relative px-6 py-24 sm:px-8 sm:py-28">
      <div class="mx-auto max-w-6xl">
        <header reveal class="mb-12 max-w-2xl">
          <p class="eyebrow mb-3" gsapScramble>02 // skills</p>
          <h2 class="text-3xl sm:text-4xl" gsapSplitReveal>The stack I build with</h2>
        </header>

        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          @for (group of groups; track group.id; let i = $index) {
            <article [reveal]="i * 70" class="glass rounded-[1.5rem] p-6">
              <div class="mb-4 flex items-center justify-between">
                <p class="eyebrow inline-flex items-center gap-2">
                  <app-icon name="code" [size]="14" /> {{ group.label }}
                </p>
                <span class="tag">[{{ group.items.length }}]</span>
              </div>
              <div class="flex flex-wrap gap-2">
                @for (item of group.items; track item) {
                  <span class="pill">{{ item }}</span>
                }
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class SkillsComponent {
  protected readonly groups = SKILL_GROUPS;
}

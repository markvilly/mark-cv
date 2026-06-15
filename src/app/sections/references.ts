import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent } from '../shared/icon';
import { RevealDirective } from '../shared/reveal.directive';
import { REFERENCES, type ReferenceItem } from '../data/resume';

@Component({
  selector: 'app-references',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, RevealDirective],
  template: `
    <section id="references" class="relative px-6 py-24 sm:px-8 sm:py-28">
      <div class="mx-auto max-w-6xl">
        <header reveal class="mb-12 max-w-2xl">
          <p class="eyebrow mb-3">04 // references</p>
          <h2 class="text-3xl sm:text-4xl">People who'll vouch for me</h2>
        </header>

        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          @for (ref of references; track ref.name; let i = $index) {
            <article [reveal]="i * 80" class="glass flex flex-col rounded-2xl p-6">
              <div class="flex items-center gap-3">
                <span
                  class="grid h-11 w-11 flex-none place-items-center rounded-full bg-accent/15 font-display font-semibold text-accent"
                >{{ initials(ref) }}</span>
                <div>
                  <h3 class="text-lg leading-tight">{{ ref.name }}</h3>
                  <p class="text-sm text-ink-soft">{{ ref.role }}</p>
                </div>
              </div>

              <p class="mt-4 text-sm text-ink-soft">{{ ref.company }}</p>

              <div class="mt-4 flex flex-col gap-2 border-t border-border pt-4 text-sm">
                @if (ref.email) {
                  <a
                    [href]="'mailto:' + ref.email"
                    class="inline-flex items-center gap-2 break-all transition hover:text-accent"
                  >
                    <app-icon name="mail" [size]="15" /> {{ ref.email }}
                  </a>
                }
                <a
                  [href]="tel(ref.phone)"
                  class="inline-flex items-center gap-2 transition hover:text-accent"
                >
                  <app-icon name="phone" [size]="15" /> {{ ref.phone }}
                </a>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class ReferencesComponent {
  protected readonly references = REFERENCES;

  protected initials(ref: ReferenceItem): string {
    return ref.name
      .split(' ')
      .map((part) => part.charAt(0))
      .slice(0, 2)
      .join('')
      .toUpperCase();
  }

  protected tel(phone: string): string {
    return 'tel:' + phone.replaceAll(' ', '');
  }
}

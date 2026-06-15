import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent } from '../shared/icon';
import { RevealDirective } from '../shared/reveal.directive';
import { INFO } from '../data/resume';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, RevealDirective],
  template: `
    <section id="contact" class="relative px-6 py-24 sm:px-8 sm:py-28">
      <div class="mx-auto max-w-6xl">
        <div reveal class="glass relative overflow-hidden rounded-[2.5rem] p-10 text-center sm:p-14">
          <div class="blob -top-16 -left-10 h-52 w-52" style="background: var(--clay)"></div>
          <div class="blob -right-12 -bottom-16 h-56 w-56" style="background: var(--rose)"></div>

          <div class="relative">
            <p class="eyebrow mb-4">05 // contact</p>
            <h2 class="mx-auto max-w-2xl text-4xl sm:text-5xl">
              Let's build something soft, sharp &amp; well-made.
            </h2>
            <p class="mx-auto mt-5 max-w-lg text-lg text-ink-soft">
              Open to freelance work and full-time roles — available immediately. Drop a line and
              let's talk.
            </p>

            <div class="mt-8 flex flex-wrap justify-center gap-3">
              <a [href]="'mailto:' + info.email" class="btn btn-primary">
                <app-icon name="mail" [size]="18" /> {{ info.email }}
              </a>
              <a [href]="tel(info.phone)" class="btn btn-ghost">
                <app-icon name="phone" [size]="18" /> {{ info.phone }}
              </a>
            </div>

            <div class="mt-8 flex justify-center gap-2">
              <a
                [href]="info.socials.github.href"
                target="_blank"
                rel="noopener"
                class="glass grid h-11 w-11 place-items-center rounded-full transition hover:-translate-y-1 hover:text-accent"
                aria-label="GitHub profile"
              >
                <app-icon name="github" [size]="19" />
              </a>
              <a
                [href]="info.socials.linkedin.href"
                target="_blank"
                rel="noopener"
                class="glass grid h-11 w-11 place-items-center rounded-full transition hover:-translate-y-1 hover:text-accent"
                aria-label="LinkedIn profile"
              >
                <app-icon name="linkedin" [size]="19" />
              </a>
            </div>
          </div>
        </div>

        <footer
          class="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 text-center sm:flex-row sm:text-left"
        >
          <p class="tag inline-flex items-center gap-1.5">
            <app-icon name="sparkles" [size]="14" /> crafted with Angular 22 + Tailwind v4 · Dar es
            Salaam
          </p>
          <p class="tag">© {{ year }} {{ info.name }}</p>
        </footer>
      </div>
    </section>
  `,
})
export class ContactComponent {
  protected readonly info = INFO;
  protected readonly year = new Date().getFullYear();

  protected tel(phone: string): string {
    return 'tel:' + phone.replaceAll(' ', '');
  }
}

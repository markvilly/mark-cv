import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeService } from '../core/theme.service';
import { IconComponent } from '../shared/icon';

@Component({
  selector: 'app-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  template: `
    <header class="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        class="glass mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full px-3 py-2.5 sm:px-5"
        aria-label="Primary"
      >
        <a href="#top" class="flex items-center gap-2.5" aria-label="Back to top">
          <span
            class="grid h-9 w-9 place-items-center rounded-xl bg-accent font-display text-sm font-bold text-accent-ink"
          >MP</span>
          <span class="hidden font-display text-[0.95rem] font-semibold sm:block">Mark Paul</span>
        </a>

        <ul class="hidden items-center gap-0.5 md:flex">
          @for (link of links; track link.href) {
            <li>
              <a
                [href]="link.href"
                class="rounded-full px-3.5 py-2 text-sm text-ink-soft transition hover:bg-surface-2 hover:text-ink"
              >{{ link.label }}</a>
            </li>
          }
        </ul>

        <div class="flex items-center gap-1">
          <button
            type="button"
            (click)="print()"
            class="hidden h-9 w-9 place-items-center rounded-full text-ink-soft transition hover:bg-surface-2 hover:text-ink sm:grid"
            aria-label="Print or save as PDF"
          >
            <app-icon name="printer" [size]="18" />
          </button>
          <button
            type="button"
            (click)="theme.toggle()"
            class="grid h-9 w-9 place-items-center rounded-full text-ink-soft transition hover:bg-surface-2 hover:text-ink"
            [attr.aria-label]="theme.theme() === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
          >
            @if (theme.theme() === 'dark') {
              <app-icon name="sun" [size]="18" />
            } @else {
              <app-icon name="moon" [size]="18" />
            }
          </button>
        </div>
      </nav>
    </header>
  `,
})
export class NavComponent {
  protected readonly theme = inject(ThemeService);

  protected readonly links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Work', href: '#work' },
    { label: 'References', href: '#references' },
    { label: 'Contact', href: '#contact' },
  ];

  protected print(): void {
    window.print();
  }
}

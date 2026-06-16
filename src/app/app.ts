import { ChangeDetectionStrategy, Component, HostListener, inject } from '@angular/core';
import { ThemeService } from './core/theme.service';
import { gsap, prefersReducedMotion, registerGsap } from './shared/gsap-core';
import { NavComponent } from './sections/nav';
import { HeroComponent } from './sections/hero';
import { AboutComponent } from './sections/about';
import { SkillsComponent } from './sections/skills';
import { ExperienceComponent } from './sections/experience';
import { ReferencesComponent } from './sections/references';
import { ContactComponent } from './sections/contact';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NavComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ReferencesComponent,
    ContactComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // Eagerly construct the theme service so the <html class="dark"> effect runs on boot.
  private readonly theme = inject(ThemeService);

  /** GSAP-eased smooth scrolling for in-page anchor links (#top, #contact, #work …). */
  @HostListener('document:click', ['$event'])
  protected onDocumentClick(event: MouseEvent): void {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey) {
      return;
    }
    const link = (event.target as HTMLElement | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
    const hash = link?.getAttribute('href');
    if (!hash || hash === '#') {
      return;
    }
    const target = document.querySelector(hash);
    if (!target) {
      return;
    }
    event.preventDefault();
    registerGsap();
    gsap.to(window, {
      duration: prefersReducedMotion() ? 0 : 1.15,
      ease: 'power2.inOut',
      scrollTo: { y: target as HTMLElement, offsetY: 80 },
      onComplete: () => history.replaceState(null, '', hash),
    });
  }
}

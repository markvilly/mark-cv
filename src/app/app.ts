import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeService } from './core/theme.service';
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
}

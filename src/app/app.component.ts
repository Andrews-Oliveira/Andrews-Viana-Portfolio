import {Component, signal} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

type Theme = 'dark' | 'light';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html'
})
export class AppComponent {
  readonly mobileMenu = signal(false);
  readonly theme = signal<Theme>(this.getSavedTheme());

  constructor() {
    this.applyTheme(this.theme());
  }

  toggleTheme(): void {
    const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(next);
    this.applyTheme(next);
    try { window.localStorage.setItem('portfolio-theme', next); } catch { /* O armazenamento pode estar indisponível */ }
  }

  private getSavedTheme(): Theme {
    if (typeof window === 'undefined') return 'dark';
    try {
      return window.localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  }

  private applyTheme(value: Theme): void {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', value);
      const meta = document.querySelector('meta[name="theme-color"]');
      meta?.setAttribute('content', value === 'dark' ? '#0b1021' : '#fcfcff');
    }
  }
}

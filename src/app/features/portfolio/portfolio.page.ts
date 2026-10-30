import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {PORTFOLIO_PROFILE} from '../../core/data/portfolio.data';
import {PortfolioHeroComponent} from './components/portfolio-hero.component';
import {CareerTimelineComponent} from './components/career-timeline.component';
import {ProjectGalleryComponent} from './components/project-gallery.component';

@Component({
  standalone: true,
  imports: [RouterLink, PortfolioHeroComponent, CareerTimelineComponent, ProjectGalleryComponent],
  templateUrl: './portfolio.page.html'
})
export class PortfolioPage {
  readonly profile = PORTFOLIO_PROFILE;
  readonly currentYear = new Date().getFullYear();
}

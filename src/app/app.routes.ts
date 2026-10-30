import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', pathMatch: 'full', title: 'Andrews Viana | Desenvolvedor de Software & GenAI', loadComponent: () => import('./features/portfolio/portfolio.page').then(m => m.PortfolioPage)},
  {path: 'case/:slug', title: 'Estudo de caso | Andrews Viana', loadComponent: () => import('./features/case-study/case-study.page').then(m => m.CaseStudyPage)},
  {path: 'overview', title: 'Laboratório IA | Andrews Viana', loadComponent: () => import('./features/overview/overview.page').then(m => m.OverviewPage)},
  {path: 'workspace', title: 'Playground IA | Andrews Viana', loadComponent: () => import('./features/workspace/workspace.page').then(m => m.WorkspacePage)},
  {path: 'history', title: 'Histórico de demonstrações | Andrews Viana', loadComponent: () => import('./features/history/history.page').then(m => m.HistoryPage)},
  {path: 'about', title: 'Arquitetura do laboratório | Andrews Viana', loadComponent: () => import('./features/about/about.page').then(m => m.AboutPage)},
  {path: '**', redirectTo: ''}
];

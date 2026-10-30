import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
@Component({
  selector: 'app-lab-nav',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  template: `<div class="lab-subnav"><div class="lab-subnav-label"><span>✳</span><strong>GenAI Engineering Studio</strong><small>/ LABORATÓRIO</small></div><nav aria-label="Navegação do laboratório"><a routerLink="/overview" routerLinkActive="lab-nav-active">Visão geral</a><a routerLink="/workspace" routerLinkActive="lab-nav-active">Playground</a><a routerLink="/history" routerLinkActive="lab-nav-active">Histórico</a><a routerLink="/about" routerLinkActive="lab-nav-active">Arquitetura</a></nav><a routerLink="/" class="lab-back">← Portfólio</a></div>`
})
export class LabNavComponent {}

import {Component, input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {PortfolioProject} from '../../../core/models/portfolio.model';

@Component({
  selector: 'app-project-gallery',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="section projects-section" id="projetos" aria-labelledby="projects-title">
      <div class="container">
        <div class="section-heading"><div><span class="section-kicker"><span class="kicker-dot"></span> PROJETOS SELECIONADOS</span><h2 id="projects-title">Código que sai do papel<span class="text-violet">.</span></h2></div><p>Aplicações, estudos de caso e experimentos que conectam engenharia, produto e inteligência artificial.</p></div>
        <div class="projects-grid">
          @for(project of projects(); track project.index) {
            <article class="project-card" [class.project-card--featured]="project.index === '01'">
              <div class="project-art" [class.project-art--studio]="project.index === '01'" [class.project-art--procar]="project.index === '02'" [class.project-art--code]="project.index === '03'" [class.project-art--logs]="project.index === '04'">
                <span class="project-art-count">PROJECT / {{project.index}}</span>
                @switch(project.index) {
                  @case('01') {
                    <div class="art-studio-interface"><div class="art-studio-nav"><span class="art-mini-brand">✳</span><span>GenAI Studio</span><span class="art-dots">•••</span></div><div class="art-studio-caption">Análise inteligente</div><div class="art-studio-title">Seu código, mais claro.</div><div class="art-studio-widgets"><div><span>⌘</span> Code review <b>↗</b></div><div><span>⌁</span> Log insights <b>↗</b></div></div><div class="art-studio-footer">✦ Powered by LLMs</div></div>
                    <div class="art-floating-bubble">✦ AI INSIGHTS</div>
                  }
                  @case('02') {
                    <div class="art-procar-interface"><div class="art-procar-top"><span>◉</span> PROCAR <i>↗</i></div><div class="art-procar-caption">Gestão inteligente de oficina</div><div class="art-procar-lines"><span></span><span></span><span></span></div><div class="art-procar-cards"><div><small>Clientes</small><strong>CRM</strong></div><div><small>Ordens</small><strong>O.S.</strong></div><div><small>Estoque</small><strong>ERP</strong></div></div></div>
                  }
                  @case('03') {
                    <div class="art-code-interface"><div class="art-code-header">commit.diff <span>↗</span></div><div><span>+</span> fix: improve validation</div><div><span>+</span> add automated checks</div><div class="art-code-analysis"><strong>✦ AI REVIEW</strong><small>Impacto · Riscos · QA</small></div></div>
                  }
                  @default {
                    <div class="art-log-interface"><div class="art-code-header">application.log <span>●</span></div><div><i>INFO</i> process started</div><div><i>WARN</i> request retry</div><div><i>ERROR</i> sample failure</div><div class="art-log-analysis">✧ <span>Diagnostic insights ready</span></div></div>
                  }
                }
                <span class="art-mock-note">VISUAL ILUSTRATIVO</span>
              </div>
              <div class="project-info"><div class="project-category">{{project.category}}</div><div class="project-title-row"><h3>{{project.title}}</h3><span aria-hidden="true">↗</span></div><p class="project-summary">{{project.summary}}</p><div class="tag-list">@for(tag of project.tags; track tag){<span>{{tag}}</span>}</div><div class="project-footer"><span class="project-status"><i></i>{{project.status}}</span>
                <div class="project-actions">
                  @if(project.internalRoute){<a [routerLink]="project.internalRoute" class="project-link">Estudo de caso <span>↗</span></a>}
                  @else if(project.externalUrl){<a [href]="project.externalUrl" target="_blank" rel="noopener noreferrer" class="project-link">Abrir projeto <span>↗</span></a>}
                  @if(project.demoUrl){<a [href]="project.demoUrl" target="_blank" rel="noopener noreferrer" class="project-demo-link" [attr.aria-label]="'Testar demonstração de ' + project.title + ' (nova aba)'">Testar demo ↗</a>}
                </div>
              </div><p class="project-notice">{{project.notice}}</p></div>
            </article>
          }
        </div>
        <div class="projects-disclaimer"><span>ⓘ</span> Os projetos internos são descritos em alto nível. As demos públicas independentes processam exemplos fictícios localmente, sem LLM externo.</div>
      </div>
    </section>
  `
})
export class ProjectGalleryComponent {readonly projects = input.required<PortfolioProject[]>();}

import {Component, input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {PortfolioProfile} from '../../../core/models/portfolio.model';

@Component({
  selector: 'app-portfolio-hero',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero-section" aria-labelledby="hero-title">
      <div class="hero-glow hero-glow--violet" aria-hidden="true"></div>
      <div class="hero-glow hero-glow--peach" aria-hidden="true"></div>
      <div class="container hero-layout">
        <div class="hero-copy">
          <div class="availability"><span class="availability-dot"></span> Construindo, aprendendo e evoluindo</div>
          <div class="intro-label">OLÁ, EU SOU ANDREWS VIANA <span>✳</span></div>
          <h1 id="hero-title">Transformo <span class="hero-gradient">ideias</span> em software que faz a diferença<span class="hero-period">.</span></h1>
          <p class="hero-description">Desenvolvedor de Software com experiência em <strong>Android/AOSP</strong>, aplicações full stack e integração de <strong>inteligência artificial generativa</strong>.</p>
          <div class="hero-ctas">
            <a class="button button-primary" href="#projetos">Explorar projetos <span aria-hidden="true">↗</span></a>
            <a class="button button-outline" routerLink="/workspace">Testar meu laboratório <span aria-hidden="true">→</span></a>
          </div>
          <div class="hero-bottom"><span class="hero-line"></span><span>Manaus, Amazonas · Brasil</span><span class="hero-star">✦</span><span>Engenharia de Software</span></div>
        </div>
        <div class="hero-visual" aria-label="Ilustração conceitual de uma interface de análise de software com IA" role="img">
          <div class="visual-orbit visual-orbit--one"></div><div class="visual-orbit visual-orbit--two"></div>
          <div class="visual-chip chip-angular"><span>⬡</span> Angular</div>
          <div class="visual-chip chip-python"><span>✦</span> GenAI</div>
          <div class="visual-window">
            <div class="visual-window-header"><span class="window-dots"><i></i><i></i><i></i></span><span>engineering-studio / analysis</span><span class="window-badge">LIVE PREVIEW</span></div>
            <div class="visual-window-body">
              <div class="code-title"><span class="code-symbol">&#123; &#125;</span><span>commit_analyzer.py</span><span class="code-file">PY</span></div>
              <div class="mock-code"><div><i>01</i><span class="token-pink">def</span> <span class="token-blue">analyze_commit</span>(diff):</div><div><i>02</i>&nbsp;&nbsp;context = <span class="token-green">"software-engineering"</span></div><div><i>03</i>&nbsp;&nbsp;insights = <span class="token-blue">llm.analyze</span>(diff)</div><div><i>04</i>&nbsp;&nbsp;<span class="token-pink">return</span> insights</div><div><i>05</i>&nbsp;</div><div><i>06</i><span class="token-muted"># Turning code into insights ✨</span></div></div>
              <div class="insight-card"><div class="insight-icon">✧</div><div><small>ANÁLISE CONCLUÍDA</small><strong>Insights gerados com IA</strong><span>Impactos · Riscos · Próximos passos</span></div><span class="insight-check">✓</span></div>
            </div>
          </div>
          <div class="visual-float"><span class="float-icon">↗</span><div><strong>Software + IA</strong><small>Da ideia à solução.</small></div></div>
          <div class="visual-caption">CONCEPT / PORTFOLIO SHOWCASE</div>
        </div>
      </div>
      <div class="container scroll-cue"><span>DESCUBRA MEU TRABALHO</span><span class="scroll-arrow">↓</span></div>
    </section>
  `
})
export class PortfolioHeroComponent { readonly profile = input.required<PortfolioProfile>(); }

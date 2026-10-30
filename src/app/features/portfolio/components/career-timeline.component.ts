import {Component, input} from '@angular/core';
import {EducationItem, ProfessionalExperience} from '../../../core/models/portfolio.model';

@Component({
  selector: 'app-career-timeline',
  standalone: true,
  template: `
    <section class="section section-tinted" id="experiencia" aria-labelledby="career-title">
      <div class="container">
        <div class="section-heading"><div><span class="section-kicker"><span class="kicker-dot"></span> MINHA JORNADA</span><h2 id="career-title">Uma trajetória construída <span class="text-violet">na prática.</span></h2></div><p>Experiência real, evolução contínua e curiosidade para resolver desafios cada vez maiores.</p></div>
        <div class="journey-grid">
          <div class="journey-col">
            <div class="journey-col-heading"><span class="journey-icon journey-icon--violet">↗</span><h3>Experiência profissional</h3></div>
            @for(item of experience(); track item.company) {
              <article class="journey-item">
                <div class="journey-timeline-dot"></div><div class="journey-date">{{item.period}}</div>
                <h4>{{item.position}}</h4><p class="journey-organization">{{item.company}}</p><p class="journey-description">{{item.description}}</p>
                <ul class="journey-points">@for(point of item.highlights;track point){<li>{{point}}</li>}</ul>
              </article>
            }
          </div>
          <div class="journey-col">
            <div class="journey-col-heading"><span class="journey-icon journey-icon--coral">✦</span><h3>Formação & aprendizado</h3></div>
            @for(item of education(); track item.program) {
              <article class="journey-item journey-item--compact"><div class="journey-timeline-dot"></div><div class="journey-date">{{item.period}}</div><h4>{{item.program}}</h4><p class="journey-organization">{{item.institution}}</p><p class="journey-description">{{item.detail}}</p></article>
            }
          </div>
        </div>
      </div>
    </section>
  `
})
export class CareerTimelineComponent {
  readonly experience = input.required<ProfessionalExperience[]>();
  readonly education = input.required<EducationItem[]>();
}

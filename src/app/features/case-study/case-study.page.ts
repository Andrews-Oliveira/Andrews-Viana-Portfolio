import {Component, computed, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {TECHNICAL_CASES} from './case-study.data';

@Component({
  standalone: true,
  imports: [RouterLink],
  templateUrl: './case-study.page.html'
})
export class CaseStudyPage {
  private readonly route = inject(ActivatedRoute);
  private readonly params = toSignal(this.route.paramMap, {initialValue: this.route.snapshot.paramMap});
  readonly study = computed(() => TECHNICAL_CASES[this.params().get('slug') ?? ''] ?? null);
}

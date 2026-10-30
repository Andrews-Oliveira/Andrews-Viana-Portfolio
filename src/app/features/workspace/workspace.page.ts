import {Component, computed, inject, signal} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {firstValueFrom} from 'rxjs';
import {AnalysisKind, AnalysisResult, ExecutionMode, Sample} from '../../core/models/analysis.model';
import {SAMPLES, buildDemoResult} from '../../core/data/demo-fixtures';
import {AnalysisService} from '../../core/services/analysis.service';
import {HistoryService} from '../../core/services/history.service';
import {ResultPanelComponent} from '../../shared/result-panel/result-panel.component';

import {LabNavComponent} from '../../shared/lab-nav/lab-nav.component';
@Component({
  standalone: true,
  imports: [LabNavComponent, FormsModule, ResultPanelComponent],
  templateUrl: './workspace.page.html'
})
export class WorkspacePage {
  private readonly api = inject(AnalysisService);
  private readonly history = inject(HistoryService);
  private readonly route = inject(ActivatedRoute);
  readonly kind = signal<AnalysisKind>('commit');
  readonly mode = signal<ExecutionMode>('demo');
  readonly source = signal(SAMPLES.commit[0].content);
  readonly selectedSample = signal('commit-discount');
  readonly accessCode = signal('');
  readonly result = signal<AnalysisResult | null>(null);
  readonly error = signal('');
  readonly loading = signal(false);
  readonly samples = computed(() => SAMPLES[this.kind()]);

  constructor() {
    void firstValueFrom(this.route.queryParamMap).then(params => {
      if (params.get('type') === 'log') this.switchKind('log');
    });
  }

  switchKind(kind: AnalysisKind): void {
    this.kind.set(kind);
    this.selectSample(SAMPLES[kind][0]);
    this.result.set(null);
    this.error.set('');
  }

  selectSample(sample: Sample): void {this.source.set(sample.content); this.selectedSample.set(sample.id); this.error.set('');}
  onSourceChange(value: string): void {this.source.set(value); this.selectedSample.set('');}
  clear(): void {this.source.set(''); this.selectedSample.set(''); this.error.set(''); this.result.set(null);}

  async analyze(): Promise<void> {
    if (this.loading() || this.source().trim().length < 20) return;
    this.loading.set(true); this.error.set(''); this.result.set(null);
    try {
      let report: AnalysisResult;
      if (this.mode() === 'demo') {
        const matching = SAMPLES[this.kind()].find(s => s.content.trim() === this.source().trim());
        if (!matching) throw new Error('A simulação estática aceita apenas os exemplos disponíveis. Para texto personalizado, habilite a análise ao vivo.');
        report = buildDemoResult(this.kind(), matching.id);
      } else {
        report = await this.api.analyze({kind: this.kind(), content: this.source()}, this.accessCode());
      }
      this.result.set(report);
      this.history.add(report);
    } catch (err) {this.error.set(err instanceof Error ? err.message : 'Falha inesperada na análise.');}
    finally {this.loading.set(false);}
  }
}

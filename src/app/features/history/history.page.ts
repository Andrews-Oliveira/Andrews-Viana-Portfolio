import {Component, inject, signal} from '@angular/core';
import {DatePipe} from '@angular/common';
import {RouterLink} from '@angular/router';
import {HistoryService} from '../../core/services/history.service';
import {AnalysisResult} from '../../core/models/analysis.model';
import {ResultPanelComponent} from '../../shared/result-panel/result-panel.component';

import {LabNavComponent} from '../../shared/lab-nav/lab-nav.component';
@Component({
  standalone: true,
  imports: [LabNavComponent, DatePipe, RouterLink, ResultPanelComponent],
  templateUrl: './history.page.html'
})
export class HistoryPage {
  readonly history = inject(HistoryService);
  readonly selected = signal<AnalysisResult | null>(this.history.items()[0] ?? null);
  clear(): void {this.history.clear(); this.selected.set(null);}
}

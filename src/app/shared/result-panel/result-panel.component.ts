import {Component, input} from '@angular/core';
import {DatePipe} from '@angular/common';
import {AnalysisResult, Severity} from '../../core/models/analysis.model';

@Component({
  selector: 'app-result-panel',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './result-panel.component.html'
})
export class ResultPanelComponent {
  readonly result = input.required<AnalysisResult>();
  severityText(value: Severity): string {return ({critical:'Crítico', high:'Alto', medium:'Médio', low:'Baixo', info:'Informativo'} as const)[value];}
}

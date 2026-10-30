import {computed, Injectable, signal} from '@angular/core';
import {AnalysisResult} from '../models/analysis.model';

const STORAGE_KEY = 'genai-studio-demo-history-v1';
const MAX_ITEMS = 12;

@Injectable({providedIn: 'root'})
export class HistoryService {
  private readonly entries = signal<AnalysisResult[]>(this.restore());
  readonly items = this.entries.asReadonly();
  readonly count = computed(() => this.entries().length);

  add(result: AnalysisResult): void {
    this.entries.update(entries => [result, ...entries].slice(0, MAX_ITEMS));
    this.persist();
  }

  clear(): void {this.entries.set([]); this.persist();}

  private restore(): AnalysisResult[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed: unknown = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed.filter((item): item is AnalysisResult =>
        item !== null && typeof item === 'object' && typeof item.id === 'string' && typeof item.summary === 'string' && (item.kind === 'log' || item.kind === 'commit')
      ).slice(0, MAX_ITEMS) : [];
    } catch {return [];}
  }

  private persist(): void {
    try {localStorage.setItem(STORAGE_KEY, JSON.stringify(this.entries()));} catch { /* privacy / disabled storage */ }
  }
}

import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';
import {AnalyzeRequest, AnalysisResult} from '../models/analysis.model';

@Injectable({providedIn: 'root'})
export class AnalysisService {
  private readonly http = inject(HttpClient);

  async analyze(request: AnalyzeRequest, accessCode: string): Promise<AnalysisResult> {
    try {
      return await firstValueFrom(this.http.post<AnalysisResult>('/api/analyze', request, {
        headers: new HttpHeaders({'X-Portfolio-Code': accessCode})
      }));
    } catch (error) {
      if (error instanceof HttpErrorResponse) {
        const message = typeof error.error?.error === 'string' ? error.error.error : 'Não foi possível realizar a análise. Tente novamente.';
        throw new Error(message);
      }
      throw new Error('Falha de comunicação com o servidor.');
    }
  }
}

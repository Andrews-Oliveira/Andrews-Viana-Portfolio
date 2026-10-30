export type AnalysisKind = 'commit' | 'log';
export type ExecutionMode = 'demo' | 'live';
export type Severity = 'critical' | 'high' | 'medium' | 'low' | 'info';

export interface AnalysisFinding {
  title: string;
  severity: Severity;
  explanation: string;
  evidence: string;
}

export interface AnalysisResult {
  id: string;
  kind: AnalysisKind;
  mode: ExecutionMode;
  title: string;
  summary: string;
  severity: Severity;
  findings: AnalysisFinding[];
  recommendations: string[];
  generatedAt: string;
  model: string;
}

export interface AnalyzeRequest {kind: AnalysisKind; content: string;}
export interface Sample {id: string; label: string; description: string; content: string;}

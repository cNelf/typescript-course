import { MatchData } from './MatchData';
import { WinAnalysis } from './analyzers/WinAnalysis';
import { HtmlReport } from './reportTargets/HtmlReport';

export interface Analysis {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analysis: Analysis, public outputTarget: OutputTarget) {}

  static summaryFactory(team: string): Summary {
    return new Summary(new WinAnalysis(team), new HtmlReport());
  }

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analysis.run(matches);
    this.outputTarget.print(output);
  }
}

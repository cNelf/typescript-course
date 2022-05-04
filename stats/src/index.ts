import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const reader = MatchReader.readerFactory('football.csv');
const summary = Summary.summaryFactory('Man United');

reader.load();
summary.buildAndPrintReport(reader.matches);

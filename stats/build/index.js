"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const reader = MatchReader_1.MatchReader.readerFactory('football.csv');
const summary = Summary_1.Summary.summaryFactory('Man United');
reader.load();
summary.buildAndPrintReport(reader.matches);

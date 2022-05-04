"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinAnalysis_1 = require("./analyzers/WinAnalysis");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
class Summary {
    constructor(analysis, outputTarget) {
        this.analysis = analysis;
        this.outputTarget = outputTarget;
    }
    static summaryFactory(team) {
        return new Summary(new WinAnalysis_1.WinAnalysis(team), new HtmlReport_1.HtmlReport());
    }
    buildAndPrintReport(matches) {
        const output = this.analysis.run(matches);
        this.outputTarget.print(output);
    }
}
exports.Summary = Summary;

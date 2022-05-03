"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const file = fs_1.default.readFileSync('football.csv', {
    encoding: 'utf-8',
});
const matches = file.split('\n').map((item) => item.split(','));
var winResult;
(function (winResult) {
    winResult["HomeWin"] = "H";
    winResult["AwayWin"] = "A";
    winResult["Draw"] = "D";
})(winResult || (winResult = {}));
let manUnitedWins = 0;
for (let match of matches) {
    if (match[1] === 'Man United' && match[5] === winResult.HomeWin) {
        manUnitedWins++;
    }
    if (match[2] === 'Man United' && match[5] === winResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(manUnitedWins);

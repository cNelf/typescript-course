"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
function dateStringToDate(date) {
    const [day, month, year] = date.split('/').map((item) => parseInt(item));
    return new Date(year, month - 1, day);
}
exports.dateStringToDate = dateStringToDate;

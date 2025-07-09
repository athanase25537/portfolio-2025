import { SafeHtml } from "@angular/platform-browser";

export class IconModel {
    constructor(
        public iconClass: SafeHtml | string,
        public legend: string,
        public isSvg: boolean
    ) { }
}
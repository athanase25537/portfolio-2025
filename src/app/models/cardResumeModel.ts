export class CardResumeModel {
    constructor(
        public mention: string,
        public startYear: string,
        public endYear: string,
        public school: string,
        public description: string,
        public isLast: boolean
    ) { }
}
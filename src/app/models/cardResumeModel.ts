export class CardResumeModel {
    constructor(
        public mention: string,
        public startYear: number,
        public endYear: number,
        public school: string,
        public description: string,
        public isLast: boolean
    ) { }
}
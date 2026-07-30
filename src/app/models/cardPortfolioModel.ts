export class cardPortfolioModel {
    constructor(
        public imgUrl: string,
        public title: string,
        public description: string,
        public githubLink: string,
        public demoLink: string,
        public techs: string[],
        public collabName?: string,
        public collabLink?: string
    ) {}
}
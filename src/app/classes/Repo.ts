export class Repo {
    name: string;
    htmlUrl: string;

    constructor(n: string, url: string) {
        this.name = n;
        this.htmlUrl = url;
    }
}
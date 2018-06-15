export class User {
    login: string;
    type: string;
    company: string;
    bio: string;
    location: string;
    avatar: string;
    url: string;

    constructor(log?: string, typ?: string, comp?: string, bio?: string, location?: string, avatar?: string, u?:string) {
        this.login = log;
        this.type = typ;
        this.company = comp;
        this.bio = bio;
        this.location = location;
        this.avatar = avatar;
        this.url = u;
    }
}
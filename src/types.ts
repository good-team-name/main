
    // Users
    export interface UserSmall {
        id: string;
        name: string;
        iconUrl: string;
    }

    export interface UserBig extends UserSmall {
        admin: boolean;
        skillsCompleted: Array<SkillSmall>;
    }



    // Skills

    export interface SkillSmall {
        id: string;
        name: string;
        iconUrl: string;

        preSkills: Array<SkillSmall>;
        postSkills: Array<SkillSmall>;

    }

    export interface SkillBig extends SkillSmall {
        description: string;
        resources: Array<Resource>;
        owner: UserSmall;
        lastEditor: UserSmall;

        versions: Array<string>;

    }

    export interface Resource {
        name: string;
        url: string;
        description: string;
    }

    // Paths

    // Problem: how to output a path structure 
    export interface Path {
        name: string;
        id: string;


        grid: Array<Array<SkillSmall>>; // each array is a "level", level 0 is 0 prereqs neededs

        // todo add styling

    }

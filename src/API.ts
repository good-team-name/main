// User

import { users, db } from "./tempDb";
import { Resource, SkillBig, SkillSmall, UserBig } from "./types";
import { v4 as uuidv4 } from 'uuid';


const loggedInID = "abc";
export namespace User {
    export const get = (id: string): UserBig => {
        return users[id]
    }

}

export namespace Skill {
    export const get = (id: string): SkillBig => {
        return db[id];
    }

    export const getPre = (id: string): Array<SkillSmall> => {
        return db[id].preSkills;
    }

    export const getPost = (id: string): Array<SkillSmall> => {
        return db[id].postSkills;
    }

    export const update = (
        id: string,
        resources: Array<Resource>,
        name: string,
        iconUrl: string,
        preSkills: Array<SkillSmall>,
        postSkills: Array<SkillSmall>,
        editorsAdded: string,

    ) => {
        const skill = db[id];
        skill.resources = resources;
        skill.name = name;
        skill.iconUrl = iconUrl;
        skill.preSkills = preSkills;
        skill.postSkills = postSkills;
    }


    export const create = (
        resources: Array<Resource>,
        name: string,
        iconUrl: string,

    ) => {
        // ad 
        const id = uuidv4();

        const s : SkillBig = {
            id,
            name,
            resources,
            iconUrl,
            preSkills: [],
            postSkills: [],

            description: "",
            owner: User.get(loggedInID),
            lastEdited: User.get(loggedInID),
            



            
        };

        db[id] = s;
    }



}
import { Skill } from "./types";

const skills: Record<string, Skill> = {
    "1": {
        name: "Calculus 1",
        iconUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Portrait_of_Sir_Isaac_Newton%2C_1689_%28brightened%29.jpg",
        resources: [{
            name: "Wikipedia",
            url: "https://en.wikipedia.org/wiki/Calculus",
            description: "Basic information on calculus and outline"
        },
        {
            name: "Khan Academy",
            url: "https://www.khanacademy.org/math/calculus-1",
            description: "Khan Academy"
        }],
        prerequisites: [],
        unlocks: ["2"],
        id: "1"

    },
    "2": {
        name: "Calculus 2",
        iconUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Christoph_Bernhard_Francke_-_Bildnis_des_Philosophen_Leibniz_%28ca._1695%29.jpg",
        resources: [{
            name: "Wikipedia",
            url: "https://en.wikipedia.org/wiki/Calculus",
            description: "Basic information on calculus and outline"
        },
        {
            name: "Khan Academy",
            url: "https://www.khanacademy.org/math/calculus-2",
            description: "Khan Academy - learn a bit on here"
        }],
        prerequisites: ["1"],
        unlocks: [],
        id: "2"


    }
}

export const getSkill = (id: string) => {
    return skills[id] || null;
}

export const getPrequesites = (id: string) => {


    return skills[id].prerequisites.map((preId) => getSkill(preId));
}


export const getUnlocked = (id: string) => {


    return skills[id].unlocks.map((postId) => getSkill(postId));
}

import { SkillBig, SkillSmall, UserBig } from "./types";

const smallify = (s: SkillBig) : SkillSmall => {
    
    return {
        id: s.id,
        name: s.name,
        iconUrl: s.iconUrl,
        preSkills: s.preSkills,
        postSkills: s.postSkills,
        

    }
    
}

export const users : Record<string, UserBig> = {
    "abc": {
        id: "abc",
        name: "Josh",
        iconUrl: "https://cdn-icons-png.freepik.com/256/1077/1077114.png",
        admin: true,
        skillsCompleted: [],

    }
}


export const db: Record<string, SkillBig> = {
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
        },
        {
            name: "freeCodeCamp",
            url: "https://www.youtube.com/watch?v=HfACrKJ_Y2w&t=2",
            description: "Free Code Camp"
        }],
        preSkills: [],
        postSkills: [],
        owner: users["abc"],
        lastEdited: users["abc"],
        id: "1",
        description: "The start of Calculus",


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
        id: "2",
        preSkills: [],
        postSkills: [],
        owner: users["abc"],
        lastEdited: users["abc"],
        description: ""


    },
    "3": {
        name: "Mechanics 1",
        iconUrl: "https://www.oia.hokudai.ac.jp/isp/wp-content/uploads/2019/07/at.png",
        resources: [{
            name: "Wikipedia",
            url: "https://en.wikipedia.org/wiki/Mechanics",
            description: "Basic information on calculus and outline"
        },
        {
            name: "Khan Academy",
            url: "https://www.khanacademy.org/math/calculus-2",
            description: "Khan Academy - learn a bit on here"
        }],

        id: "3",
        preSkills: [],
        postSkills: [],
        owner: users["abc"],
        lastEdited: users["abc"],
        description: ""
    },

    "4": {
        name: "Thermodyanmics 1",
        iconUrl: "https://www.matrix.edu.au/wp-content/uploads/2020/10/guide-physics-year-11-module-3-waves-and-thermodynamics-hot-cold.png",
        resources: [{
            name: "Wikipedia",
            url: "https://en.wikipedia.org/wiki/Mechanics",
            description: "Basic information on calculus and outline"
        },
        {
            name: "Khan Academy",
            url: "https://www.khanacademy.org/math/calculus-2",
            description: "Khan Academy - learn a bit on here"
        }],


        id: "4",
        preSkills: [],
        postSkills: [],
        owner: users["abc"],
        lastEdited: users["abc"],
        description: ""
    },

    "5": {
        name: "Statistical Mechanics",
        iconUrl: "https://d3bkbkx82g74b8.cloudfront.net/eyJidWNrZXQiOiJsYWJyb290cy1pbWFnZXMiLCJrZXkiOiJjb250ZW50X3RhZ19wcm9maWxlX2ltYWdlXzc5M2MzMGM2OWRhYjFkY2U3OTI4MGEyMDJmMmQzYTc3ZGIxN2QzZmRfMTQyNi5qcGciLCJlZGl0cyI6eyJ0b0Zvcm1hdCI6ImpwZyIsInJlc2l6ZSI6eyJ3aWR0aCI6ODAwLCJoZWlnaHQiOjQwMCwiZml0IjoiY292ZXIiLCJwb3NpdGlvbiI6ImNlbnRlciIsImJhY2tncm91bmQiOiIjZmZmIn0sImZsYXR0ZW4iOnsiYmFja2dyb3VuZCI6IiNmZmYifX19",
        resources: [{
            name: "Wikipedia",
            url: "https://en.wikipedia.org/wiki/Mechanics",
            description: "Basic information on calculus and outline"
        },
        {
            name: "Khan Academy",
            url: "https://www.khanacademy.org/math/calculus-2",
            description: "Khan Academy - learn a bit on here"
        }],
        id: "5",
        preSkills: [],
        postSkills: [],
        owner: users["abc"],
        lastEdited: users["abc"],
        description: ""
    }
}

db["1"].postSkills.push(smallify(db["2"]));

db["2"].preSkills.push(smallify(db["1"]));


db["1"].postSkills.push(smallify(db["3"]));

db["3"].preSkills.push(smallify(db["1"]));

db["3"].postSkills.push(smallify(db["4"]));

db["4"].preSkills.push(smallify(db["3"]));

db["4"].postSkills.push(smallify(db["5"]));
db["5"].preSkills.push(smallify(db["4"]));


export interface Skill {
    name: string;
    resources: Array<Resource>;
    iconUrl: string;
    prerequisites: Array<string>;
    unlocks: Array<string>;
    id: string;

}

export interface Resource {
    name: string;
    url: string;
    description: string;
    
}
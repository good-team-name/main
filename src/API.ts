import { users, db } from "./tempDb";
import { Resource, SkillBig, SkillSmall, UserBig } from "./types";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

const url = "http://localhost:8080"


const uid = "abc";
const idToken = "";


export const api = axios.create({
    baseURL: url,


})

export namespace User {
    export const get = async (id: string): Promise<UserBig> => {
        let res = await api.get(`/user/get/${id}`);
        return res.data.data.doc;
    }

}

export namespace Skill {
    export const get = async (id: string): Promise<SkillBig> => {
        let res = await api.get(`/skill/get/${id}`);
        return res.data.data.doc;;
    }


    /* POST: /skill/update

    id: string;
    idToken: string;

    queryId: string;

    resources: Array<Frontend.Resource>;
    name: string;
    iconImage: string;
    description: string;

    preSkills: Array<string>;
    postSkills: Array<string>;

    editorsAdded: Array<string>;
    editorsRemoved: Array<string>;
    
    */


    export const update = (

        queryId: string,

        resources: Array<Resource>,
        name: string,
        iconImage: string,
        description: string,

        preSkills: Array<string>,
        postSkills: Array<string>,

        editorsAdded: Array<string>,
        editorsRemoved: Array<string>

    ) => {
        api.post('/skill/update', {
            id: uid,
            idToken,

            queryId,

            resources,
            name,
            iconImage,
            description,

            preSkills,
            postSkills,

            editorsAdded,
            editorsRemoved
        })





    }

    /* POST: /skill/create

    id: string;
    idToken: string;

    name: string;
    
    */


    export const create = async (
        name: string,

    ) => {
        const res = await api.post('/skill/create', {
            name,
            id: uid,
            idToken: idToken
        })
        console.log(res.data)

        const data : {
            status: string,
            message: string,
            data: {
                id: string
            }

        } = res.data;

        return data.data.id;


    }



}
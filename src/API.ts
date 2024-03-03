import { Resource, SkillBig, UserBig } from "./types";
import axios from "axios";

import { useUserStore } from "./stores/User";

const url = "https://skill-tree-05856bfa2481.herokuapp.com"


// const uid = "abc";
// const idToken = "";


export const getUserAuth = () => {
    const userStore = useUserStore();

    if (userStore.uid.length == 0 || userStore.idToken.length == 0) {
        throw new Error("notLoggedIn")
    }

    return {
        uid: userStore.uid,
        idToken: userStore.idToken

    }
}

export const api = axios.create({
    baseURL: url,


})

export interface Packet<T> {
    status: "error" | "success" | "noAccount";
    messasge: string;

    data: T;


}

export namespace User {
    export const get = async (id: string): Promise<UserBig> => {
        let res = await api.get(`/user/get/${id}`);
        return res.data.data.doc;
    }

    export const getUser = async (uid = getUserAuth().uid, idToken = getUserAuth().idToken): Promise<UserBig> => {
        try {

            console.log({ uid, idToken })
            let res = await api.get(`/user/getLogin`, {
                params: {
                    idToken,
                    uid
                }
            });
            console.log(res.data)

            let d: Packet<{
                doc: UserBig
            }> = res.data;

            if (d.status == "noAccount") {
                throw "noAccount";
            }

            return d.data.doc;

        } catch (err) {
            throw err;

        }




    }

    export const createUser = async (name: string, iconUrl: string): Promise<UserBig> => {
        const auth = getUserAuth();

        let res = await api.post(`/user/create`, {
            params: {
                idToken: auth.idToken,
                id: auth.uid,
                name,
                iconUrl
            }
        });

        let d: Packet<{
            doc: UserBig
        }> = res.data;


        return d.data.doc;
    }

}

export namespace Skill {

    export const getAll = async (): Promise<Array<SkillBig>> => {
        let res = await api.get(`/skill/get/search`);
        return res.data.data.docs;
    }

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
        const auth = getUserAuth();

        api.post('/skill/update', {
            id: auth.uid,
            idToken: auth.idToken,

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
        const auth = getUserAuth();

        const res = await api.post('/skill/create', {
            name,
            id: auth.uid,
            idToken: auth.idToken
        })
        console.log(res.data)

        const data: {
            status: string,
            message: string,
            data: {
                id: string
            }

        } = res.data;

        return data.data.id;


    }



}
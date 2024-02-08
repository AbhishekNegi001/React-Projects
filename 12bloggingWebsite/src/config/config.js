import configVariables from "../configVariables/configVariables";
import {Client, ID, Databases, Storage, Query} from "appwrite";

export class Service{
    client = new Client();
    databases;
    buckets;

    constructor(){
        this.client
        .setEndpoint(configVariables.appWriteUrl)
        .setProject(configVariables.appWriteProjectId);

        this.databases = new Databases(client);
        this.buckets = new Storage(this.client)
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try{
            return await this.databases.createDocument(
                configVariables.appWriteDatabaseId,
                configVariables.appWriteCollectionId,
                slug,//refers to a human-readable, URL-friendly version of a string. 
                //we can also use unique id in its place
                {// rest content
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        }
        catch(error){
            console.log("Post Creation failed :", error)
            throw error;
        }
    }
    async updatePost(slug, {title, content, featuredImage, status}){
        try{
            return await this.databases.updateDocument(
                configVariables.appWriteDatabaseId,
                configVariables.appWriteCollectionId,
                slug, // used as a unique id for document id, can also use Id.unique()
                {// content to update
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        }
        catch(error){
            console.log("Post Updation failed :", error)
            throw error;
        }
    }
    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                configVariables.appWriteDatabaseId,
                configVariables.appWriteCollectionId,
                slug
            )
            return true;
        }
        catch(error){
            console.log("Post deletion failed :", error)
            throw error;
            return false;
        }
    }

    async getPost(slug){
        try{
            return await this.databases.getDocument(
                configVariables.appWriteDatabaseId,
                configVariables.appWriteCollectionId,
                slug
            )
        }
        catch(error){
            console.log("Post Creation failed :", error)
            throw error;
        }
    }

    async getPosts(queries = [Query.equal('status',"active")]){//for applying indexes we need to create indexes in our database
        try{
            return await this.databases.getDocument(
                configVariables.appWriteDatabaseId,
                configVariables.appWriteCollectionId,
                queries,
            )
        }
        catch(error){
            console.log("Post Creation failed :", error)
            throw error;
        }
    }

    async uploadFile(file){//for applying indexes we need to create indexes in our database
        try{
            return await this.buckets.createFile(
                configVariables.appWriteBucketId,
                ID.unique(),
                file
            )
        }
        catch(error){
            console.log("File uploadation failed :", error)
            throw error;
            return false;
        }
    }

    async deleteFile(fileId){//for applying indexes we need to create indexes in our database
        try{
            return await this.buckets.deleteFile(
                configVariables.appWriteBucketId,
                fileId
            )
            return true;
        }
        catch(error){
            console.log("File deletion failed :", error)
            throw error;
        }
    }

    async uploadFile(file){//for applying indexes we need to create indexes in our database
        try{
            return await this.buckets.createFile(
                configVariables.appWriteBucketId,
                ID.unique(),
            )
        }
        catch(error){
            console.log("File uploadation failed :", error)
            throw error;
        }
    }

    getFilePreview(fileId){//returns a url
        try{
            return this.buckets.getFilePreview(
                configVariables.appWriteBucketId,
                fileId
                )
        }
        catch(error){
            console.log("File Preview Error :",error)
            throw error;
        }
    }
}

const service = new Service();

export default service;
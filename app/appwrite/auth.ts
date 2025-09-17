import { account, appwriteConfig, database } from "~/appwrite/client"
import { OAuthProvider, Query } from "appwrite";
import { redirect } from "react-router";

export const loginWithGoogle = async () => {
    try {
        account.createOAuth2Session(OAuthProvider.Google)
        
}catch(e){
    console.log("loginWithGoogle" ,e)  
}
}

export const logoutUser = async () => {
    try {
        
}catch(e){
    console.log(e)  
}
}

export const getUSer = async () => {
    try {
        const user = await account.get();

        if(!user) return redirect("/sign-in")
        
        const {documents} = await database.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.usersCollectionId
            [
                Query.equal("userId", user.$id)
            ]

        );
        
}catch(e){
    console.log(e)  
}
}

export const getGooglePicture = async () => {
    try {
        
}catch(e){
    console.log(e)  
}
}

export const storeUserData = async () => {
    try {
        
}catch(e){
    console.log(e)  
}
}

export const getEx = async () => {
    try {
        
}catch(e){
    console.log(e)  
}
}
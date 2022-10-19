import { Client as Appwrite, Databases, Account } from 'appwrite';

const config = {
    endpoint: 'https://api2.darklordbazz.com/v1',
    project: 'ShottyGamingAPI',
    databaseID: 'ShottyGamingDB',

}

let api = {
    sdk: null,

    provider: () => {
        if (api.sdk) {
            return api.sdk;
        }
        let appwrite = new Appwrite();
        appwrite.setEndpoint(config.endpoint).setProject(config.project);
        const account = new Account(appwrite);
        const database = new Databases(appwrite, config.databaseID);

        api.sdk = { database, account };
        return appwrite;
    },

    getAccount: () => {
        return api.provider().account.get();
    },

    createSession: (email, password) => {
        return api.provider().account.createEmailSession(email, password);
    },

    updatePassword: (password) => {
        return api.provider().account.updatePassword(password);
    },

    deleteCurrentSession: () => {
        return api.provider().account.deleteSession('current');
    },

    createDocument: (collectionId, data, read, write) => {
        return api
            .provider()
            .database.createDocument(collectionId, 'unique()', data, read, write);
    },

    listDocuments: (collectionId) => {
        return api.provider().database.listDocuments(collectionId);
    },

    updateDocument: (collectionId, documentId, data, read, write) => {
        return api
            .provider()
            .database.updateDocument(collectionId, documentId, data, read, write);
    },

    deleteDocument: (collectionId, documentId) => {
        return api.provider().database.deleteDocument(collectionId, documentId);
    },
};

export default api;
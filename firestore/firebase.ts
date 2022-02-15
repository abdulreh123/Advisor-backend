// Import the functions you need from the SDKs you need
const admin = require("firebase-admin");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const serviceAccount = require('./firestore.json')

class FirestoreService {
    database: any;
    constructor() {
      let credential = { credential: admin.credential.cert(serviceAccount) };
      admin.initializeApp(credential);
      this.database = admin.firestore();
    }
    /**
     *
     * @param {String} key
     * @param {String} collection
     * @returns {Object} response
     */
    async get(collection: string, key: string) {
      try {
        const docRef = this.database.collection(collection).doc(key);
        const doc = await docRef.get();
        if (doc.exists) {
          return this.#getResponse(true, doc.data());
        }
        return this.#getResponse(false);
      } catch (error) {
        return this.#getResponse(false, error);
      }
    }
  
    /**
     * @param {String} key
     * @param {String} collection
     * @param {Object} data
     */
    async set(collection: string, key: string, data: any) {
      try {
        const docRef = this.database.collection(collection).doc(key);
        await docRef.set(data);
        return this.#getResponse(true, data);
      } catch (error) {
        return this.#getResponse(false, error);
      }
    }
    /**
     * @param {String} key
     * @param {String} collection
     * @param {Object} data
     */
    async update(collection: string, key: string, data: any) {
      try {
        const docRef = this.database.collection(collection).doc(key);
        await docRef.update(data);
        return this.#getResponse(true, data);
      } catch (error) {
        return this.#getResponse(false, error);
      }
    }
  
    #getResponse = (success: boolean, data: any = {}) => {
      if (success) return { success, data };
      return { success, error: data };
    };
  }
  
  export default new FirestoreService();
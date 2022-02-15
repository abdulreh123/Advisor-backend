"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _getResponse;
Object.defineProperty(exports, "__esModule", { value: true });
// Import the functions you need from the SDKs you need
const admin = require("firebase-admin");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const serviceAccount = require('./firestore.json');
class FirestoreService {
    constructor() {
        _getResponse.set(this, (success, data = {}) => {
            if (success)
                return { success, data };
            return { success, error: data };
        });
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
    get(collection, key) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const docRef = this.database.collection(collection).doc(key);
                const doc = yield docRef.get();
                if (doc.exists) {
                    return __classPrivateFieldGet(this, _getResponse).call(this, true, doc.data());
                }
                return __classPrivateFieldGet(this, _getResponse).call(this, false);
            }
            catch (error) {
                return __classPrivateFieldGet(this, _getResponse).call(this, false, error);
            }
        });
    }
    /**
     * @param {String} key
     * @param {String} collection
     * @param {Object} data
     */
    set(collection, key, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const docRef = this.database.collection(collection).doc(key);
                yield docRef.set(data);
                return __classPrivateFieldGet(this, _getResponse).call(this, true, data);
            }
            catch (error) {
                return __classPrivateFieldGet(this, _getResponse).call(this, false, error);
            }
        });
    }
    /**
     * @param {String} key
     * @param {String} collection
     * @param {Object} data
     */
    update(collection, key, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const docRef = this.database.collection(collection).doc(key);
                yield docRef.update(data);
                return __classPrivateFieldGet(this, _getResponse).call(this, true, data);
            }
            catch (error) {
                return __classPrivateFieldGet(this, _getResponse).call(this, false, error);
            }
        });
    }
}
_getResponse = new WeakMap();
exports.default = new FirestoreService();

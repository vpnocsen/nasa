
const dbName = "nasa";
const collection = "items";
export const getData = (callback) => {
    const req = window.indexedDB.open(dbName, 1);
    req.onerror = (e) => { console.log('Error') };
    req.onsuccess = (e) => {
        const db = e.target.result
        const getReq = db.transaction(collection, "readwrite")
            .objectStore(collection)
            .get('list');
        getReq.onsuccess = (event) => {
            callback(event.target.result || []);
        }
    };
    req.onupgradeneeded = (e) => {
        const db = e.target.result
        db.createObjectStore(collection, {
            autoIncrement: false
        });
    }
}

export const saveData = (data) => {
    const req = window.indexedDB.open(dbName, 1);
    req.onerror = (e) => { console.log('Error') };
    req.onsuccess = (e) => {
        const db = e.target.result
        db.transaction(collection, "readwrite")
            .objectStore(collection)
            .put(data, 'list')
    };
    req.onupgradeneeded = (e) => {
        const db = e.target.result
        db.createObjectStore(collection, {
            autoIncrement: false
        });
    }
}
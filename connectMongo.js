const { url } = require("./first_app");
function connectMongo() {
    const db = yield MongoClient.connect("mongodb+srv://Jason:GameOf4%21@cluster0-quaam.mongodb.net/test%63retryWrites=true");
    console.log("Connected successfully to server");
    yield insertDocuments(db, null);
    yield findDocuments(db, null);
    yield indexCollection(db, null);
    yield aggregateDocuments(db, null);
    db.close();
}
exports.connectMongo = connectMongo;

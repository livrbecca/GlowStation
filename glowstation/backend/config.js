let username = process.env.DB_USERNAME;
let password = process.env.DB_PASSWORD;


module.exports = {
  MONGO_URI: `mongodb+srv://${username}:${password}@cluster0.xpwqy.mongodb.net/glow?retryWrites=true&w=majority`,
};

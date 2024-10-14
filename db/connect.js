/**
 * 该文件负责连接数据库
 */

const mongoose = require("mongoose");

// 定义链接数据库字符串
// const dbURI = "mongodb://" + process.env.DB_HOST + "/" + process.env.DB_NAME;
const dbURI = "mongodb://localhost/coderstation";
// 连接
mongoose.connect(dbURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 30000,
    connectTimeoutMS: 30000
  });

console.log(dbURI)

// 监听
mongoose.connection.on("connected", function () {
  console.log(`coderstation 数据库已经连接...`);
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB 连接失败:', err.message);
});


let IS_PROD = process.env.IS_DEPLOYED;
const server = IS_PROD ?"https://apnacollegebackend.onrender.com" : process.env.BACKENED_SERVER;


export default server;
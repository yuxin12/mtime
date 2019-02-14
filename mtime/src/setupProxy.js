const proxy =require("http-proxy-middleware")
module.exports=(app)=>{
    // https://m.mtime.cn/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api?t=20192141415289493
    app.use("/api",proxy({
        target:"http://m.mtime.cn",
        changeOrigin:true,
        pathRewrite:{
            "^/api":""
        }
    }))
}
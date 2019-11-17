let baseUrl = '';

const env = process.env
if (env.NODE_ENV == 'development') {
    baseUrl = `http://192.168.1.238/api`; // 开发环境地址
} else if (env.NODE_ENV == 'production') {
    baseUrl = `http://192.168.1.2`; //生产环境地址
} else if (env.NODE_ENV == 'test') {
    baseUrl = `http://192.168.1.3`; //测试环境地址
}

export {
    baseUrl,
    env
}

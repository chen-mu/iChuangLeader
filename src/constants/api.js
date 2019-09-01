// 接口基础配置
const isDev = process.env.NODE_ENV === 'development'
export const DEV_HOST = ""//添加接口
export const PROD_HOST = ""
export const HOST = isDev ? DEV_HOST : PROD_HOST
export const PAGE_SIZE = 6
export const ROOM_PAGE_SIZE = 20

// 用户
export const API_USER_VALID = `${HOST}/auth/loginPost`
export const API_USER_LOGIN = `${HOST}/auth/userLoginPost`


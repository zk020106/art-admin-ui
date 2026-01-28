declare namespace Api {
  /** 通用响应 */
  interface Resp<T = unknown> {
    code: string
    data: T
    msg: string
    success: boolean
    timestamp?: string
  }

  /** 分页数据响应 */
  interface PageResp<T> {
    list: T[]
    total: number
  }

  /** 分页数据查询参数 */
  interface PageQuery {
    page?: number
    size?: number
  }

  /** 认证类型 */
  type AuthType = 'ACCOUNT' | 'PHONE' | 'EMAIL' | 'SOCIAL'

  /** 基础认证请求参数 */
  interface AuthReq {
    clientId?: string
    authType?: AuthType
  }

  /** 账号登录请求参数 */
  interface AccountLoginReq extends AuthReq {
    username: string
    password: string
    captcha?: string
    uuid?: string
  }

  /** 手机号登录请求参数 */
  interface PhoneLoginReq extends AuthReq {
    phone: string
    captcha: string
  }

  /** 邮箱登录请求参数 */
  export interface EmailLoginReq extends AuthReq {
    email: string
    captcha: string
  }

  /** 第三方登录请求参数 */
  interface SocialLoginReq {
    source: string
    code: string
    state?: string
    clientId?: string
    authType?: AuthType
  }

  type LoginReq = AccountLoginReq | PhoneLoginReq | EmailLoginReq | SocialLoginReq

  /** 登录响应 */
  interface LoginResp {
    token: string
    tenantId: string
  }

  /** 第三方登录授权响应 */
  interface SocialLoginResp {
    authorizeUrl: string
  }

  /** 用户信息 */
  interface UserInfo {
    id: string
    username: string
    nickname: string
    gender: 0 | 1 | 2
    email: string
    phone: string
    avatar: string
    pwdResetTime: string
    pwdExpired: boolean
    registrationDate: string
    deptName: string
    roles: string[]
    roleNames: string[]
    permissions: string[]
  }

  namespace Captcha {
    /** 图片验证码响应 */
    interface ImageCaptchaResp {
      img: string
      uuid: string
      expireTime: number
      isEnabled: boolean
    }
  }
}

/*
 * @Author: Debonex
 * @Date: 2021-09-03 23:52:53
 * @Last Modified by: Debonex
 * @Last Modified time: 2021-09-04 00:13:58
 */

import axios, { AxiosInstance } from 'axios'
import { config } from 'dotenv'

const envConfig = config().parsed

let auth
if (envConfig === undefined) {
  console.error('get .env config failed, please check your .env file.')
  auth = {}
} else {
  auth = {
    username: envConfig.GITHUB_USERNAME,
    password: envConfig?.OATH
  }
}

const instanceGithubAPI: AxiosInstance = axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 10000,
  ...auth
})

export const githubAPI = {
  get: (url: string, data = {}, config = {}) => {
    return instanceGithubAPI.get(url, { ...{ params: data }, ...config })
  },
  post: (url: string, data = {}, config = {}) => {
    return instanceGithubAPI.post(url, data, config)
  }
}

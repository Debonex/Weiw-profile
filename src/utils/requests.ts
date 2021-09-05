/*
 * @Author: Debonex
 * @Date: 2021-09-03 23:52:53
 * @Last Modified by: Debonex
 * @Last Modified time: 2021-09-06 02:21:13
 */

import axios, { AxiosInstance } from 'axios'
import { config } from 'dotenv'

import { IncomingMessage } from 'node:http'
import https from 'https'

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

export function urlToBase64(url: string): Promise<string> {
  let base64Img
  return new Promise((resolve) => {
    let req = https.get(url, (res: IncomingMessage) => {
      var chunks: any = []
      var size = 0
      res.on('data', (chunk: any) => {
        chunks.push(chunk)
        size += chunk.length
      })
      res.on('end', () => {
        var data = Buffer.concat(chunks, size)
        base64Img = data.toString('base64')
        resolve(base64Img)
      })
    })
    req.end()
  })
}

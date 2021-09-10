/*
 * requests related
 * @Author: Debonex
 * @Date: 2021-09-03 23:52:53
 * @Last Modified by: Debonex
 * @Last Modified time: 2021-09-10 16:28:52
 */

import axios, {
  AxiosBasicCredentials,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import { IncomingMessage } from 'node:http'
import https from 'https'
import { config } from 'dotenv'

const envConfig = config().parsed

let auth: AxiosBasicCredentials
if (envConfig) {
  auth = {
    username: envConfig.GITHUB_USERNAME,
    password: envConfig?.GITHUB_OATH
  }
}
// TODO reasonable?
else {
  auth = {
    username: '',
    password: ''
  }
}

const commonInstance: AxiosInstance = axios.create({
  timeout: 10000
})

export const commonRequests = {
  get: (url: string, data = {}, config = {}): Promise<AxiosResponse> => {
    return commonInstance.get(url, { ...{ params: data }, ...config })
  },
  post: (url: string, data = {}, config = {}): Promise<AxiosResponse> => {
    return commonInstance.post(url, data, config)
  }
}

const githubAPIInstance: AxiosInstance = axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 10000
})

export const githubAPI = {
  get: (url: string, data = {}, config = {}): Promise<AxiosResponse> => {
    const requestConfig: AxiosRequestConfig = {
      ...{ params: data },
      ...config,
      auth
    }
    return githubAPIInstance.get(url, requestConfig)
  },
  post: (url: string, data = {}, config = {}): Promise<AxiosResponse> => {
    const requestConfig: AxiosRequestConfig = {
      ...config,
      auth
    }
    return githubAPIInstance.post(url, data, requestConfig)
  }
}

/**
 * transfer a url of an image to a base64 string
 * @param url url of an image
 * @returns base64 string of the image
 */
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

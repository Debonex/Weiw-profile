/*
 * @Author: Debonex
 * @Date: 2021-09-04 00:52:13
 * @Last Modified by: Debonex
 * @Last Modified time: 2021-09-04 01:49:27
 */
import { AxiosResponse } from 'axios'
import { githubAPI } from '../utils/requests'

export async function fetchBaseInfo(
  username: string
): Promise<AxiosResponse<any>> {
  return githubAPI.get(`/users/${username}`)
}

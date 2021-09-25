/*
 * @Author: Debonex
 * @Date: 2021-09-16 13:26:49
 * @Last Modified by: Debonex
 * @Last Modified time: 2021-09-25 17:55:28
 */

import cssRaw from '!!raw-loader!../styles/profile-error.module.css'
import cssNext from '../styles/profile-error.module.css'
const css: Record<string, string> = {}
for (let k in cssNext) {
  css[k] = k
}
function ProfileError() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="200">
      <foreignObject width="100%" height="100%">
        <style type="text/css">{cssRaw}</style>
        <div
          className={css['container-main']}
          xmlns="http://www.w3.org/1999/xhtml">
          <div className={css['wrong-text']}>Something wrong happened</div>
          <div className={css['wrong-hint']}>
            please check your request params
          </div>
        </div>
      </foreignObject>
    </svg>
  )
}

export default ProfileError

/*
 * @Author: Debonex
 * @Date: 2021-10-09 16:58:07
 * @Last Modified by: Debonex
 * @Last Modified time: 2021-10-09 17:32:56
 */

import { ProfileProps } from '../../components/profile'

import { defaultProfileProps } from '../../components/profile'

export const exampleProps: Array<ProfileProps> = [
  {
    ...defaultProfileProps,
    githubInfoShow: false,
    osuInfoShow: true,
    osuInfo: {
      username: 'Debonet',
      avatarUrl: 'https://cdn.quasar.dev/img/avatar.png',
      playmode: 'mania',
      country: 'CN',
      rankHistory: [
        8922, 8926, 8935, 8925, 8940, 8951, 8960, 8971, 8986, 8994, 9002, 9008,
        9022, 9025, 9035, 9048, 9054, 9036, 9044, 9057, 9063, 9072, 9080, 7370,
        7388, 7399, 7415, 7438, 7453, 7469, 7488, 7495, 7510, 7529, 7553, 7571,
        7583, 7593, 7607, 7623, 7640, 7652, 7669, 7678, 7684, 7700, 7715, 7720,
        7730, 7740, 7748, 7761, 7774, 7784, 7805, 7816, 7809, 7825, 7836, 7847,
        7852, 7861, 7833, 7817, 7813, 7831, 7837, 7846, 7862, 7859, 7870, 7887,
        7885, 7900, 7910, 7908, 7926, 7941, 7952, 7957, 7965, 7975, 7987, 8006,
        8018, 8029, 8038, 8027, 8043, 8052
      ],
      globalRank: 8052,
      pp: 5496.17,
      gradeCounts: { ss: 54, ssh: 0, s: 1604, sh: 0, a: 108 },
      scoresRecent: []
    }
  }
]

/*
 * @Author: Debonex
 * @Date: 2021-10-09 16:58:07
 * @Last Modified by: Debonex
 * @Last Modified time: 2021-11-02 10:59:52
 */

import { ProfileProps } from '../../components/profile'

import { defaultProfileProps } from '../../components/profile'

export const exampleProps: Array<ProfileProps> = [
  {
    ...defaultProfileProps,
    github: false,
    osu: true,
    _osuInfo: {
      username: 'Debonet',
      avatarUrl: 'https://cdn.quasar.dev/img/avatar.png',
      playMode: 'mania',
      country: 'CN',
      rankHistory: [
        8922, 8926, 8935, 8925, 8940, 8951, 8960, 8971, 8986, 8994, 9002, 9008, 9022, 9025, 9035,
        9048, 9054, 9036, 9044, 9057, 9063, 9072, 9080, 7370, 7388, 7399, 7415, 7438, 7453, 7469,
        7488, 7495, 7510, 7529, 7553, 7571, 7583, 7593, 7607, 7623, 7640, 7652, 7669, 7678, 7684,
        7700, 7715, 7720, 7730, 7740, 7748, 7761, 7774, 7784, 7805, 7816, 7809, 7825, 7836, 7847,
        7852, 7861, 7833, 7817, 7813, 7831, 7837, 7846, 7862, 7859, 7870, 7887, 7885, 7900, 7910,
        7908, 7926, 7941, 7952, 7957, 7965, 7975, 7987, 8006, 8018, 8029, 8038, 8027, 8043, 8052
      ],
      globalRank: 8052,
      pp: 5496.17,
      gradeCounts: { ss: 54, ssh: 0, s: 1604, sh: 0, a: 108 },
      scoresRecent: [
        {
          accuracy: 0.9984169387553181,
          mods: [],
          score: 989698,
          max_combo: 3679,
          passed: true,
          perfect: false,
          statistics: {
            count_50: 0,
            count_100: 0,
            count_300: 608,
            count_geki: 2747,
            count_katu: 13,
            count_miss: 1
          },
          rank: 'S',
          created_at: '2020-10-14T05:36:33+00:00',
          best_id: 379796188,
          pp: 1350.74,
          mode: 'mania',
          replay: true,
          beatmap: {
            beatmapset_id: 800102,
            difficulty_rating: 10.24,
            id: 1679790,
            mode: 'mania',
            status: 'ranked',
            total_length: 120,
            user_id: 2339768,
            version: "[7K] Jakads' LASTING LEGACY (recent)",
            accuracy: 8.5,
            ar: 10,
            bpm: 252,
            convert: false,
            count_circles: 2313,
            count_sliders: 1056,
            count_spinners: 0,
            cs: 7,
            deleted_at: null,
            drain: 8.5,
            hit_length: 119,
            is_scoreable: true,
            last_updated: '2020-03-19T14:19:21+00:00',
            passcount: 18180,
            playcount: 62190,
            ranked: 1,
            url: 'https://osu.ppy.sh/beatmaps/1679790',
            checksum: '9a4c99e7c5c7c54ad52eb6c2029d6ac6'
          },
          beatmapset: {
            artist: 'xi',
            artist_unicode: 'xi',
            covers: {
              cover: 'https://assets.ppy.sh/beatmaps/800102/covers/cover.jpg?1622141978',
              'cover@2x': 'https://assets.ppy.sh/beatmaps/800102/covers/cover@2x.jpg?1622141978',
              card: 'https://assets.ppy.sh/beatmaps/800102/covers/card.jpg?1622141978',
              'card@2x': 'https://assets.ppy.sh/beatmaps/800102/covers/card@2x.jpg?1622141978',
              list: 'https://assets.ppy.sh/beatmaps/800102/covers/list.jpg?1622141978',
              'list@2x': 'https://assets.ppy.sh/beatmaps/800102/covers/list@2x.jpg?1622141978',
              slimcover: 'https://assets.ppy.sh/beatmaps/800102/covers/slimcover.jpg?1622141978',
              'slimcover@2x':
                'https://assets.ppy.sh/beatmaps/800102/covers/slimcover@2x.jpg?1622141978'
            },
            creator: 'Kroytz',
            favourite_count: 821,
            hype: null,
            id: 800102,
            nsfw: false,
            play_count: 1183455,
            preview_url: '//b.ppy.sh/preview/800102.mp3',
            source: 'SOUND VOLTEX IV HEAVENLY HAVEN',
            status: 'ranked',
            title: 'Last Resort',
            title_unicode: 'Last Resort',
            track_id: null,
            user_id: 2339768,
            video: false
          },
          weight: { percentage: 100, pp: 1350.74 },
          user: {
            avatar_url: 'https://a.ppy.sh/259972?1611430997.jpeg',
            country_code: 'KR',
            default_group: 'default',
            id: 259972,
            is_active: true,
            is_bot: false,
            is_deleted: false,
            is_online: false,
            is_supporter: true,
            last_visit: '2021-10-29T15:16:35+00:00',
            pm_friends_only: false,
            profile_colour: null,
            username: 'Jakads'
          }
        }
      ],
      scoresBest: [
        {
          accuracy: 0.9984169387553181,
          mods: [],
          score: 989698,
          max_combo: 3679,
          passed: true,
          perfect: false,
          statistics: {
            count_50: 0,
            count_100: 0,
            count_300: 608,
            count_geki: 2747,
            count_katu: 13,
            count_miss: 1
          },
          rank: 'S',
          created_at: '2020-10-14T05:36:33+00:00',
          best_id: 379796188,
          pp: 1350.74,
          mode: 'mania',
          mode_int: 3,
          replay: true,
          beatmap: {
            beatmapset_id: 800102,
            difficulty_rating: 10.24,
            id: 1679790,
            mode: 'mania',
            status: 'ranked',
            total_length: 120,
            user_id: 2339768,
            version: "[7K] Jakads' LASTING LEGACY (best)",
            accuracy: 8.5,
            ar: 10,
            bpm: 252,
            convert: false,
            count_circles: 2313,
            count_sliders: 1056,
            count_spinners: 0,
            cs: 7,
            deleted_at: null,
            drain: 8.5,
            hit_length: 119,
            is_scoreable: true,
            last_updated: '2020-03-19T14:19:21+00:00',
            mode_int: 3,
            passcount: 18180,
            playcount: 62190,
            ranked: 1,
            url: 'https://osu.ppy.sh/beatmaps/1679790',
            checksum: '9a4c99e7c5c7c54ad52eb6c2029d6ac6'
          },
          beatmapset: {
            artist: 'xi',
            artist_unicode: 'xi',
            covers: {
              cover: 'https://assets.ppy.sh/beatmaps/800102/covers/cover.jpg?1622141978',
              'cover@2x': 'https://assets.ppy.sh/beatmaps/800102/covers/cover@2x.jpg?1622141978',
              card: 'https://assets.ppy.sh/beatmaps/800102/covers/card.jpg?1622141978',
              'card@2x': 'https://assets.ppy.sh/beatmaps/800102/covers/card@2x.jpg?1622141978',
              list: 'https://assets.ppy.sh/beatmaps/800102/covers/list.jpg?1622141978',
              'list@2x': 'https://assets.ppy.sh/beatmaps/800102/covers/list@2x.jpg?1622141978',
              slimcover: 'https://assets.ppy.sh/beatmaps/800102/covers/slimcover.jpg?1622141978',
              'slimcover@2x':
                'https://assets.ppy.sh/beatmaps/800102/covers/slimcover@2x.jpg?1622141978'
            },
            creator: 'Kroytz',
            favourite_count: 821,
            hype: null,
            id: 800102,
            nsfw: false,
            play_count: 1183455,
            preview_url: '//b.ppy.sh/preview/800102.mp3',
            source: 'SOUND VOLTEX IV HEAVENLY HAVEN',
            status: 'ranked',
            title: 'Last Resort',
            title_unicode: 'Last Resort',
            track_id: null,
            user_id: 2339768,
            video: false
          },
          weight: { percentage: 100, pp: 1350.74 },
          user: {
            avatar_url: 'https://a.ppy.sh/259972?1611430997.jpeg',
            country_code: 'KR',
            default_group: 'default',
            id: 259972,
            is_active: true,
            is_bot: false,
            is_deleted: false,
            is_online: false,
            is_supporter: true,
            last_visit: '2021-10-29T15:16:35+00:00',
            pm_friends_only: false,
            profile_colour: null,
            username: 'Jakads'
          }
        }
      ]
    }
  }
]

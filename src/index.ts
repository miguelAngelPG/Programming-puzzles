// import { findPalindromeWord } from './invertString';

import { drawEquilateralTriangle, drawRightTriangle } from "./figures";

// findPalindromeWord('la Ana lava la tina');

// const scopes = [
//     'user-read-email',
//     'playlist-read-private',
//     'playlist-read-collaborative',
//     'user-read-email',
//     'streaming',
//     'user-read-private',
//     'user-library-read',
//     'user-top-read',
//     'user-library-modify',
//     'user-read-playback-state',
//     'user-modify-playback-state',
//     'user-read-currently-playing',
//     'user-read-recently-played',
//     'user-follow-read',
// ].join('+')

// console.log(scopes)
// const params = {
//     scope: scopes,
// }

// const queryParamString = new URLSearchParams( params )

// const LOGIN_URL = `https://accounts.spotify.com/authorize?${ queryParamString.toString() }`

// console.log(LOGIN_URL)

// console.log('Basic ' + (Buffer.from('7d9288150677415db0b02e752b9d0597' + ':' + 'e0978f6d009c48d097ac290c10839876').toString('base64')))

// const a = new URLSearchParams({'grant_type': 'client_credentials',})

// console.log({a})






// {
//     "access_token":"BQCdITcdsA1TeOjzIY9fu8uCNLgQKCvyvQgsHafTMnUbfRw4n2mLfVyeKJmfuCukLvxfFfGlP43JVHd-NQinlA4IzXVqfzVeyM5y4hgpan4ODMf9FIGqE-by7rIOgE7FgkLiaHXa3ugC4qD_D5eA92ThMZkLMi0fbeSqYJ8kiTMEQMlbOURD0ZcpcHl4WCRNXcSZ5-wGIy7ba1V88EJ8vFgkLUYKOhbP3UJK6WJnekFjgQyZbjf85UvBoFunRQg",
//     "token_type":"Bearer",
//     "expires_in":3600,
//     "refresh_token":"AQBiteD_jdpp9MUBIAt4WHQKLp8CY0UDgm6bF0MmBNaptRv85qqdqnLmzrcKNYaqHShEVZdCdBlgvQ0Rl77zS8x_IygRDJ-bRARS9vnT8kMQwaGqE7-Z_ahkTCiSLVYU40Q",
//     "scope":"playlist-read-private playlist-read-collaborative user-follow-read user-read-email user-read-private streaming user-modify-playback-state user-library-read user-library-modify user-read-playback-state user-read-currently-playing user-read-recently-played user-top-read"
// }

// const lastRow = drawIsoscelesTriangle(5).split('\n')
console.log(drawEquilateralTriangle(5))
// console.log(lastRow)
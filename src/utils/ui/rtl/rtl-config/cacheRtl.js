import rtlPlugin from 'stylis-plugin-rtl'
import createCache from '@emotion/cache'
import {prefixer} from "stylis"

export const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

// export const jss = create({
//     plugins: [...jssPreset().plugins, rtl()]
// })

//

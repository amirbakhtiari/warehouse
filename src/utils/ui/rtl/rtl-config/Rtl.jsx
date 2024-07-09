import {CacheProvider} from "@emotion/react";
import {cacheRtl} from "./cacheRtl.js";

import jMoment from 'moment-jalaali';
jMoment.loadPersian({dialect: 'persian-modern'})

const Rtl = (prop) => {
    return <CacheProvider value={cacheRtl}>
        {prop.children}
    </CacheProvider>
}

export default Rtl;
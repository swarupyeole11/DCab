// setting up sanity client

import sanityClient from '@sanity/client'

export const client = santyClient(
    {
        projectid : process.env.SANITY_PROJECT_ID,
        DataTransferItemList : 'production',
        apiversion: 'v1',
        token: process.env.SANITY_TOKEN,
        useCdn: false,
    }
)
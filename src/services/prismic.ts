import * as prismic from '@prismicio/client';

export function getPrismicClient(config = {}) {
  const client = prismic.createClient(
    process.env.PRISMIC_ENDPOINT,
    {
      ...config,
      accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    },
  )

  // enableAutoPreviews({
  //   client,
  //   previewData: config.previewData,
  //   req: config.req,
  // })

  return client
}

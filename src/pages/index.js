import Image from 'next/image'
import Layout from '@/components/Layout'
import * as prismicH from '@prismicio/helpers'
import { SliceZone } from '@prismicio/react'
import { createClient, linkResolver } from 'prismicio'
import { components } from '../../slices'


export default function Home({ page, navigation, settings }) {
  return <>
      <Layout navigation={navigation}>
        <SliceZone slices={page.data.slices} components={components} />
      </Layout>
    </>
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const [navigation, page] = await Promise.all([
    client.getByUID('menu', 'main'),
    client.getByUID('page', 'sample'),
  ])

  // const page = await client.getByUID("page", params.uid, {
    // graphQuery: `{
    //     page {
    //       ...pageFields
    //       slices {
    //         ...on featured_project {
    //           variation {
    //             ...on default {
    //               primary {
    //                 project {
    //                   ...projectFields
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }`
    //});

  return {
    props: { page, navigation },
  };
}
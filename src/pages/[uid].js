import Layout from '@/components/Layout'
import { Navigation } from '@/components/Navigation'
import * as prismicH from '@prismicio/helpers'
import { SliceZone } from '@prismicio/react'
import { createClient, linkResolver } from 'prismicio'
import { components } from '../../slices'

export default function Page({ page, navigation, settings }) {
  return <>
      <Layout navigation={navigation}>
        <SliceZone slices={page.data.slices} components={components} />
      </Layout>
    </>
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const [navigation, page] = await Promise.all([
    client.getByUID('menu', 'main'),
    client.getByUID('page', params.uid),
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

export async function getStaticPaths() {
  const client = createClient()
  const pages = await client.getAllByType('page')

  return {
    paths: pages.map(page => prismicH.asLink(page, linkResolver)),
    fallback: false
  }
}
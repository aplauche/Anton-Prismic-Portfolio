import * as prismicH from '@prismicio/helpers'
import { SliceZone } from '@prismicio/react'
import { createClient, linkResolver } from 'prismicio'
import { components } from '../../../slices'

export default function Project({ project, navigation, settings }) {
  return <SliceZone slices={project.data.slices} components={components}/>;
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const project = await client.getByUID("project", params.uid);

  return {
    props: { project },
  };
}

export async function getStaticPaths() {
  const client = createClient()
  const projects = await client.getAllByType('project')
  return {
    paths: projects.map(project => prismicH.asLink(project, linkResolver)),
    fallback: false
  }
}
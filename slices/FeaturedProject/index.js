import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.FeaturedProjectSlice} FeaturedProjectSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeaturedProjectSlice>} FeaturedProjectProps
 * @param {FeaturedProjectProps}
 */
const FeaturedProject = ({ slice }) => {

   console.log(slice)
  
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >

      <PrismicNextLink field={slice.primary.project}>Link To Project</PrismicNextLink>
      <PrismicNextImage field={slice.primary.project.featured_image}/>
    </section>
  );
};

export default FeaturedProject;

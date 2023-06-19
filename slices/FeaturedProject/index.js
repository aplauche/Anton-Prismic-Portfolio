/**
 * @typedef {import("@prismicio/client").Content.FeaturedProjectSlice} FeaturedProjectSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeaturedProjectSlice>} FeaturedProjectProps
 * @param {FeaturedProjectProps}
 */
const FeaturedProject = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for featured_project (variation: {slice.variation})
      Slices
    </section>
  );
};

export default FeaturedProject;

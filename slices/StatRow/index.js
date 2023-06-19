/**
 * @typedef {import("@prismicio/client").Content.StatRowSlice} StatRowSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<StatRowSlice>} StatRowProps
 * @param {StatRowProps}
 */
const StatRow = ({ slice }) => {
  return (
    <section
     className="h-[1000px]"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for stat_row (variation: {slice.variation}) Slices
    </section>
  );
};

export default StatRow;

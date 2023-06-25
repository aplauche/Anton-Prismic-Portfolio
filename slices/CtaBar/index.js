/**
 * @typedef {import("@prismicio/client").Content.CtaBarSlice} CtaBarSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CtaBarSlice>} CtaBarProps
 * @param {CtaBarProps}
 */
const CtaBar = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for cta_bar (variation: {slice.variation}) Slices
    </section>
  );
};

export default CtaBar;

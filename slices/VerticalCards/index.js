/**
 * @typedef {import("@prismicio/client").Content.VerticalCardsSlice} VerticalCardsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<VerticalCardsSlice>} VerticalCardsProps
 * @param {VerticalCardsProps}
 */
const VerticalCards = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for vertical_cards (variation: {slice.variation})
      Slices
    </section>
  );
};

export default VerticalCards;

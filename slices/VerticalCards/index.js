import CustomRichText from "@/components/CustomRichText";

/**
 * @typedef {import("@prismicio/client").Content.VerticalCardsSlice} VerticalCardsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<VerticalCardsSlice>} VerticalCardsProps
 * @param {VerticalCardsProps}
 */
const VerticalCards = ({ slice }) => {
  return (
    <section
      className="py-16 container grid grid-cols-2 gap-16 relative"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div>
        <div className="sticky top-[100px]">
          <h2 className="font-bold text-4xl mb-4">{slice.primary.title}</h2>
          <CustomRichText field={slice.primary.description} />
        </div>
      </div>


      <div className="flex flex-col gap-8">
        {slice?.items?.map((item, i) => (
          <div key={i} className="border border-black rounded-lg bg-white p-8">
            <CustomRichText field={item.title} />
            <CustomRichText field={item.description} />
          </div>
        ))}
      </div>

    </section>
  );
};

export default VerticalCards;

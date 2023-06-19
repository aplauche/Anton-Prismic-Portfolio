import CustomRichText from "@/components/CustomRichText";

/**
 * @typedef {import("@prismicio/client").Content.RichTextSlice} RichTextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<RichTextSlice>} RichTextProps
 * @param {RichTextProps}
 */
const RichText = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <CustomRichText field={slice.primary.content} />
    </section>
  );
};

export default RichText;

/**
 * @typedef {import("@prismicio/client").Content.StatRowSlice} StatRowSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<StatRowSlice>} StatRowProps
 * @param {StatRowProps}
 */
const StatRow = ({ slice }) => {
  return (
    <section
      className="container grid grid-cols-3 gap-2"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.items.map((item, idx) => (
        <div key={idx} className="py-8 flex flex-col items-center justify-center gap-8 text-center border border-black rounded-lg">
          <h3 className="text-5xl font-bold">{item.stat}</h3>
          <p>{item.caption}</p>

        </div>
      ))}
      
    </section>
  );
};

export default StatRow;

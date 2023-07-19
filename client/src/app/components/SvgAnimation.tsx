const getRectangles = () => {
  return [
    {
      id: 1,
      d: "M-431.22 350.47L832.294 689.028L577.834 306.794L-685.681 -31.7635L-431.22 350.47Z",
      color: "#DDC9F8",
    },
    {
      id: 2,
      d: "M108.046 292.142L1371.56 630.7L1117.1 248.467L-146.415 -90.0911L108.046 292.142Z",
      color: "#F1DF9E",
    },
    {
      id: 3,
      d: "M150.617 225.265L894.922 424.701L744.984 199.693L0.679198 0.257383L150.617 225.265Z",
      color: "#DDC9F8",
    },
    {
      id: 4,
      d: "M254.677 383.074L1518.19 721.632L1263.73 339.398L0.216584 0.840765L254.677 383.074Z",
      color: "#F1DF9E",
    },
  ];
};

const SvgAnimation = () => {
  return (
    <svg
      className="svg-canvas"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 1200 631"
    >
      {getRectangles().map((item) => {
        return (
          <path
            key={item.id}
            className={`rectangle rectangle-${item.id}`}
            d={item.d}
            fill={item.color}
          />
        );
      })}
    </svg>
  );
};

export default SvgAnimation;

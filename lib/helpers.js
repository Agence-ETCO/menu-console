export const getColor = (taste) => {
  const option = taste.toLowerCase();
  switch (option) {
    case "aromatique et charnu":
      return "#790033";

    case "délicat et léger":
      return "#EEF0C0";

    case "aromatique et souple":
      return "#E53138";
    case "aromatique et rond":
      return "#B9C2DD";

    case "fruité et généreux":
      return "#F39900";

    case "fruité et léger":
      return "#f1bdd8";

    case "fruité et vif":
      return "#FFE400";

    case "fruité et doux":
      return "#9ED3CA";

    default:
      return null;
  }
};

export const getFormat = (size) => {
  if (size.includes("20")) {
    return "Pression 20 oz";
  } else if (size.includes("Pitcher")) {
    return "Pichet 60 oz";
  } else if (size.includes("Bottle")) {
    return "Bouteille";
  } else return "Pichet 60 oz";
};

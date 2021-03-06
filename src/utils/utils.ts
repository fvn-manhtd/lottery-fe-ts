import { themeGet } from "@styled-system/theme-get";

export const getTheme = (query: string, fallback?: string) =>
  themeGet(query, fallback);

export const convertHexToRGB = (hex) => {
  // check if it's a rgba
  if (hex.match("rgba")) {
    let triplet = hex.slice(5).split(",").slice(0, -1).join(",");
    return triplet;
  }

  let c;

  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");

    return [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",");
  }
};

export const getSearchQueryObj = (key) => {
  const searchQuery=location.search;
  const queryObj = {}
  searchQuery.slice(1).split('&').map((str) => queryObj[str.split('=')[0]] = str.split('=')[1] )
  return queryObj[key];
};


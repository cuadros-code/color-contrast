function luminance(r: number, g: number, b: number) {
  const a = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

export function calculateContrast(color1: string, color2: string) {
  const rgb1 = parseInt(color1.slice(1), 16);
  const rgb2 = parseInt(color2.slice(1), 16);
  const lum1 = luminance((rgb1 >> 16) & 0xff, (rgb1 >> 8) & 0xff, rgb1 & 0xff);
  const lum2 = luminance((rgb2 >> 16) & 0xff, (rgb2 >> 8) & 0xff, rgb2 & 0xff);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}
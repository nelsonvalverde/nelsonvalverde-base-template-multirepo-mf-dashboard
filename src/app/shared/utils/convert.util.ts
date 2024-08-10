export class ConvertUtil {
  static getColorHex(color?: string) {
    if (!color) return color ?? '#c4c4c4';
    if (color?.startsWith('#')) return color;
    const documentStyle = getComputedStyle(document.documentElement);
    return documentStyle.getPropertyValue(color);
  }
}

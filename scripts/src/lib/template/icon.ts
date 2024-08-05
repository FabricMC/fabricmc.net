import { ICON_FONT, type CanvasAdaptorFactory, type CanvasAdaptor } from "./template";
import { decode64 } from "./utils";

const DEFAULT_ICON = "iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAQMAAAD58POIAAAABlBMVEUAAAD///+l2Z/dAAABeklEQVRIx9XTsW1cMQwGYAoKIlfWbaAVUroKbxSPcBtIQRaTN9EILFkI+l3ovXuSLvYZCK4wK+IrWBD/T1iGHg41fBUcygwWKY7QLGiCuoLaNoOY+1BnKFfQDUhnyGeZIZ3lNEO+LFBef01gyutlAlvOEzRb6MIDVCskDAD01MEJCTeKjWgHI1wp1A3Ui9Wg5HSHoFaDkN1BgroOzwN4ORkJuQNXX738NsKFAULpEI2wdIhAdRLTCM1JzBIHsMJZokSAkK/ApQMAbMADhCycDzASsoQObwDwR31Sn154AFJHpwPqT6NENACZOgIambYBNrCYAOSQflAcIEDCmPXEDyrQ42GP9wBuBXuAMqBENxBneCGegVNYIPsFygrqFqh2gXYDZoG+j5BuIC6QVyh8D444aPgXBKi/B9XtUD+ANkH9CsAuNz4D/wH8/Rx4gPZIsP8DDlAeHrRBXUFXkCugQ/YLUJhBiCeg3o8JsICdAKm38OhtGio2zveBd37Jm8IEWUmfAAAAAElFTkSuQmCC";

export function generateModIcon(name: string, unique: boolean, factory: CanvasAdaptorFactory): ArrayBufferLike {
  if (!unique) return decode64(DEFAULT_ICON);

  const canvas = factory.create(128, 128);

  if (canvas != null && drawModIcon(canvas, name)) {
    return canvas.getPng();
  } else {
    return decode64(DEFAULT_ICON);
  }
}

export function drawModIcon(canvas: CanvasAdaptor, name: string): boolean {
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  if (ctx == null) return false;

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, 128, 128);

  const words = name.split(/\s+/);

  let totalHeight = 0;
  let lineHeight = Array<number>(words.length);
  let fontSize = 65;

  while(true) {
    totalHeight = 0;

    for (const word of words) {
      let fontSizeTest = fontSize;
  
      do {
        fontSizeTest--;
        ctx.font = `${fontSizeTest}px ${ICON_FONT}`;
      } while (ctx.measureText(word).width > 124);
  
      fontSize = Math.min(fontSize, fontSizeTest);
    }

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      ctx.font = `${fontSize}px ${ICON_FONT}`;
      const metrics = canvas.measureText(ctx, word);
      lineHeight[i] = metrics.ascent + metrics.descent;
      totalHeight += lineHeight[i];
    }

    totalHeight += (words.length - 1) * 2;
    if(totalHeight <= 124) break;
  }

  const textY = (128 - totalHeight) / 2;

  for (let i = 0; i < words.length; i++) {
    let offset = 0;
    for (const lastLineHeight of lineHeight.slice(0, i)) {
      offset += lastLineHeight + 2;
    }

    const word = words[i];
    ctx.font = `${fontSize}px ${ICON_FONT}`;
    ctx.fillStyle = "#000000";
    ctx.textAlign = "center";
    const metrics = canvas.measureText(ctx, word);
    ctx.fillText(word, 64, textY + offset + metrics.ascent);
  }

  return true;
}



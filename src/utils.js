import cv from 'opencv.js'

export const plot = (image, width, height) => {

  const binImage = image.map((value)=> (value > 0 ? 255 : 0))
  const cvImage = cv.matFromArray(height, width, cv.CV_8UC1, binImage);

  let dst = new cv.Mat();

  // convert to 1 channel
  cvImage.convertTo(dst, cv.CV_8UC1);
  cvImage.delete()

  // convert to rgba
  cv.cvtColor(dst, dst, cv.COLOR_GRAY2RGBA);

  const imageArray = new Uint8ClampedArray(dst.data);
  dst.delete();

  const imageData = new ImageData(imageArray, width, height);

  const tmpCanvas = document.createElement('canvas');
  tmpCanvas.width = width;
  tmpCanvas.height = height;
  // tmpCanvas.style = 'position:fixed;top:150px;left:700px';
  tmpCanvas.style = 'position:fixed;top:10px;left:10px';

  const ctx = tmpCanvas.getContext('2d');

  ctx.putImageData(imageData, 0, 0);

  document.body.append(tmpCanvas);
  // debugger 
  return tmpCanvas;
  
}

function solution(sizes) {
  const rotate = sizes.map((size, index, arr) => {
    let [w, h] = size;
    if (w < h) {
      return ([w, h] = [h, w]);
    } else {
      return [w, h];
    }
  });

  const wMax = Math.max(...rotate.map((size) => size[0]));
  const hMax = Math.max(...rotate.map((size) => size[1]));

  return wMax * hMax;
}

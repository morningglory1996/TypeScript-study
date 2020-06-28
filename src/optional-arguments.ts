export {};

let bmi: (height: number, weight: number, pritable?: boolean) => number = (
  height: number,
  weight: number,
  pritable?: boolean
): number => {
  const bmi: number = weight / (height * height);
  if(pritable) {
    console.log({ bmi });
  }
  return bmi;
};

bmi(1.73, 63, false);

// bmi(身長, 体重, console.logで出力するかどうか?)
// bmi(1.72, 63, true); される
// bmi(1.72, 63, false); されない
// bmi(1.72, 63); されない





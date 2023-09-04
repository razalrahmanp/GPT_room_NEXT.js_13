/* The code is importing two components, `ReactCompareSlider` and `ReactCompareSliderImage`, from the
"react-compare-slider" library. */
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export const CompareSlider = ({
  original,
  restored,
}: {
  original: string;
  restored: string;
}) => {
  return (
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={original} alt="original photo" />}
      itemTwo={<ReactCompareSliderImage src={restored} alt="generated photo" />}
      portrait
      className="flex w-[600px] mt-5 h-96"
    />
  );
};

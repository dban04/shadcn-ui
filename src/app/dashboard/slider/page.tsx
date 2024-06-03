'use client';

import { Slider } from "@/components/ui/slider"
import { useState } from "react";

type SliderProps = React.ComponentProps<typeof Slider>

export default function Page() {
  const [sliderValue, setSliderValue] = useState(10);
  const [reachValue, setReachValue] = useState([10, 20]);

  return (
    <div className="grid grid-cols-1 gap-3">
      <span>Slider value: {sliderValue}</span>
      <Slider
        defaultValue={[sliderValue]}
        onValueChange={(value) => setSliderValue(value[0])}
        max={100}
        step={1}
      />

      <span> Slider Value: {reachValue.join(",")}</span>
      <Slider
        defaultValue={reachValue}
        onValueChange={setReachValue}
        max={100}
        step={1}
      />
    </div>
  );
}
import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';


export const useOrientation = () => {


  const [screenData, setScreenData] = useState(Dimensions.get('screen'));

  useEffect(() => {
    const onChange = (result: any) => {
      setScreenData(result.screen);
    };

    const dimensionChangeListener = Dimensions.addEventListener('change', onChange);

    return () => dimensionChangeListener.remove()
  });

  return {
    ...screenData,
    isLandscape: screenData.width > screenData.height,
  };
};

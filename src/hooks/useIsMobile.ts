import useViewportSize from './useViewpoerSize';
import { breakpointsValues } from '../theming/breakpoints';

const useIsMobile = () => {
  const viewportSize = useViewportSize();
  return viewportSize.width < breakpointsValues.tablet;
};

export default useIsMobile;

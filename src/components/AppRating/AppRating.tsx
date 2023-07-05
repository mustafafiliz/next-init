import { Rating } from 'react-simple-star-rating';
import StarFilledIcon from '../Icons/StarFilledIcon';
import StarEmptyIcon from '../Icons/StarEmptyIcon';

type Props = {
  point: number;
  size?: number;
  filledVariant?: string | undefined;
  emptyVariant?: string | undefined;
};

export default function AppRating({ point, size = 14, filledVariant = '#F9A851', emptyVariant = 'transparent' }: Props) {
  const _point = point ? (point > 5 ? 5 : point) : 0;
  return (
    <span>
      <Rating
        initialValue={_point}
        emptyIcon={<StarEmptyIcon width={size} height={size} />}
        fillIcon={<StarFilledIcon width={size} height={size} />}
        SVGstrokeColor={filledVariant}
        fillColor={filledVariant}
        emptyColor={emptyVariant}
        size={size}
        allowFraction
        readonly
      />
    </span>
  );
}

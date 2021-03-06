import { describe, PropTypes } from 'react-desc';

import { getAvailableAtBadge, themeDocUtils } from '../../utils';

export const doc = RangeInput => {
  const DocumentedRangeInput = describe(RangeInput)
    .availableAt(getAvailableAtBadge('RangeInput'))
    .description('A slider control to input a value within a fixed range.')
    .usage(
      `import { RangeInput } from 'grommet';
<RangeInput />`,
    )
    .intrinsicElement('input');

  DocumentedRangeInput.propTypes = {
    id: PropTypes.string.description('The id attribute of the range input.'),
    min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).description(
      'The minimum value permitted.',
    ),
    max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).description(
      'The maximum value permitted.',
    ),
    name: PropTypes.string.description(
      'The name attribute of the range input.',
    ),
    onChange: PropTypes.func.description(
      `Function that will be called when the user changes the value. It will
      be passed an event object. The new input value will be available
      via 'event.target.value'.`,
    ),
    step: PropTypes.number.description('The step interval between values.'),
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).description('The current value.'),
  };

  return DocumentedRangeInput;
};

export const themeDoc = {
  ...themeDocUtils.focusStyle,
};

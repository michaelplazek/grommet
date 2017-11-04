import { describe, PropTypes } from 'react-desc';

import { getAvailableAtBadge } from '../../utils';

export default (function (Layer) {
  var DocumentedLayer = describe(Layer).availableAt(getAvailableAtBadge('Layer')).description('A modal overlay. It is the caller\'s responsibility to provide a control for\n      the user to close the layer.').usage('import { Layer } from \'grommet\';\n<Layer />');

  DocumentedLayer.propTypes = {
    align: PropTypes.oneOf(['center', 'top', 'bottom', 'left', 'right']).description('Which direction the layer contents should emanate from.').defaultValue('center'),
    onEsc: PropTypes.func.description('Function that will be called when the user presses the escape key inside the Layer.'),
    plain: PropTypes.bool.description('Whether this is a plain Layer with no background color or border.')
  };

  return DocumentedLayer;
});
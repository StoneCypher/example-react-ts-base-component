var index = (function (exports) {
'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react.production.min.js');
} else {
  module.exports = require('./cjs/react.development.js');
}

var Widget = function (_a) {
    var string = _a.kind;
    return (undefined("div", null,
        "This is a ",
        props.kind,
        " widget"));
};

exports.Widget = Widget;

return exports;

}({}));
//# sourceMappingURL=index.jsx.map

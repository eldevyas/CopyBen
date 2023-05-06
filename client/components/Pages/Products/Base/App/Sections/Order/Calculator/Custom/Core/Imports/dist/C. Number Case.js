"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
function NumberCase(props) {
    var Field = props.Field, Value = props.Value, setValue = props.setValue;
    return (react_1["default"].createElement(material_1.Input, { type: "number", inputProps: {
            min: Field.min,
            max: Field.max,
            step: 50
        }, name: Field.name, fullWidth: true, value: Value, onChange: function (event) {
            return setValue(event.target.value);
        }, onBlur: function (event) {
            if (event.target.value < 50) {
                return setValue(50);
            }
            else if (event.target.value > 500) {
                return setValue(500);
            }
        } }));
}
exports["default"] = NumberCase;

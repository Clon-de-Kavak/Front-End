import React from "react";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

class SomeSection extends React.Component {
  render() {
    const optionsArray = [
      { key: "ac", label: "A3" },
      { key: "al", label: "A5" },
      { key: "do", label: "Accord" },
      { key: "fi", label: "Beetle" },
      { key: "ho", label: "Duster" },
      { key: "ki", label: "Equinox" },
    ];

    return <DropdownMultiselect options={optionsArray} name="model" />;
  }
}

export default SomeSection;
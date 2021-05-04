import React from "react";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

class SomeSection extends React.Component {
  render() {
    const optionsArray = [
      { key: "ac", label: "Amarillo" },
      { key: "al", label: "Azul" },
      { key: "do", label: "Blanco" },
      { key: "fi", label: "Cafe" },
      { key: "ho", label: "Dorado" },
      { key: "ki", label: "Gris" },
    ];

    return <DropdownMultiselect options={optionsArray} name="color" />;
  }
}

export default SomeSection;
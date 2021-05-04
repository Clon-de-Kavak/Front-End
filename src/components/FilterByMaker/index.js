import React from "react";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


class SomeSection extends React.Component {
  render() {
    const optionsArray = [
      { key: "ac", label: "Acura" },
      { key: "al", label: "Alfa" },
      { key: "do", label: "Dodge" },
      { key: "fi", label: "Fiat" },
      { key: "ho", label: "Honda" },
      { key: "ki", label: "Kia" },
    ];

    return <DropdownMultiselect options={optionsArray} name="maker" />;
  }
}

export default SomeSection;
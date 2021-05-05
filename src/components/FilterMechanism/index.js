import React from "react";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


class SomeSection extends React.Component {
  render() {
    const optionsArray = [
      { key: "ac", label: "Wagon" },
      { key: "al", label: "Sedan" },
      { key: "do", label: "SUV" },
      { key: "fi", label: "Pick-up" },
      { key: "ho", label: "Minivan" },
      { key: "ki", label: "Convertible" },
    ];

    return <DropdownMultiselect options={optionsArray} name="maker" />;
  }
}

export default SomeSection;
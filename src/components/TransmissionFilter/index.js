import React from "react";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


class SomeSection extends React.Component {
  render() {
    const optionsArray = [
      { key: "ac", label: "Automatica" },
      { key: "al", label: "Manual" }
    ];

    return <DropdownMultiselect options={optionsArray} name="maker" />;
  }
}

export default SomeSection;
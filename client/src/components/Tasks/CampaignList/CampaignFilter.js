import React, { useState, useEffect } from "react";
import { getCampaigns } from "../../../requests/campaigns";
import "./CampaignFilter.scss";
// import classNames from "classnames/bind";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const CampaignFilter = function (props) {
  const [options, setOptions] = useState([]);
  // const defaultOption = options[0];

  const handleFilterChange = function (selection) {};

  useEffect(() => {
    getCampaigns().then((data) => {
      const filterInput = data.map((el) => {
        return { label: el.name, value: el.id };
      });
      setOptions(() => {
        return filterInput;
      });
    });
  }, []);

  return (
    <div className="campaign-filter">
      <Dropdown
        options={options}
        onChange={handleFilterChange}
        placeholder="Filter: by stage"
      />
    </div>
  );
};
export default CampaignFilter;

import React, { useState } from "react";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import "react-datepicker/dist/react-datepicker.css";
import "../../css/Home.css";

const { RangePicker } = DatePicker;

const Search = () => {
  const [keyword, setKeyword] = useState({
    city: "",
    guests: "",
    dateIn: "",
    dateOut: "",
  });

  const [value, setValue] = useState([]);

  const updateKeyword = (field, value) => {
    setKeyword((prevKeyword) => ({
      ...prevKeyword,
      [field]: value,
    }));
  };

  const searchHandler = (e) => {
    e.preventDefault();
    setKeyword({ city: "", guests: "", dateIn: "", dateOut: "" });
    setValue([]);
  };

  const returnDates = (date, dateString) => {
    setValue([date[0], date[1]]);
    updateKeyword("dateIn", dateString[0]);
    updateKeyword("dateOut", dateString[1]);
  };

  return (
    <div className="searchbar">
      <input
        className="search"
        id="search_destination"
        placeholder="Search destination"
        type="text"
        value={keyword.city}
        onChange={(e) => updateKeyword("city", e.target.value)}
      />

      <Space direction="vertical" size={12} className="search_space">
        <RangePicker
          value={value}
          format="DD-MM-YYYY"
          picker="date"
          className="date_picker"
          onChange={returnDates}
          disabledDate={(current) => current && current.isBefore(dayjs().startOf("day"))}
        />
      </Space>

      <input
        className="search"
        id="addguest"
        placeholder="Add guests"
        type="number"
        value={keyword.guests}
        onChange={(e) => updateKeyword("guests", e.target.value)}
      />

      <span
        className="material-symbols-outlined searchicon"
        onClick={searchHandler}
      >
        search
      </span>
    </div>
  );
};

export default Search;

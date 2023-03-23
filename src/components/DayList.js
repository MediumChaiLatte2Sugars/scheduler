import React from "react";

import DayListItem from "./DayListItem";

export default function DayList(props) {

  const dayListItems = props.days.map((day, i) => <DayListItem key={i}
    name={day.name}
    spots={day.spots}
    selected={day.name === props.value}
    setDay={props.onChange} />);

  return <ul>{dayListItems}</ul>;
}
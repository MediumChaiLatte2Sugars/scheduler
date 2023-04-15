import React from "react";
import PropTypes from 'prop-types';

import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";

export default function InterviewerList(props) {

  const interviewerListItemArray = props.interviewers.map(interviewer => {
    return <InterviewerListItem
      key={interviewer.id}
      id={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected={props.value === interviewer.id}
      setInterviewer={props.setInterviewer}
    />;
  });

  return <section className="interviewers">
    <h4 className="interviewers__header text--light">Interviewer</h4>
    <ul className="interviewers__list">{interviewerListItemArray}</ul>
  </section>;
}

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired,
};
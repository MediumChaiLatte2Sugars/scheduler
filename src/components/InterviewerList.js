import React from "react";

import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";

export default function InterviewerList(props) {

  const interviewerListItemArray = props.interviewers.map((interviewer, i) => <InterviewerListItem id={i + 1} name={interviewer.name} avatar={interviewer.avatar} selected={props.interviewer === i + 1} setInterviewer={props.setInterviewer}/>);

  return <section className="interviewers">
    <h4 className="interviewers__header text--light">Interviewer</h4>
    <ul className="interviewers__list">{interviewerListItemArray}</ul>
  </section>;
}
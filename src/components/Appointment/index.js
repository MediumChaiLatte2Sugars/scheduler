import React from "react";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Status from "./Status";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";
import Confirm from "./Confirm";
import Error from "./Error";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVING";
const ERROR_DELETE = "ERROR_DELETE";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING);

    props.bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch((err) => transition(ERROR_SAVE, true));

  }

  function cancel() {
    transition(DELETING, true);

    props.cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch((err) => transition(ERROR_DELETE, true));
  }

  return (
    <article className="appointment" data-testid="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
        />
      )}
      {mode === CREATE && (
        <Form interviewers={props.interviewers} onSave={save} onCancel={back} />
      )}
      {mode === SAVING && (
        <Status
          message="Saving"
        />
      )}
      {mode === DELETING && (
        <Status
          message="Deleting"
        />
      )}
      {mode === CONFIRM && (
        <Confirm
          message={"Delete appointment?"}
          onCancel={() => transition(SHOW)}
          onConfirm={cancel}
        />
      )}
      {mode === EDIT && (
        <Form
          interviewers={props.interviewers}
          onSave={save}
          onCancel={() => transition(SHOW)}
          student={props.interview.student}
          interviewer={props.interview.interviewer.id}
        />
      )}
      {mode === ERROR_DELETE && (
        <Error
          onClose={back}
          message={"Could not delete appointment"}
        />
      )}
      {mode === ERROR_SAVE && (
        <Error
          onClose={back}
          message={"Could not save appointment"}
        />
      )}
    </article>
  );
}
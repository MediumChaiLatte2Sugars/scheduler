export function getAppointmentsForDay(state) {
  const filteredDays = state.days.filter(selectedDay => selectedDay.name === state.day);
  const desiredAppointments = filteredDays[0]?.appointments;

  if (!desiredAppointments) {
    return filteredDays;
  }

  const filteredAppointments = Object.values(state.appointments).filter(selectedAppointment => desiredAppointments.includes(selectedAppointment.id));

  return filteredAppointments;
}

export function getInterview(state, interview) {

  if (!interview) {
    return interview;
  }

  const selectedInterviewer = Object.values(state.interviewers).filter(interviewer => interviewer.id === interview?.interviewer)[0];
  return { ...interview, interviewer: { ...selectedInterviewer } };
}

export function getInterviewersForDay(state, day) {
  const filteredDays = state.days.filter(selectedDay => selectedDay.name === day);
  const interviewerIds = filteredDays[0]?.interviewers;

  if (!interviewerIds) {
    return filteredDays;
  }
  
  const interviewers = Object.values(state.interviewers).filter(selectedInterviewer => interviewerIds.includes(selectedInterviewer.id));
  return interviewers;
}

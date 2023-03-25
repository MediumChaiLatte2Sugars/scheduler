export function getAppointmentsForDay(state) {
  const filteredDays = state.days.filter(selectedDay => selectedDay.name === state.day);
  const desiredAppointments = filteredDays[0]?.appointments;

  if (!desiredAppointments) {
    return filteredDays;
  }

  const fileteredAppointments = state.appointments.filter(selectedAppointment => desiredAppointments.includes(selectedAppointment.id));

  return fileteredAppointments;
}

export function getInterview(state, interview) {

  if (!interview) {
    return interview;
  }

  const selectedInterviewer = Object.values(state.interviewers).filter(interviewer => interviewer.id === interview?.interviewer)[0];
  
  return { ...interview, interviewer: { ...selectedInterviewer } };
}
export function getAppointmentsForDay(state) {
  const filteredDays = state.days.filter(selectedDay => selectedDay.name === state.day);
  const desiredAppointments = filteredDays[0]?.appointments;

  if (!desiredAppointments) {
    return filteredDays;
  }

  const filteredAppointments = state.appointments.filter(selectedAppointment => desiredAppointments.includes(selectedAppointment.id));

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
  const desiredAppointments = filteredDays[0]?.appointments;

  if (!desiredAppointments) {
    return filteredDays;
  }

  const filteredAppointments = Object.values(state.appointments).filter(selectedAppointment => desiredAppointments.includes(selectedAppointment.id) && selectedAppointment.interview);
  console.log("Filtered appts:", filteredAppointments);
  if (!filteredAppointments) {
    return filteredAppointments;
  }

  const desiredInterviews = filteredAppointments.map(appointment => appointment.interview.interviewer);
  const filteredInterviews = Array.from(new Set(desiredInterviews));
  const desiredInterviewers = filteredInterviews.map(interviewer => state.interviewers[interviewer]);

  return desiredInterviewers;
}

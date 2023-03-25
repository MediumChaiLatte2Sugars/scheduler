export function getAppointmentsForDay(state) {
  const filteredDays = state.days.filter(selectedDay => selectedDay.name === state.day);
  const desiredAppointments = filteredDays[0]?.appointments;

  if (!desiredAppointments) {
    return filteredDays;
  }

  const fileteredAppointments = state.appointments.filter(selectedAppointment => desiredAppointments.includes(selectedAppointment.id));

  return fileteredAppointments;
}
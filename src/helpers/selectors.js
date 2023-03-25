export function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.filter(selectedDay => selectedDay.name === day);
  const desiredAppointments = filteredDays[0]?.appointments;

  if (!desiredAppointments) {
    return filteredDays;
  }

  const appointmentsArray = Object.values(state.appointments);
  const fileteredAppointments = appointmentsArray.filter(selectedAppointment => desiredAppointments.includes(selectedAppointment.id));

  return fileteredAppointments;
}
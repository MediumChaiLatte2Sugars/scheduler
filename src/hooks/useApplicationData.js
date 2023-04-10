import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = day => setState({ ...state, day });

  function updateSpots(appointments) {
    const specifiedDay = state.days.filter(day => day.name === state.day)[0];

    const openAppointments = Object.values(appointments).filter(selectedAppointment => specifiedDay.appointments.includes(selectedAppointment.id) && !selectedAppointment.interview);

    specifiedDay.spots = openAppointments.length;

    const days = state.days.map(day => {
      if (day.id === specifiedDay.id) {
        return specifiedDay;
      }
      return day;
    });
  
    return days;
  }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`/api/appointments/${String(id)}`,
      { "interview": interview })
      .then((res) => {
        const days = updateSpots(appointments);
        setState({ ...state, appointments, days });
      });
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.delete(`/api/appointments/${String(id)}`)
      .then((res) => {
        const days = updateSpots(appointments);
        setState({ ...state, appointments, days });
      });
  }

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers'),
    ]).then((all) => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    })
      .catch(err => { console.log(err); });
  }, []);


  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  };
}
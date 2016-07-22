var Appointment = Backbone.Model.extend({});

var appointment = new Appointment(
  {title: 'thing'}
 );

var AppointmentView = Backbone.View.extend({});

var appointmentView = new AppointmentView({ model: appointment });

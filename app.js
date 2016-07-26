
var Appointment = Backbone.Model.extend({});
var appointment = new Appointment();
appointment.set('title', 'My knee hurts');
var AppointmentView = Backbone.View.extend({
render: function(){
$(this.el).html('<li>' + this.model.get('title') + '</li>');
}
});
var appntView = new AppointmentView({model: appointment});

appointmentView.render();
$('#bone-zone').html(appointmentView.el);

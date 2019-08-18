class Event {
  constructor(eventName, hostName, location, date, time, attendees, activity, discription, notes, equipment, attendeesNeeded) {
    this.name = name;
    this.hostName = hostName;
    this.location = location;
    this.date = date;    
    this.time = time;
    this.attendees = [this.hostName];
    this.activity = activity;
    this.discription = discription;
    this.notes = notes;
    this.equipment = equipment;
    this.attendeesNeeded = attendeesNeeded;    
  }

  attendEvent() {
    

  }

  leaveEvent() {

  }
}
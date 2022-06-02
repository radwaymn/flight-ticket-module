let ticketModule = require("./ticketsModule");

let t1 = new ticketModule();
t1.addTicket(1, 10, 20, "cairo", "alex");
// console.log(t1.getTicket(1));
// t1.displayTicket(1);
t1.updateTicket(1, "seatNum", 15);
// t1.displayTicket(1);

t1.addTicket(2, 9, 100, "aswan", "port said");
// console.log(t1.getTicket(2));
// t1.displayTicket(2);
t1.updateTicket(2, "arriveAirport", "alex");
// t1.displayTicket(2);

t1.displayAllTickets();
class Ticket {
    constructor() {
        this.ticketsArr = [];
    }

    addTicket(id, seatNum, flightNum, deptAirport, arriveAirport, date = Date()) {
        this.ticketsArr.push({
            id,
            seatNum,
            flightNum,
            deptAirport,
            arriveAirport,
            date
        });
    }

    getTicket(id) {
        return this.ticketsArr.find((elem) => {return elem.id == id});
    }

    displayTicket(id) {
        let ticket = this.getTicket(id);
        console.log(`Ticket Info:
                    Seat Number: ${ticket.seatNum}
                    Flight Number: ${ticket.flightNum}
                    Departure Airport: ${ticket.deptAirport}
                    Arrival Airport: ${ticket.arriveAirport}
                    Travelling Date: ${ticket.date}`);
    }

    displayAllTickets() {
        for(let i in this.ticketsArr) {
            let ticket = this.ticketsArr[i];
            console.log(`Ticket ${parseInt(i) + 1} Info:
                    Seat Number: ${ticket.seatNum}
                    Flight Number: ${ticket.flightNum}
                    Departure Airport: ${ticket.deptAirport}
                    Arrival Airport: ${ticket.arriveAirport}
                    Travelling Date: ${ticket.date}`);
        }
    }

    updateTicket(id, prop, newValue) {
        this.getTicket(id)[prop] = newValue;
    }
}

module.exports = Ticket;
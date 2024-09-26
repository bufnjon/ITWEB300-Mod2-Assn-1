class SupportTicket {
    constructor(ticketNumber, userName, issueDescription) {
        this.ticketNumber = ticketNumber;
        this.userName = userName;
        this.issueDescription = issueDescription;
        this.status = 'Open'; // Default status
    }

    getSummary() {
        return `
        Ticket Number: ${this.ticketNumber}
        User Name: ${this.userName}
        Issue: ${this.issueDescription}
        Status: ${this.status}
        `;
    }

    closeTicket() {
        this.status = 'Closed';
    }
}

class TicketManager {
    constructor() {
        this.tickets = [];
        this.nextTicketNumber = 1;
    }

    createTicket(userName, issueDescription) {
        const newTicket = new SupportTicket(this.nextTicketNumber++, userName, issueDescription);
        this.tickets.push(newTicket);
        return newTicket;
    }

    searchTickets(searchTerm) {
        return this.tickets.filter(ticket => 
            ticket.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            ticket.ticketNumber.toString() === searchTerm
        );
    }
}

// Example usage
const ticketManager = new TicketManager();
const ticket1 = ticketManager.createTicket('John Doe', 'Unable to access email.');
const ticket2 = ticketManager.createTicket('Jane Smith', 'Printer not working.');

console.log(ticket1.getSummary());
console.log(ticket2.getSummary());

const searchResults = ticketManager.searchTickets('John');
console.log('Search Results:', searchResults.map(ticket => ticket.getSummary()).join(''));


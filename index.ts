import { EntertainmentType } from "./enum";
import { 
    newID,
    futureDate,
    createVenues,
    venueCapacity,
    minimumRequirements,
    createEntertainments
} from "./utility";

export class Venue {
    id: string;
    types: EntertainmentType[];
    minimumRequirements: number;
    capacity: number;
    score: number;
    vacancy: Vacancy[];

    constructor() {
        this.id = newID();
        this.types = [EntertainmentType.MUSIC];
        this.minimumRequirements = minimumRequirements();
        this.capacity = venueCapacity();
        this.score = this.capacity - this.minimumRequirements;
        this.vacancy = [];
    }

    createVacancy(future: number) {
        this.vacancy.push(new Vacancy(this.id, futureDate(future)));
    }

    editVacancy() {

    }

    deleteVacancy() {

    }
}

export class Vacancy {
    id: string;
    date: Date;
    venueID: string;
    entertainment: Entertainment;

    constructor(venueID: string, date: Date) {
        this.id = newID();
        this.date = date;
        this.venueID = venueID;
        this.entertainment = { id: "0", type: [EntertainmentType.MUSIC], ticketSales: 0 };
    }
}

export class Entertainment {
    id: string;
    type: EntertainmentType[];
    ticketSales: number;

    constructor() {
        this.id = newID();
        this.type = [EntertainmentType.MUSIC];
        this.ticketSales = 0;
    }
}

export class System {
    venues: Venue[];
    entertainments: Entertainment[];

    constructor() {
        this.venues = createVenues();
        this.entertainments = createEntertainments();
    }

    initiate() {
        const random = Math.round(Math.random() * 1000);
        console.log(this.venues[random]);
        console.log(this.entertainments[random]); 
        setInterval(() => {
            // const random = Math.round(Math.random() * 1000);
            // console.log(this.venues[random]);
            // console.log(this.entertainments[random]);
            this.dailyTicketSaleAccumulation();
            this.addVacancies();
            this.pair();
        }, 1000);
    }

    dailyTicketSaleAccumulation() {
        this.entertainments.forEach(entertainment => {
            entertainment.ticketSales += Math.round(Math.random() * 5);
        });
    }

    addVacancies() {
        let future = 0;
        this.venues.forEach(venue => {
            if (Math.round(Math.random() * 7) === 0) {
                venue.createVacancy(future);
            }
        });
    }

    pair() {

    }
}

const newSystem = new System();
newSystem.initiate();
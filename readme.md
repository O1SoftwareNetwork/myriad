/**
 * Venues want to maximize ENTERTAINMENT value (Musicians, Art, Comedy, "the creatives", etc.) ticket sales
 * 
 * The problem is when they book a "group" to perform,
 * a large portion of profit is based on how many tickets the "group" sells
 * 
 * VENUE ALCOHOL SALES
 * VENUE ENTRANCE FEE (MAYBE)
 * ENTERTAINMENT SALES (The higher this is, the better)
 * 
 * Objective: Sell more tickets
 * Constraint: Each venue has a capacity
 * 
 * The venues will set the available time slots that are vacant in their calendars
 * 
 * ENTERTAINMENT will automatically fill those vacancys
 * based on which "group" has sold the most tickets
 * 
 * ENTERTAINMENT is not locked into performing at THIS venue,
 * though they have made a commitment to show up and "perform"
 * If they sell more tickets than the capacity of the venue
 * EVEN AFTER having already booked the vacancy, they will
 * automatically move to the venue with the next greater capacity
 * and the band with the next highest number of ticket sales will take their place
 * 
 * This solution benefits the venues with the smallest requirements
 * and the smallest capacities first, and as local entertainment sells tickets,
 * they rise to level of their network, performance, entertainment values automatically.
 * 
 * To complicate this further, ENTERAINMENT'S TYPE MUST MATCH THE VENUES TYPE
 * 
 * So, venues will either have to always be paying attention to the ticket sales OR
 * We need a way for venues to communicate with each other and exchange bands in real-time
 */

 // Vacancies are created by the venues
// THE ENTERTAINMENT FIELD IS FLEXIBLE
// If the ENTERTAINMENT sells more tickets than venue capacity
// the ENTERTAINMENT moves to venue with next greater capacity
/**
 * The vacancy must listen to ENTERTAINMENT ticket sales in real-time
 * If the ENTERTAINMENT sells more tickets than the vacancy can hold
 * The vacancy must scan all available ENTERTAINMENT
 * for the ENTERTAINMENT with the next highest number of ticket sales
 */
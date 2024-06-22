import { Venue, Entertainment } from './index';

/**
 * 
 * General-purpose utility functions
 */
export const newID = () => Math.round(Math.random() * 10000).toString();
export const futureDate = (future: number) => new Date(new Date().getTime() + (future * 24 * 60 * 60 * 1000));
/**
 * 
 * Functions to jelp create Venue objects
 */
export const minimumRequirements = () => Math.round(Math.random() * 300);
export const venueCapacity = () => Math.round(Math.random() * 500 + 300);
export const createVenue = () => new Venue();
export const createVenues = () => {
    const venues: Venue[] = [];
    for (let i = 0; i < 1000; i++) venues.push(createVenue());
    return venues;
}
/**
 * 
 * Functions to help create Entertainment objects
 */
export const createEntertainment = () => new Entertainment();
export const createEntertainments = () => {
    const entertainment: Entertainment[] = [];
    for (let i = 0; i < 1000; i++) entertainment.push(createEntertainment());
    return entertainment;
}
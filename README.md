# Wasta

User Registration to buy/sell event tickets

Create New User

POST  https://api.wasta.com/v1/users

When the creation is successful,the Location header contains the URL for the new user:

https://api.wasta.com/v1/users/:id


Logging in returning User

GET   https://api.wasta.com/v1/login

Requesting Password Reset

POST https://api.wasta.com/v1/requestPasswordReset

Retrieve Single User

GET https://api.wasta.com/v1/users/:id

Retrieve User in the Current Session

GET https://api.wasta.com/v1/users/me

me -- login user in the session

Updating User Data for specific attributes

PATCH https://api.wasta.com/v1/users/:id

Updating user data 

PUT https://api.wasta.com/v1/users/:id

Delete the user record

DELETE https://api.watsa.com/v1/users/:id

Linking Users with Facebook,Twitter,Gmail

POST https://api.wasta.com/v1/users

User Exists

GET https://api.wasta.com/v1/users/exists

Logout

POST https://api.wasta.com/v1/users/:id/logout

Event Listing in UserProfile

GET https://api.wasta.com/v1/users/events/:id

Event Registration

Create Event

POST https://api.watsa.com/v1/venues/:venueId/events

Retrieve Specific Event

GET https://api.wasta.com/v1/venues/:venueId/events

Retrieve All events

GET https://api.wasta.com/v1/venues/:venueId/events/find

Update Specific Event Attributes

PATCH https://api.wasta.com/venues/:venueId/events

Update All Event Attributes

POST https://api.wasta.com/venues/:venueId/events

Delete Event

DELETE https://api.wasta.com/venues/:venueId/events

Activate Event

POST https://api.wasta.com/venues/:venueId/events/activate

Ticket Categories Event Based

GET https://api.wasta.com/venues/:venueId/events/ticketCategories

E.g.. VIP,First Class,..

Ticket Holders of the Events

GET https://api.wasta.com/venues/:venueId/events/participants 

Payments

GET https://api.wasta.com/venues/:venueId/events/payments

Retrieves Payment details w.r.t to an event for an individual

Create Payment

POST https://api.wasta.com/venues/:venueId/events/payments

Ticket Count

POST https://api.wasta.com/venues/:venueId/events/ticketCounts

Create Payment API will be dependent on Ticket Count API to get the sum of tickets

Discount

POST https://api.wasta.com/venues/:venueId/events/payments/discCodes

Final Payment

POST https://api.wasta.com/venues/:venueId/events/payments/finalPayments

Tickets

GET https://api.wasta.com/venues/:venueId/events/tickets

Update Specific Ticket Attributes

PATCH https://api.wasta.com/venues/:venueId/events/tickets/:ticketId

Update Ticket Attributes

POST https://api.wasta.com/venues/:venueId/events/tickets/:ticketId

Find all tickets of an event

GET https://api.wasta.com/venues/:venueId/events/tickets/find


















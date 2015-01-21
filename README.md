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

Common HTTP Status Codes

200 OK - Response to a successful GET, PUT, PATCH or DELETE. Can also be used for a POST that doesn't result in a creation.
201 Created - Response to a POST that results in a creation. Should be combined with a Location header pointing to the location of the new resource
204 No Content - Response to a successful request that won't be returning a body (like a DELETE request)
304 Not Modified - Used when HTTP caching headers are in play
400 Bad Request - The request is malformed, such as if the body does not parse
401 Unauthorized - When no or invalid authentication details are provided. Also useful to trigger an auth popup if the API is used from a browser
403 Forbidden - When authentication succeeded but authenticated user doesn't have access to the resource
404 Not Found - When a non-existent resource is requested
405 Method Not Allowed - When an HTTP method is being requested that isn't allowed for the authenticated user
410 Gone - Indicates that the resource at this end point is no longer available. Useful as a blanket response for old API versions
415 Unsupported Media Type - If incorrect content type was provided as part of the request
422 Unprocessable Entity - Used for validation errors
429 Too Many Requests - When a request is rejected due to rate limiting















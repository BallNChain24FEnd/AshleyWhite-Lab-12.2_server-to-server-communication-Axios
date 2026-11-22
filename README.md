# Lab 12.2 — Server-to-Server Communication with Axios

## Project Overview

The fictitious Daily Grind coffee shop wants to display a random "Fun Fact of the Day" on a digital screen.

I created an Express.js server that communicates with the external Useless Facts API using Axios. The server retrieves a random fact, extracts the relevant text, and returns a simplified JSON response.

## Technologies Used

- JavaScript
- Node.js
- Express.js
- Axios
- Git and GitHub

## Features

- Express server running locally on port 3010
- GET route at `/api/fun-fact`
- Server-to-server communication using Axios
- Asynchronous requests with `async/await`
- Data transformation using `response.data.text`
- Error handling using `try...catch`
- JSON responses with appropriate HTTP status codes

## How to Run the Project

1. Clone the repository:

   `git clone https://github.com/BallNChain24FEnd/AshleyWhite-Lab-12.2_server-to-server-communication-Axios.git`

2. Navigate into the project folder:

   `cd AshleyWhite-Lab-12.2_server-to-server-communication-Axios`

3. Install dependencies:

   `npm install`

4. Start the Express server:

   `npm start`

   Alternatively:

   `node server.js`

5. Open the API endpoint:

   http://localhost:3010/api/fun-fact

## API Endpoint

**Method:** GET

**Route:** `/api/fun-fact`

**External API:**

https://uselessfacts.jsph.pl/api/v2/facts/random

### Successful Response

```json
{
  "fact": "An interesting random fact."
}
```

The fact is randomly selected by the external API.

### Error Response

If the external API request fails, the server returns HTTP status 500:

```json
{
  "error": "Could not fetch fun fact"
}
```

## Testing

I tested the API endpoint in my browser and confirmed that it returned random facts in the required JSON format.

I also tested error handling by temporarily using an invalid external API endpoint. The server returned the expected 500 status and JSON error message.

After testing, I restored the correct API URL.

## Reflection Questions

### 1. Why was it important to re-format the data from the Useless Facts API before sending it to your own client? What are the benefits of an API providing a clean, minimal response?

The Useless Facts API returns several properties, including an ID, source, language, permalink, and fact text. However, our client only needs the fact itself.

By extracting the `text` property and returning it as `{ "fact": "..." }`, we provide a simpler response that is easier for the frontend to use.

This also reduces unnecessary data transfer and keeps the client independent of the external API's full response structure.

This relates to the data transformation and facade pattern introduced in Lesson 5.

### 2. In the `catch` block, why is it better to send a generic error message to the client instead of the actual error object from Axios?

A generic error message protects internal information about our application and external API requests.

The full Axios error may contain technical details that are useful for developers but unnecessary or potentially sensitive for clients.

Using `console.error()` allows us to investigate problems on the server, while returning `{ "error": "Could not fetch fun fact" }` gives the client a clear and consistent message.

### 3. How might you modify this application to get a fact in a different language if the external API supported it (e.g., with a query parameter like `?language=de`)?

I would add a language query parameter to the external API URL.

For example:

```javascript
const response = await axios.get(
  "https://uselessfacts.jsph.pl/api/v2/facts/random?language=de"
);
```

The `language=de` parameter requests German, assuming the external API supports that language.

For a more flexible application, I could allow the client to specify a language using `req.query.language` and validate it before including it in the external request.

This connects to Lesson 3, where we learned about optional query parameters using `req.query`.

## What I Learned

This lab helped me understand how two servers communicate using HTTP requests.

I learned how to create an Express route, retrieve data from an external API using Axios, transform the response, and handle errors.

I also learned why backend applications should return only the information clients need.

## Resources

- [Express.js Documentation](https://expressjs.com/)
- [Axios Documentation](https://axios-http.com/docs/intro)
- [Useless Facts API](https://uselessfacts.jsph.pl/)
- [Node.js Documentation](https://nodejs.org/en/docs)

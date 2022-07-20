# Ancient Egypt Deities API
An API that catalogues the most popular gods and goddesses worshipped in Ancient Egypt and returns their name, context for their power and origin in Egyptian mythology, and a description of their appearance.

**Link to project:** https://egyptian-deities.herokuapp.com/


![egyptian-deities herokuapp com_](https://user-images.githubusercontent.com/106183040/179894273-2dcf5b1e-1b91-4efc-9220-6fab6d75d173.png)

## How It's Made:

**Tech used:** HTML, CSS, Javascript, Node, Express

The server is set up using Node and Express. For the quantity of data used in this API, it is sufficient to save them in another file in the root directory and be imported as a module into the server.js file. If there is more data, they would instead be stored in an external database like MongoDB. For this application, all of the server endpoints are defined by the GET method of the Express app object. These endpoints specify the data that is to be sent back in response to the request being made. To get data on a certain deity, their name is to be appended to the base URL as a route/query parameter.

## Lessons Learned:

I learned to build a robust API on Node using the Express framework and to serve data from the server in response to requests. 

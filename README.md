# CS-465
Full Stack Development I - MEAN Stack


# Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA). Why did the backend use a NoSQL MongoDB database?
Express provided a means of handling routes, requests and responses efficiently.  This made it useful in managing the server-side code in my web application.  The Express frontend allowed me to use templates to create HTML pages that updated dynamically.  The Angular SPA, however, allowed for more code reuse and a more flexible and dynamic front end.  The initial page load time is greater with an SPA and there can be challenges with search engine optimization.  Javascript is the programming language that enables the dynamic nature of Express and SPAs.
MongoDB's NoSQL database stores data in "documents" and provides a very flexible database.  It also workes very well with Javascript thanks to its JSON-like data storage.

# How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces? Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
JSON is a file type that allows the frontend and the backend to communicate.  JSON stands for JavaScript Object Notation.  As its name implies, it stores JS objects in dictionary-like key-value pairs.  This standard notation allows for easy communication between JS and MongoDB.  Reusable UI components are great because they reduce the amount of time a programmer has to spend typing the same code repeatedly and they give the application a consistent feel which can improve user experience.

# Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
Testing endpoints with a tool like Postman was an excellent way to ensure the API was functional.  Once this was done, manual testing of the frontend was aided by the developer tools in Google Chrome.  Robo3T helped me ensure that data was being stored as expected in my MongoDB database.  Adding authentication to the application was a quick way to add security to the application.  Once a user was authenticated, I was able to utilize local storage to pass the authorization token to different parts of the application so that they could pass it to protected endpoints with their requests.

# How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
I now understand a basic web application end-to-end.  I can singlehandedly create a functional web application for a client that provides real business value.  I can also work as part of team on any part of the web application and be more effective because I have an understanding of how each part works within the project. 

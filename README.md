# Angular Tennis App

I created this application with my classmates in the fall of 2020. Our application allows users to keep score of tennis games. 

The application was written in Typescript and uses Angular as a front end framework. 

My role was primary the UI, handling the HTML and the CSS while my classmates worked on the core logic in Typescript. 

## Improvements

Since graduating I've been exposed to Domain Driven Design. While I don't think this project (which handles all state client side) is in need of Repositories, I do think it could use a robust data model. 

As of right now, I would also convert this project from Angular to React. From my experience with Angular and React, I find that type systems are more sane with React. I think this transition would better support the data model improvements suggested.

The final improvement I will comment on is the back end. Depending on the use case, this application does not need a back end. If I were to implement a backend, I would opt for something as lean as possible. My preferred stack would be AWS Cognito paired with a Dynamo DB to keep things light weight and easy. 

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-most-updated-924)

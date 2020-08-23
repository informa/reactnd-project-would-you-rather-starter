# Would You Rather Project

This repository is for the would you rather project as part of Udacity's React & Redux course.

**Synopsis**

This app a place where users can ask a question (would you rather?) and provide two options as answers. Users can answer questions asked by others or their own questions. Users can see the answers to questions as a vote on the questions options.

**Code**

This app is based of the start code provided [here](https://github.com/udacity/reactnd-project-would-you-rather-starter) using [create react app](https://github.com/facebook/create-react-app).

In essence this is a react and redux app with redux-thunk as middleware, styles using css-modules.

## Getting started

Install app dependencies

```
npm install
```

Start the app on a local server.

```
npm run start
```

Run tests: only redux actions and reducers have been tested - using jest/enzyme

```
npm run test
```

## Notes

**Users:** this app supports the idea of users and signing in, but it has pre defined users that you can signin as, rather than a authentication process.
Clicking _Logout_ will set the authedUser to _null_ and you can select another user.

**Routing:**
Starting the app should show the signin component on the "/" route.
A user needs to signin to view pages "/", "/add", "question:qid", "/leaderboard". When signed in the router will show the page you were trying to access if other than "/".

**Refreshing the browser:**
The data is not persistent therefore refreshing the browser will set the data to the initial data. However, doing this has been thought about, ie: the route should persist, once signed in again the route will maintain (although you might see a 404 if that page doesn't exist).

**I would like to...**

- Spend more time around unit testing various part of the app, including getting the data, testing connected components.
- Get auth and create user working
- Persist data when app refreshed

## Supporting documents

1. [Planning](/Documents/planning.md)
   - [Identify What Each View Should Look Like](/Documents/planning.md#identify-what-each-view-should-look-like)
   - [Hierarchy of Components](/Documents/planning.md#hierarchy-of-components-for-each-view)
   - [What Events Happen in the App](/Documents/planning.md#what-events-happen-in-the-app)
   - [What Data Lives in the Store](/Documents/planning.md#what-data-lives-in-the-store)
2. [Data methods](/Documents/data-methods)

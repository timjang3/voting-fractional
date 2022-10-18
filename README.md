# Fractional votes coding challenge
![Votes design](/assets/mocks.png)

## Getting started
1. Clone:
    ```bash
    git clone git@github.com:fractionalapp/votes.git
    cd votes
    ```
2. Install dependencies (assuming you have Docker and Postgres locally)
   ```bash
   yarn --cwd packages/backend install
   yarn --cwd packages/frontend install
   ```
2. Run schema migrations
   ```bash
   yarn --cwd packages/backend knex migrate:latest
   ```
3. Start server and frontend
   ```bash
   yarn start
   ```
3. Open `http://localhost:3000`

## The Challenge

The purpose of this challenge is to qualify how well you can implement a simple feature end-to-end. The final look and feel of the feature should look as close as possible to the [designs provided](https://www.figma.com/file/iAWZnQpFxeIZyn7uqqKbsk/Interview?node-id=1%3A1985), but feel free to expand on this as you see fit. We also laid out a general file structure to organize controllers, resolvers, and models on the server - feel free to change this as you see fit.


### Part 1: Implementation

Implement a simple vote tracking tool where:
1. An editor may:
    - Change the voting options (click edit, change, save)
    - Submit a vote (click vote, select, vote)
    - View current votes (click card)
    - View the voting progress / summary
2. A participant may:
    - Submit a vote (click vote, select, vote)
    - View current votes (click card)
    - View the voting progress / summary

Notes:
- For simplicity the user id is encoded in the page route `localhost:3000/{user_id}`, but feel free to modify as you see fit.
- We laid out a general file structure, but feel free to change any part of the stack with what makes you most comfortable.
- 
- Feel free to install any modules that seem helpful.
- Try not to spend more than a day.

### Part 2: Submit

1. (part 1) Implement your solution in a copy of this repo (please don't create a public fork with your solution) and feel free to either add it to a private repo or bundle it in a zip file.
2. (part 2) Add any comments we should be aware of to a Notion, Google Doc, this README or whatever is easiest.
3. Send links to all of the above to any existing email thread or to [work@fractional.app](mailto:work@fractional.app)

## Creating data migrations
We use [Knex](https://knexjs.org/) and [Objection](https://vincit.github.io/objection.js/) to manage our connection to Postgres.
To make changes to the db schema you'll want to:
1. Generate a migration file
    ```bash
    yarn --cwd packages/backend knex migrate:make give_it_a_name
    ```
2. Define the migration changes
    Go to the file that was created in `step 1` to add or alter a table
3. Run migration changes
    ```bash
    yarn --cwd packages/backend knex migrate:latest
    ```

## File Structure

- `packages/backend`: contains a basic Node.js app using [Fastify](https://www.fastify.io/), [Objection](https://vincit.github.io/objection.js/), and [Graphql](https://mercurius.dev/#/)
  - `src/controllers`: contains our data controllers
  - `src/graphql`: contains the GraphQL schema and codegenerated types
  - `src/models`: contains all Postgres data models (using Objection)
  - `src/resolvers.ts`: contains the GraphQL resolvers
- `packages/frontend`: contains a basic Next.js app using [Vanilla Extract](https://vanilla-extract.style/)
  - `components/`: contains our stateless React components.
  - `pages/`: contains the app's routes (the file path/name represents the route)

## Route Structure

- `/` (home page)
  - Just a link to 2 user vote pages
- `/[id]` (user vote page)
  - A page to display the voting UI for a single user (user id in route)
  - This page is where most of the work will be focused.
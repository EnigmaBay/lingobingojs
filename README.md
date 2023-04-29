# Lingo Bingo JS

LingoBingo game built using the MERN Stack!

[![Netlify Status](https://api.netlify.com/api/v1/badges/978bc5d2-6caa-489a-8311-a288ea487d50/deploy-status)](https://app.netlify.com/sites/eb-lingobingo/deploys)

## Overview

Jon attended a webinar about engaging audiences during online presentations _[Cindy Huggett et al]_. One of the tips was to use a "Buzzword Bingo" game that attendees could play during the webinar to help maintain audience attention and engagement.

In 2021 Jon deployed a simple [LingoBingo game using C# and Azure WebApps](https://github.com/nojronatron/LingoBingoGen). This version was used during a live, remote training call and there was good participation and positive feedback, proving this to be a viable, useful project.

During the summer of 2022, Jon and Ryan decided to collaborate to bring LingoBingo into a MERN stack and develop new, useful, and fun features along the way. After some discussion and planning, we started work on Lingo Bingo JS, and now have an MVP [deployment](https://eb-lingobingo.netlify.app/) ready for experimentation on Netlify.

### Vision

Build a full-stack web application that online presenters can use to as an engagement tool during their sessions, with little setup or preparation, other than knowing the terminology used in their presentation, so participants can "Bingo" from those words during the presentation.

### How To Play And Use The Default Deployment

#### Presenters

You are going to present to an audience and want to add some fun to your presentation session.

1. Open the LingoBingoJS website and click on LOG IN.
1. Enter a username and password, or log in using a social button (e.g. Log In With Google).
1. Onced logged on a 'Presenters Home' page will be displayed allowing you to create words in a category, as well as edit and remove words you have added.
1. When you have at least 24 words in a single category, select 'Create Gameboard' and be sure to enter the category exactly as you defined it.
1. The web page displays a URL that you can share with your audience, and they will get a Lingo-Bingo game board with a randomized selection of words you entered!
1. Ask your audience members to hunt for the 'Lingo' words on their game boards, and encourage them to interrupt your presentation by yelling 'BINGO!'.
1. It could be fun and helpful to have the attendee(s) that got a Bingo to share the 5-in-a-row Lingo words, as part of a review.

#### Players, Audience, and Attendees

1. Your presenter will provide you with a web URL.
1. Click the web URL or open a web browser and past it into the 'address bar'.
1. When the page loads a Bingo Board game session will start (for you) with a randomized list of 'Lingo' words the presenter has created for this presentation.
1. Your presenter should tell you whether or not to yell 'BINGO!' when you see a Bingo Party on your screen (you got 5 words in any single direction).
1. Once you 'Bingo' you can reset your game by clicking 'Play Again' or following the first few steps again in a new browser window.

## User Stories

User Stories are managed by and for the Dev Team in GoogleDocs and a copy of those developing stories is stored in [userstories.md](./userstories.md) here in this repo.

## Functional Outcomes

### MVP

For MVP we:

- Built a simple HTML5, CSS3, javascript/ES6 webapp that allows a single player to play Bingo using a default set or words.
- Deployed routing for simple navigation, and built an About page with links for contacting the developers.
- Implement a componentized design, to support adding features on a semi-regular basis, limiting code churn, promoting test-ability.
- Enhanced the game so it throws a "bingo party" when the user clicks on 5-in-a-row.
- Implemented color palettes and a light/dark scheme that users can toggle, that will instantly take effect across the site.
- Ensure browser compatibility (primarily Chrome and Firefox) for multiple screen sizes, from huge, to desktop, to mobile or smart phone-sized.
- Provide a dedicated web interface for people to use the app as they need, deployed to a simple hosting service with public access.

### Next Release

We plan to implement several features for this next version, adding to the utility of the game by adding user profiles so that custom word lists can be implemented.

We are currently in the develop phase of the following features:

- Authentication and authorization.
- Back end Database and REST API for CRUD services.
- Custom word list creation, storage, and editing for authorized users.
- Web UI for registered 'Presenters' for creating and updating wordlists and bingo boards.
- Use of Cookies and server-side Caching.

This Readme and User Stories will be updates as we complete the planning and design phases for the next version.

### Non-functional Outcomes

Development of this project will be a collaborative effort, with the following goals:

- Gain experience developing a javascript-based webapp from the ground up.
- Practice project collaboration.
- Exercise UI design and implementation skills and techniques.
- Practice javascript and JS framework interaction and implementation.
- Work toward a full-stack implementation.
- Develop an open-source, utilitarian online 'game' others can use and enjoy.

### Accessibility

We are aware of the need for inclusive, accessible-designed webapps and are working to meet those needs. We are not currently aware of any glaring accessibility issues, however we are open to improving the design to meet expectations through standardized methods.

### How We Use Your Identifying Information

We delegate authorization and registration to [Auth0](https://auth0.com/).

Our code never accesses your:

- Passwords or other credentials.
- Login or account information.
- "Social Login" information. As far as our code knows, Auth0 authenticated you (or didn't) and that's it, regardless of which social button you clicked to log in.

Our code _does_ have access to your email address and name:

- We only use this information during authorization.
- Your information is _never_ stored in our server cache nor the database.
- Once the API server authorizes you, this information is not used again until next time authorization is required.

Our code _does_ use JSON Web Tokens:

- This is necessary to authorize 'registered' users.
- Unregistered users will not be able to provide a valid Authorize Token, and therefore cannot create words lists nor game boards.
- JSON Web Tokens are a well known, trustworthy means to provide authentication and authorization.

### Registration and Sign In Questions

What if I forget my password?

> Click the Login button and when Auth0 prompts you to login, select 'forgot password' and go through the Auth0 validation and verification process.

What if I no longer want to use Google to login?

> Click the Login button and when Auth0 prompts you to login, select a new username and password to register. You will get authorization to add words and create gameboards again, but will lose access to the word lists and gameboards you made before.

What if I no longer want to use a username and password to login?

> Click the Login button and when Auth0 prompts you to login, select 'Login with Google' to register. You will get authorization to add words and create gameboards again, but will lose access to the word lists and gameboards you made before.

Can I remove my registration information from your site?

> We do not store you registration information. If at any time you want to reset or remove your account, contact an EnigmaBay developer. Our contact information is shared on the LingoBingo-JS application in the About Us page. We will correspond with you and, upon verifying your identity, can then remove your Words and Bingoboards from our database, as well as your logon information stored with Auth0.com.

### Cookies

LingoBingoJS uses cookies for verifying your have authorization to create word lists and game boards.

Cookies do not store any personally identifying information (PII) and have an expiration, so once you stop creating, editing, or removing words or gameboards, the cookies will no longer be valid.

## Installation and Deployment

### Prequisites

To build, test, and run this project you will need both:

- npm v8.6.0
- node 16.14-2

### Dependencies

Review package.json for specifics, but overall this project makes use of:

- React v.18+, React Hooks, and React Router v.6
- Bootstrap v.5+
- React-bootstrap v.2+
- Jest-dom v5.16+ for unit tests

Run `npm version` at the terminal after cloning to verify NPM is v8 or newer.

### Installation

This project is being developed in Linux-based environments. You can choose to build and deploy this project using Windows Services for Linux (WSL), in which case you will need to manage differences in how Windows handles linefeeds, or other platform-specific variables.

1. Ensure your environment meets the prerequisites listed above.
2. Clone this repository to your local.
3. CD to the cloned project folder.
4. Run `npm install` to install dependencies.
5. Run `npm test` to execute Jest tests.
6. Run `npm start` to run a local, development version of the website.

See [reactapp readme](./README-reactapp.md) and [reactjs](https://reactjs.org/) for details on cloning, developing, testing, and running react webapps in production vs. development.

### Dev and Test Usage

You will need to set up the following for full-stack usage:

1. An Auth0 account with an SPA and an endpoint that provides JSON Web Public Keys.
1. An API Server deployment: See [lingobingo-back repository](https://github.com/EnigmaBay/lingobingo-back).
1. CORS on the API Server if using a mixed http and https deployment.
1. A MongoDB deployment with appropriate connection string and authorization parameters, and configured to allow connections only from your API Server instance.

## Development

The following tools are used by this team to promote syntactically and idomatically correct code that is free of bugs and performs as expect it to:

- VSCode.
- Google Chrome (latest 2 versions) and Chrome DevTools.
- Mozilla Firefox (latest 2 versions).
- Edge (latest version).
- Jest.
- Babel for React.
- ESLint with react and react-hooks plugins.

### Git Flow

See [gitflow.md](./gitflow.md) for details.

## Testing

Jest unit tests are included in folder directory 'testLib'.

Review the Jest files and child directory 'testData' to see how it is used.

## Contributing

At the start of this project we are a party of 2 and there is no expectation to add contributors at this time.

In the future we could change our minds and would then update this section.

## References and Acknowledgements

Thank-you to [GitHub](https://github.com) for providing collaborative tools for software development with free-of-charge options for us little devs. :smiley:

Thank you [Icons8](https://icons8.com) for making open-source SVG and PNG Icons available to the masses.

### Lead Developers

<img src='./images/icons8-github-cute.svg' alt='octocat' width='25px' height='25px' /> [Jon Rumsey](https://github.com/nojronatron)

<img src='./images/icons8-github-cute.svg' alt='octocat' width='25px' height='25px' /> [Ryan Schafer](https://github.com/schaferyan)

<a target="_blank" href="https://icons8.com/icon/106564/github">GitHub</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

## License

![https://img.shields.io/github/license/EnigmaBay/lingobingojs?style=plastic](https://img.shields.io/github/license/EnigmaBay/lingobingojs?style=plastic)

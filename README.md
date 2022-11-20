# Lingo Bingo JS

LingoBingo webapp game ported to react-js.

## Overview

Jon attended a webinar about engaging audiences during online presentations *[Cindy Huggett et al]*. One of the tips was to use a "Buzzword Bingo" game that attendees could play during the webinar to help maintain audience attention and engagement.

In 2021 Jon deployed a simple [LingoBingo game using C# and Azure WebApps](https://github.com/nojronatron/LingoBingoGen). This version was used during a live, remote training call and there was good participation and positive feedback, proving this to be a viable, useful project.

During the summer of 2022, Jon and Ryan decided to collaborate to bring LingoBingo into a MERN stack and develop new, useful, and fun features along the way. After some discussion and planning, we started work on Lingo Bingo JS, and now have an MVP [deployment](https://eb-lingobingo.netlify.app/) ready for experimentation on Netlify.

### Vision

Build a full-stack web application that online presenters can use to as an engagement tool during their sessions, with little setup or preparation, other than knowing the terminology used in their presentation, so participants can "Bingo" from those words during the presentation.

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

We are currently in the design phase. Some ideas include:

- Authentication and authorization.
- Back end Database and API services.
- Custom word list form and storage.

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

We are aware of the need for inclusive, accessible-designed webapps and are working to meet those needs. We are not currently aware of any glaring accessibility issues, however we are open to improving the design to meet expectations through new or standardized methods.

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

To view dependencies run `npm version` at the terminal after cloning.

### Installation

This project is being developed in Linux-based environments. You can choose to build and deploy this project using Windows Services for Linux (WSL), in which case you will need to manage differences in how Windows handles linefeeds, or other platform-specific variables.

1. Ensure your environment meets the prerequisites listed above.
2. Clone this repository to your local.
3. CD to the cloned project folder.
4. Run `npm install` to install dependencies.
5. Run `npm test` to execute Jest tests.
6. Run `npm start` to run a local, development version of the website.

See [reactapp readme](./README-reactapp.md) and [reactjs](https://reactjs.org/) for details on cloning, developing, testing, and running react webapps in production vs. development.

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

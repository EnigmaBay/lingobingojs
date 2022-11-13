# Lingo Bingo JS

LingoBingo webapp game ported to react-js.

## Overview

Jon attended a webinar about engaging audiences online *[Cindy Huggett et al]*. One of the tips was to design a "Buzzword Bingo" game that attendees could play during the webinar to help maintain audience attention and engagement.

In 2021 Jon deployed a simple [LingoBingo game using C# and Azure WebApps](https://github.com/nojronatron/LingoBingoGen). This version was used during a remote training call where there was good participation, as well as positive feedback. Next steps were to add new features to make the game a little more interesting, and provide features that users would expect in an online game.

During the summer of 2022, Jon and Ryan decided to collaborate on this project. Our initial goal is to rewrite it in modern javascript with responsive and dynamic webapp frameworks and tools to improve user experience, as well as practice our software developer craft skills, as a team.

### Vision

Use the existing [LingoBingo project](https://github.com/nojronatron/LingoBingoGen) as a guide and rewrite the app as an HTML, CSS, and Javascript webapp that can then be added on to and improved over time. There is potential for this project to expand into a full MERN-stack webapp.

### User Stories

User Stories are managed by and for the Dev Team in GoogleDocs and a copy of those developing stories is stored in [userstories.md](./userstories.md) here in this repo.

Updates will be made on a best-effort basis as the project progresses.

### Functional Outcomes

To start, we expect to:

- Build a simple HTML5, CSS3, javascript/ES6 webapp that at least duplicates the existing LingoBingo project look, feel, and behavior.
- Implement a componentized design, to support adding features on a semi-regular basis with little code churn.
- Provide a dedicated web interface for people to use the app as they need.

Later on, we hope to do a lot more. As we move out of the planning phase and into initial implementation, this section will receive updates.

### Non-functional Outcomes

Development of this project will be a collaborative effort, with the following goals:

- Gain experience developing a javascript-based webapp from the ground up.
- Practice project collaboration.
- Exericse UI design and implementation skills and techniques.
- Practice javascript and JS framework interaction and implementation.
- Work toward a full-stack implementation.
- Develop an open-source, utilitarian online 'game' others can use and enjoy.

## Prequisites

To build, test, and run this project you will need both:

- npm v8.6.0
- node 16.14-2

## Dependencies

Review package.json for specifics, but overall this project makes use of:

- React v.18+ and React Hooks
- Bootstrap v.5+
- React-bootstrap v.2+
- Jest-dom v5.16+ for unit tests

To view dependencies run `npm version` at the terminal after cloning.

## Installation

This project is being developed in Linux-based environments. You can choose to build and deploy this project using a Windows environment, but you will need to either use WSL, or pay attention to differences in how Windows handles linefeeds, etc.

1. Ensure your environment meets the prerequisites listed above.
2. Clone the repository to your local.
3. CD to the project folder created when cloned.
4. Run `npm install` to install dependencies.
5. Run `npm test` to execute Jest tests.
6. Run `npm start` to run a local, development version of the website.
7. Run `npm run build` to build a deployment-ready website.

See [reactapp readme](./README-reactapp.md) and [reactjs](https://reactjs.org/) for details on cloning, developing, testing, and running react webapps.

## Development

The following tools will be used:

- VSCode.
- Google Chrome (latest 2 versions) and Chrome DevTools.
- Mozilla Firefox (latest 2 versions).
- Edge (latest version).
- Jest.
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

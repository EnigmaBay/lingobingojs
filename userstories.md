# User Stories

User stories help the project team understand and define the features that could be implemented based on the target audience. Users should benefit from using the software, and developers should understand whether a feature is *done* or not.

User stories follow a format similar to: "As a [user], I want [some feature], so that [this result benefits me]." *[Source: Code Fellows Project Guidelines, accessed 2-Sept-22]*

User stories should correlate closely to application features. Code Fellows recommended a near 1:1 ratio, and if there are more features than user stories, more user stories should be written. *[Source: Code Fellows Project Guidelines, accessed 2-Sept-22]*

Estimates are made as to how much work each user story will take to complete. We generalize these to "low", "medium", and "high" value estimations. Rather than wriging our hands over how much time each might take in minutes, hours, or days, we use this technique so we can 'ball-park' effort needed, while picking tasks to complete.

Features wrung-out from these user stories are stored in our team Trello board, so we can sort task cards in/out of the backlog and various stages of the development process, as well as maintain insight into who is working on what, and whether it is done, in process, todo, not doing, etc.

## User Story Development

The team is utilizing Miro and GoogleDocs to develop User Stories and Features.

As we work through tasks for each minor and major release, we review features and user stories, and will add to each as needed, refining each where and when necessary.

Details of estimated effort are not included in this list.

Additional user stories, and updates to these will be made as we develop the project.

## User Stories: 1st MVP

### Pam

"As a webinar attendee, I want to go to a website and have an interactive game to play that is related to the webinar I am attending."

Features:

- Hosted Web address (front-end react)
- Website automatically generates and shares a bingo board for the user
- Randomly generate a word list for a game board (hard coded list)
- Some means to access the correct BingoBoard
- BingoBoards need to storable for each user to access

### Caroline

"As an attendee, playing LingoBingo, when I hear or see a word that is on the bingo board, I want to click that word with my mouse and have it visually changed aka 'daubered' indicating I have heard/seen that word and selected it. I expect to be abel to 'dauber' other words (on the board) until/unless I've 'bingoed'."

Features:

- Change the look/feel of a clicked word so it is 'daubered'
- Algorithm detects when any 5 words in a row, column, or diagnal have been clicked
- Algorithm disallows clicking more words after user has 'bingoed'

### Danny

"As an attendee who has been playing the LIngo Bingo game, when I select five words in a row, I expect some kind of visual indicator/reward showing that I have 'bingoed'. I then expect to be able to click a button and open a new LingoBingo board."

Features:

- Visual indicator(s) of a BINGO situation e.g.: Background animation; fireworks; screen explosion of some sort; animated words (and/or screen elements)
- A button (or link) becomes active, allowing the user to play a new board with a re-randomized word list

### Mike

"As the host of a webinar, I want to be able to host a Lingo Bingo game during my webinar.
(This is really a story to define a pre-configured, hard-coded list of words for players to have, enabling developing the player-side of the webapp first)."

Features:

- Hard code word list
- Link that allows participants to join game (give attendees the link to the game)

### Matt

"As the host of a webinar, I want to be able to select a shareable word list for attendees to use in a Lingo Bingo game during my webinar."

Features:

- Hard code word list
- word list selection
- Link that allows participants to join game

## Stretch and Backlog Stories

### Paul

"As the host of a webinar, I want to be able to create a Lingo Bingo game that has specific words that I define ahead of the webinar, so that users will get only my custom-word-list Bingo Boards."

Features:

- Host account/profile
- Data storage of custom word list
- Form/web page to enter custom words
- Ensure at least 25 words are added before accepting (form)

### Pauline

"As the host of a webinar, I want to be able to create a Lingo Bingo game that has specific words that I uploaded ahead of the webinar, so that users will get only my custom-word-list Bingo Boards."

Features:

- Host account/profile
- Data storage of custom word list
- Upload a plain text file of 25 words
- Ensure at least 25 words are in file before accepting

## Footer

Return to root [readme.md](./README.md)

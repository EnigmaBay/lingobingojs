# Git Flow Plan and Agreement

Git flows are used to manage how code is added, updated, and altered throughout the software development lifecycle. Here, EnigmaBay members have agreed to leverage git to avoid merge conflicts and maintain a clean, traceable history of work performed in this repository.

## Git Flow Goals

1. Avoid and manage merge conflicts for your own PR in your local dev environment, and ask for help from affected Collaborators.
1. Avoid utilizing GitHub Web to edit or merge code, or manage branches directly. It is too easy to make mistakes and cause problems.
1. Ensure commit comments are succinct and descriptive enough to identify what work was done, even if work is still in progress.
1. Leverage GitHub as a remote code store at every step during development to enable development wherever you are.

## Git Branch Definitions

MAIN: This will be the deployment-ready branch. During early development it will be the "we think this work is done" branch. As the project moves forward, it will become the branch that will be used to deploy to services like Netlify etc. Code merged into main should already be thoroughly tested and code-reviewed.

STAGING (or similarly named): Once development is well underway and other services are needed for publishing the webapp, this will be the "we think this work is done" branch, and main will become the "publishing" branch instead. Code deployed to staging should be at least minimally tested and code-reviewed.

DEVelopment Branches: Contributors are encouraged to make as many development branches necessary to do their work. It is up to each contributor to determine how simple or complex they wish to make their own development branching system.

Pull Requests (PRs): When a PR is created it is usually an indication that the code is ready (or nearly ready) for review, test, and subsequent merging into another branch such as a staging branch or 'main'. Communication between Contributors will be important to ensure PRs are managed and processed in a beneficial and effective way.

## Git Configurations

### Basic Configuration Items

- Identification: Configure you local git repo with your username and email.
- Editor: Set to your specific editor e.g. `code.editor=code --wait`
- Use MAIN: `init.defaultbranch=mail`
- CR, LF Config: Configure to support CR+LF. See [CRLF Heading](#git-crlf), below.
- Merge vs Rebase: Configure your local git repo with `git config pull.rebase false`

### GH Authentication

This is optional but can save your fingers typing username and passwords over and over again. Instructions on how to do this are not included here so you will need to look them up.

### Git CRLF

Depending on your environment vs all other Collaborators in this project, you may need to change your Git Config settings.

In summary, the basic problem is Git stores plaintext files the *nix way, with line ending character LF; Windows stores plaintext with line ending characters CR + LF. When both Windows and Unix-based dev systems are contributing and editing files, this can cause CR/CRLF confusion in files, which might adversely affect the project.

#### Action For Windows Collaborators

If you are running Windows, follow the StackOverflow advice (see reference link below and scroll down to subsection "Moral (for Windows)").

Linux- and Unix-based (including many iOS environments) should not need to do anything.

If there is a problem with a file you are working with in this repository, report it in the Repo's [GitHub Issues](https://github.com/EnigmaBay/lingobingojs/issues) so it can be addressed.

#### References

StackOverflow [Git Replacing LF with CRLF](https://stackoverflow.com/questions/1967370/git-replacing-lf-with-crlf/20653073#20653073)

GitHub [How To Handle Line Endings](https://docs.github.com/en/get-started/getting-started-with-git/configuring-git-to-handle-line-endings#per-repository-settings)

Git-SCM [git-config man pages](https://git-scm.com/docs/git-config)

## Git Flow Defined

1. Always `git pull origin <branch>` before starting development.
1. During development "ACP" => 'add', 'commit', then 'push' to remote.
1. Keep commit messages succinct and contextually informative.
1. Open a Pull Request (PR) when the code is ready for review and testing, and subsequent merging into a target branch, such as 'staging' or 'main'.
1. Always pull in latest changes fter any PR is merged into a significant branch (i.e. 'main').

## Final Words

It is up to each Collaborator to update their local git environments and dev branches with the latest changes at all times.

## Document Collaborators

Jon R
Ryan S

# Contributing to Voiture Project

First of all, thank you for taking the time to contribute! We appreciate your help and effort to improve this project.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [How to Contribute](#how-to-contribute)
3. [Issues](#issues)
4. [Pull Requests](#pull-requests)
5. [Coding Standards](#coding-standards)
6. [Commit Messages](#commit-messages)
7. [Git Hooks](#git-hooks)

## Code of Conduct

This project adheres to a [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [email@example.com](mailto:email@example.com).

## How to Contribute

1. Fork the repository.
2. Clone your fork: `git clone https://github.com/your-username/voiture-project.git`
3. Create a branch for your changes: `git checkout -b my-feature-branch`
4. Make your changes and commit them (see [Commit Messages](#commit-messages) for more info).
5. Push to your fork: `git push origin my-feature-branch`
6. Create a pull request following the guidelines in [Pull Requests](#pull-requests).

## Issues

- Before opening a new issue, please check if it is already reported.
- If it is a new issue, provide as much detail as possible. Include screenshots if applicable.
- Use descriptive titles and clearly define the issue.

## Pull Requests

- Ensure your pull request (PR) adheres to the project’s coding standards (see [Coding Standards](#coding-standards)).
- Keep PRs focused and avoid making unrelated changes.
- Ensure your changes have been tested thoroughly.
- Include screenshots or demos for any UI changes.
- Link to the issue you are addressing (if applicable) by using keywords like `Fixes #123`.
- Provide a clear description of what your PR does and why it is needed.

### Creating a Pull Request

1. Navigate to the repository on GitHub.
2. Click the "Pull Request" tab, then "New Pull Request".
3. Ensure your branch is listed as the source and the main branch is the target.
4. Click "Create Pull Request".
5. Fill out the PR template, providing all necessary information and context.

## Coding Standards

We follow the coding standards set by ESLint. Ensure you have ESLint installed and configured:

```sh
npm install --save-dev eslint
npx eslint --init

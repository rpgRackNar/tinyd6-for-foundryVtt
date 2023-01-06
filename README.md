# Tiny D6 for Foundry

This system for Foundry Virtual Tabletop facilitates playing using the Tiny D6 minimalist RPG system. The system is
currently in beta so breaking changes may happen on occasion. It based on the boilerplate from
[aMediocreDad](https://github.com/aMediocreDad) [https://github.com/aMediocreDad/svelte-4-fvtt](https://github.com/aMediocreDad/svelte-4-fvtt)

## Introduction

Tiny D6 is a minimalist ruleset for playing tabletop RPGs in a variety of genres. For more information about the system
and the products available, checkout Gallant Knight Games.

## Installation

Manifest URL: **TODO**

The system should now show up in your foundry and can be used to create a new world.

## Feedback

Constructive feedback is welcome! To send feedback you can visit the FoundryVTT discord and @architech99 for any
feedback. Additionally, you may submit an issue here on GitLab.

Contributing
I do occasionally accept contributions as merge requests. However, you might want to check with me first before you do a
lot of work...

Contributions must come as merge requests on the develop branch, all others will be rejected without comment. Please
follow my general coding style, and code formatting, ie opening brace on a new line, etc. I don't care what you think
the right way is, you can code wrong on your own projects.

I use the GitLab issue board and milestones. Please only contribute issues slated for the next milestone, and put the
issue number in the name of the merge request. Thanks!

## Development

### Link the dist folder to your foundryVTT data folder

```bash
# Unix
ln -s dist/* /absolute/path/to/foundry/data/system-name

# cmd
mklink /J /absolute/path/to/link /absolute/path/to/this/repo/dist

```

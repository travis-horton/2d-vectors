# 2d-vectors — what changed, in plain words

The whole history of this project, newest first, written for someone who has never seen the code. It began on 20.0209 as a small piece of math code for flat, two-direction arrows (vectors), shared by other projects. Every entry is one step on the main version: a pull request, or a day's changes on one topic.

## October 2026

**2d-vectors #16: the change log catches up on entries it missed** · [PR #16](https://github.com/travis-horton/2d-vectors/pull/16) · merged 26.1015.0728 · v1.0.3
- Behind the scenes: the robot that writes this file after each change now also writes in any earlier finished change it missed, oldest first, with a "recorded late" note when it is more than an hour late. If GitHub won't answer one of its lookups, it skips only that one, records the newest change anyway, and fills the gap on a later run.

**2d-vectors #10: the four broken arrow tricks work again** · [PR #10](https://github.com/travis-horton/2d-vectors/pull/10) · merged 26.1010.1212 · v1.0.2
- Fixed: making an arrow length one, subtracting arrows, turning a number back into a grid position, and blending four corner values all stopped with "Vector is not defined" after the 20.0209 rename. They work again.
- Behind the scenes: automatic checks now try every one of the toolkit's tricks, and the project's settings point at its real file, so loading it by name no longer fails.
  Try it: open Terminal and paste
      cd ~/code/2d-vectors && npm test

**2d-vectors #9: the project's past, written down** · [PR #9](https://github.com/travis-horton/2d-vectors/pull/9) · merged 26.1010.1209 · v1.0.1
- Behind the scenes: the history file now tells the whole story of the project in plain words, from its first day on 20.0209 up to the history tool, one entry per step, numbered from version 0.1.0.

**2d-vectors #8: security updates and a self-writing history** · [PR #8](https://github.com/travis-horton/2d-vectors/pull/8) · merged 26.1010.1149 · v1.0.0
- **Security updates** · merged 26.1010.1149
  Behind the scenes: six borrowed helper packages were moved to the versions that fix their known security problems, gathered from six waiting automatic update requests into one. Nothing about how the project works changes.
- **History tool** · merged 26.1010.1149
  Behind the scenes: added the tool that writes a plain-language entry into this project's history file every time a change is accepted.

## May 2020

**Helper tools brought up to date** · [commit](https://github.com/travis-horton/2d-vectors/commit/b0e09b2) · merged 20.0506.1304 · v0.1.2
- Behind the scenes: an automatic security check moved two small borrowed packages that the code-checking tool depends on to newer, fixed versions. The vector math itself did not change.

## March 2020

**A security fix in a borrowed tool** · [commit](https://github.com/travis-horton/2d-vectors/commit/609f9b6) · merged 20.0315.1604 · v0.1.1
- Behind the scenes: one borrowed package used by the code-checking tool was moved to the version that fixes a known security problem. The vector math itself did not change.

## February 2020

**The project begins: math for flat arrows** · [commits](https://github.com/travis-horton/2d-vectors/commits/master?since=2020-02-09&until=2020-02-09) · merged 20.0209.1843 · v0.1.0
- **[Project name](https://github.com/travis-horton/2d-vectors/commit/dc6f643)** · merged 20.0209.1843
  Behind the scenes: the project's settings file was given its real name, 2d-vectors, in place of the placeholder "y".
- **[Three-direction arrows split off](https://github.com/travis-horton/2d-vectors/commit/d6df3bc)** · merged 20.0209.1404
  Behind the scenes: a version for arrows in space (left-right, up-down and near-far) was written here and moved out a minute later into its own project, 3d-vectors. The file was renamed to match the project's name.
- **[New name and order](https://github.com/travis-horton/2d-vectors/commit/5ef0052)** · merged 20.0209.1353
  Behind the scenes: the code was renamed for two-direction arrows, reordered so the shared calculations come first, and the grid-position calculation became something you ask an arrow itself. The rename missed several places that still use the old name, so shrinking an arrow to length one, subtracting arrows, turning a counting number back into a grid position and the four-corner blend stop with an error; that is still true today.
- **[Instructions page](https://github.com/travis-horton/2d-vectors/commit/e6bf392)** · merged 20.0209.1251
  New: a README listing each thing the code can do, what it takes in and what it gives back, followed by four small corrections to its headings, line breaks and number types. The project also got its settings file and the code-checking tool.
  Try it: open https://github.com/travis-horton/2d-vectors#readme
- **[The vector math](https://github.com/travis-horton/2d-vectors/commit/f0744c8)** · merged 20.0209.1236
  New: a reusable piece of code for arrows on a flat surface, each with a left-right and an up-down amount. It can measure an arrow's length, shrink it to length one, subtract one arrow from another, multiply two arrows into a single number, turn a position on a grid into a single counting number and back, and blend four corner values into one smooth in-between value (the step Perlin noise, a smooth random pattern, uses). Within minutes it was tidied to the style a code-checking tool recommends.
  Try it: open Terminal and paste
      cd ~/code/2d-vectors && node --no-warnings -e "import('./2d-vectors.js').then(({default: V}) => console.log(new V(3, 4).magnitude()))"

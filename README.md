# serverless-sample

This is a sample project with [Serverless Framework](https://serverless.com/)
with testing in [Jest](https://jestjs.io/) and a build process courtesy of [CircleCi](https://circleci.com/).

Serverless is configured with three stages (dev, qa and prod) and the build process is has three 
[workflows](./.circleci/config.yml).  They are:
 - Random commits to non-master branches which are built and tested
 - Merges to master which are built and tested and deployed to dev
 - Tagged releases which are built, tested, deployed to dev & qa and optionally relased to production
 
 # Usage
 
 First, install Serverless (aka ```sls```) by running ```npm install -g serverless```.  Then, check out this 
 project and install dependencies via ```npm install```.  
 
 You may run tests by running ```npm test```.  Tests by default will use [Istanbul](https://istanbul.js.org/)
 to generate a coverage report in ```coverage/lcov-report/```
 
 # TODO
 
 - local dev
 

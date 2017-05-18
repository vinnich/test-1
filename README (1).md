#Introduction

Asos QA selection code test

#Steps to run ASOS acceptance test

1. Install selenium webdriver from  http://selenium-release.storage.googleapis.com/3.4/selenium-java-3.4.0.zip
2. Install NPM(Node.JS) from https://nodejs.org/en/download/
3. Open command prompt and type " npm install –g protractor " and hit enter
4. Check the installation and version in command prompt by typing " Protractor --version " and hit enter
5. Update webdriver-manager using command prompt by typing " webdriver-manager update " and hit enter
6. Start webdriver manager using commnad prompt by typing " webdriver-manager start " and hit enter
7. Open a new command prompt and give the command as " protractor conf.js " and hit enter
8. Test will start in chrome browser as it has configured to run only in chrome browser
9. Test result will be something like this " 4 specs, 0 failures "

Test 5 test scenario : Write the scenario and automate test to display prices in New Zealand dollars in Australian store

Feature : Use the website to display product prices
          In New Zealand dollars
          For an Australian store
Scenario : Display prices in NZD for Australian store
Given : I am in Australian store
When  : I select currency as NZD
Then  : I should see basket currency updated to NZD


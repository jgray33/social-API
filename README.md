
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Social Network API

## Description
The backend to a social-media platform. Application allows the user to:

* Create a User, made up of a username and email address. Email address validation means the user is unable to enter an invalid email address.
* Create thoughts
* Add reactions to thoughts. These reactions are added to the thoughts as an array 
* Delete and update any user, thought or reaction. 

- - - - 


## Table of contents 

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)

<a name="installation"></a>
## Installation 
- Clone this repository 
- NPM install to install all packages
- NPM start to fire up the applications 


Watch this [video](https://youtu.be/s07FiP9npTU) to demonstrate how to use this application.

<a name="usage"></a>
## Usage 

Routes for users: 
- GET all users: http://localhost:3001/api/users
- GET a single user: http://localhost:3001/api/users/USERID
- POST a user: http://localhost:3001/api/users

Routes for adding friends:
- POST new friend to user: http://localhost:3001/api/users/USERID/friends/FRIENDID
- DELETE a friend from a user: http://localhost:3001/api/users/USERID/friends/FRIENDID 

Routes for thoughts: 
- GET all thoughts: http://localhost:3001/api/thoughts
- GET a single thought: http://localhost:3001/api/thoughts/THOUGHTID
- POST a thought: http://localhost:3001/api/thoughts/
- UPDATE a thought: http://localhost:3001/api/thoughts/THOUGHTID
- DELETE a thought: http://localhost:3001/api/thoughts/THOUGHTID

Routes for reactions:
- POST a new reactions: http://localhost:3001/api/thoughts/THOUGHTID/reactions
- DELETE a reactions: http://localhost:3001/api/thoughts/THOUGHTID/reactions/REACTIONID



<a name="license"></a>
## License 

This application is covered under the [MIT](https://opensource.org/licenses/MIT) license.  


<a name="contributors"></a>
## Contributors 
No other contributors

<a name="tests"></a>
## Tests 
No test instructions for this yet

<a name="questions"></a>
### Questions

If you have any questions, visit my [GitHub profile](https://www.github.com/jgray33) or email me: julia.gray30@gmail.com 


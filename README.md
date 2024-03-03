
##### Table of Contents   
[Overview](#overview)     
[API](#api)  
[Skills](#skills) 
[User](#user) 


<a name="overview"/>

# Overview
This documentation is split between the API, Skill and User sections- 
this is done in order to appropriately represent what our program is like, as it's heavily dependent on these three elements.

Our program is a webapp constructed using the framework Vue.js, with Typescript and HTML/CSS.


<a name="api"/>

# API
This API allows for connection to the backend- this allows for features such as editing and addition of 'quests', logging in and registration of users, and more
Nearly every API request must have:
* userId
* oauth-token

## Endpoints

### /user

#### GET ./get/{id}
Gets public info for user with {id}
```
user: UserBig
```

##### Permissions: 
user: *


### /path
#### GET ./{pathId}
```
path: Path to page
/ -> home / landing page
/skill/:id -> skill, with unique ID
  /skill/edit/:id -> edit a skill of id :id
    /skill/create -> create a skill
/user/:id -> user page, with unique user ID
/login -> user login
/signup -> user signup
    
```




### /skill

#### GET ./map
Gets an adjacency list of all skills

##### Permissions:
user: *

#### GET ./{id}
Gets public info for skill with ID
```
skill: SkillBig;
```
##### Permissions:
user: *


#### POST ./update/{id}
Edits skill

Body:
```
resources: Array<Resource>;
name: string;
iconImage: string;
editorsAdded: Array<string>;
editorsRemoved: Array<string>;
description: string;
preSkills: skills before
postSkills: skills after
editorsAdded: Array<string>;
editorsRemoved: Array<string>;
```
##### Permissions:
admin: *
owner: *
editor: resources
user: NULL
*: NULL


#### POST ./create/{id}
Creates skill and throws to Edit to input values of created skill

Body:
```
resources: Array<Resource>;
name: string;
iconImage: string;
description: string;
preSkills: skills before
postSkills: skills after

```
##### Permissions:
user: *

#### GET ./search
Returns Record<array, SmallSkill> of all skills

#### GET ./search/{term}
Returns array of matching search terms



##### Permissions:
user: *


##### Local Helpers
getBigSkill - fetches a BigSkill from backend
getSmallSkill - fetches a SmallSkill from backend

<a name="skills"/>

# Skills
Skills are a linked list of different skill nodes intended to help the user develop skills, containing useful resources. 
We intend for the user to be able to know where they're headed -> what skills they need to develop to be prepared for something.

## Related Views

### Skill Page
```
/skill/:id 
```
This page contains the skill, with relevant information such as the links (body) and adjacent skills.

### Skill Edit
```
/skill/edit/:id
```
This page contains functionality to edit the skill- make changes to the information, description and image icon of the skill.

### Skill Create
```
/skill/create
```
This page contains functionality to create a new skill, generating a new ID and name, after which the user will be redirected to skill-edit.


<a name="user"/>

# User
A user signs in by Google/Github. They can update skills, as well as create new ones which can be chained

## Related Views

## User Page
```
/user/:id
```
This page contains basic user information, such as username, ID and contribution amounts.


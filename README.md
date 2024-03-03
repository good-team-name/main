
##### Table of Contents   
[Overview](#overview)     
[API](#api)  
[Skills](#skills) 



<a name="overview"/>

# Overview
This documentation is split between the API, Skill and User sections- 
this is done in order to appropriately represent what our program is like, as it's heavily dependent on these three elements.

Our program is a webapp constructed using the framework Vue.js, with Typescript and HTML/CSS.


<a name="api"/>

# API
This API allows for connection to the backend- this allows for features such as editing and addition of 'quests', logging in and registration of users, and more

(ALMOST) every API request must have:
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



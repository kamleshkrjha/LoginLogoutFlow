# LoginLogoutFlow

## Description

This is complete home->login->details->logout->home flow implemented using Angular 6 and nodeJS.
It has a Loader component which overlays entire page during login and logout server calls.
A Status component shows User states(Not logged In, Logging In, Logged In, Logging out, Logged out) for the entire flow.

A nodeJS server responds for API calls. User data is mocked on server. It Validates username as well as password.
Valid usernames for testing: kamlesh, John, Jane  Password: 123


## Setup: 
1. Install nodejs(version > 8) and npm (version > 5) if it is not installed from [here](https://nodejs.org/en/download/)

2. Install [angular-cli](https://github.com/angular/angular-cli) 

    `npm install -g @angular/cli`

3. Clone [repository](https://github.com/kamleshkrjha/LoginLogoutFlow.git)

   `git clone https://github.com/kamleshkrjha/LoginLogoutFlow.git`

#### Server setup
1. Navigate to server form repository's directory 
   
   `cd server`

2. Install depenecines 

   ``` npm install ```
   
3. Start server

   ``` npm start ```

#### Client setup
1. Navigate to client form repository's directory 

   ``` cd client ```
   
2. Install depenecines 
   
   ``` npm install ```
   
3. Start angular

   ``` npm start ```
   
4. Open browser and go to `http://localhost:4200` 



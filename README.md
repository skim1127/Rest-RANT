# Project REST-Rant

REST-Rant is an app where users can review restaurants.

## Methods and Routes
| Method  | Path                       | Purpose                                 |
| ------- | -------------------------- | --------------------------------------- |
| GET     | '/'                        | Home Page                               |
| GET     | '/places'                  | Places index page                       |
| POST    | '/places'                  | Create new place                        |
| GET     | '/places/new'              | Form page for creating new place        |
| GET     | '/places/:id'              | Details about a particular place        |
| PUT     | '/places/:id'              | Update a particular place               |
| GET     | '/places/:id/edit'         | Form page for editing an existing place |
| DELETE  | '/places/:id'              | Delete a particular place               |
| POST    | '/places/:id/rant'         | Create rant about a particular place    |
| DELETE  | '/places/:id/rant/:rantId' | Delete a rant about a particular place  |
| GET     | '*'                        | 404 page                                |

## Database

**places**

| Field    | Type      |
| -------- | --------- |
| _id      | Object ID |
| name     | String    |
| city     | String    |
| state    | String    |
| cuisines | String    |
| pic      | String    |

**rants**

| Field    | Type                  |
| -------- | --------------------- |
| _id      | Object ID             |
| place_id | ref(places) Object_Id |
| rant     | Boolean               |
| rating   | Number                |
| comment  | String                |
| reviewer | String                |

## Acceptance Criteria
```
Given the setup instructions, the project folder must be pushed to GitHub and titled rest-rant.
When viewing the repository, the project includes all required files and packages.
When viewing the index.js file, all required globals and routes are included.
When viewing the controllers folder, it includes a places controller (places.js).
When going to localhost:3000/, the stub Hello World! is rendered.
When going to localhost:3000/places, the stub GET /places is rendered.
When going to localhost:3000/anything, the stub 404 page is rendered.
```
<!-- How to Create Good README's -->
https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

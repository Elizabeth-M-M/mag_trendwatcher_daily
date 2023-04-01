# Trend Watcher Daily
#### A Ruby on Rails API with a React front end

##### Owner
Elizabeth Mwende Muthusi
##### Date
31/03/2023.

#### Note

Due to deployment issues, this repository which initially started here has been moved to two seperate repositories, one containing the backend and the other the front end. The updates to the code for this app will be located on those repositories. You can navigate by following the links below:-

Front end
- Github link: https://github.com/Elizabeth-M-M/magazine-react-front-end
- Deployed link: https://magazine-react-front-end.vercel.app/

API end
- Github link: https://github.com/Elizabeth-M-M/magazine_ruby_on_rails_backend
- Deployed link: https://trial1-cksf.onrender.com/articles/1, as an endpoint example

If you decide to work with this version of the program, the setup is described below. If you need one part of the program, you can follow the links above. The deployed links are of the seperate repositories, not this repository.

### About
This is a full stack app of a magazine outlet that allows users to view and read articles from a collection and leave reviews. An editor for the magazine is able to add, edit and delete an article. The app is built using React Router for client-side routing and uses a ruby on rails API.

### Features
A user can:-
1. Successfully create an account and log in
2. View articles and leave  reviews

An editor can:-
1. Successfully log in
2. View articles and reviews left by users
3. Add, edit or delete an article

#### Technologies used
HTML
CSS
Javascript
React
Ruby on Rails
Bootstrap
Figma

#### Prerequisites
- Node.js, ruby, rails and npm installed on your machine.

### Getting Started
To get started with this application, you need to follow the steps mentioned below and run on the command line:

1. Clone this repository on your local machine
2. Navigate to the project directory in your terminal.
3. Install the required dependencies by running:
```console
$ bundle install
$ npm install --prefix client
```
4. Run the database migrations and seed the database using:
```console
$ rails db:migrate db:seed
```
5. Start the front end and backend silmutaneously by running:
```console
$ foreman start -f Procfile.dev
```
6. The app should now be running on `http://localhost:4000`

As a user, you can sign up and use those credentials to sign in later after logging out

As an editor, these are the credentials to log in to the editor view
- username- editor
- password- 98765
- check the checkbox `log in as editor`

## Screenshots of the Front End Design
 It is divided into two parts; user's view and editor's view

 ### User view

- Homepage
![alt text](./images/userhp.png "Trend Watcher Magazine")
- Category page
![alt text](./images/usercategory.png "Trend Watcher Magazine")
- Main article
![alt text](./images/mainarticle.png "Trend Watcher Magazine")

 ### Editor view
- Homepage
![alt text](./images/editorhp.png "Trend Watcher Magazine")
- Category page
![alt text](./images/2editorcatpg.png "Trend Watcher Magazine")
- Create article page
![alt text](./images/add%20articlepg.png "Trend Watcher Magazine")
- Main article  page with an edit button
![alt text](./images/editormainarticle.png "Trend Watcher Magazine")


### API

### The endpoints include:-

#### POST

/signup
- Create a new user

###### Action
```console
{
      "username":"ron",
      "email":"ron@ymail.com",
      "password":"ron34917",
      "password_confirmation":"ron34917"
}
```
###### Response:
```console
{
    "id": 9,
    "username": "ron"
}
```
#### GET

/me
- Get a logged in user or editor stored in the sessions

###### Response:
```console
{
    "id": 7,
    "username": "ron"
}
```

#### POST

/login/user
- Finds a user with matching username and password in the database

###### Action
```console
{
    "username":"ron",
    "password":"ron34917"
}
```
###### Response:
```console
{
    "id": 9,
    "username": "ron"
}
```

#### POST

/login/editor
- Logs in the editor with matching username and password in the database

###### Action
```console
{
    "username":"editor",
    "password":"98765"
}
```
###### Response:
```console
{
    "id": 1,
    "username": "editor",
    "password": null
}
```
#### DELETE

/logout
- Removes a user or editor session
- No response

#### POST

/reviews
- Creates a review instance

###### Action
```console
{
    "user_id":1,
    "article_id":1,
    "comment":"Awesome"
}

```
###### Response:
```console
{
    "comment": "Awesome",
    "user": {
    "id": 1,
    "username": "ella"
    }
}
```

#### GET

/articles
- Gets all articles
###### Response:
```console
[
    {
        "id": 57,
        "image": "https://images.pexels.com/photos/839443/pexels-photo-839443.jpeg?auto=compress&cs=tinysrgb&w=300",
        "title": "Parent in the Digital Age: Balancing Screen Time and Outdoor Play",
        "category": "Lifestyle",
        "summary": "Of course it’s about the head. It’s the final dedication, the last hurrah. Nobody...",
        "part_title": "Parent in the Digital Age"
    },
    {
        "id": 54,
        "image": "https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=400",
        "title": "Innovation and Creativity: Finding New Solutions and Ideas for Your Business",
        "category": "Business",
        "summary": "I’d never join a book club. I’d be kicked out. The leader of the book cult would ...",
        "part_title": "Innovation and Creativity"
    }]
```

#### GET

/articles/:id
- Gets a specific article

###### Response:
```console
{
    "id": 1,
    "image": "https://images.pexels.com/photos/7484855/pexels-photo-7484855.jpeg?auto=compress&cs=tinysrgb&w=300",
    "title": "The Art of Self-Care: Ideas for Nurturing Your Mind, Body, and Soul",
    "category": "Lifestyle",
    "part1": "some-long-text",
    "part2": "some-long-text",
    "part3": "some-long-text",
    "reviews": [
        {
            "comment": "Awesome",
            "user": {
                "id": 1,
                "username": "ella"
            }
        }
    ]
}
```

#### POST

/articles
- Creates a new article instance

###### Action
```console
{
  "title":"Parenting in the Digital Age: Balancing Screen Time and Outdoor Play",
  "image":"https://images.pexels.com/photos/839443/pexels-photo-839443.jpeg?auto=compress&cs=tinysrgb&w=300",
  "content":"enter-some-long-text",
  "category":"Lifestyle"
}
```
###### Response:
```console
{
    "id": {id},
    "image": "https://images.pexels.com/photos/839443/pexels-photo-839443.jpeg?auto=compress&cs=tinysrgb&w=300",
    "title": "Parenting in the Digital Age: Balancing Screen Time and Outdoor Play",
    "category": "Lifestyle",
    "summary": "A summary of some long text you entered"
}
```

#### PATCH

/articles/:id
- Updates an article instance

###### Action
```console
{
  "title":"Parenting in the Digital Age",
  "image":"https://images.pexels.com/photos/839443/pexels-photo-839443.jpeg?auto=compress&cs=tinysrgb&w=300",
  "content":"enter-some-long-text",
  "category":"Lifestyle"
}
```
###### Response:
```console
{
    "id": {id},
    "image": "https://images.pexels.com/photos/839443/pexels-photo-839443.jpeg?auto=compress&cs=tinysrgb&w=300",
    "title": "Parenting in the Digital Age",
    "category": "Lifestyle",
    "summary": "A summary of some long text you entered"
}
```
#### DELETE

/articles/:id

- Updates an article instance
- No response

- Test the endpoints using Postman with `http://localhost:3000/<endpoint>`

#### License
Copyright (c) 2022 Elizabeth Mwende Muthusi.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files , to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

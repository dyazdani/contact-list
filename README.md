# UrContacts
> A contact list application

UrContacts is a React contact list app built with full CRUD capabilities. It uses json-server to locally store your data in a JSON file at the backend. Because your data persists on a locally hosted database, your data is completely private.

## Installation and Build

1. Clone or download GitHub repo into a desired local root directory.

2. `cd contact-list`

3. `npm install` 

4. `npm run build`

5. `npm start`


## Features

UrContacts provides functionality for creating, updating, deleting, and searching for contacts in a list stored as a JSON file on a locally hosted json-server. The app uses async calls to the json-server using the fetch API, and data that you add, update, or delete persist in the json-server in the `db.json` file. The app uses the React Router package to create routes to different application features while maintaining a single-page application experience.

### Technologies Used
- React
- TypeScript
- Vite
- React Router
    UrContacts uses React Router to route to various URLs in on your browser: 

    /                               => Home page
    /contacts                       => contact list
    /contacts/{contactID}           => contact by id
    /create                         => create new contact
    /contacts/{contactID}/update    => update contact
- [json-server][json-server] 


## User Experience
### Home Page `/`
- From the home page, you will be able to see how many contacts are currently in your list.
- If there are no contacts, you will be prompted to create a new contact. 
- Click on "Go to UrContacts List" to view your contact list (`/contacts`). 

### Create a New Contact `/create`
- Click on "Create New Contact" in the lower left corner. 
- A form will then appear to fill and submit.
- You will then see your new contact appear in your list.

### Contact Details `/contacts/{contactID}`
- Click contact's name.
- You will be taken to a page with their contact information.

### Update Contact `/contacts/{contactID}/update`
- Click on the "Update Contact" link. 
- The form will reappear with the current information populated in it. 
- Edit information.
- Submit form to save.

### Delete Contact
- Click the "Delete Contact" button on the contact's details page.

### Search for Contact
- Type in the search field at the bottom of the contacts list page. 
- Clicking "Search" button.
- Results will appear on the page.
- To view all contacts, click "See All Contacts". 


## Release History

* 0.1.0
    * The first proper release

## Meta

Dara Yazdani 
dara.s.yazdani@gmail.com

[https://github.com/dyazdani/contact-list](https://github.com/dyazdani/)

## Contributing

1. Fork it (<https://github.com/dyazdani/contact-list/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request


[typescript]: https://www.typescriptlang.org/id/download
[vite]: https://vitejs.dev/guide/
[json-server]: https://github.com/typicode/json-server
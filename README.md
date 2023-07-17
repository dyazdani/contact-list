# UrContacts
> A contact list application

UrContacts is a React contact list app built with full CRUD capabilities. It uses json-server to locally host a JSON file database on the backend, where your data will persist.

## Installation and Build

1. `npm init -y`

2. This app was built with Vite. While you may use whatever React bootstrapping tool you prefer to get the app running, Vite has some useful features built-in, such as TypeScript and a server: [Vite][vite]. Instructions from here on out will assume you have some way a spinning a server locally.

3. If you use a bootstrapping tool other than Vite, make sure it has TypeScript baked in, or install TypeScript separately: [TypeScript][typescript]

4. `npm install --save json-server react-router-dom` 

5. Add your server start scripts to your `package.json`:

    "scripts": {
        // .. 
        "server:dev": "json-server --watch ./data/db.json",
        "start": "json-server ./data/db.json --static ./dist"
        //..
    }

6. To run your server: `npm run server:dev`

7. In a separate terminal, start your React app using Vite: `npm run dev`

### Additional Notes
UrContacts uses React Router to route to various URLs in on your browser: 

/                               => Home page
/contacts                       => contact list
/contacts/{contactID}           => contact by id
/create                         => create new contact
/contacts/{contactID}/update    => update contact

--

For more information about json-server, consult the docs here: [npm: json-server][json-server]  

## Information

UrContacts provides functionality for creating, updating, deleting, and searching for contacts in a list stored as a JSON file on a locally hosted json-server. The app uses async calls to the json-server using the fetch API, and data that you add, update, or delete persist in the json-server in the `db.json` file. The app uses the React Router package to create routes to different application features while maintaining a single-page application experience.

## User Experience

### Home Page
From the home page, you will be able to see how many contacts are currently in your list. Click on the link on the homepage to view your contact list. If there are currently np contacts in your list, you will be prompted to create a new contact.

### Create a New Contact
To create a new contact, click the "Create New Contact link in the lower left corner. A form will then appear for you to fill out and submit. Then, voila, you will see the name of your new contact in your list.

### Contact Details
To view the details of any of your contacts, click on their name from the contact list screen and you will be taken to a page with their contact information.

### Update Contact
To update a contact's information, click on the "Update Contact" link in the bottom left corner of their contact details page. The same form that appeared when you created the contact will reappear with the current information populated in it. Simply edit the information there and resubmit the form to save.

### Delete Contact
To delete a contact, click the "Delete Contact" button on the contact's details page.

### Search
From the contact list page, you can use the search field at the bottom to search for a specific contact. After typing in the search field and clicking the "Search" button, your results will appear on the same page as a filtered contact list of the results that matched your search. To view all of the contacts in your list again, click the "See All Contacts" link in the lower right corner. 


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


<!-- Markdown link & img dfn's -->
[typescript]: https://www.typescriptlang.org/id/download
[vite]: https://vitejs.dev/guide/
[json-server]: https://github.com/typicode/json-server
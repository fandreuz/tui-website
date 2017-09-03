# t-ui launcher website
a place to help share themes and foster the comunity. the project is built using choo and firebase.

## Structure

```
├── build
├── .config
├── docs
├── firebase.json
├── functions
├── node_modules
├── package.json
├── package-lock.json
├── README.md
└── src

```
## Website
[T-UI Launcher](tui-launcher.surge.sh)


# How to run
- requires [Node 8*](https://nodejs.org/en/) 
- requires npm (included with node)

Open a terminal and run 

```
npm install
npm run start
```
will start a local instants on locahost:8080
to config the server go to .config

will start a local instants

# How to publish
currenly this publishs to surge.sh through the cmd
```
npm run publish
// its under my surge acount sorry 
```

# Theme Previews
```
.
├── controls <== this controls the theme builder and forms
├── header.js
├── navbar.js
├── preview <== in this folder you can edit the preview element.
├── themeListItem.js
└── themeList.js
```
the theme preview takes classes created by the name based on the themes property name.
- `song_text_color` => `.song_text_color`

# Builder
```
.
├── builder <== the builder page
├── common
├── display <== the display toggle like storage
├── filterFields.js <== this controls what props because what fields
├── inputBinder.js
├── previewControls.js
├── suggestions
└── theme

```
the theme preview takes classes created by the name based on the themes property name.

# Firebase
this project allows user to edit the database through anon users.
once a user is on the site they are setup as a anon user for storing themes.
- When a user edits a theme it will update there `custom_theme_{uid}` in firebase
- When a user publish a theme it will publish it to a safe name and delete there custom_theme

## Theme Creation
a new theme is based of the properties in the `themes/default` theme and suggestions.
if they are updated, every new theme will have the new properties.

## Firebase functions
under the `function` folder the server function for firebase are stored.
such as
- delete custom_themes if the count goes over 50

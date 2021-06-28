# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Base Apparel coming soon page solution](#frontend-mentor---base-apparel-coming-soon-page-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![solution screenshot](/design/solution-screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS Grid
- Mobile-first workflow
- SASS
- BEM naming
- Vanilla JavaScript

### What I learned

First time really implementing JS in a project! Borrowed ideas for my solution here: https://daverupert.com/2017/11/happier-html5-forms/. The key was adding an event listener for an ["invalid" event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/invalid_event).  

```js
input.addeventListner("invalid", myFunction)
```

The most challenging part of this project was creating the styling for the email collection form - especially getting the input area, the button, and the error icon all to be (and stay) where they are supposed to be. The code ended up being pretty simple but it took me a while to figure out. 

```css
.form {
  display: grid;
  grid-template-columns: 1fr 45px 80px;
```
45px is a little bit bigger than the error icon (to give it some spacing) and 80px is exactly the width of the submit button.

```css
  &__email-input {
      grid-area: 1 / 1 / 2 / 4;
  }

  &__submit {
    grid-area: 1 / 3 / 2 / 4; 
    justify-self: center; 
  }

  &__error-icon {
    grid-area: 1 / 2 / 2 / 3; 
    justify-self: center; 
  }
```
That was it. I've had trouble with this type of styling in the past. Grid can handle this well with fixed column sizes and using `justify-self`. I find this approach much more intuitive than `position: absolute` and all of that nonsense. 

### Continued development

## Author

- Website - [Jimmy Sweeney](https://jimmysweeney.page/)
- Frontend Mentor - [@sweenejp](https://www.frontendmentor.io/profile/sweenejp)
- [Github](https://github.com/sweenejp)


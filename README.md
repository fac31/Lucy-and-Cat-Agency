# Lucy-and-Cat-Agency
# readMe

## Description:

The goal of the first project on the Founders and Coders Software Foundation course was to create an Agency website using Vanilla JavaScript. 

### Time frame:

We completed this project in two weeks

### Software Used:

- Javascript, HTML, CSS
- Figma
- Excalidraw
- Github Projects 
- Canva
- Illustrator

## Brief

The website needed to: 

- Include an introduction to the Agency
- Include information about each member of the team
- Include a way to get in touch with the Agency
- Have fully Responsive Design
- Site Navigation
- Be fully accessible 

## Planning

We started by creating a wireframe of the website.

The Wireframe:
![](img/WireframeforAgency.png) 

Once we had the wireframe, we moved to creating the design files via Adobe Illustrator and Canva. We uploaded the files to Figma. 

The Homepage Design on Figma:
![](img/FigmaDesignFile.png)

## Build Process
The first stage of the build was to get the HTML layout down and then build the CSS. 

Once we had the basic structure in place it was clear that we needed to make some minor amends to the design to better suit a web layout: 

- Images needed to finish sooner so that each page could get to the text sooner
- We extended the height of each page so that the text was larger and therefore more accessible
- We chose to have a pop out navbar so this is where we began using JavaScript in this project. This was done by changing the CSS class types of certain elements on the click of a button. We also used conditional statements, for example the `handleClickOutsdeNavbar` function, which allows the user to close the navbar by clicking outside of it. 
- JavaScript was essential to improving hte accessibility of our app: ensuring the navbar could be opened using the keyboard allows users to navigate the app without a mouse. 
- To give the contact form some functionality, we included checks to make sure all the fields were complete, and notify the user if they try to submit the form having not filled in all the fields. If the form is complete, the user sees a confirmation pop up, and the form is saved to local storage. 

## Challenges

Lucy: I found the Responsive Design process a challenge as it was new to me. By the end of the project I'd learnt a more methodical way to approach the process 

Catherine: Getting to grips with a screen reader to ensure our app is accessible. 


## Wins and Takeaways

Lucy: I feel proud of the final product as I feel it's of a professional standard. I think we worked well as a team and communicated during any tricky moments so that we kept the workflow going throughout.

Catherine: Learning about making an app accessible, for example the use of screen readers and tabbing through the app, was a learning curve for me as I didn't have any previous experience with these. As a pair, our schedules didn't always line up but we managed to keep each other updated and have check ins whenever possible. 


## Bugs and Future Improvements

There were a couple of outstanding bugs in the project at the point of submission:
- There's some visual imperfections in the responsive design that would need to be ironed out if this were to be rolled out for a real world client
- The backend of the form has not been added because it was not part of the brief for this project



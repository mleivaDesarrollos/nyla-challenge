# Nyla Challenge: 

## Introduction

Hi, my name is Maximiliano Leiva and is it nice to meet you! I would like to 
explain a little bit about how I addressed this challenge, but before to start
the explanation I would like to thank you for this opportunity to know you 
and Nyla. Hopefully we could meet together soon to better know each other!!

## How to test this solution

1. Download the repository on your local enviroment
2. Run `yarn` to install depedencies
3. Run `npm run dev`
4. Go to `http://localhost:3000`

## Decisions

In this section I gonna explain a little bit which tools I chose, design decisions 
and changes I made over completing this challenge.

- **Typescript** Is always a most in every project from scratch.
Typescript protects you from doing minimal mistakes that could be difficult to debug.

- **TailwindCss** this library has been proven very useful to reduce build size
from projects, and because that is something important to get better time to screen
results for Merchants, this should the best option at the moment for CSS.

- **Custom Hook for Gorgias Script** Looking the given script I found pretty reasonable
to convert into a React custom hook. The main benefit of doing this is that you have
more control in your project on how could you use it. I believe this could add points
to **Bonus: organization** section, because you could easily plug and unplug this component
without spreading out a lot into the code. Also I make the script more dynamic and configurable
with this change.

- **Aditional UX step to retrieve Gorgias to our project** I added an additional layer in the UI
to call Gorgias Bundle, in order to save loading times on first load. Created a button to call 
gorgias bundle loading process. And to not clutter the Visitor experience, linked my UI button
and Gorgias Chat Window open behavior. For the Visitor looks seamless, but the implementation
could be improved because now is relying on reverse engineering to make it work. This decision
was made to address the **Bonus: Performance** point, this change would improve loading times
on a considerable amount.

- **Simple Merchant Dashboard**: So as to comply with `Minimum Acceptance Criteria` point: 
`It shouldn't load if the Merchant disabled it and process.env.NEXT_PUBLIC_GORGIAS isn't true`.
Created a simple dashboard to change Merchant configuration, you could access by going to
`/admin/login`, credentials are hardcoded as `user: admin, password: 12345`. This Dashboard
relies on a hardcoded access token, and there is a persistence layer of that one so as to
not login constantly. There is also a sort of routing hook to control each page is
accessed on a right way.

- **Enable/disable chat for merchant** So as to not rely on database layer or products like
firebase, I decided to save this configuration on memory through Next.JS `api` folders.
I created two endpoints, one for retrieving merchant information and other to update that
information.

## Problems and room for improvement

- **Enable/disable chat for merchant**: Because this configuration is saved on memory, and
`npm run dev` might restart the project constantly by changes or page loading, they might
have a clunky experience and you might to save several times in order to get it done.

- **Aesthetics** The website is in a pretty rough state on this category. To make a well 
looking main site and administration dashboard takes a considerable amount of time,
and other sections from the project may require more effort than this one as far as
I understood from the requirements of the challenge.

- **Unoptimized images**: If we are looking for very good loading times, that images are
really big for main page load.

- **Additional removal layer for the chat** We could also remove the custom gorgias component from
components hierarchy if we render a completely different index page using server side props.
Because that was a pretty extreme case of performance improvement, and that might clutter
the code I didn't added it.

- **Local enviroment instead of StackBlitz** I had several issues trying to run
this project on StackBlitz after installing typescript on the project.
SWC compiler wasn't working on  StackBlitz, and after trying to fall back to
babel and looking there is no change on the issue, decided to not use Stackblitz
to show my results. Tried to debug the issue for a while, but was better to employ
my time moving forward other important parts of the challenge.

- **Gorgias In local environments not working well**: After running Gorgias on local, I got
an issue from using the chat himself. Sending messages over the chat window was receiving
a constant notification `Message not delivered. Click to retry.`. After debugging a while
there is an issue from the bundle that Gorgias delivers when you are running the project 
in local environment. The main chat url is built with `http` instead of `https`, and because
of that the network calls were returning errors. Using my implementation components over
source of challenge on stackblitz worked well on the https url that stackblitz gave me.
I couldn't find a solution for that issue, because seems to be a Gorgias implementation
issue, and there is no much room for me to do any changes in the scope of this challenge.


# yuHacks(2023) front-end

The front-end project is created using Next.js 13 with Tailwind CSS integrated. We will employ atomic design when it comes to coding components. Routing is handled by Next's [built-in router](https://nextjs.org/docs/app/building-your-application/routing); for implementing transitions and animations we use [Framer Motion](https://www.framer.com/motion); [Headless UI](https://headlessui.com/) is included as a package for the convenience of making some frequently used UI patterns not provided by default; if there are confusion on making certain components (especially for the dashboard), refers to [shadcn/ui](https://ui.shadcn.com/docs) and copy the royalty-free code from there.

## Getting Started

Install the latest Node.js. This project is created with Node v.18.13.0. Then after cloning the repo to your local directory, install the dependency by running:
```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The front-end project is divided into two sections: the main single page website and the dashboard. Users can login to the dashboard from the main page. The dashboard is stored in `src/app/dashboard` and `src/app/dashboard-sponsor`. 

> It can be argued that these two dashboards can be done under the same directory and be rendered base on respective user priviledge, we shall have that discussion in the dev team meeting.

### Components

Place all the reusable components under `src/components`, the file name is in the format of `ComponentName.component.tsx`. 
Refer to [shadcn/ui](https://ui.shadcn.com/docs) or [Tailwind UI](https://tailwindui.com/components) to start creating some of the components as the dependencies are already included in the project.

### Styles

Aside from `globals.css`, the stylesheets should be placed in `src/styles` except for those specific to a page or to a component, then it should be place under the same directory as the page or the component with recognizable naming (e.g. `PageName.css`, `ComponentName.css`). You can import a stylesheet by using:

```javascript
import './stylesheet.css';
```

### Hooks

_TODO_

### Utils 

Where we store some frequently used classes, types and helper functions.

## From Design to Code

Front-end team works closely with the design team, and communication and collaboration is paramount in delivering our project effectively. I will update the section here so there would be a documentation where developers can refer to the component and page design and all their possible variants. If the dev member have any questions or suggestions, do reach out to Tom (_hashbrown#4763_) on Discord. I'm eager to learn from all of you :-)

## [Nice Gadgets Catalog](https://fs-jan25-smerichka-team.github.io/product-catalog-group-project/#/)

A responsive and adaptive device catalog for Nice Gadgets, developed by the Sanatoriy Smerichka team.

Our task was built project within a 2-week deadline with ready Figma design and mock API (JSON file).

## Features

- **Home page** with banners and product sliders - hot discounts, new arrivals, etc.
- **Category-based browsing** - phones, tablets and accessories are available
- **Sorting products** - by newest, best price, or alphabetically
- **Adjustable product grid** - show 4, 8, 16, or all product cards per page
- **Pagination** for large product lists
- **Product Details** page with:
    - Image gallery
    - Color and memory size selection
    - Dynamic specifications and descriptions (adapts based on available data)
- **Favorites and Cart functionality**, with data saved in localStorage via Jotai state management
- **Mobile-friendly design** including:
    - Responsive layout for all devices
    - Pagination, gallery, product sliders allow swiping instead of buttons
    - Mobile header menu with product categories
- **Badges** on favorite and cart icons showing item counts
- **Checkout page** with options to modify item quantity, remove items, navigate to Product Details and proceed to payment

## Tech Stack

- **Vite** - fast development and optimized build tool
- **React** - component-based UI for maintainability and reusability
- **React Hooks** - enable state and side effect management in functional components for cleaner and more efficient components
- **React Router** - client-side routing, seamless navigation between pages without full page reloads
- **TypeScript** - strict typing for safer and scalable code
- **Material UI** - prebuilt UI components customized to project style, built-in support for theming to manage colors, typography, and overall design consistency across the app
- **Swiper** - smooth, touch-friendly sliders for banners, gallery and product sliders
- **Tanstack Query** - efficient data fetching and caching to load only necessary data per page
- **Jotai** - lightweight state management for local favorites and cart states
- **ESLint & Prettier** - code quality and formatting enforcement
- **Husky** - Git hooks to automate linting and tests before commits
- **Fetch API** - interacts with mock JSON API for data retrieval

## Demo

🔗 [Live demo](https://fs-jan25-smerichka-team.github.io/product-catalog-group-project/#/)



## Sanatoriy Smerichka team

[Daniil Trusov](https://github.com/daniil-trusov)
- Led project management with Jira and GitHub;
- Reviewed code and merged branches;
- Created custom React Hooks for product handling;
- Developed Product Details, Contacts, and Rights pages.

[Nataliia Verbenska](https://github.com/nataliia-v)
- Built the main layout with Header and mobile navigation;
- Integrated TanStack and Jotai for global state;
- Developed full logic for Favourites and Cart;
- Created layout for Homepage.

[Yaroslav Holovchenko](https://github.com/ENigmusSS)
- Developed Catalog and Favourites page layouts;
- Created Product Card and site Footer;
- Adapt Material UI components for project needs;
- Implemented Swiper sliders for banners and devices.

[Mariia Koval](https://github.com/kovalmaria)
- Designed and implemented a custom Material UI theme;
- Created Cart page and Cart Card component;
- Adapted dropdowns and modals using MUI;
- Built Checkout modal window.

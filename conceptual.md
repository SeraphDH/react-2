### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
    The purpose of React Router is to enable client-side routing in React applications, allowing developers to create single-page web applications with dynamic, navigable URLs, making it possible to render different components and views based on the URL, providing a seamless user experience similar to traditional multi-page websites.

- What is a single page application?
    A single-page application (SPA) is a web application that loads and updates content dynamically on a single web page, without requiring full page refreshes. SPAs use JavaScript to retrieve data from a server and manipulate the DOM to provide a more fluid and interactive user experience, often by utilizing techniques like AJAX and client-side routing to update specific parts of the page while maintaining a consistent look and feel

- What are some differences between client side and server side routing?
    Client-side routing and server-side routing differ in how they handle navigation within web applications. Client-side routing, used in single-page applications, relies on JavaScript to update the page content and URLs, making it faster for users to navigate between pages without full page reloads, but it can be less SEO-friendly and may require initial page load of JavaScript. Server-side routing, typical in traditional multi-page applications, handles navigation by requesting new HTML pages from the server, making it SEO-friendly but resulting in slower page transitions due to full page reloads, and it doesn't require as much client-side scripting.

- What are two ways of handling redirects with React Router? When would you use each?
    1. <Redirect> Component: This approach is useful for declaratively defining redirects within your route configuration. You would use <Redirect> when you want to specify redirection conditions based on the current route, such as after a user logs in or when a certain route condition is met.

    2. Programmatic Redirection with history: This method involves using the history object provided by React Router to trigger a redirect based on programmatic logic. It's helpful when you need to perform redirects in response to user interactions or other dynamic factors that can't be easily expressed using the <Redirect> component.

- What are two different ways to handle page-not-found user experiences using React Router?
    1. Using a <Route> with a wildcard path (<Route path="*">): You can include a <Route> with a path set to *, which acts as a catch-all for unmatched routes. This route component can render a custom "Page Not Found" component to inform users that the requested page doesn't exist.

    2. Creating a custom 404 component and using it with a <Switch>: You can define a custom "Page Not Found" component and place it at the end of a <Switch> component, which only renders the first matching route. This ensures that if none of the defined routes match, the "Page Not Found" component will be displayed.

- How do you grab URL parameters from within a component using React Router?
    To grab URL parameters from within a component using React Router, you can access the match object provided by the router. This object contains a params property that holds the parameter values. For example, if you have a route like <Route path="/user/:id">, you can access the id parameter within your component like this: const id = this.props.match.params.id;. This allows you to use the parameter value in your component's logic or UI rendering based on the URL.

- What is context in React? When would you use it?
    In React, context is a mechanism for passing data down the component tree without explicitly passing props at every level. It allows you to create a global data store that components can access, making it useful for sharing state or configuration values such as user authentication, themes, or language preferences throughout an application. You would use context when you have data that many components need access to, reducing the need for prop drilling and simplifying the process of sharing information across components in a more efficient and maintainable way.

- Describe some differences between class-based components and function components in React.
    Class-based components and function components are two approaches to creating React components. Class-based components use ES6 classes and provide features like state and lifecycle methods, while function components are based on JavaScript functions and rely on Hooks to manage state and lifecycle. Function components are generally simpler and more concise, making them the preferred choice for most new code. However, class-based components are still in use, especially in older codebases. The introduction of Hooks in React allows function components to manage state and side effects, reducing the need for class-based components.

- What are some of the problems that hooks were designed to solve?
    1. Reusing Stateful Logic: Prior to Hooks, reusing stateful logic between components required using render props or higher-order components, which could lead to complex and less readable code. Hooks enable the reuse of stateful logic through custom hooks, making it more straightforward and modular.

    2. Complex Component Logic: Class-based components could become large and difficult to manage when handling state, side effects, and lifecycle methods. Hooks allow function components to manage state, side effects, and other complex logic more concisely.

    3. Readability and Separation of Concerns: Class-based components often mixed state, lifecycle, and UI logic within a single component, making it harder to understand and maintain the code. Hooks encourage a more clear separation of concerns and make components easier to read and maintain.

    4. Lifecycle Control: Managing component lifecycle events could be challenging and error-prone in class components. Hooks provide more control over component lifecycle and side effects with useEffect, useContext, and others.

    5. Reducing Boilerplate: Hooks help reduce the boilerplate code in components by eliminating the need for constructor functions and class properties, resulting in more concise and readable code.
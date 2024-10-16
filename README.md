
# Housing Services 🚀

Welcome to the **Housing Services** project! This is a Next.js application utilizing version **14.2.15** with the App Router. In this project, we leverage **json-server** as a lightweight backend to simulate a RESTful API.

## Table of Contents 📚

- [Housing Services 🚀](#housing-services-)
  - [Table of Contents 📚](#table-of-contents-)
  - [Features ✨](#features-)
  - [Installation ⚙️](#installation-️)
  - [Running the Application 🌟](#running-the-application-)
  - [Project Structure 🗂️](#project-structure-️)
  - [Technologies Used 💻](#technologies-used-)
  - [Output 📸](#output-)
  - [Contribution 🤝](#contribution-)
  - [License 📄](#license-)

## Features ✨

- Full-fledged housing services application
- 🌐 Server-side rendering with Next.js
- 💾 RESTful API with json-server
- ⚡ Responsive design with Tailwind CSS
- 🏗️ Utilizes HTML for structure and content
- 🚀 Hot reloading for seamless development experience

## Installation ⚙️

To get started with the Housing Services project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/rezahtms/housing-services
   cd housing-services
   ```

2. Install the required packages:
   ```bash
   npm install
   ```

3. Set up **json-server**:
   You need to create a `db.json` file in the root directory or configure the existing one to hold your data.

4. Configure Tailwind CSS:
   Follow the official Tailwind CSS [installation guide](https://tailwindcss.com/docs/guides/nextjs) to set it up with Next.js.

## Running the Application 🌟

You can run both the frontend and backend simultaneously by executing the following command:

```bash
npm run dev
```

This command will start the Next.js application and the json-server using `concurrently`. You can access the frontend on [http://localhost:3000](http://localhost:3000) and the API on [http://localhost:3001](http://localhost:3001) (default).

## Project Structure 🗂️

Here is a brief overview of the project structure:

```
HOUSING-SERVICES/
│
├── .next/             # Next.js build files
├── node_modules/      # Project dependencies
├── public/            # Static assets
├── src/               # Source files
│   └── app/           # Application files
│       ├── _components/  # Reusable components
│       ├── _constants/   # Constant values
│       ├── _services/    # Service functions
│       ├── _types/       # Type definitions
│       └── fonts/        # Font files
├── error.tsx          # Error handling component
├── globals.css        # Global styles
├── icon.png           # Application icon
├── index.ts           # Main entry point
├── layout.tsx         # Layout component
├── loading.tsx        # Loading component
├── not-found.tsx      # 404 page
├── page.tsx           # Main page component
├── .eslintrc.json     # ESLint configuration
├── .gitignore         # Git ignore file
├── db.json            # json-server database
├── next-env.d.ts      # Next.js environment types
├── next.config.mjs    # Next.js configuration
├── package.json       # Project metadata
├── package-lock.json  # Dependency lock file
├── postcss.config.js   # PostCSS configuration
├── README.md          # Project documentation
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

## Technologies Used 💻

- [Next.js](https://nextjs.org/) - React Framework
- [json-server](https://github.com/typicode/json-server) - Fake REST API
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for styling
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - Markup language for structuring web content
- [concurrently](https://github.com/open-cli-tools/concurrently) - Run multiple commands concurrently

## Output 📸

Here is a preview of the application:

![Housing Services Output](path/to/your/image.png)

## Contribution 🤝

We welcome contributions! To contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add a new feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/YourFeatureName
   ```
5. Open a pull request.

## License 📄

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Thank you for checking out Housing Services! If you have any questions, feel free to open an issue or contact me directly. Happy coding! 🎉

---



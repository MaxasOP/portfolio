# Manas Chauhan — Portfolio

This repository contains a multi-page portfolio built with modern web development tools. It includes both a lightweight serverless handler optimized for deployment on Vercel and a convenient local test server for development.

## Features

- **Multi-page Portfolio**: Showcases projects, skills, about information, and contact details.
- **Serverless Ready**: Easily deploy on Vercel or any serverless platform.
- **Local Development**: Spin up a local web server for development and testing.
- **Responsive Design**: Looks good on all devices.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://classic.yarnpkg.com/en/)

### Installation

```bash
git clone https://github.com/MaxasOP/portfolio.git
cd portfolio
npm install
```

### Running Locally

```bash
npm run dev
```
This will start the local development server. Visit [http://localhost:3000](http://localhost:3000) to view the portfolio in your browser.

### Deployment

This portfolio is optimized for serverless deployment, specifically with [Vercel](https://vercel.com/):

1. Commit/push your changes to the `main` branch (or your preferred branch).
2. Connect your repository to Vercel and follow the deployment steps.
3. Updates will be automatically deployed with every push.

## Project Structure

```
/
├─ public/         # Static assets and images
├─ src/            # Main application source code
│  ├─ components/  # Reusable React components
│  ├─ pages/       # Pages/routes
│  └─ ...          
├─ api/            # Serverless functions (for Vercel)
├─ README.md
├─ package.json
└─ ... 
```

## Customization

You can customize the content by editing files in the `src/pages` and `src/components` directories. Add your own projects, skills, and personal information.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests for improvements or ideas.

## License

This project is licensed under the MIT License.

---

Made with ❤️ by Manas Chauhan

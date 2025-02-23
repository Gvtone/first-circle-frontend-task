# First Circle Frontend Task

The objective of this task is to create a simple utility that will call an API 15 times. The information from those calls should be displayed in the page via a table. The application utilizes the API Ninja to retrieve random user information. The information that have been fetched can be downloaded in a JSON or CSV format. There is also an option to print it in the console.

## Environment Variables

For security reasons, a .env file is needed to ensure correct output of the utility. This will be sent in the email.

# Setting Up

1. This is a React application which uses the Vite for faster development. Due to this, Node.js is required to run this project. If you haven't install Node.js yet, you can install it [here](https://nodejs.org/en).
2. After installation, please clone this repository into your local machine.
3. Libraries needs to be installed to run the app. You can do this by running:
   ```
   npm install
   ```
4. After installing the libraries, you can now run the application by running this command:
   ```
   npm run dev
   ```
5. Click on the link provided and you may now test the application.

> **Note**
> Please make sure that the .env is set properly before running so that the application will run correctly.

## Usage

The application have four interactable buttons. The first one is for fetching for a new set of data; when visiting the page, it will fetch data on it's own and display it in the table. The second button is used to print the information gathered into the console. The third and fourth button are used for downloading the information into JSON and CSV repectively.

## These are the dependencies required for this project

# 1.redux-toolkit for data flow control
npm i @reduxjs/toolkit
npm i react-redux

# 2.react-router-dom for creating single page multi page component application
npm i react-router-dom

# 3.appwrite for managing backend database
npm i appwrite

# 4.tinymce for a rich-text editor that allows users to create formatted content within a user-friendly interface.
npm i @tinymce/tinymce-react

# 5.html-react-parser for convertig standard HTML elements into React elements.
npm i html-react-parser

# 6.react-hook-form : React Hook Form is one such library that helps to manage complex forms.
npm i react-hook-form




### .env file is used to take environment variables. which consists of secret key to be not exposed
1.  .env file is always declared at the root of the project.
2.  This file is not to be publically exposed as it contains sensitive information.
3.  .env file should be added to .gitignore
#     Note: .env file in most cases is always loaded just once , 
#     so if we do some changes in .env file we have to restart our project again to load the changes
5.  This file is define inside the process

    #  For project using create-react-app
6.  To define environment variable  
    the name of environment variable should always start with REACT_APP_ , eg: REACT_APP_APPWRITE_URL
7. way to access .env file : process.env.REACT_APP_APPWRITE_URL

    #  For project using vite
8.  To define environment variable  
    the name of environment variable should always start with VITE_ , eg: VITE_APPWRITE_URL
9.  import.meta.env.VITE_APPWRITE_URL

    value can be saved as 'test environment' as well as test-environment both

    # Note: for project created on different libraries ways to declare and use the env variable is also differemt

### .env.sample also contains the same information as .env but not the values
// SlideData.js
const slidesData = [
    {
      title: 'Table of Contents',
      content: `
        1. Summary
        2. Introduction
        3. Purpose, Goals, and Problem Statement
        4. Method and Material
        5. Results
          5.1 The Business
          5.2 Tasks/Assignments
        6. Analysis and Discussion
          6.1 Own Reflections
          6.2 Results Linked to Questions
        7. Conclusion
        8. Source List
      `,
    },
    {
      title: '1. Summary',
      content: `
        During LIA period, I worked on a full-stack web application using several modern technologies. 
        The project utilized React.js for the front end, and Firebase, Firestore, and FireAuth for the back end, 
        providing essential functionalities like real-time data management and user authentication. 
        
        I restructured 17 components from traditional CSS styling to Tailwind CSS, which allowed for more maintainable 
        and scalable styling. I also created a context to manage the settings for light and dark modes and implemented 
        an .env file to securely handle API keys. On the back end, I configured index.js in the Firebase functions folder 
        to handle form submissions, storing form data in Firestore and dispatching emails using EmailJS.
      `,
    },
    {
      title: '2. Introduction',
      content: `
        The LIA program is a critical component of my full-stack development education, where theoretical learning is supplemented with real-world applications. 

        During my LIA, I worked on a comprehensive web application requiring both front-end and back-end skills. 

        This project strengthened my understanding of full-stack technologies, including React.js, Firebase, Tailwind CSS, and EmailJS, while preparing me for real-world teamwork and collaboration.
      `,
    },
    {
      title: '3. Purpose, Goals, and Problem Statement',
      content: `
        Purpose: 
        To gain practical experience in full-stack development by working on a dynamic and responsive web application.
  
        Goals:
        - Restructure 17 components from traditional CSS to Tailwind CSS.
        - Create a context for light/dark modes for personalized user experiences.
        - Implement secure API management using a .env file.
        - Manage back-end form submissions using Firebase Functions and EmailJS.
  
        Problem Statement: 
        To streamline the application’s styling, improve user experience with responsive design, 
        and ensure secure, efficient back-end operations.
      `,
    },
    {
      title: '4. Method and Material',
      content: `
        Technologies used:
        - React.js for front-end development.
        - Tailwind CSS for restructuring 17 components.
        - Firebase and Firestore for real-time data storage and handling.
        - Firebase Functions for managing form submissions.
        - EmailJS for automating email notifications.
        - Git and GitHub for version control.
        - Slack for communication and GitHub Project Backlog for task management.
  
        This combination of tools allowed for a seamless development process, with efficient communication and collaboration 
        in a remote team environment.
      `,
    },
    {
      title: '5. Results',
      content: `
        5.1 The Business:
        The company specializes in web application development, focusing on scalable solutions for businesses. My role involved 
        improving design consistency, functionality, and user experience, aligned with the company's focus on creating 
        user-friendly applications.
  
        5.2 Tasks/Assignments:
        - Restructured 17 components using Tailwind CSS for better code readability and maintainability.
        - Created a global context for light and dark mode, enhancing user experience.
        - Configured Firebase Functions for handling form submissions and sending automated emails with EmailJS.
      `,
    },
    {
      title: '6. Analysis and Discussion',
      content: `
        6.1 Own Reflections:
        - Gained experience in structuring components using Tailwind CSS, which simplified styling and reduced code redundancy.
        - Implemented global state management for light/dark mode, allowing for seamless switching between themes.
        - Worked with Firebase Functions and Firestore to handle real-time data efficiently, improving my understanding of 
        serverless architectures.
  
        6.2 Results Linked to Questions:
        - Restructuring components with Tailwind CSS addressed the problem of maintaining consistent and scalable styles.
        - Automating email notifications with EmailJS improved communication between users and administrators, enhancing 
        the overall workflow.
      `,
    },
    {
      title: '7. Conclusion',
      content: `
        This LIA provided valuable hands-on experience with full-stack development, particularly in building secure, scalable, and maintainable web applications. 
        
        Working with a remote team improved my collaboration and version control skills, preparing me for future development projects in real-world environments.
      `,
    },
    {
      title: '8. Source List',
      content: `
        - Firebase Documentation: https://firebase.google.com/docs
        - Tailwind CSS Documentation: https://tailwindcss.com/docs
        - React.js Documentation: https://reactjs.org/docs/getting-started.html  
        - EmailJS Documentation: https://www.emailjs.com/docs/
        - Google Maps API Documentation: https://developers.google.com/maps/documentation  
        - GitHub Documentation: https://docs.github.com/en
        - Git SSH Documentation: https://www.hatica.io/blog/how-to-configure-github-ssh-keys/
      `,
    },
  ];
  
  export default slidesData;
  
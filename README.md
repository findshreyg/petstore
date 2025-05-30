# 🐾 PetStore – Full Stack Web App

PetStore is a responsive full-stack e-commerce application for managing pet-related products and services. It is built using **React.js**, styled with **Figma**, and powered by **AWS Amplify** for backend services like authentication, GraphQL APIs, and cloud hosting.

---

## 🚀 Features

- 🛒 Browse and purchase pet supplies
- 🔐 User authentication with AWS Cognito
- 📦 Manage product inventory via a connected API
- 📊 Admin interface to manage product listings
- ☁️ Hosted on AWS using Amplify Studio
- 💅 UI design integrated from Figma

---

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Backend**: AWS Amplify (GraphQL, Cognito)
- **Design**: Figma
- **Hosting**: AWS Amplify
- **State Management**: React Context / Local Storage

---

## 📁 Project Structure

```
PetStore-main/
├── petstore/
│   ├── amplify/                   # AWS Amplify backend configuration
│   ├── public/                    # Static assets
│   ├── src/                       # React source code
│   ├── package.json               # Project dependencies
│   └── README.md                  # App-specific documentation
└── README.md                      # Root project overview (this file)
```

---

## 🧑‍💻 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/PetStore.git
cd PetStore-main/petstore
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Amplify

Make sure you have the [AWS Amplify CLI](https://docs.amplify.aws/cli/start/install/) installed:

```bash
amplify pull
```

This will sync the backend environment from the cloud.

### 4. Run the App

```bash
npm start
```

---

## 🌐 Deployment (via AWS Amplify)

1. Commit your changes to GitHub.
2. Connect the repo to [AWS Amplify Hosting](https://console.aws.amazon.com/amplify/).
3. Configure the build settings.
4. Deploy — your app will be hosted at a custom Amplify domain.

[Live Link](http://petstore-frontend.s3-website.us-east-2.amazonaws.com/)   
---

## 🤝 Contributing

Contributions are welcome! If you'd like to add features, improve UI, or report bugs, feel free to open an issue or pull request.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 👨‍🎨 Acknowledgments

- [AWS Amplify Studio](https://aws.amazon.com/amplify/studio/)
- [React.js](https://reactjs.org/)
- [Figma](https://www.figma.com/)

---

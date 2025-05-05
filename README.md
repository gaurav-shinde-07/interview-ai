# IntervueAI - AI-Powered Interview Practice Platform

[![Next.js](https://img.shields.io/badge/Next.js-15.3.1-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Firebase](https://img.shields.io/badge/Firebase-11.x-orange)](https://firebase.google.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

IntervueAI is a cutting-edge platform that helps users practice job interviews through AI-powered conversations and receive detailed feedback on their performance.

## 🚀 Features

- **AI-Powered Interviews**: Real-time voice conversations with an AI interviewer
- **Dynamic Question Generation**: Custom interview questions based on role and tech stack
- **Instant Feedback**: Detailed performance analysis and scoring
- **Multiple Interview Types**: Technical, Behavioral, and Mixed interviews
- **Progress Tracking**: Track interview history and improvements
- **Tech Stack Recognition**: Support for various programming languages and frameworks

## 🛠️ Tech Stack

- **Frontend**: Next.js 15.3.1, React 19, TypeScript
- **Styling**: Tailwind CSS, CSS Variables
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **AI Services**: 
  - VAPI AI for voice interactions
  - Google AI for question generation
  - OpenAI GPT-4 for interview assessments

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Firebase account
- VAPI API key
- Google AI API credentials

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/gaurav-shinde-07/intervue-ai.git
cd intervue-ai
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
```env
NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_token
NEXT_PUBLIC_VAPI_WORKFLOW_ID=your_workflow_id
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_client_email
FIREBASE_PRIVATE_KEY=your_private_key
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```


## 🔐 Authentication

The platform uses Firebase Authentication with email/password sign-in. Users must be authenticated to:
- Take practice interviews
- View interview history
- Get interview feedback

## 🎙️ Interview Process

1. **Interview Generation**:
   - Users select role, level, and tech stack
   - AI generates relevant interview questions

2. **Interview Session**:
   - Real-time voice conversation with AI interviewer
   - Natural language processing for response analysis

3. **Feedback Generation**:
   - Detailed scoring in multiple categories
   - Strengths and areas for improvement
   - Overall performance assessment

## 🎯 Scoring Categories

- Communication Skills
- Technical Knowledge
- Problem-Solving
- Cultural & Role Fit
- Confidence & Clarity

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Gaurav Shinde - Initial work - [GitHub Profile](https://github.com/gaurav-shinde-07)

## 🙏 Acknowledgments

- [VAPI AI](https://vapi.ai) for voice interaction capabilities
- [Google AI](https://ai.google.dev/) for question generation
- [Firebase](https://firebase.google.com) for backend services
- [Vercel](https://vercel.com) for hosting and deployment

## 📬 Contact

For questions and support, please email gauravmshinde017@gmail.com or create an issue in the GitHub repository.

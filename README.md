# 🧮 Calculator - React & Electron Desktop Application

A modern, feature-rich calculator application built with React and Electron, offering both web and desktop functionality with a clean, intuitive user interface.

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![Electron](https://img.shields.io/badge/Electron-Latest-47848F?style=flat&logo=electron&logoColor=white)](https://electronjs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-16%2B-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Screenshots](#screenshots)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Development](#development)
- [Building](#building)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🔍 Overview

This calculator application combines the power of React's component-based architecture with Electron's cross-platform capabilities to deliver a seamless desktop calculator experience. Built with modern web technologies, it provides all essential mathematical operations with a responsive and user-friendly interface.

### Key Highlights

- **Cross-Platform**: Runs on Windows, macOS, and Linux
- **Modern UI**: Clean, responsive design with intuitive controls
- **Fast Performance**: Optimized React components for smooth interactions
- **Desktop Integration**: Native desktop application experience
- **Extensible**: Modular component structure for easy feature additions

## ✨ Features

### Core Functionality
- ➕ **Basic Operations**: Addition, subtraction, multiplication, division
- 🔢 **Decimal Support**: Handle floating-point calculations
- 🧹 **Clear Functions**: Clear current entry or all calculations
- ⌨️ **Keyboard Support**: Full keyboard input support
- 📱 **Responsive Design**: Adapts to different screen sizes

### Advanced Features
- 🎯 **Error Handling**: Graceful handling of invalid operations
- 🔄 **Memory Functions**: Store and recall calculations
- 🎨 **Modern UI**: Sleek button design and animations
- ⚡ **Fast Calculations**: Instant result computation
- 🖥️ **Desktop Experience**: Native window controls and menus

## 📸 Screenshots

<!-- Add screenshots here when available -->
*Screenshots coming soon...*

## 🛠️ Technology Stack

### Frontend
- **React 18.2.0** - Component-based UI library
- **CSS3** - Modern styling and animations
- **JavaScript/JSX** - Application logic and components

### Desktop Framework
- **Electron** - Cross-platform desktop application framework
- **Node.js** - Runtime environment

### Development Tools
- **React Scripts** - Build toolchain and development server
- **Jest** - Testing framework
- **React Testing Library** - Component testing utilities

## 📋 Prerequisites

Before running this application, ensure you have the following installed:

- **Node.js** (version 16.0.0 or higher)
- **npm** (version 8.0.0 or higher) or **yarn**
- **Git** (for cloning the repository)

### System Requirements
- **Windows**: Windows 10 or later
- **macOS**: macOS 10.14 or later
- **Linux**: Ubuntu 18.04 or equivalent

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/aliammari1/calculator.git
cd calculator
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Development Setup
```bash
# Start the React development server
npm start

# In a separate terminal, start the Electron app
npm run electron:start
```

## 📖 Usage

### Running the Application

#### Web Version
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

#### Desktop Version
```bash
npm run electron:start
```
This will launch the Electron desktop application.

### Basic Operations

1. **Number Input**: Click number buttons or use keyboard
2. **Operations**: Use operation buttons (+, -, ×, ÷) or keyboard shortcuts
3. **Calculate**: Press '=' button or Enter key
4. **Clear**: Use 'C' button to clear current entry, 'AC' for all clear

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `0-9` | Number input |
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `Enter` or `=` | Calculate |
| `Escape` or `C` | Clear |
| `.` | Decimal point |

## 📁 Project Structure

```
calculator/
├── public/                 # Static assets
├── src/                   # Source code
│   ├── components/        # React components
│   │   ├── button/       # Button component
│   │   └── screen/       # Display screen component
│   ├── App.jsx           # Main application component
│   ├── App.css           # Application styles
│   └── index.js          # Application entry point
├── electron.js           # Electron main process
├── package.json          # Project dependencies and scripts
└── README.md            # Project documentation
```

### Component Architecture

- **App.jsx**: Main calculator component and state management
- **Button Component**: Reusable button with different types and actions
- **Screen Component**: Display component for calculations and results

## 🔧 Development

### Starting Development
```bash
# Install dependencies
npm install

# Start React development server
npm start

# In another terminal, start Electron
npm run electron:start
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start React development server |
| `npm run build` | Build production version |
| `npm test` | Run test suite |
| `npm run electron:start` | Start Electron app |
| `npm run eject` | Eject from Create React App |

### Code Style

- Follow React functional component patterns
- Use modern JavaScript (ES6+) features
- Maintain consistent naming conventions
- Comment complex calculations and logic

## 🏗️ Building

### Build for Production
```bash
npm run build
```

### Building Electron Distributables
```bash
# Build React app first
npm run build

# Then build Electron app (requires additional configuration)
# Add electron-builder or similar for packaging
```

## 🧪 Testing

### Running Tests
```bash
npm test
```

### Test Coverage
```bash
npm test -- --coverage
```

### Testing Strategy
- Unit tests for calculation functions
- Component tests for UI interactions
- Integration tests for calculator workflows

## 🤝 Contributing

We welcome contributions to improve the calculator! Here's how you can help:

### Getting Started
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests for new functionality
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Contribution Guidelines
- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

### Areas for Contribution
- 🧮 Advanced mathematical functions
- 🎨 UI/UX improvements
- ⚡ Performance optimizations
- 🐛 Bug fixes and stability improvements
- 📚 Documentation enhancements

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 aliammari1

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 📞 Contact

**Ali Ammari** - [aliammari1](https://github.com/aliammari1)

- 🐙 **GitHub**: [https://github.com/aliammari1](https://github.com/aliammari1)
- 🔗 **Project Link**: [https://github.com/aliammari1/calculator](https://github.com/aliammari1/calculator)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - For the amazing UI library
- [Electron](https://electronjs.org/) - For making desktop apps with web technologies possible
- [Create React App](https://create-react-app.dev/) - For the excellent boilerplate
- The open-source community for inspiration and resources

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/aliammari1">Ali Ammari</a></p>
  <p>⭐ Star this repository if you found it helpful!</p>
</div>
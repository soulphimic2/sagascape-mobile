# SagaScape Mobile

## Overview

SagaScape Mobile is a lightweight mobile reader and exploration tool for Old Norse sagas and related texts. The app presents a curated collection of saga passages, supports a clean reading experience, and includes navigation for jumping between sections and related materials. The project was created to strengthen my skills as a software engineer in building cross-platform mobile applications, practicing React Native development patterns, and integrating navigation and state management in a production-like codebase.

Primary goals

- Build a responsive, accessible mobile UI for reading long-form text.
- Learn and apply React Native + Expo tooling, TypeScript, and React Navigation.
- Structure the project so that features and content can be extended easily.

What the app does

- Displays a list of saga titles and passages.
- Let's the user open a reader screen for a chosen passage.
- Provides navigation back to the list and between related passages.
- Preserves a minimal and readable typographic layout optimized for long reading sessions.

How to use the app

1. Open the app on your device or simulator.
2. From the Home screen, browse the list of available sagas or use any provided search or filter controls.
3. Tap a saga or passage to open the Reader screen.
4. Use the in-reader controls (back button, navigation menu) to move between passages or return to the list.

Demo

- A short demonstration and code walkthrough is available here:  
    [Software Demo Video](http://youtube.link.goes.here/)

## Development Environment

Tools used

- Expo CLI — project bootstrapping, development server, and build tooling.
- Node.js — a runtime for development tools and package management.
- Yarn or npm — package manager.
- Visual Studio Code — primary code editor.
- Git — version control.

Languages and libraries

- TypeScript — static typing for improved developer experience and fewer runtime errors.
- React Native (via Expo) — cross-platform mobile UI library.
- React Navigation — in-app navigation (stack navigator for screens).
- Expo managed workflow libraries (e.g., expo-constants, expo-file-system) as needed for platform features.
- Optional utilities (examples you may be using):
    - @react-native-async-storage/async-storage for lightweight persistence.
    - axios or fetch for network requests.
    - date-fns or similar for date formatting.

Project structure (example)

- App.tsx — application entry and navigation setup.
- /src/components — reusable UI components (buttons, headers, text components).
- /src/screens — screen components (HomeScreen, ReaderScreen, Settings).
- /src/assets — static assets, fonts, images, and sample text content.
- /src/navigation — navigation configuration and route types.

Notes

- The project uses Expo’s default entry point. Make sure App.tsx is at the project root so Expo can resolve it correctly.
- Start the dev server with:
    - npm run start
    - or npx expo start -c (clear Metro cache)

## Useful Websites

Resources that were helpful during development:

- Expo documentation — [https://docs.expo.dev](https://docs.expo.dev/)
- React Native docs — [https://reactnative.dev](https://reactnative.dev/)
- React Navigation docs — [https://reactnavigation.org](https://reactnavigation.org/)
- TypeScript with React Native — [https://www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/)
- Stack Overflow — [https://stackoverflow.com](https://stackoverflow.com/)

(Replace or add any specific guides, tutorials, or articles that helped you implement particular features.)

## Future Work

Planned improvements and features to add or refine:

- Improve offline support — cache passages and assets for fully offline reading.
- Add search and advanced filtering — full-text search across available sagas and passages.
- Better content management — a small CMS or JSON schema for adding new texts without code changes.
- Reading features — bookmarks, adjustable font size, dark mode, and persistence of reading position.
- Accessibility improvements — better semantic labeling, dynamic font scaling, and screen reader testing.
- Tests and CI — add unit and integration tests, plus an automated CI pipeline for builds.

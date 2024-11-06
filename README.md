# hello-there-color App

A simple, interactive color-changing app with custom features and components.

## Features

- **Color Change on Tap**  
  The app changes color with each tap, powered by a custom hook. This hook includes:
    - Random color generation.
    - Ensuring background and text colors are distinct (using **Euclidean distance**).
    - Color history tracking and more.

- **Components and Custom Hooks**  
  The app uses various components (e.g., Modal, Switch) and custom hooks:
    - A color generation hook.
    - A caching hook for resources like fonts.
    - Configurable theming for consistent styling.

- **Header**  
  The header includes icons for settings and color history access.

- **Settings**  
  The settings section provides options such as:
    - Enabling/disabling haptic feedback on color change.
    - Additional customization features.

- **Color History**  
  Track all generated colors in a color history:
    - Click on a past color to reapply it.
    - Delete individual colors or clear the entire history.

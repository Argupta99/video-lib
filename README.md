# Video Timeline Explorer

A responsive React application for interactive video exploration with timeline controls and visual markers. Built with TypeScript and styled using Tailwind CSS.

## Features

### Video Management
- Upload and preview local video files
- Sample video option for quick testing
- Responsive video player with standard controls

### Interactive Timeline
- Horizontal timeline showing video duration
- Time markers every 10 seconds
- Draggable playhead synced with video playback
- Hover preview showing timestamp
- Visual indicators for:
  - Key moments (blue markers)
  - Silent segments (transparent)
  - Highlight segments (yellow markers)

### Responsive Design
- Mobile-friendly layout
- Fluid timeline that scales with screen width
- Touch-friendly controls for mobile devices

## Technology Stack

- **React** - UI components and state management
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first styling
- **Vite** - Build tool and dev server
- **ESLint** - Code linting and style enforcement

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd video-libvideo-lib/
├── src/
│   ├── components/    # React components
│   ├── utils/        # Helper functions
│   ├── App.tsx       # Main application component
│   └── main.tsx      # Application entry point
└── public/           # Static assets

Technical Challenges & Solutions
Playhead Synchronization
Implemented precise time calculation based on timeline width
Used React refs to maintain direct video element control
Added event listeners for time updates to keep UI in sync


Mobile Responsiveness
Used Tailwind's responsive classes for adaptive layouts
Implemented touch events for mobile interaction
Ensured timeline remains usable on smaller screens


Timeline Preview: 
Added hover state management for timestamp display
Calculated preview position based on mouse coordinates
Handled edge cases for timeline boundaries
Trade-offs & Decisions

Simple Animations

Chose basic transitions over complex animations
Focused on functionality and performance
Met project deadline without feature compromise



Component Architecture

Split timeline into smaller, focused components
Improved maintainability and testing
Some prop drilling in favor of quick implementation

Styling Approach

Used Tailwind for rapid development
Minimal custom CSS
Consistent look across components

# Interactive Data Pipeline Visualization Components

This directory contains a set of components designed to create an interactive data pipeline visualization with animated hover effects and lightning/thunder animations between stages.

## Components

### PipelineContainer

Main container component that orchestrates the entire pipeline visualization.

**Props:**
- `stages`: Array of pipeline stages with title, description, and optional icon
- `className`: Optional CSS class to apply to the container
- `enableSounds`: Boolean to enable/disable sound effects (default: true)

**Usage:**
```tsx
import PipelineContainer from "../components/PipelineContainer";

// Define the pipeline stages
const pipelineStages = [
  {
    title: 'Raw Data',
    description: 'Collection of data from various sources',
    icon: null // Will use default icon
  },
  {
    title: 'Transform',
    description: 'Clean and prepare data for analysis',
    icon: null
  },
  // Add more stages as needed
];

// Use in your component
<PipelineContainer stages={pipelineStages} />
```

### PipelineNode

Individual node component representing a stage in the data pipeline.

**Props:**
- `title`: Title of the pipeline stage
- `description`: Description of what happens in this stage
- `icon`: React node representing the icon (SVG recommended)
- `index`: Position index in the pipeline
- `onHover`: Callback function when node is hovered
- `className`: Optional CSS class

### ThunderLine

Animated line connecting pipeline nodes with lightning/thunder effect.

**Props:**
- `isActive`: Boolean to activate the lightning animation
- `direction`: 'left-to-right' or 'right-to-left'
- `className`: Optional CSS class

### Sound

Utility component for playing sound effects.

**Props:**
- `src`: Path to sound file
- `play`: Boolean to trigger sound playback
- `volume`: Number between 0 and 1 (default: 1)
- `loop`: Boolean to loop the sound (default: false)

**Also exports `useSound` hook:**
```tsx
import { useSound } from './Sound';

// In your component
const playSound = useSound('/sounds/effect.mp3', { volume: 0.5 });

// Call to play the sound
playSound();
```

## Features

1. **Interactive Hover Effects:**
   - Nodes expand and glow when hovered
   - Animation sequence plays to draw attention
   
2. **Lightning/Thunder Animation:**
   - Dynamic SVG path with glow effect
   - Shimmer effect follows the path
   - Randomized zig-zag patterns for variability
   
3. **Sound Effects (Optional):**
   - Hover sound when node is activated
   - Electric/thunder sound for the line animation
   - Toggle sound on/off functionality
   
4. **Responsive Design:**
   - Works on both desktop and mobile layouts
   - Adjusts from horizontal to vertical flow on small screens
   
5. **Customizable:**
   - Easily themed via Tailwind classes
   - Custom icons for each stage
   - Configurable animations and effects

## Implementation Details

The pipeline visualization uses:
- Framer Motion for animations
- React hooks for state management
- Tailwind CSS for styling
- SVG for dynamic lightning effects
- Web Audio API (via hooks) for sound effects

## Performance Considerations

- SVG animations are handled efficiently with Framer Motion
- Sound effects load on demand and are lazy-initialized
- Optimized for good performance on mobile devices

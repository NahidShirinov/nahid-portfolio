// Modules

declare module '*.jpg' {
  const value: string;
  export default value;
}
declare module '*.webp' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.webm' {
  const value: string;
  export default value;
}

declare module '*.mp4' {
  const value: string;
  export default value;
}

// Stylesheets (side-effect imports in _app.tsx)
declare module '*.css';
declare module '*.scss';
declare module '*.sass';

// CSS Modules
declare module '*.module.css' {
  const classes: {readonly [key: string]: string};
  export default classes;
}
declare module '*.module.scss' {
  const classes: {readonly [key: string]: string};
  export default classes;
}

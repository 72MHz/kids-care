# Kids Care Angular Application

A professional Angular application for a premium kids care and early learning center. Built with Angular 17, Bootstrap 5, and best practices for scalability and maintainability.

## Project Structure

```
src/
├── app/
│   ├── core/                  # Core services and models
│   │   ├── models/
│   │   │   └── index.ts       # Data models
│   │   └── services/
│   │       └── data.service.ts
│   ├── features/              # Feature components
│   │   ├── hero/
│   │   ├── services/
│   │   ├── why-choose/
│   │   ├── gallery/
│   │   └── contact/
│   ├── pages/                 # Page components
│   │   └── home/
│   ├── shared/                # Shared components
│   │   ├── navbar/
│   │   └── footer/
│   ├── app.component.ts       # Root component
│   ├── app.config.ts          # App configuration
│   └── app.routes.ts          # Routing configuration
├── assets/                    # Static assets
├── styles.scss                # Global styles
├── main.ts                    # App bootstrap
├── index.html                 # HTML entry point
└── polyfills.ts              # Polyfills

```

## Installation

```bash
cd angular
npm install
```

## Development Server

Run the development server:

```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Build for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Features

- **Responsive Design**: Mobile-first approach with Bootstrap 5
- **Component Architecture**: Reusable, standalone components
- **Reactive Forms**: Form validation with Angular Reactive Forms
- **RxJS**: Observable-based data management
- **Service Layer**: Centralized data management through services
- **Professional Styling**: SCSS with custom themes and animations
- **Accessibility**: ARIA labels and semantic HTML
- **Bootstrap Icons**: 1700+ icons integrated

## Technology Stack

- **Angular 17** - Latest Angular framework
- **TypeScript 5.2** - Strict type checking
- **Bootstrap 5.3** - Responsive CSS framework
- **SCSS** - Advanced styling
- **RxJS 7.8** - Reactive programming
- **Angular Forms** - Form handling and validation

## Components Overview

### Shared Components
- **NavbarComponent**: Navigation bar with responsive menu
- **FooterComponent**: Footer with links and social icons

### Feature Components
- **HeroComponent**: Hero section with CTAs
- **ServicesComponent**: Services showcase with cards
- **WhyChooseComponent**: Benefits section
- **GalleryComponent**: Image gallery with hover effects
- **ContactComponent**: Contact form with validation

### Services
- **DataService**: Centralized data management for services, gallery, and contact info

## Styling

All components use SCSS with the following features:
- CSS custom properties (variables)
- Gradient backgrounds
- Smooth animations and transitions
- Mobile-responsive design
- Hover effects and interactions

## Form Validation

The contact form includes:
- Required field validation
- Email format validation
- Minimum length validation
- Visual error feedback
- Reactive form builder

## Deployment

To deploy to production:

1. Build the project: `npm run build`
2. Deploy the `dist/kids-care-angular` folder to your hosting provider
3. Configure your web server for SPA routing

### Popular Hosting Options
- **Netlify**: Drag and drop deployment
- **Firebase Hosting**: Easy setup with Angular
- **GitHub Pages**: Free hosting for static sites
- **Vercel**: Optimized for Angular apps

## Future Enhancements

- [ ] Admin dashboard for managing content
- [ ] User authentication and profiles
- [ ] Enrollment system
- [ ] Payment integration
- [ ] Blog/News section
- [ ] Testimonials section
- [ ] Class schedule management
- [ ] Parent portal

## License

MIT

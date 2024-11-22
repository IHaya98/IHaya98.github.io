# Portfolio & Tech Blog

A modern, monochromatic portfolio and tech blog built with Next.js 13, Tailwind CSS, and shadcn/ui.

## 🚀 Features

- **Portfolio Showcase**: Clean, professional display of projects and skills
- **Tech Blog**: Integrated blog system for sharing technical insights
- **Responsive Design**: Fully responsive layout for all devices
- **Dark Mode**: Built-in dark mode support
- **Performance Optimized**: Built with Next.js for optimal performance
- **Component Library**: Utilizing shadcn/ui for consistent, beautiful UI components

## 🛠 Tech Stack

- **Framework**: Next.js 13
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: GitHub Pages
- **Development Environment**: VSCode + Devcontainer

## 📦 Getting Started

### Prerequisites

- Docker Desktop (for devcontainer)
- VSCode with Remote - Containers extension

### Development

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   ```

2. Open in VSCode with Devcontainer:

   - Open the project in VSCode
   - When prompted, click "Reopen in Container"
   - Wait for the container to build and initialize

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

### Deployment

The project is automatically deployed to GitHub Pages when pushing to the main branch.

To enable deployment:

1. Go to repository Settings → Pages
2. Set source to "GitHub Actions"
3. Enable "Read and write permissions" in Actions → General

## 🗂 Project Structure

```
├── .devcontainer/        # Development container configuration
├── .github/workflows/    # GitHub Actions workflows
├── app/                  # Next.js app directory
├── components/
│   ├── ui/              # shadcn/ui components
│   └── ...              # Custom components
├── lib/                 # Utility functions
├── public/              # Static assets
└── styles/              # Global styles
```

## 📝 Adding Blog Posts

Blog posts can be added in the `app/blog` directory using MDX format.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

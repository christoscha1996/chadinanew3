 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a//dev/null b/README.md
index 0000000000000000000000000000000000000000..fdf0a779ba5d845dfb6ba4995a6dec75e97bd853 100644
--- a//dev/null
+++ b/README.md
@@ -0,0 +1,56 @@
+# Chadina
+
+This project is a simple React app powered by Tailwind CSS.
+
+## Prerequisites
+
+- [Node.js](https://nodejs.org/) 18 or later
+- npm (comes with Node.js)
+
+## Installation
+
+1. Install the dependencies:
+   ```bash
+   npm install
+   ```
+
+## Running the development server
+
+Start the local server with:
+
+```bash
+npm start
+```
+
+This runs `react-scripts start` and serves the app at `http://localhost:3000`.
+
+## Building for production
+
+Create an optimized build with:
+
+```bash
+npm run build
+```
+
+The output appears in the `build` directory and can be deployed to any static host.
+
+## Deployment on Vercel
+
+1. Push the repository to GitHub or another git provider.
+2. Sign in to [Vercel](https://vercel.com/) and import the project.
+3. In the project settings, set the **Framework Preset** to **Create React App**.
+4. If you use environment variables (see below), define them under **Environment Variables**.
+5. Trigger a deployment.
+
+After deployment, Vercel will provide a URL where your site is hosted.
+
+## Environment variables
+
+The app can optionally read configuration from environment variables starting with `REACT_APP_`.
+
+| Variable | Description | Default |
+|----------|-------------|---------|
+| `REACT_APP_CONTRACT_ADDRESS` | Token contract address used in links like the Raydium swap URL. | `CHADINA_CONTRACT_HERE` |
+
+Set these variables in a `.env` file or in your hosting provider's dashboard when deploying.
+
 
EOF
)

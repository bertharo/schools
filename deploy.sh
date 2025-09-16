#!/bin/bash

# OUSD Trends Dashboard Deployment Script

echo "🚀 Deploying OUSD Trends Dashboard..."

# Check if all required files exist
required_files=("index.html" "styles.css" "data.js" "charts.js" "app.js")
for file in "${required_files[@]}"; do
    if [ ! -f "$file" ]; then
        echo "❌ Error: Required file $file not found"
        exit 1
    fi
done

echo "✅ All required files found"

# Create deployment directory
deploy_dir="ousd-dashboard-deploy"
mkdir -p "$deploy_dir"

# Copy files to deployment directory
cp index.html styles.css data.js charts.js app.js README.md "$deploy_dir/"

# Create a simple server file for local testing
cat > "$deploy_dir/server.py" << 'EOL'
#!/usr/bin/env python3
import http.server
import socketserver
import webbrowser
import os

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print(f"🌐 Server running at http://localhost:{PORT}")
        print("📊 OUSD Trends Dashboard is ready!")
        print("Press Ctrl+C to stop the server")
        
        # Open browser automatically
        webbrowser.open(f'http://localhost:{PORT}')
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n👋 Server stopped")
EOL

chmod +x "$deploy_dir/server.py"

echo "📁 Deployment files created in: $deploy_dir"
echo ""
echo "🎯 To run the dashboard:"
echo "   cd $deploy_dir"
echo "   python3 server.py"
echo ""
echo "🌐 Or simply open index.html in your browser"
echo ""
echo "✨ Deployment complete!"

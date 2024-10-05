# Navigate to the React app directory and build it
echo "Building React app..."
cd client || { echo "Client directory not found"; exit 1; }
npm start &

# Navigate to the server directory and start the server
echo "Starting the server..."
cd ../server || { echo "Server directory not found"; exit 1; }
node app.js &


# Keep the terminal open
read -p "Press Enter to exit..."

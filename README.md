# URL Shortener Application

A modern, full-stack URL shortener application built with TypeScript, React, Node.js, Express, and MongoDB.

![URL Shortener Demo](https://via.placeholder.com/800x400?text=URL+Shortener+Demo)

## Features

- 🔗 Create short URLs from long URLs
- 📊 Track click statistics
- 🗑️ Delete unwanted URLs
- 📋 Copy short URLs to clipboard
- 🎨 Modern, responsive UI
- 🔒 Type-safe with TypeScript
- ⚡ Fast and efficient

## Tech Stack

### Frontend
- React with TypeScript
- Vite for fast development
- Tailwind CSS for styling
- Axios for API calls

### Backend
- Node.js with Express
- TypeScript
- MongoDB with Mongoose
- RESTful API architecture

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/url-shortener.git
cd url-shortener
```

2. Install dependencies for both client and server:

```bash
# Install server dependencies
cd server-side
npm install

# Install client dependencies
cd ../client-side/url-shortner-app
npm install
```

3. Create environment files:

For the server, create a `.env` file in the `server-side` directory:
```env
PORT=5001
CONNECTION_STRING=your_mongodb_connection_string
```

4. Start the development servers:

```bash
# Start the backend server
cd server-side
npm run dev

# Start the frontend development server
cd ../client-side/url-shortner-app
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5001

## Project Structure

```
url-shortener/
├── client-side/
│   └── url-shortner-app/
│       ├── src/
│       │   ├── components/
│       │   ├── interface/
│       │   ├── helpers/
│       │   └── assets/
│       └── public/
└── server-side/
    └── src/
        ├── config/
        ├── controllers/
        ├── model/
        └── routes/
```

## API Endpoints

- `POST /api/shortUrl` - Create a new short URL
- `GET /api/shortUrl` - Get all URLs
- `GET /api/shortUrl/:id` - Get a specific URL
- `DELETE /api/shortUrl/:id` - Delete a URL

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to all contributors who have helped shape this project
- Special thanks to the open-source community for the amazing tools and libraries

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/yourusername/url-shortener](https://github.com/yourusername/url-shortener)

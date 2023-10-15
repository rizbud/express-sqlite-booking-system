# Express-SQLite Booking System

Express-SQLite Booking System is a simple project that implements a booking system using Express.js, TypeScript, and SQLite. It allows you to manage events, retrieve event details, create events, retrieve bookings for specific events, and create bookings while preventing race conditions.

## Features

- **Event Management**: Create and retrieve event details.
- **Booking Management**: Create bookings for events and retrieve bookings based on event.
- **Race Condition Prevention**: The booking system includes race condition prevention to ensure data consistency. Concurrent booking requests are handled in a way that prevents overbooking and ensures data integrity.

## Tech Stack

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express.js](https://expressjs.com/)
- [SQLite](https://www.sqlite.org/index.html)

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rizbud/express-sqlite-booking-system.git
   ```

2. Change your current directory to the project directory:

   ```bash
   cd express-sqlite-booking-system
   ```

3. Copy the `.env.example`

   ```bash
   cp .env.example .env
   ```

4. Install the dependencies:

   ```bash
   npm install
   ```

5. Run the project:

   ```bash
   npm run dev
   ```

   The project will be available at http://localhost:3000.

### API Endpoints

For the API endpoints, check out the [API Endpoints](docs/api-endpoints.md) documentation.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

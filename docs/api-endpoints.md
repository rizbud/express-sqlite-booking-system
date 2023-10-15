# API Endpoints

## Table of Contents

1. [Get Events](#get-events)
2. [Get Event By Id](#get-event-by-id)
3. [Create New Event](#create-new-event)
4. [Get Bookings By Event Id](#get-bookings-by-event-id)
5. [Create Booking By Event Id](#create-booking-by-event-id)

<details open>
  <summary><h3>Get Events</h3></summary>

Get a list of events.

- **URL**: `/events`
- **Method**: `GET`
- **Request Body**: `None`
- <details>
    <summary><b>Response Body:</b></summary>

  ```json
  {
    "message": "Events retrieved successfully!",
    "data": [
      {
        "id": 1,
        "name": "Event 1",
        "event_date": "2023-10-30",
        "capacity": 100,
        "available_seats": 100,
        "booking_started_at": "2023-10-01 00:00:00",
        "booking_ended_at": "2023-10-25 23:59:59",
        "created_at": "2023-09-30 00:00:00"
      }
    ]
  }
  ```

  </details>

</details>

<details open>
  <summary><h3>Get Event by Id</h3></summary>

Get an event by id.

- **URL**: `/events/:id`
- **Method**: `GET`
- **Request Body**: `None`
- <details>
      <summary><b>Response Body:</b></summary>

  ```json
  {
    "message": "Event with id 1 retrieved successfully!",
    "data": {
      "id": 1,
      "name": "Event 1",
      "event_date": "2023-10-30",
      "capacity": 100,
      "available_seats": 100,
      "booking_started_at": "2023-10-01 00:00:00",
      "booking_ended_at": "2023-10-25 23:59:59",
      "created_at": "2023-09-30 00:00:00"
    }
  }
  ```

    </details>
  </details>

<details open>
  <summary><h3>Create New Event</h3></summary>

Create a new event.

- **URL**: `/events`
- **Method**: `POST`
- <details>
      <summary><b>Request Body:</b></summary>

  ```json
  {
    "name": "Event 1",
    "event_date": "2023-10-30",
    "capacity": 100,
    "booking_started_at": "2023-10-01 00:00:00",
    "booking_ended_at": "2023-10-25 23:59:59"
  }
  ```

    </details>

- <details>
      <summary><b>Response Body:</b></summary>

  ```json
  {
    "message": "Event created successfully!",
    "data": {
      "id": 1,
      "name": "Event 1",
      "event_date": "2023-10-30",
      "capacity": 100,
      "available_seats": 100,
      "booking_started_at": "2023-10-01 00:00:00",
      "booking_ended_at": "2023-10-25 23:59:59",
      "created_at": "2023-09-30 00:00:00"
    }
  }
  ```

    </details>
  </details>

<details open>
  <summary><h3>Get Bookings by Event Id</h3></summary>

Get a list of bookings for an event.

- **URL**: `/events/:id/booking`
- **Method**: `GET`
- **Request Body**: `None`
- <details>
    <summary><b>Response Body:</b></summary>

  ```json
  {
    "message": "Bookings with event id 1 retrieved successfully!",
    "data": [
      {
        "id": 1,
        "event_id": 1,
        "name": "John Doe",
        "email": "johndoe@mail.com",
        "number_of_seats": 1,
        "created_at": "2023-10-05 00:00:00"
      }
    ]
  }
  ```

  </details>

</details>

<details open>
  <summary><h3>Create Booking by Event Id</h3></summary>

Create a booking for an event.

- **URL**: `/events/:id/booking`
- **Method**: `POST`
- <details>
      <summary><b>Request Body:</b></summary>

  ```json
  {
    "name": "John Doe",
    "email": "johndoe@mail.com",
    "number_of_seats": 1
  }
  ```

    </details>

- <details>
    <summary><b>Response Body:</b></summary>

  ```json
  {
    "message": "Bookings with event id 1 retrieved successfully!",
    "data": {
      "id": 1,
      "event_id": 1,
      "name": "John Doe",
      "email": "johndoe@mail.com",
      "number_of_seats": 1,
      "created_at": "2023-10-05 00:00:00"
    }
  }
  ```

  </details>

</details>

# Docker Control Panel

This is a small Node.js Express application that provides a web-based control panel to manage Docker containers. The app allows you to view running Docker containers, and perform basic Docker operations like viewing logs, stopping, starting, and restarting containers. The application also includes search and sort functionality for easy navigation.

## Features

- **View Containers**: Display a list of running Docker containers with their names, ports, container IDs, and statuses.
- **Search Functionality**: Quickly search for containers by name, port, container ID, or status.
- **Sort Functionality**: Sort the table of containers by any column (Container Name, Port, Container ID, or Status).
- **Basic Docker Operations**: Perform operations such as viewing logs, stopping, starting, and restarting containers.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [Docker](https://www.docker.com/) installed and running on your machine.

## Installation

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/yourusername/docker-control-panel.git
    cd docker-control-panel
    ```

2. Install the required Node.js packages:

    ```bash
    npm install
    ```

3. Start the Express.js application:

    ```bash
    node app.js
    ```

4. Open your web browser and navigate to `http://localhost:3000` to access the Docker Control Panel.
5. Docker
    ```bash
    docker build . -t vilasshetkar/whatsapp-manager
    docker push
    docker run -d -p 3110:3110 --name whatsapp-manager vilasshetkar/whatsapp-manager
    ```

## Usage

### Dashboard

- The main dashboard displays a table of running Docker containers with the following information:
  - **Container Name**
  - **Port(s)**
  - **Container ID**
  - **Status**

- You can perform the following actions on each container:
  - **View Logs**: View the logs of the container.
  - **Stop**: Stop the container.
  - **Start**: Start the container.
  - **Restart**: Restart the container.

### Search and Sort

- Use the search bar at the top of the dashboard to filter containers by name, port, container ID, or status.
- Click on any column header (except "Actions") to sort the containers by that column. The sort order toggles between ascending and descending with each click.

## File Structure

```plaintext
docker-control-panel/
│
├── app.js                # Main Express.js application file
├── views/
│   ├── index.ejs         # EJS template for the dashboard
│   └── logs.ejs          # EJS template for viewing container logs
├── public/
│   └── styles.css        # Optional custom CSS (if needed)
├── package.json          # Project dependencies and scripts
└── README.md             # This README file
```

## API Endpoints

The following API endpoints are available for performing Docker operations:

- `POST /logs`: View logs of a specific container.
- `POST /stop`: Stop a specific container.
- `POST /start`: Start a specific container.
- `POST /restart`: Restart a specific container.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request if you have any improvements or new features to suggest.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Docker](https://www.docker.com/) for providing containerization technology.
- [Node.js](https://nodejs.org/) and [Express.js](https://expressjs.com/) for the web framework.
- [Bootstrap](https://getbootstrap.com/) for the front-end styling.

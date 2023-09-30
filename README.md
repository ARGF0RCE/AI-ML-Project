# Visualization and Analysis of Monthly Peak Power Supply of India and Statewise

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation and Setup](#installation-and-setup)
5. [Usage](#usage)
6. [Data Sources](#data-sources)
7. [Contributing](#contributing)
8. [License](#license)

## Introduction

The aim of this project is to visualize and analyze the monthly peak power supply across India, both at a national and statewise level. The project fetches real-time data from a public API provided by the Central Electricity Authority of India and presents it in an interactive dashboard using D3.js. This dashboard serves as a valuable resource for stakeholders in the energy sector, researchers, and policy-makers to make informed decisions.

## Features

- **Real-time Data Fetching**: The backend fetches the latest available data every month.
- **Interactive Dashboard**: Utilizes D3.js for creating an interactive visualization of the data.
- **Historical Analysis**: Allows users to view trends over different time periods.
- **Statewise Breakdown**: Offers insights into the peak power supply situation across different states.

## Technologies Used

- **Backend**: Node.js with Express
- **Frontend**: HTML, CSS, JavaScript with D3.js for visualization
- **Scheduling**: node-cron for periodic data fetching
- **Data Source**: RESTful API from Central Electricity Authority of India

## Installation and Setup

1. Clone the repository
    ```bash
    git clone https://github.com/ARGF0RCE/AI-ML-Project.git
    ```

2. Navigate to the project directory
    ```bash
    cd your-repository-name
    ```

3. Install the required packages
    ```bash
    npm install
    ```

4. Start the server
    ```bash
    node index.js
    ```

5. The server will start on `http://localhost:3000`. Open it in a web browser to access the dashboard.

## Usage

- **View National Trends**: The dashboard initially displays the all-India trend.
- **Select State**: Use the dropdown menu to select a specific state for more localized data.
- **Time Period**: Choose the time range to analyze historical trends.

## Data Sources

The data for this project is sourced from the Central Electricity Authority of India via their public API.

## Contributing

If you'd like to contribute, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.

## License

MIT License. See the [LICENSE](LICENSE.md) file for more details.
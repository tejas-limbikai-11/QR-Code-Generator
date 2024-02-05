# QR-Code-Generator

## Overview

This Node.js script generates a QR code using the 'qrcode' library and saves it as an image file. The generated QR code contains a link to a YouTube video.

## Prerequisites

Make sure you have Node.js installed on your system. You can download it from [https://nodejs.org/](https://nodejs.org/).

## Installation

1. Clone or download the repository to your local machine.
2. Open a terminal or command prompt and navigate to the project directory.
3. Run the following command to install the required dependencies:

    ```
    npm install
    ```

## Usage

To generate a QR code, run the script using the following command:
    
    node index.js

The generated QR code will be saved as 'qr.png' in the project directory.

## Configuration

You can customize the QR code generation by modifying the parameters passed to the `QRCode.toFile` function in the script:

- `./qr.png`: The first parameter specifies the output file path and name for the generated QR code image.

- `'https://www.youtube.com/watch?v=dQw4w9WgXcQ'`: The second parameter is the data that the QR code represents. In this example, it's a link to a YouTube video. You can change it to any URL you want.

- `{ color: { dark: '#00F', light: '#0000' } }`: The third parameter is an optional configuration object for customizing the colors of the QR code. In this example, the dark color is set to blue (#00F) and the light color is set to black (#0000).

## Error Handling

If an error occurs during the QR code generation process, the script will throw an error and print the error message to the console.

## Acknowledgements

This script utilizes the 'qrcode' library. More information about the library can be found at [https://www.npmjs.com/package/qrcode](https://www.npmjs.com/package/qrcode).



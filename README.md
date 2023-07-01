<h1 align="center">Real-Time Object Detection</h1>
<p>
    <a href="#" target="_blank">
        <img alt="License: Unlicense" src="https://img.shields.io/badge/License-Unlicense-yellow.svg" />
    </a>
</p>

## Introduction

This educational project showcases a real-time object detection application built with [TensorFlow.js](https://www.tensorflow.org/js/models) and the [CocoSSD_model](https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd). By leveraging the power of machine learning, the project enables you to detect objects in real-time using your webcam. The user interface is developed using [React](https://react.dev/), and the build tool used is [Vite](https://vitejs.dev/). This repository contains the source code for the project.

## Prerequisites

Before running this project, make sure you have the following software installed on your system:

- Node.js (v18.14.2 or higher)
- pnpm (v8.2.0 or higher)

**NB**: You also need to have a webcam connected to your device.

## Installation

To get started with the project, you will need to clone this repository and install the dependencies. You can do this by running the following commands in your terminal:

```sh
git clone https://github.com/emvk09/objectdetection-tensorflowjs.git
cd objectdetection-tensorflowjs
pnpm install
```

## Usage

Once you have installed the dependencies, you can run the app locally by running the following command:

```sh
pnpm run dev
```

- This will start the development server and open the application in your default browser.
- Grant camera access permission when prompted by the browser.
- The application will use your webcam to detect objects in real-time. Detected objects will be displayed on the screen with bounding boxes and labels.

## Building

If you want to build the app for production, you can run the following command:

```sh
pnpm run build
```

This will generate a production-ready build of the application in the `dist` directory.

## License

This project is licensed under the Unlicense License. See the LICENSE file for details.

Feel free to customize this README file further, adding any relevant details or explanations to make it more suitable for your project.

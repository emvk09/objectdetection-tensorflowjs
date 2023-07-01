import React, { useState, useEffect, useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import { drawRectangle } from "./DrawingUtilities";
import "./App.css";

const App = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    runCoco();
  }, []);

  async function runCoco() {
    try {
      // this loads the coco ssd model
      const loadedCocoModel = await cocossd.load();

      // setInterval sets up a continuous detection loop. The loaded model is passed to the function which does the detection from webcam
      setInterval(() => {
        processVideoUsingModel(loadedCocoModel);
      }, 10);
    } catch (error) {
      console.log(error);
    }
  }

  const processVideoUsingModel = async (loadedCocoModel) => {
    // check if webcam data is available and video is availabele for processing
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // get the video and its properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video to be displayed based on the actual width and height of the direct video from camera
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas to be displayed based on the actual width and height of the direct video from camera
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // The video feed is passed to the model. The predicted results are returned to resultObjs. It is an array of objects
      const resultObjs = await loadedCocoModel.detect(video);

      // 2D rendering context (the area to be drawn) of the canvas element is taken
      const canvas = canvasRef.current.getContext("2d");

      // pass the predicted object and canvas to the drawRectangle function
      drawRectangle(resultObjs, canvas);
    }
  };

  return (
    <div className="App">
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "2",
        }}
      />
      <Webcam
        ref={webcamRef}
        muted={true} // this mutes the audio feed
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "1",
        }}
      />
    </div>
  );
};

export default App;

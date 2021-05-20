import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import blobs from "blobs"

const options = {
  complexity: 0.3,
  contrast: 0.6,
  guides: true,
  size: 1000,
  color: "hsl(6.13, 73.23%, 49.8%)",
  stroke: 0
};

const Background = ({ svg, fill }) => (
  <div>
    <svg viewBox="0 0 600 600" className="wheel" width="600">
      <defs>
        <radialGradient id="radial-gradient" cx="10%" fx="10%" fr="0%" r="80%">
          <stop offset="20%" stop-color="#5568C3" />
          <stop offset="95%" stop-color="#27336F" />
        </radialGradient>
      </defs>

      {
        // <Lines />
      }
      <g transform="translate(0,0)">
        <animated.path class="blob-gradient" d={svg} />
      </g>
    </svg>
  </div>
);

export default function BlobAnim() {
    const [blob, change] = useState(blobs.editable(options));
  
    console.log(blob.children[0].children[0].attributes.d);
  
    const props3 = useSpring({
      svg: blob.children[0].children[0].attributes.d,
      fill: blob.children[0].children[0].attributes.fill
    });
  
    return (
      <div className="App" onClick={() => change(blobs.editable(options))}>
        <Background svg={props3.svg} fill={props3.fill} />
      </div>
    );
  }
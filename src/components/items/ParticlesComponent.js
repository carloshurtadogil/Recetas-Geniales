import React from "react";
import Particles from "react-particles-js";

const particleOpt = {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 1000
            }
        }
    }
};

const ParticlesComponent = () => {
    return (
        <div 
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "90%",
                height: "100%"
                
            }}
        >
            <Particles params={particleOpt} />
        </div>
    );
};

export default ParticlesComponent;
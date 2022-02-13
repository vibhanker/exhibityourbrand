import React from 'react';

import css from "./LandingPage.css";

import artWork from "../../../assets/artworks/main-page.svg"

function LandingPage(){

    const [purposes] = React.useState(["Business", "Profits", "Reach"]);
    const [currentPurpose, setCurrentPurpose] = React.useState(0);
    const [duration] = React.useState(1);

    React.useEffect(()=>{
        var animated_text = document.querySelector("#animated-text");
        console.log(document);
        animated_text.style.position = "relative";

        var index = 0;

        var set = ()=>{
            setTimeout(()=>{
                animated_text.style.transition = "all 0.5s ease-in";
                animated_text.style.top = "-1.2rem";
                animated_text.style.opacity = "0";
                setTimeout(()=>{
                    animated_text.style.transition = "all 0s";
                    animated_text.style.top = "1.2rem";
                }, 500);
                unset();
            }, duration * 1600)
        };
        var unset = ()=>{
            setTimeout(()=>{

                animated_text.style.transition = "all 0.5s ease-out";
                animated_text.style.top = "0rem";
                animated_text.style.opacity = "1";
                animated_text.innerText = "\'" + purposes[index] + "\'"; 
                index++;
                if(index >= purposes.length) index = 0;
                set();
            }, duration * 1000)
        };

        set();
    }, []);

    const mailUs = ()=>{
        window.location.href = "mailto:vsvactor88@gmail.com?subject=Query For Digtal Marketing";
    }
    const callUs = ()=>{
        window.location.href = "tel:+91-9997155850";
    }

    return     <>
        <div className="head">
            <div className="name">
                <span>ExhibitYour</span>                
                <span>Brand.com</span>                
            </div>
            <div className="nav">
                <span>Home</span>                
                <span>About</span>              
                <span className="btn">Call</span>              
            </div>
        </div>

    <div className="page">
        <div className="content">
            <div className="bold">
                <div className="chunk-holder">
                    <span className="color-yellow" >We're</span><span className="color-purple" style={{fontWeight: 500}}>here,</span>
                </div>
                <div className="chunk-holder">
                    <span className="color-purple" style={{fontWeight: 500}}>Just for</span><span className="color-yellow">you...</span>
                </div>
                <div className="chunk-holder">
                    <span className="color-purple" style={{fontWeight: 500}}>To</span><span className="color-yellow">Maximize</span>
                </div>
                <div className="chunk-holder">
                    <span className="color-purple" style={{fontWeight: 500}}>Your</span><span className="color-yellow" id="animated-text">Sales...</span>
                </div>
            </div>
            <div className="sub-line">
                First of all: CSS variables can have a global or local scope.

                Global variables can be accessed/used through the entire document, while local variables can be used only inside the selector where it is declared.
            </div>
            <div className="ctas">
                <span onClick={mailUs}>Mail Us</span>
                <span onClick={callUs}>Call Us</span>
            </div>
        </div>

        <img src={artWork} alt="Main Artwork"/>
    </div>
    </>;
}


export default LandingPage;
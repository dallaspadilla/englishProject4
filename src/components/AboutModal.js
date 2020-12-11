import React from 'react';

class AboutModal extends React.Component {

    closeAboutModal = () => {
        this.props.toClose();
      }

    render () {
        return (
            <div className="mymodal" >
            <div className="modal-content">
                <div className="modal-header">
                    <center>
                    <h3 className="modal-title"><b>About SpeedScore</b>
                        <button id="modalClose" className="close" onClick={this.closeAboutModal}>
                        &times;</button>
                    </h3>
                    </center>      
                </div>
                <div className="modal-body">
                    <center>
                    <img
                    src="https://dl.dropboxusercontent.com/s/awuwr1vpuw1lkyl/SpeedScore4SplashLogo.png"
                    height="200" width="200"></img>
                    <h3>The World's First and Only Suite of Apps for
                    Speedgolf</h3>
                    <p>Version 5 (Live), Build
                    20.6.2018<br></br>
                    &copy; 2017-20 The Professor of Speedgolf. All rights
                    reserved.</p>
                    </center>
                    <p>SpeedScore apps support</p>
                    <ul>
                    <li>live touranment scoring (<i>SpeedScore Live&reg;</i>)</li>
                    <li>tracking personal speedgolf rounds and sharing results
                    (<i>SpeedScore Track&reg;</i>)</li>
                    <li>finding speedgolf-friendly courses, booking tee times, and
                    paying to play speedgolf by the minute (<i>SpeedScore
                    Play&reg;</i>)</li>
                    </ul>
                    <p>SpeedScore was first developed by Dr. Chris Hundhausen,
                    associate professor of computer science at Washington State
                    University and the <i>Professor of Speedgolf</i>, with support
                    from Scott Dawley, CEO of Speedgolf USA, LLC. It leverages
                    Google server-side technologies.</p>
                    <p>For more information on SpeedScore, visit <a
                    href="http://speedscore.live" target="_blank">SpeedScore's web
                    site</a>. For more information on speedgolf, visit <a
                    href="http://playspeedgolf.com"
                    target="_blank">playspeedgolf.com</a> and <a
                    href="http://usaspeedgolf.com" target="_blank">Speedgolf
                    USA</a>.</p>
                </div>
                <div className="modal-footer">
                        <button id="aboutOK" className="close" onClick={this.closeAboutModal}>
                        OK</button>
                </div>
            </div>
        </div>
        );

    }
}

export default AboutModal

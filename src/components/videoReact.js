import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'
import Duration from './duration'
// import { UncontrolledTooltip } from 'reactstrap'
// import { MdPlayArrow, MdPause, MdReplay, MdDescription } from 'react-icons/md'
import '../styles/video.css'

/* 
@todo - UPDATE THIS EXAMPLE
Example Usage:

<Video
  title={video.title}                       [string]
  url={video.url.path}                      [string]
  transcriptFile={video.transcriptFile}     [string]
  loop={video.loop}                         [bool]
  autoplay={video.autoplay}                  [bool]
/>

*/

class VideoReact extends Component {
  state = {
    autoplay: false,
    duration: 0,
    ended: false,
    firstLoad: true,
    isOverlayOpen: false,
    loop: false,
    played: 0,
    playing: false,
    toolTipMsg: 'Play',
    videoRendered: false,
  }
  load = url => {
    this.setState({
      url,
      played: 0,
    })
  }
  renderVideoStatus = () => {
    return(
      <div id="video-state" tabIndex="-1" className="sr-only" aria-live="assertive" aria-atomic="true">
      { this.state.playing ? 
        <span>Video playing</span>
        : (!this.state.ended ? 
          <span>Video paused</span>
          : <span>Video ended</span>)
        }
    </div>
    )
  }
  onReady = () => {
    console.log("onReady")
  }
  handleDuration = (duration) => {
    console.log('onDuration', duration)
    this.setState({ duration })
  }

  handleProgress = state => {
    console.log('onProgress', state)
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }
  handleSeekMouseDown = e => {
    this.setState({ seeking: true })
  }
  handleSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
  }
  handleSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }

  handleVideoPause = () => {
    console.log("handleVideoPause")
    this.setState({playing:false, ended: false, toolTipMsg: 'Play'})
  }
  playPause = () => {
    this.setState({ playing: !this.state.playing })
  }
  onPlay = () => {
    console.log('onPlay')
    this.setState({ playing: true, ended: false, toolTipMsg: 'Pause'})

    // Immediately pause video if autoplay is turned off
    // if(this.state.firstLoad === true){
    //   this.setState({videoRendered: true});
      // console.log("video rendered")
    //   if (this.props.autoplay === false || this.props.isOverlayOpen === true){
    //     this.setState({playing:false, ended: false, toolTipMsg: 'Play', firstLoad: false})
    //   }
    // }
  }
  onPause = () => {
    console.log('onPause')
    this.setState({ playing: false, toolTipMsg: 'Play' })
  }
  onEnded = () => {
    this.setState({ ended: true, toolTipMsg: 'Replay' })
    console.log('onEnded')
  }
  ref = player => {
    this.player = player
  } 
  render () {
    const { duration, playing, played } = this.state
   
    // Avoid tabbing into iframe and remove deprecated frameborder attribute
    if (typeof document !== `undefined`) {
      const videoiframe = document.getElementsByTagName("iframe");
      if(videoiframe.length > 0){
        document.getElementsByTagName("iframe")[0].tabIndex = -1;
        document.getElementsByTagName("iframe")[0].removeAttribute('frameBorder');
      }
    }

    return (
      <div className='video-wrapper' aria-label={this.props.title}>
        <div id="mep_1" class="mejs__container embed-responsive-item mejs__video mejs__hide-cues" tabIndex="0" role="application" aria-label="Video Player">
            <div class="mejs__inner">
                <ReactPlayer
                url={this.props.url}
                config={{
                    vimeo: {
                        playerOptions: {
                            background: true
                        }
                    }
                }}
                width='100%'
                height='auto'
                className='react-player embed-responsive embed-responsive-16by9'
                loop={this.props.loop}
                ref={this.ref}
                playing={playing}
                onPlay={this.onPlay}
                onPause={this.onPause}
                onEnded={this.onEnded}
                onDuration={this.handleDuration}
                onProgress={this.handleProgress}
                onSeek={e => console.log('onSeek', e)}
                />   

                {this.state.videoRendered && this.renderVideoStatus()}

                <div className="mejs__controls">

                    {
                    !playing ? 
                        <div className="mejs__button mejs__playpause-button mejs__play">
                            <button onClick={this.playPause} type="button" aria-controls="mep_1" title="Play" aria-label="Play" tabIndex="0"></button>
                        </div>
                    : 
                        <div className="mejs__button mejs__playpause-button mejs__pause">
                            <button onClick={this.playPause} type="button" aria-controls="mep_1" title="Pause" aria-label="Pause" tabIndex="0"></button>
                        </div>
                    }
        
                    <div className="mejs__time mejs__currenttime-container" role="timer" aria-live="off">
                        <span className="mejs__currenttime">{played.toFixed(2)}</span>
                    </div>


                    
                    <div className="mejs__time-rail">
                        <input
                          type='range' min={0} max={0.999999} step='any'
                          value={played}
                          onMouseDown={this.handleSeekMouseDown}
                          onChange={this.handleSeekChange}
                          onMouseUp={this.handleSeekMouseUp}
                        />
                        
                        <progress className="mejs__time-total mejs__time-slider" max={1} value={played} />

                        {/* <span className="mejs__time-total mejs__time-slider">
                            <span className="mejs__time-buffering" style={{display:'none'}}></span>
                            <span className="mejs__time-loaded"></span>
                            <span className="mejs__time-current"></span>
                            <span className="mejs__time-hovered no-hover"></span>
                            <span className="mejs__time-handle">
                                <span className="mejs__time-handle-content"></span>
                            </span>
                            <span className="mejs__time-float">
                                <span className="mejs__time-float-current">00:00</span>
                                <span className="mejs__time-float-corner"></span>
                            </span>
                        </span> */}
                    </div>
                    <div className="mejs__time mejs__duration-container">
                        <span className="mejs__duration"><Duration seconds={duration} /></span>
                    </div>
                    <div className="mejs__button mejs__volume-button mejs__mute">
                        <button type="button" aria-controls="mep_1" title="Mute" aria-label="Mute" tabIndex="0"></button>
                        <button className="mejs__volume-slider" aria-label="Volume Slider" aria-valuemin="0" aria-valuemax="100" role="slider" aria-orientation="vertical">
                            <span className="mejs__offscreen">Use Up/Down Arrow keys to increase or decrease volume.</span>
                            <div className="mejs__volume-total">
                                <div className="mejs__volume-current"></div>
                                <div className="mejs__volume-handle"></div>
                            </div>
                        </button>
                    </div>
                    <div className="mejs__button mejs__captions-button" style={{display:'none'}}>
                        <button type="button" aria-controls="mep_1" title="Captions/Subtitles" aria-label="Captions/Subtitles" tabIndex="0"></button>
                        <div className="mejs__captions-selector mejs__offscreen">
                            <ul className="mejs__captions-selector-list">
                                <li className="mejs__captions-selector-list-item">
                                    <input type="radio" className="mejs__captions-selector-input" name="mep_1_captions" id="mep_1_captions_none" value="none" defaultChecked />
                                    <label className="mejs__captions-selector-label mejs__captions-selected" htmlFor="mep_1_captions_none">None</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mejs__button mejs__transcript" title="Download Transcript" aria-label="Download Transcript" tabIndex="0" style={{position:'relative'}}>
                        <i className="download-transcript"></i>
                        <div className="mejs__transcript-tracks-container" style={{position: 'absolute', right: 0, bottom: '100%'}}>
                            <a href="youtube-captions.vtt" download="" className="mejs__transcript-track-url">English Transcript</a>
                        </div>
                    </div>
                    <div className="mejs__button mejs__fullscreen-button">
                        <button type="button" aria-controls="mep_1" title="Fullscreen" aria-label="Fullscreen" tabIndex="0"></button>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className={`video-controls ${this.state.ended ? `ended` : `` }`} >
          <button className="btn-play" onClick={this.playPause} id="video">
            {
              playing ? 
              <span>
                <span className="sr-only">Pause video</span>
                <MdPause />
              </span>
              : 
              (
                !this.state.ended ?
                <span>
                  <span className="sr-only">Play video</span>
                  <MdPlayArrow />
                </span>
                : 
                <span><span className="sr-only">Replay video</span><MdReplay /></span>
              )
            }
          </button>
          <UncontrolledTooltip placement="top" target="video">
            { this.state.toolTipMsg }
          </UncontrolledTooltip>

          {this.props.transcriptFile &&
            <a id="downloadTranscript" href={ this.props.transcriptFile }>
              <MdDescription />
              <span className="sr-only">Download { this.props.title } Transcript</span>
              <UncontrolledTooltip placement="top" target="downloadTranscript">
                Download { this.props.title } Transcript
              </UncontrolledTooltip>
            </a>
          }

        </div> */}
      </div>
    )
  }
}

VideoReact.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  transcriptFile: PropTypes.string,
  loop: PropTypes.bool,
}
VideoReact.defaultProps = {
  url: `https://vimeo.com/235408320`,
  title: `CCS video`, // default UG video title
  transcriptFile:``,
  loop: false,
}

export default VideoReact
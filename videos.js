import Webvid from './Assets/Web video.mp4'
import './vid.css';


const Webvideo=()=>{
    return(
        <>
        <div className='cont'>
            <video src={Webvid} width="400" height="600" controls="controls" autoplay="true"/>
               
        </div>
        </>
    );
};
export default Webvideo;

import video from "../../ImagenesGhibli/videoGhibli.mp4"

const Video = () => {
    return (
        <section className="video">
            <video controls src={video}></video>
        </section>
    )
}
export default Video
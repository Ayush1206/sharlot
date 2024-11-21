export default function VideoSamples() {
    const videos = [
      {
        id: 1,
        title: "Track 1 - Chill Vibes",
        url: "https://ayushdatanextapps.s3.eu-north-1.amazonaws.com/sharlot_2.mp4", // Replace with your video file path
      },
      {
        id: 2,
        title: "Track 2 - High Energy",
        url: "https://ayushdatanextapps.s3.eu-north-1.amazonaws.com/smpl1.MP4", // Replace with your video file path
      },
      {
        id: 3,
        title: "Track 3 - Groovy Beats",
        url: "https://ayushdatanextapps.s3.eu-north-1.amazonaws.com/smpl2.MP4", // Replace with your video file path
      },
    ];
  
    return (
      <section
        id="samples"
        className="relative min-h-screen bg-cover bg-center text-white flex flex-col items-center justify-center px-4"
       
      >
        <h2 className="text-4xl font-bold mb-12">Watch Video Samples</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative bg-black/50 rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Background Shadow */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>
  
              {/* Video Player */}
              <video
                src={video.url}
                controls
                className="w-full h-64 object-cover"
              ></video>
  
              {/* Video Title */}
              <div className="p-4">
                <h3 className="text-xl font-semibold">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
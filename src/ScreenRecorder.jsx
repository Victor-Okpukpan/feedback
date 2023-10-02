import { useState, useEffect } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import { useNavigate } from "react-router-dom";

export default function ScreenRecorder() {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState({
    camera: true,
    audio: true,
  });

  const { startRecording, mediaBlobUrl } = useReactMediaRecorder({
    screen: toggle.camera,
    audio: toggle.audio,
  });

  const blob = mediaBlobUrl;
  console.log(blob)

  useEffect(() => {
    // Function to send Blob data to the backend
    const sendBlobToBackend = (blobData) => {
      const formData = new FormData();
      formData.append("file", blobData, "recorded-video.webm");
      console.log(formData); // Debug: Check if formData contains data
  
      // Send FormData to the backend
      fetch("https://video-api-5wh1.onrender.com/api", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          const videoId = data.video.id;
          console.log(data);
          navigate(`/file/${videoId}`);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
  
    if (mediaBlobUrl?.startsWith("blob:")) {
      // Ensure that Blob data is fetched correctly
      fetch(mediaBlobUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.blob();
        })
        .then((blobData) => {
          sendBlobToBackend(blobData); // Pass fetched Blob data to sendBlobToBackend
        })
        .catch((error) => {
          console.error("Error fetching Blob data:", error);
        });
    } else if (mediaBlobUrl !== undefined) {
      console.error("Invalid 'mediaBlobUrl' data:", mediaBlobUrl);
    }
  }, [mediaBlobUrl, navigate]);
  
  
  

  return (
    <div className="w-full flex items-center justify-center min-h-screen px-28">
      <div className="w-max p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src="/assets/logo.svg"
              alt="logo"
              className="h-[28px] w-[28px] object-contain overflow-hidden"
            />
            <p className="text-base font-bold">HelpMeOut</p>
          </div>
          <div className="flex items-center space-x-2">
            <img src="/assets/setting.svg" alt="settings" />
            <img src="/assets/close.svg" alt="close" />
          </div>
        </div>

        <p className="my-3 text-sm">
          This extension helps you record and share help videos with ease.
        </p>

        <div className="flex w-full justify-center gap-8">
          <button className="flex flex-col items-center gap-2">
            <img
              src="/assets/monitor.svg"
              alt="monitor"
              className="w-8 h-8 object-cover"
            />
            <span className="font-semibold text-sm opacity-40">
              Full screen
            </span>
          </button>
          <button className="flex flex-col items-center gap-2">
            <img
              src="/assets/tabs.svg"
              alt="tabs"
              className="w-8 h-8 object-cover"
            />
            <span className="font-bold text-sm font-Work">Current Tab</span>
          </button>
        </div>

        <div className="flex flex-col gap-6 mt-2">
          <div className="flex justify-between w-full items-center border-2 border-[#120B48] p-[12px] rounded-[16px]">
            <div className="flex gap-2">
              <img
                src="/assets/video.svg"
                alt="settings"
                width={24}
                height={24}
              />
              <span className="font-medium text-[14px] font-Work  text-primDark">
                Camera
              </span>
            </div>
            <div
              className={`relative w-9 h-5 p-[2px] bg-[#120B48] rounded-full  cursor-pointer flex items-center justify-start ${
                toggle.camera && "justify-end"
              } `}
              onClick={() => {
                setToggle({ ...toggle, camera: !toggle.camera });
              }}
            >
              <div className="h-4 w-4 bg-white rounded-full" />
            </div>
          </div>
          <div className="flex justify-between w-full items-center border-2 border-[#120B48] p-[12px] rounded-[16px]">
            <div className="flex gap-2">
              <img
                src="/assets/video.svg"
                alt="settings"
                width={24}
                height={24}
              />
              <span className="font-medium text-[14px] font-Work  text-primDark">
                Audio
              </span>
            </div>
            <div
              className={`relative w-9 h-5 p-[2px] bg-[#120B48] rounded-full  cursor-pointer flex items-center justify-start ${
                toggle.audio && "justify-end"
              } `}
              onClick={() => {
                setToggle({ ...toggle, audio: !toggle.audio });
              }}
            >
              <div className="h-4 w-4 bg-white rounded-full" />
            </div>
          </div>

          <button
            className="flex justify-center w-full items-center bg-[#120B48] text-white p-[12px] rounded-[16px]"
            onClick={startRecording}
          >
            Start Recording
          </button>
        </div>
      </div>
    </div>
  );
}

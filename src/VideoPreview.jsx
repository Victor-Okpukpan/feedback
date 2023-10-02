import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import copy from "clipboard-copy";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function VideoPreview() {
  const { id } = useParams();
  const [videoData, setVideoData] = useState(null);

  const copyToClipboard = () => {
    copy(videoData.video.url).then(() => {
      toast.success("URL copied to clipboard");
    });
  };

  useEffect(() => {
    fetch(`https://video-api-5wh1.onrender.com/api/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setVideoData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [id]);

  if (!videoData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="pt-10 px-[100px] flex items-start max-w-screen-xl mx-auto">
        <div className="flex-1 pr-[72px] border-r">
          <h3 className="text-[45px] text-[#141414] font-bold font-sora mb-10">
            Your video is ready!
          </h3>

          <div className="flex flex-col items-start gap-16">
            <div className="font-sora">
              <p className="text-[#727272] font-medium">Name</p>
              <div className="flex items-center gap-6">
                <h5 className="text-2xl font-semibold">
                  {videoData.video.id}
                </h5>
                <img src="/assets/edit.svg" alt="edit" />
              </div>
            </div>

            <form action="" className="w-full">
              <div className="rounded-2xl py-3 px-6 flex items-center border bg-[#E7E7ED]">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="enter email of receiver"
                  className="font-work-sans text-[#434343CC] text-lg placeholder:text-[#434343CC] flex-grow outline-none bg-transparent"
                />
                <button
                  type="button"
                  className="py-[10px] px-[18px] flex items-center justify-center bg-[#605C84] rounded-lg text-white font-medium font-manrope"
                >
                  Send
                </button>
              </div>
            </form>

            <form action="" className="w-full">
              <label
                htmlFor="url"
                className="text-[#141414] font-sora text-xl font-semibold"
              >
                Video Url
              </label>
              <div className="rounded-2xl p-3 flex items-center border border-[#929292] bg-[#FAFAFA] mt-4">
                <input
                  type="text"
                  name="url"
                  id="url"
                  value={videoData.video.url}
                  className="font-work-sans text-[#434343CC] text-lg placeholder:text-[#434343CC] flex-grow outline-none bg-transparent truncate"
                  disabled
                />
                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="py-[10px] px-[18px] flex items-center justify-center bg-transparent rounded-lg text-[#120B48] border border-[#120B48] font-medium font-manrope"
                >
                  Copy
                </button>
              </div>
            </form>

            <div className="">
              <h2 className="font-sora font-semibold text-[#08051E]">
                Share your video
              </h2>
              <div className="mt-4 flex items-center gap-4">
                <button className="border border-[#0A0628] rounded-md py-3 px-4 flex items-center justify-center gap-2 font-medium">
                  Facebook
                </button>
                <button className="border border-[#0A0628] rounded-md py-3 px-4 flex items-center justify-center gap-2 font-medium">
                  WhatsApp
                </button>
                <button className="border border-[#0A0628] rounded-md py-3 px-4 flex items-center justify-center gap-2 font-medium tracking-[0.16px]">
                  Telegram
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 pl-[40px]">
          <div className="w-full rounded-lg overflow-hidden">
            <video
              src={videoData.video.url}
              controls
            ></video>
          </div>

          <h5 className="font-sora mt-20 text-black text-2xl font-semibold">Transcript</h5>
        </div>
      </div>

      <div className="py-[48px] px-[347px] bg-[#F9F9FF] flex items-center justify-center flex-col gap-10 my-16">
        <h1 className="font-sora text-center text-2xl font-semibold text-[#141414]">To ensure the availability and privacy of your video, we recommend saving it to your account.</h1>

        <button className="bg-[#120B48] flex items-center justify-center py-4 px-8 text-[#F9F9FF] rounded-lg font-work-sans">Save Video</button>

        <h1 className="text-[#7E7E7E] text-center text-2xl font-sora font-semibold">Don’t have an account?   <Link to="/sign-up" className="text-[#120B48] underline">Create account</Link></h1>
      </div>

      <Footer />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </>
  );
}

export default VideoPreview;

import { useState } from "react";
import axios from "axios";
import Input from "./Input";
import Button from "./Button";

const UrlForm = ({ setUrls, urls }) => {
  const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/shortUrl/shorten",
        {
          url: url,
        }
      );
      if (response.status === 200) {
        setUrl("");
        setUrls((prevUrls) => [...prevUrls, response.data.shortenUrl]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center gap-2"
    >
      <Input
        placeholder="url"
        onChange={(e) => setUrl(e.target.value)}
        value={url}
      />
      <Button placeholder="send" />
    </form>
  );
};

export default UrlForm;

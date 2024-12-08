import { useEffect } from "react";
import axios from "axios";
import { MdClose } from "react-icons/md";

const UrlTable = ({ urls, setUrls }) => {
  const fetchAllUrls = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/shortUrl/all"
      );

      if (response.status === 200) {
        setUrls(response.data.shortUrls);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUrl = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/v1/shortUrl/delete/${id}`
      );

      if (response.status === 200) {
        setUrls((prevUrls) => prevUrls.filter((url) => url._id !== id));
        console.log("URL deleted successfully.");
      }
    } catch (error) {
      console.error("Error deleting URL:", error);
    }
  };

  useEffect(() => {
    fetchAllUrls();
  }, []);

  return (
    <table className="min-w-full mt-5 border">
      <thead className="bg-gray-100">
        <tr>
          <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 uppercase border-b border-gray-300">
            Full Url
          </th>
          <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 uppercase border-b border-gray-300">
            Short Url
          </th>
          <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 uppercase border-b border-gray-300">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {urls.map((url) => (
          <tr key={url._id}>
            <td className="py-4 px-6 text-gray-800 border-b border-gray-300">
              {url.url}
            </td>
            <td className="py-4 px-6 text-gray-800 border-b border-gray-300">
              <a
                href={url.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {url.shortUrl}
              </a>
            </td>
            <td className="py-4 px-6 border-b border-gray-300">
              <button onClick={() => deleteUrl(url._id)}>
                <MdClose className="text-xl" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UrlTable;

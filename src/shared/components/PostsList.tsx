import axios from "axios";
import { useEffect, useState } from "react";

interface PostDto {
  id: number;
  title: string;
  body: string;
}

interface PostsListDto {
  records: PostDto[];
}

// const data: PostDto[] = [
//   {
//     id: 1,
//     title: "Lorem",
//     body: "ipsum",
//   },
//   {
//     id: 2,
//     title: "Sit dolor",
//     body: "amit",
//   },
// ];

export function PostsList() {
  // const {data, isLoading, isError} = useApi<PostDto[]>('https://')

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<PostDto[]>([]);

  const loadData = async () => {
    try {
      const response = await axios.get<PostDto[]>(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(response.data);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }

    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((responseData) => {
    //     setData(responseData);
    //   })
    //   .catch(() => {
    //     setIsError(true);
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <h2 className="text-3xl">React posts</h2>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Component error</p>}
      {data.map((elem) => (
        <div key={elem.id} className="space-y-6">
          <h2 className="text-2xl">{elem.title}</h2>
          <p>{elem.body}</p>
        </div>
      ))}
    </div>
  );
}

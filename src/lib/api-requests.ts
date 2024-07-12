const SERVER_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

async function handleResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get("Content-Type") || "";
  const isJson = contentType.includes("application/json");
  const data = isJson ? await response.json() : await response.text();

  if (!response.ok) {
    if (isJson && data?.errors !== null) {
      throw new Error(JSON.stringify(data.errors));
    }

    throw new Error(data.message || response.statusText);
  }

  return data as T;
}


export async function getAllPosts():Promise<any>{
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  const response = await fetch(SERVER_ENDPOINT, {
    method: "GET",
    credentials: "include",
    headers,
  });

  return handleResponse(response).then((data) => data);
}


export async function getPost(id:number):Promise<any>{
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  const response = await fetch(SERVER_ENDPOINT+`/${id}`, {
    method: "GET",
    credentials: "include",
    headers,
  });

  return handleResponse(response).then((data) => data);
}

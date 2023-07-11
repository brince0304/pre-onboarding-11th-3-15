export  interface IHttpClient {
  fetch(url: string, options: any): Promise<any>;
  get(url: string): Promise<any>;
}

export class HttpClient implements IHttpClient {
  // @ts-ignore
  #apiKey: string;
  baseURL: string;
  constructor(baseURL: string, apiKey: string) {
    this.baseURL = baseURL;
    this.#apiKey = apiKey;
  }
   async fetch(url: string, options: any): Promise<any> {
    const response = await fetch(`${this.baseURL}${url}`,{
      ...options,
      headers: {
        ...options.headers,
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${this.#apiKey}`,
      }
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  }

  async get(url: string): Promise<any> {
    return await this.fetch(url, { method: "GET" });
  }

  async post(url: string, body: any): Promise<any> {
    return await this.fetch(url, { method: "POST", body: JSON.stringify(body) });
  }

  async put(url: string, body: any): Promise<any> {
    return await this.fetch(url, { method: "PUT", body: JSON.stringify(body) });
  }

  async delete(url: string): Promise<any> {
    return await this.fetch(url, { method: "DELETE" });
  }
}
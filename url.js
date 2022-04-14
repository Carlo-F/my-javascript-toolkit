let url = new URL("https://example.com:8000/path/name?q=term#fragment");

url.href
url.origin
url.protocol
url.host
url.hostname
url.port
url.pathname
url.search
url.searchParams.append("q","term")
url.searchParams.set("q","x")
url.searchParams.get("q")
url.searchParams.getAll("q")
url.searchParams.has("q")
url.searchParams.sort()
url.searchParams.delete("q")
url.hash

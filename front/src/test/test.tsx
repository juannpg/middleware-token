function Test() {
  const token = localStorage.getItem('token');

  const testRouter = async () => {
    const response = await fetch('http://localhost:3001/api/routers/test/test', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    });
    const log = await response.json();
    console.log(log);
  }

  return (
    <div className="main">
      <h1>Test</h1>
      <button
        onClick={() => {
          testRouter();
        }}
      >Test</button>
    </div>
  );
}

export default Test;
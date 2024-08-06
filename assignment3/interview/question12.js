//fetch data from an API in a React component

useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        // Use data here
      });
  }, []);
  
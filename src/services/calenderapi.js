


export const getday = async () => {
  try {
    const response = await fetch(
      
      `https://calendarific.com/api/v2/holidays?&api_key=${process.env.REACT_APP_APIKEY}&country=US&year=2023&type=national`
    );
    console.log(response);
    const data = await response.json(); //to convert to javascript object
    console.log(data.data);

    //creating new array slicing a array of 50 elements data

    //   const newData = data.data.slice(0, 20);

    return data;
  } catch (e) {
    console.error(e);
  }
};

exports.getDate = () =>{
  const today = new Date();
  const date_options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  };
  return today.toLocaleDateString("en-US", date_options);
}

exports.getDay = () =>{
  const today = new Date();
  const date_options = {
    weekday: "long",
  };
  return today.toLocaleDateString("en-US", date_options);
}

const stealIP = async function () {
  try {
    const ip = await fetch("https://api.ipify.org?format=json");
    const data = await ip.json();
    console.log("", data);
    alert("i stole your ip "+ data.ip)
  } catch {
    (err) => {
      console.log(err);
    };
  }
};

stealIP();
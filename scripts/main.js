const BG_IMAGE = "images/background.jpg"

function check_bg() {
  const checkBox = document.getElementById("bg_toggle");
  const biscuit = Object.fromEntries(document.cookie.split('; ').map(x => x.split('=')))

  for (const key in biscuit) {
    if (`${key}` === 'bg') {
      if (`${biscuit[key]}` === 'true') {
        checkBox.checked = true;
        document.body.style.backgroundImage = `url(${BG_IMAGE})`;
      }
      else if (`${biscuit[key]}` === 'false') {
        checkBox.checked = false;
        document.body.style.backgroundImage = 'none';
      }
    }
    // if cookie doesn't exist
    else {
      document.cookie = "bg=true"
      checkBox.checked = true;
      document.body.style.backgroundImage = `url(${BG_IMAGE})`;
    }
  }
}

function bg_toggle() {
  const checkBox = document.getElementById("bg_toggle");
  if (checkBox.checked === true){
    document.cookie = "bg=true"
  }
  else {
    document.cookie = "bg=false"
  }
  check_bg()
}
check_bg()